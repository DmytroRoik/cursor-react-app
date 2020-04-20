import React from 'react';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import "./BtnEditProfile.scss"

export default function BtnEditProfile() {
   return (
    <div class="btnEditProfile">
        <IconButton aria-label="edit"  color="primary" >
        <EditIcon fontSize="large"/>
         </IconButton>
    </div>
  );
}