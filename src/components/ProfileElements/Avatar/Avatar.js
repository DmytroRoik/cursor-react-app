import React from 'react';
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import  BtnEditProfile from "../BtnEditProfile/BtnEditProfile"
import Avatarka from '../../../assets/img/user_avatar.png';
import "./Avatar.scss"

export default function Avatars() {
  const useStyles = makeStyles((theme) => ({
    root: {
      height: "120px",
      marginLeft: "50px",

    },
  }));
    const classes = useStyles();
  
  return (
    <div className={classes.root}>
       <div class="avatarStyle">
          <Badge 
            overlap="circle"
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            badgeContent={<BtnEditProfile/>} 
          >
            <Avatar class="avatarStyle" alt="avatar" src={Avatarka} />
          </Badge>
       </div>
    </div>
  );
}
