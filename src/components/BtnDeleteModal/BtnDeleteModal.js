import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import './BtnDeleteModal.scss';

export default function AlertDialog(props) {
  return (
    <div>
      <Dialog
        open={props.open}
        onClick={props.onCancel}

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
          <Button onClick={props.onSubmit}>
            OK
          </Button>
          <Button onClick={props.onCancel}>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
