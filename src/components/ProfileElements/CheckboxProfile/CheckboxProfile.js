import React, { useState } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

export default function CheckboxProfile() {
  const GreenCheckbox = withStyles({
    root: {
      '&$checked': {
        color: green[600],
      },
    },
    checked: {},
  })(props => <Checkbox color="default" {...props} />);

  const useStyles = makeStyles(theme => ({
    root: {
      '& > *': {
        width: '5ch',
      },
    },
  }));

  const [state, setState] = useState(false);

  const classes = useStyles();

  const handleChange = (event) => {
    setState(event.target.checked);
  };
  return (
    <div className="checkboxProfile">
      <FormGroup row>
        <FormControlLabel
          control={<GreenCheckbox checked={state} onChange={handleChange} name="checkedG" />}
          label="Notify when budget will lower"
        />
        <div >
          <Grid container spacing={1} alignItems="flex-end">
            <Grid className={classes.root}>
              <TextField id="input-with-icon-grid" label="" />
            </Grid>
            <Grid item> $ </Grid>
          </Grid>
        </div>
      </FormGroup>
    </div>
  );
}
