import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Icon from '@material-ui/core/Icon';
import './TableCategories.scss';
import Dropdown from '../Dropdown/Dropdown';
import AlertDialog from '../BtnDeleteModal/BtnDeleteModal';
import { selectCategories } from '../../redux/selectors/categories.selectors';
import { loadCategories, removeCategory } from '../../redux/actions/categories.actions';

const TableCategories = () => {
  const categories = useSelector(selectCategories);
  const useStyles = makeStyles({
    table: {
      minWidth: 600,
    },
  });

  const [open, OpenModal] = useState(false);
  const [categoryId, setCategoryId] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadCategories());
  }, []);
  const deleteCategories = (id) => {
    OpenModal(true);
    setCategoryId(id);
  };

  const cancelDelete = () => {
    OpenModal(false);
  };
  const removeItemById = () => {
    console.log(categoryId);
    dispatch(removeCategory(categoryId))
  };

  const classes = useStyles();

  return (
    <>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Category</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Date</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {categories.map(category => (
              <TableRow key={category.id}>
                <TableCell component="th" scope="row" >
                  <Icon style={{ width: '30px' }} className={category.icon} />
                  {category.name}
                </TableCell>
                <TableCell >{category.description}</TableCell>
                <TableCell >{category.date}</TableCell>
                <TableCell align="right"> {category.action}
                  <Dropdown
                    onDelete={() => deleteCategories(category.id)}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <AlertDialog
        open={open}
        onCancel={cancelDelete}
        onSubmit={removeItemById}
      />
    </>
  );
};

export default TableCategories;
