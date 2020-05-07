import React from 'react';
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import BtnEditProfile from '../BtnEditProfile/BtnEditProfile';
import Avatarka from '../../../assets/img/user_avatar.png';
import './Avatar.scss';

export default function Avatars() {
  const useStyles = makeStyles(() => ({
    root: {
      height: '80px',
    },
    avatar: {
      float: 'left',
      margin: '35px 20px 20px 0',
      height: '200px',
      width: '200px',
      borderRadius: '50%',
    },
  }));
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.avatar}>
        <Badge
          overlap="circle"
          anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
          badgeContent={<BtnEditProfile />}
        >
          <Avatar className={classes.avatar} alt="avatar" src={Avatarka} />
        </Badge>
      </div>
    </div>
  );
}

