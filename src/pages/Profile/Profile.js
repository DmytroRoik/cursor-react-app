import React, { useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { green } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import { postUserData } from '../../redux/actions/profile.actions';
import Avatar from '../../components/ProfileElements/Avatar/Avatar';
import selectUserData from '../../redux/selectors/profile.selectors';
import '../../components/ProfileElements/BtnEditProfile';

export default function Profile() {
  const GreenCheckbox = withStyles({
    root: {
      '&$checked': {
        color: green[600],
      },
    },
    checked: {},
  })(props => <Checkbox color="default" {...props} />);

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
    root2: {
      '& > *': {
        width: '5ch',
      },
    },
  }));

  const classes = useStyles();
  const formData = useRef();
  const dispatch = useDispatch();
  formData.current = useSelector(selectUserData);
  const [check, changeCheck] = useState((formData.current &&
    formData.current.notify) || false);

  const handleChangeValue = name => (event) => {
    if (name === 'notify') {
      changeCheck(!check);
    } else {
      formData.current[name] = event.target.value;
    }
  };

  const saveProfile = () => {
    const {
      name, email, criticalBudget,
    } = formData.current;
    dispatch(postUserData(name, email, check, criticalBudget));
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
        <div className="checkboxProfile">
          <FormGroup row>
            <FormControlLabel
              control={<GreenCheckbox
                checked={check}
                onChange={handleChangeValue('notify')}
                name="checkedG"
              />}
              label="Notify when budget will lower"
            />

            <div >
              <Grid container spacing={1} alignItems="flex-end">
                <Grid className={classes.root2}>
                  <TextField
                    id="input-with-icon-grid"
                    defaultValue={formData.current.criticalBudget}
                    onChange={handleChangeValue('criticalBudget')}
                  />
                </Grid>
                <Grid item> $ </Grid>
              </Grid>
            </div>
          </FormGroup>
        </div>
      </div>
    </div>
  );
}
