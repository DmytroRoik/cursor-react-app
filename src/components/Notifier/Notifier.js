import React from 'react';

import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions/DialogActions';
import Button from '@material-ui/core/Button';


export default ({ onCancel, onSubmit, open }) => (
  <Dialog
    open={open}
    onClick={onCancel}

    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
  >
    <DialogTitle id="alert-dialog-title"><span className="dialog_title">Delete category?</span></DialogTitle>
    <DialogContent>
      <DialogContentText id="alert-dialog-description">
        <p> Selected category will be permanently deleted.</p>
        <p> You can`t undo this operation later</p>
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={onSubmit}>
        OK
      </Button>
      <Button onClick={onCancel}>
        Cancel
      </Button>
    </DialogActions>
  </Dialog>
);
