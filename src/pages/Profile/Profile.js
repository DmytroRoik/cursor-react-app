import React, { useState, useEffect } from 'react';
import { useDispatch} from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import BtnSaveProfile from "../../components/ProfileElements/BtnSaveProfile/BtnSaveProfile";
import Avatar from "../../components/ProfileElements/Avatar/Avatar";
import CheckboxProfile from "../../components/ProfileElements/CheckboxProfile/CheckboxProfile";
import {loadAvatar} from "../../redux/actions/profile.actions";
import {getUserDataProfile} from "../../redux/actions/profile.actions";



export default function Profile() {
  const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
    root: {
      '& > *': {
        paddingBottom: "70px",
        width: '33ch',
      },
    },
    checkbox:{
      paddingTop: "25px",
    },
    button:{
      marginRight: "470px",
    }
  }));
  
  const classes = useStyles();
  
  const [nameId, setNameId] = React.useState('');
  const handleChangeNameId = (event) => {
    setNameId(event.target.value);
  };

  const [email, setEmail] = React.useState('');
  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getUserDataProfile());
  // }, []);

  const avatar = () => {
    dispatch(loadAvatar());
  }
  
  
  return (
    <div>
      <Avatar />
      <form className={classes.root} noValidate autoComplete="off">
        <TextField 
          id="standard-basic"
          label="Name" 
          onChange={handleChangeNameId}
          value={nameId} />  <br/>
        <TextField 
          id="standard-basic" 
          label="Email"
          onChange={handleChangeEmail}
          value={email} />
      </form>
      <div className={classes.button}>
        <BtnSaveProfile/>
      </div>
      <div className={classes.checkbox}>
        <CheckboxProfile/>
      </div>
    </div>   
  );
}
