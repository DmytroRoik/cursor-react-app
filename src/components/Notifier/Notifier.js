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
    <DialogTitle id="alert-dialog-title">
      <span
        className="dialog_title"
        style={{ color: '#990000', fontWeight: 'bold' }}
      >
        Budget Warning!!!
      </span>
    </DialogTitle>
    <DialogContent>
      <DialogContentText id="alert-dialog-description">
        <p>We reach critical budget limit.
          Do you really want to spend money for that?
        </p>
        <p>Maybe you should work harder</p>
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={onSubmit} style={{ color: '#6699ff' }}>
        Create
      </Button>
      <Button onClick={onCancel} style={{ color: '#990000' }}>
        Cancel
      </Button>
    </DialogActions>
  </Dialog>
);
