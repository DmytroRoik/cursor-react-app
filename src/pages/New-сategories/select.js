import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Icon from '@material-ui/core/Icon';
import { selectIcons } from '../../redux/selectors/rootSelectors';
import { loadIcons } from '../../redux/actions/root.actions';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const SimpleSelect = ({ id, onChange }) => {
  const classes = useStyles();
  const [icon, setIcon] = useState(id);
  const dispatch = useDispatch();
  const iconsServer = useSelector(selectIcons);

  const handleChange = (event) => {
    setIcon(event.target.value);
    onChange(event.target.value);
  };

  useEffect(() => {
    dispatch(loadIcons());
  }, [dispatch]);

  console.log(iconsServer);
  const menuItem = iconsServer.map((item, index) => (
    <MenuItem
      value={item.id}
      key={item.id}
    >
      <Icon
        style={{ width: '30px', fontSize: '20px' }}
        className={`fas ${item.class}`}
        id={index}
      />
    </MenuItem>));

  return (
    <div>
      <FormControl
        className={classes.formControl}
        style={{ marginTop: 22, marginLeft: 0 }}
      >
        <InputLabel
          id="demo-simple-select-label"
          style={{ fontSize: 18 }}
        >Select icon
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          value={icon}
          onChange={handleChange}
          style={{
            width: 360,
            border: '1px solid #65656550',
            borderRadius: 5,
            padding: 5,
          }}
        >
          {menuItem}
        </Select>
      </FormControl>
    </div>
  );
};

export default SimpleSelect;
