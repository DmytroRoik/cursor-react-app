import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Avatar from '../../components/ProfileElements/Avatar/Avatar';
import selectUserData from '../../redux/selectors/profile.selectors';
import '../../components/ProfileElements/BtnEditProfile';
import { postUserData } from '../../redux/actions/profile.actions';
import CheckboxProfile from '../../components/ProfileElements/CheckboxProfile';

export default function Profile() {
  const useStyles = makeStyles(theme => ({
    margin: {
      margin: theme.spacing(1),
    },
    root: {
      '& > *': {
        paddingBottom: '70px',
        width: '33ch',
      },
    },
    checkbox: {
      paddingTop: '25px',
    },
    button: {
      marginLeft: '450px',
    },
  }));
  const classes = useStyles();
  const formData = useRef();
  const dispatch = useDispatch();
  formData.current = useSelector(selectUserData);

  const handleChangeValue = name => (event) => {
    formData.current[name] = event.target.value;
  };
  const saveProfile = (e) => {
    e.preventDefault();
    const { name, email } = formData.current;
    dispatch(postUserData(name, email));
  };

  if (!formData.current) { return null; }
  return (
    <div>
      <Avatar />
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="standard-basic"
          label="Name"
          onChange={handleChangeValue('name')}
          InputLabelProps={{
            shrink: true,
          }}
          defaultValue={formData.current.name}
        />  <br />
        <TextField
          id="standard-basic"
          label="Email"
          onChange={handleChangeValue('email')}
          InputLabelProps={{
            shrink: true,
          }}
          defaultValue={formData.current.email}
        />
      </form>
      <div className={classes.button}>
        <div className="btnSaveProfile">
          <Button
            variant="contained"
            color="primary"
            type="submit"
            onClick={saveProfile}
          >Save
          </Button>
        </div>
      </div>
      <div className={classes.checkbox}>
        <CheckboxProfile />
      </div>
    </div>
  );
}
