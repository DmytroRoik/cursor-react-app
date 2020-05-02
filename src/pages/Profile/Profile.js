import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import BtnSaveProfile from '../../components/ProfileElements/BtnSaveProfile/BtnSaveProfile';
import Avatar from '../../components/ProfileElements/Avatar/Avatar';
import CheckboxProfile from '../../components/ProfileElements/CheckboxProfile/CheckboxProfile';
import {
  selectUserDataMail,
  selectUserDataName,
} from '../../redux/selectors/rootSelectors';
import { getUserDataThunk } from '../../redux/actions/root.actions';

const useStyles = makeStyles({
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: 500,
    height: 250,
    padding: 0,
    marginLeft: 200,
  },
  input: {
    width: 450,
    marginBottom: 30,
  },
  checkbox: {
    paddingTop: '25px',
  },
  button: {
    marginRight: 470,
    padding: 0,
  },
});

export default function Profile() {
  const classes = useStyles();
  const profileDataName = useSelector(selectUserDataName);
  const profileDataMail = useSelector(selectUserDataMail);
  const [userName, setUserName] = useState(profileDataName);
  const [userMail, setUserMail] = useState(profileDataMail);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserDataThunk());
    setUserName(profileDataName);
    setUserMail(profileDataMail);
  }, [profileDataName, profileDataMail]);
  return (
    <div className={classes.root}>
      <Avatar />
      <form className={classes.form}>
        <TextField
          className={classes.input}
          label="Name"
          onChange={e => setUserName(e.target.value)}
          value={userName}
        />
        <TextField
          className={classes.input}
          label="Mail"
          onChange={e => setUserMail(e.target.value)}
          value={userMail}
        />
      </form>
      <div className={classes.button}>
        <BtnSaveProfile />
      </div>
      <div className={classes.checkbox}>
        <CheckboxProfile />
      </div>
    </div>
  );
}
