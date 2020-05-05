import React from 'react';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';


export default function BtnEditProfile() {
  return (
    <div className="btnEditProfile">
      <IconButton aria-label="edit" color="primary" >
        <EditIcon fontSize="large" />
      </IconButton>
    </div>
  );
}
