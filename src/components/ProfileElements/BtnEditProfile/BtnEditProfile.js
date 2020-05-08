import React from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import { editAvatar } from '../../../redux/actions/profile.actions';

import './BtnEditProfile.scss';

const useStyles = makeStyles({
  root: {
    '& > *': {
      margin: 0,
    },
  },
  input: {
    display: 'none',
  },
  button: {
    borderRadius: '50px',
    width: '70px',
    height: '70px',
  },
  edit: {
    color: 'blue',
    paddingLeft: '10px',
    paddingTop: '10px',
  },

});

export default function BtnEditProfile() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const uploadImage = async (e) => {
    const data = new FormData();
    data.append('file', e.target.files[0]);

    dispatch(editAvatar(data));
  };

  return (
    <div className="btnEditProfile">

      <div className={classes.root}>
        <input
          className={classes.input}
          accept="image/*"
          id="contained-button-file"
          type="file"
          name="file"
          onChange={uploadImage}
        />
        <IconButton aria-label="edit" color="primary" >
          <label
            htmlFor="contained-button-file"
            className="btnEditProfile__label"
          >
            <EditIcon fontSize="large" />
          </label>
        </IconButton>
      </div>
    </div>
  );
}
