import React from 'react';
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';
import BtnEditProfile from '../BtnEditProfile/BtnEditProfile';
import Avatarka from '../../../assets/img/user_avatar.png';
import './Avatar.scss';

const Avatars = () => (
  <div className="avatarStyle">
    <Badge
      overlap="circle"
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      badgeContent={<BtnEditProfile />}
    >
      <Avatar className="avatar" alt="avatar" src={Avatarka} />
    </Badge>
  </div>
);

export default Avatars;
