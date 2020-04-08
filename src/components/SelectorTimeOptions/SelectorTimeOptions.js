import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import BtnAddTimeOption from "./BtnAddTimeOption"



export default function SelectorTimeOptions() {
    

  const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));
  
  const classes = useStyles();
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  
  return (
   
      <FormControl className={classes.formControl}>
        <InputLabel id="select-label"></InputLabel>
        <Select
          labelId="select-label"
          onChange={handleChange}
        >
          <MenuItem value={10}>this week</MenuItem>
          <MenuItem value={20}>this month</MenuItem>
          <BtnAddTimeOption/>
        </Select>
      </FormControl>
  
  );
}
