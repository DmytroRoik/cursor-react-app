import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';

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
  id, open, onCancel, submitEditingDataHandler,
}) => {
  const classes = useStyles();
  const categoryData = useSelector(selectCategories).find(category => (
    category.id === id
  ));
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

  useEffect(() => {
    setCategoryName(categoryData.name);
    setDescription(categoryData.description);
  }, [categoryData]);

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
