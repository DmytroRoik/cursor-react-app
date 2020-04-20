import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Icon from '@material-ui/core/Icon';
import { getIconsListThunk } from '../../redux/reducers/iconSelector.reducer';
import { useSelector, useDispatch } from "react-redux";
import { connect } from 'react-redux'

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

 function SimpleSelect() {
  const classes = useStyles();
  const [age, setAge] = React.useState('');
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const dispatch = useDispatch();
 
  dispatch(getIconsListThunk());
  

  const icons = ["fa fa-hamburger", "fas fa-utensils", "fas fa-dumbbell", "fas fa-train", "fas fa-briefcase-medical", "fas fa-paint-roller", "fas fa-theater-masks", "fas fa-wine-glass", "fas fa-smoking", "fas fa-paw", "fas fa-paw"];
  const menuItem = icons.map((item, index) =>
    <MenuItem value={index * 10}> 
          <Icon style={{ width: '30px', fontSize: "20px" }} className={item} /> 
          </MenuItem>
    ) 
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
         {menuItem}
        </Select>
      </FormControl>
    </div>
  );
}

function mapStateToProps(state, ownProps) {
  
  // component receives additionally:
  return { icons: state.icons }
}


export default connect(mapStateToProps)(SimpleSelect)