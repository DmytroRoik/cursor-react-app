import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Icon from '@material-ui/core/Icon';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SimpleSelect() {
  const classes = useStyles();
  const [age, setAge] = React.useState('');
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div>
      <FormControl className={classes.formControl} style={{marginTop: 22, marginLeft:0}}>
        <InputLabel id="demo-simple-select-label" style={{fontSize: 18}}>Select icon</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          value={age}
          onChange={handleChange}
          style={{width: 330, border: "1px solid #65656550", borderRadius: 5, padding: 5}}
        >
          <MenuItem value={10}> 
          <Icon style={{ width: '25px' }} className="fa fa-hamburger" /> 
          </MenuItem>
          <MenuItem value={20}><Icon style={{ fontSize: 20 , width: 30}} className="fas fa-utensils" /> </MenuItem>
          <MenuItem value={30}><Icon style={{ fontSize: 20, width: 30 }} className="fas fa-dumbbell" /> </MenuItem>
          <MenuItem value={40}><Icon style={{ fontSize: 20, width: 30 }} className="fas fa-train" /> </MenuItem>
          <MenuItem value={50}><Icon style={{ fontSize: 20, width: 30 }} className="fas fa-briefcase-medical" /> </MenuItem>
          <MenuItem value={60}><Icon style={{ fontSize: 20, width: 30 }} className="fas fa-paint-roller" /> </MenuItem>
          <MenuItem value={70}><Icon style={{ fontSize: 20, width: 30 }} className="fas fa-theater-masks" /> </MenuItem>
          <MenuItem value={80}><Icon style={{ fontSize: 20, width: 30 }} className="fas fa-wine-glass" /> </MenuItem>
          <MenuItem value={90}><Icon style={{ fontSize: 20, width: 30 }} className="fas fa-smoking" /> </MenuItem>
          <MenuItem value={100}><Icon style={{ fontSize: 20, width: 30 }} className="fas fa-paw" /> </MenuItem>
          <MenuItem value={110}><Icon style={{ fontSize: 20, width: 30 }} className="fas fa-tshirt" /> </MenuItem>
          </Select>
      </FormControl>
    </div>
  );
}