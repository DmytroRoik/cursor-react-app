import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';

import { selectCategories } from '../../redux/selectors/categories.selectors';


import './BtnEditModal.scss';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const EditDialog = ({ id, open, onCancel, onSubmit }) => {
  const classes = useStyles();
  const categoryData = useSelector(selectCategories).find(category => category.id === id);
  const [categoryName, setCategoryName] = useState(categoryData.name);
  const [categoryDescription, setCategoryDescription] = useState(categoryData.description);
  const changeInputState = (setFunctionHook, data) => {
    setFunctionHook(data);
  };
  return (
    <>
      <Dialog
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          <span className="dialog_title">Edit category</span>
        </DialogTitle>
        <DialogContent>
          <form className={classes.root} noValidate autoComplete="off">
            <TextField onChange={event => changeInputState(setCategoryName, event.target.value)} value={categoryName} label="Category Name*" />
            <TextField onChange={event => changeInputState(setCategoryDescription, event.target.value)} value={categoryDescription} label="Category Description" />
            <TextField label="Category Icon*" />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={onSubmit}>Save</Button>
          <Button onClick={onCancel}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default EditDialog;
