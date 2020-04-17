import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';



export default function AlertDialogSlide(props) {
  return (
    <div>
      <Dialog
        open={props.open}
        onClick={props.onCancel}

        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">Delete Entry</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <p> Selected entry will be permamently deleted.</p>
            <p>You can`t  undo  this operation later</p>
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
