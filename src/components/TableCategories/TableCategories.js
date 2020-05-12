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
import moment from 'moment';

import { selectCategories } from '../../redux/selectors/categories.selectors';
import {
  editCategory, loadCategories,
  removeCategory,
} from '../../redux/actions/categories.actions';
import EditDialog from '../BtnEditModal/BtnEditModal';
import Dropdown from '../Dropdown/Dropdown';
import AlertDialog from '../BtnDeleteModal/BtnDeleteModal';

import './TableCategories.scss';

const TableCategories = () => {
  const categories = useSelector(selectCategories);
  const useStyles = makeStyles({
    table: {
      minWidth: 600,
    },
  });
  const [isOpen, setIsOpenModal] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [categoryId, setCategoryId] = useState(null);
  const dispatch = useDispatch();

  const deleteCategories = (id) => {
    setIsOpenModal(true);
    setCategoryId(id);
  };
  const cancelDelete = () => {
    setIsOpenModal(false);
  };
  const cancelEdit = () => {
    setIsEditOpen(false);
  };
  const removeItemById = () => {
    dispatch(removeCategory(categoryId));
  };
  const editCategories = (id) => {
    console.log(1)
    setIsEditOpen(true);
    setCategoryId(id);
  };
  const submitEditingDataHandler = (data) => {
    dispatch(editCategory(categoryId, data));
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
                  <Icon
                    style={{ width: '40px' }}
                    className={`fa ${category.icon.class}`}
                  />
                  {category.name}
                </TableCell>
                <TableCell >{category.description}</TableCell>
                <TableCell >{moment(category.createdAt)
                .format('DD/MM/YYYY')}
                </TableCell>
                <TableCell align="right"> {category.action}
                  <Dropdown
                    onDelete={() => deleteCategories(category.id)}
                    onEdit={() => editCategories(category.id)}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <AlertDialog
        open={isOpen}
        onCancel={cancelDelete}
        onSubmit={removeItemById}
      />
      {categoryId && <EditDialog
        open={isEditOpen}
        onCancel={cancelEdit}
        type="categories"
        оnSubmit={editCategories}
        submitEditingDataHandler={submitEditingDataHandler}
        id={categoryId}
      />}
    </>
  );
};

export default TableCategories;
