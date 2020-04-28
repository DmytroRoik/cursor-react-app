import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import NativeSelect from '@material-ui/core/NativeSelect';
import moment from 'moment';

import {
  selectCategoriesCharges,
  selectCategoriesIncomes,
} from '../../redux/selectors/home.selectors';
import { loadCategories } from '../../redux/actions/categories.actions';
import { selectCategories } from '../../redux/selectors/categories.selectors';
import SimpleSelect from '../../pages/New-сategories/select';

import './BtnEditModal.scss';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const EditDialog = ({
  id, open, type, onCancel, submitEditingDataHandler,
}) => {
  const classes = useStyles();
  const categoryData = useSelector(selectCategories).find(category => category.id === id);
  const chargeIncomeData = useSelector(type === 'charge' ? selectCategoriesCharges : selectCategoriesIncomes).find(item => item.id === id);
  const categories = useSelector(selectCategories);
  const dispatch = useDispatch();
  const [categoryName, setCategoryName] = useState('');
  const [categoryDescription, setDescription] = useState('');
  const [payloadMoney, setPayloadMoney] = useState('');
  const [chargeIncomeDate, setChargeIncomeDate] = useState('');
  const [iconId, setIconId] = useState(0);
  const [categoryId, setCategoryId] = useState(chargeIncomeData.category.id);
  const changeInputState = (setFunctionHook, data) => {
    setFunctionHook(data);
  };
  const getIconId = (idValue) => {
    setIconId(idValue);
  };
  const collectDataForPutRequest = () => {
    if (type === 'categories') {
      return {
        id,
        name: categoryName,
        description: categoryDescription,
        iconId,
      };
    }
    return {
      id,
      categoryIdDat: categoryId,
      description: categoryDescription,
      date: moment(chargeIncomeDate).valueOf(),
      money: payloadMoney,
      type,
    };
  };

  useEffect(() => {
    if (type === 'categories') {
      setCategoryName(categoryData.name);
      setDescription(categoryData.description);
    } else if (type === 'income' || type === 'charge') {
      setCategoryName(chargeIncomeData.category.name);
      setPayloadMoney(chargeIncomeData.money);
      setDescription(chargeIncomeData.description);
      setChargeIncomeDate(chargeIncomeData.date);
      dispatch(loadCategories());
    }
  }, [categoryData, chargeIncomeData]);

  const options = categories.map(category => (
    <option key={category.name} value={category.name}>
      {category.name}
    </option>
  ));
  return (
    <>
      <Dialog
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          <span className="dialog_title">
            {type === 'categories' ? 'Edit category' : null}
            {type === 'charge' ? 'Edit charge' : null}
            {type === 'income' ? 'Edit income' : null}
          </span>
        </DialogTitle>
        <DialogContent>
          <form className={classes.root} noValidate autoComplete="off">
            {/* CATEGORIES EDIT */}
            {type === 'categories' ? (
              <>
                <TextField
                  onChange={e =>
                    changeInputState(setCategoryName, e.target.value)
                  }
                  value={categoryName}
                  label="Category Name*"
                />
                <TextField
                  onChange={e =>
                    changeInputState(setDescription, e.target.value)
                  }
                  value={categoryDescription}
                  label="Category Description"
                />
                <SimpleSelect
                  getIconId={getIconId}
                  iconId={categoryData.icon.id || 1}
                />
              </>
            ) : null}

            {type === 'income' || type === 'charge' ? (
              <>
                <div className="form__item">
                  <InputLabel htmlFor="age-native-helper">
                    Select category
                  </InputLabel>
                  <NativeSelect
                    className="form__input"
                    value={categoryName}
                    onChange={e =>
                      setCategoryId(categories.find(item => item.name === e.target.value)
                          .id)
                    }
                  >
                    {options}
                  </NativeSelect>
                </div>
                <TextField
                  label="Description"
                  value={categoryDescription}
                  onChange={e =>
                    changeInputState(setDescription, e.target.value)
                  }
                />
                <TextField
                  label="Money"
                  value={payloadMoney}
                  onChange={e =>
                    changeInputState(setPayloadMoney, e.target.value)
                  }
                />
                <TextField
                  id="date"
                  label="Date"
                  type="date"
                  className="form__input"
                  value={moment(chargeIncomeDate).format('YYYY-MM-DD')}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </>
            ) : null}
          </form>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              submitEditingDataHandler(collectDataForPutRequest());
              onCancel();
            }}
          >
            Save
          </Button>
          <Button onClick={onCancel}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default EditDialog;
