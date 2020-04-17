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
import './TableCategoriesIncomes.scss';
import Dropdown from '../Dropdown/Dropdown';
import AlertDialogSlide from '../HomeBtnDeleteModal/HomeBtnDeleteModal';
import { selectCategoriesIncomes } from '../../redux/selectors/home.selectors';
import { loadCategoriesIncomes, removeCategoryIncomes } from '../../redux/actions/home.actions';

const TableCategoriesCharges = () => {
  const categories = useSelector(selectCategoriesIncomes);
  const useStyles = makeStyles({
    table: {
      minWidth: 600,
    },
  });

  const [open, OpenModal] = useState(false);
  const [categoryId, setCategoryId] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadCategoriesIncomes());
  }, []);
  const deleteCategoriesIncomes = (id) => {
    OpenModal(true);
    setCategoryId(id);
  };

  const cancelDelete = () => {
    OpenModal(false);
  };
  const removeItemById = () => {
    dispatch(removeCategoryIncomes(categoryId));
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
              <TableCell>Money</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {categories.map(category => (
              <TableRow key={category.category}>
                <TableCell component="th" scope="row" >
                  <Icon style={{ width: '30px' }} className={category.icon} />
                  {category.name}
                </TableCell>
                <TableCell >{category.description}</TableCell>
                <TableCell >{category.date}</TableCell>
                <TableCell >{category.money}</TableCell>  
                <TableCell align="right"> {category.action}
                  <Dropdown onDelete={() => deleteCategoriesIncomes(category.id)} />
                </TableCell>
              </TableRow>
                ))}
          </TableBody>
        </Table> 
      </TableContainer>
      <AlertDialogSlide
        open={open}
        onCancel={cancelDelete}
        onSubmit={removeItemById}
      />
    </>
  );
};


export default TableCategoriesCharges;
