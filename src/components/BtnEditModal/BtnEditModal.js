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

import { selectCategories } from '../../redux/selectors/categories.selectors';
import SimpleSelect from '../../pages/New-сategories/select';
import { loadCategories } from '../../redux/actions/categories.actions';

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
  const categoryData = useSelector(selectCategories).find(category => (
    category.id === id
  ));
  const dispatch = useDispatch();
  const [categoryName, setCategoryName] = useState('');
  const [categoryDescription, setDescription] = useState('');
  const [iconId, setIconId] = useState(0);
  const changeInputState = (setFunctionHook, data) => {
    setFunctionHook(data);
  };
  const getIconId = (idValue) => {
    setIconId(idValue);
  };
  const collectDataForPutRequest = () => ({
    id,
    name: categoryName,
    description: categoryDescription,
    iconId,
  });

  const categories = useSelector(selectCategories);

  useEffect(() => {
    if (type === 'categories') {
      setCategoryName(categoryData.name);
      setDescription(categoryData.description);
    } else if (type === 'income' || type === 'charge') {
      dispatch(loadCategories());
    }
  }, [categoryData]);


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
            {type === 'categories' ?
              <>
                <TextField
                  onChange={e => changeInputState(setCategoryName, e.target.value)}
                  value={categoryName}
                  label="Category Name*"
                />
                <TextField
                  onChange={e => changeInputState(setDescription, e.target.value)}
                  value={categoryDescription}
                  label="Category Description"
                />
                <SimpleSelect
                  getIconId={getIconId}
                  iconId={categoryData.icon.id || 1}
                />
              </> : null}

            {
              type === 'income' || type === 'charge' ?
                <>
                  <div className="form__item">
                    <InputLabel htmlFor="age-native-helper">Select category</InputLabel>
                    <NativeSelect className="form__input">
                      <option aria-label="None" value="" />
                      {options}
                    </NativeSelect>
                  </div>
                  <TextField
                    label="Description"
                  />
                  <TextField
                    label="Money"
                  />
                  <TextField
                    id="date"
                    label="Date"
                    type="date"
                    className="form__input"
                    defaultValue="2020-04-11"
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </> : null}
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => {
            submitEditingDataHandler(collectDataForPutRequest());
            onCancel();
          }}
          >Save
          </Button>
          <Button onClick={onCancel}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default EditDialog;
