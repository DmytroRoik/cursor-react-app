import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import MoreVert from '@material-ui/icons/MoreVert';


const BtnEdit = () => (
  <div className="btnEdit">
    <Button variant="contained" color="primary">Edit</Button>
  </div>
);

const BtnDelete = () => (
  <div className="btnDelete">
    <Button variant="contained" color="primary">Delete</Button>
  </div>
);

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const Dropdown = () => {
  const [age, setAge] = React.useState('');
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div className="btnMain">
    <Button variant="contained" color="">  
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={age}
        onChange={handleChange}
      >
        <MenuItem value={BtnEdit}> <BtnEdit/> </MenuItem>
        <MenuItem value={BtnDelete}> <BtnDelete/> </MenuItem>
     </Select>
     </Button>
    </div>
  );
}
export default Dropdown;