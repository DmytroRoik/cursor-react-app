import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import BtnSaveProfile from "../../components/ProfileElements/BtnSaveProfile/BtnSaveProfile";
import Avatar from "../../components/ProfileElements/Avatar/Avatar";
import CheckboxProfile from "../../components/ProfileElements/CheckboxProfile/CheckboxProfile";

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

  return (
    <div>
      <Avatar/>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField id="standard-basic" label="Name" defaultValue="" /> <br/>
        <TextField id="standard-basic" label="Email" /> 
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
