import React, { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
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
import { selectCategories,
  selectIconId } from '../../redux/selectors/categories.selectors';
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
  id,
  open,
  type,
  onCancel,
  submitEditingDataHandler,
}) => {
  const classes = useStyles();
  const categoryData = useSelector(selectCategories)
    .find(category => category.id === id) || { icon: {} };
  const chargeIncomeData = useSelector(type === 'charges' ?
    selectCategoriesCharges : selectCategoriesIncomes)
    .find(item => item.id === id) || { category: {} };
  const categories = useSelector(selectCategories);
  const iconIdSelector = useSelector(selectIconId) + 1;
  const [categoryName, setCategoryName] = useState('');
  const [categoryDescription, setDescription] = useState('');
  const [payloadMoney, setPayloadMoney] = useState('');
  const [chargeIncomeDate, setChargeIncomeDate] = useState('');
  const [categoryId, setCategoryId] = useState(0);
  const changeInputState = (setFunctionHook, data) => {
    setFunctionHook(data);
  };
  const cancel = useCallback(onCancel, []);
  const callback1 = useCallback(submitEditingDataHandler, []);


  const setDate = (e) => {
    setChargeIncomeDate(e.target.value);
  };
  const collectDataForPutRequest = () => {
    if (type === 'categories') {
      const data = {
        id,
        name: categoryName,
        description: categoryDescription,
        iconId: iconIdSelector,
      };
      return data;
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
    if (categoryData) {
      if (type === 'categories') {
        setCategoryName(categoryData.name);
        setDescription(categoryData.description);
      }
    }
  }, [categoryData.name, categoryData.description]);

  useEffect(() => {
    if (chargeIncomeData) {
      if (type === 'incomes' || type === 'charges') {
        setCategoryName(chargeIncomeData.category.id);
        setPayloadMoney(chargeIncomeData.money);
        setDescription(chargeIncomeData.description);
        setChargeIncomeDate(chargeIncomeData.date);
      }
    }
  }, [chargeIncomeData.category.id,
    chargeIncomeData.money,
    chargeIncomeData.description, chargeIncomeData.date]);


  const options = categories.map(category => (
    <option key={category.id} value={category.id}>
      {category.name}
    </option>
  ));
  return (
    <>
      {(categoryData || chargeIncomeData) && (
        <Dialog
          open={open}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            <span className="dialog_title">
              {type === 'categories' && 'Edit category'}
              {type === 'charge' && 'Edit charge'}
              {type === 'income' && 'Edit income'}
            </span>
          </DialogTitle>
          <DialogContent>
            <form className={classes.root} noValidate autoComplete="off">
              {/* CATEGORIES EDIT */}
              {type === 'categories' && (
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
                  <SimpleSelect id={categoryData.icon.id} />
                </>
              )
              }

              {(chargeIncomeData && (type === 'incomes' ||
               type === 'charges')) && (
               <>
                 <div className="form__item">
                   <InputLabel htmlFor="age-native-helper">
                     Select category
                   </InputLabel>
                   <NativeSelect
                     className="form__input"
                     value={categoryName}
                     onChange={e =>
                        setCategoryId(e.target.value)
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
                   onChange={setDate}
                   InputLabelProps={{
                      shrink: true,
                    }}
                 />
               </>
              )
              }
            </form>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => {
                callback1(collectDataForPutRequest());
                cancel();
              }}
            >
              Save
            </Button>
            <Button onClick={cancel}>Cancel</Button>
          </DialogActions>
        </Dialog>
      )}
    </>
  );
};

export default EditDialog;
