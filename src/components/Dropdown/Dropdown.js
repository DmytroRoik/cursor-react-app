import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import EditIcon from '@material-ui/icons/Edit';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import { actionSwitchDelete } from '../../redux/reducers/categories.reducer';

export default function Dropdown() {
  const useStyles = makeStyles(theme => ({
    button: {
      width: '105px',
      margin: theme.spacing(-0.5),
    },
  }));

  const classes = useStyles();
  const deleteDispatch = useDispatch();

  const BtnEdit = () => (
    <div className="btnEdit">
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        startIcon={<EditIcon />}
      >
        Edit
      </Button>
    </div>
  );

  const BtnDelete = () => (
    <div className="btnDelete">
      <Button
        onClick={deleteDispatch(actionSwitchDelete())}
        variant="contained"
        color="secondary"
        className={classes.button}
        startIcon={<DeleteIcon />}
      >
        Delete
      </Button>

    </div>
  );
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <IconButton
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
      >
        <MenuItem value={BtnEdit}> <BtnEdit /> </MenuItem>
        <MenuItem value={BtnDelete}> <BtnDelete /> </MenuItem>
      </Menu>
    </div>
  );
}
