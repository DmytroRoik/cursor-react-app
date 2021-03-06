import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper }  from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import moment from 'moment';
import { orderBy } from 'lodash';
import Icon from '@material-ui/core/Icon';
import Dropdown from '../Dropdown/Dropdown';
import AlertDialogSlide from '../HomeBtnDeleteModal/HomeBtnDeleteModal';
import { selectCategoriesCharges } from '../../redux/selectors/home.selectors';
import {
  editCharges,
  removeCategoryCharges,
} from '../../redux/actions/home.actions';
import EditDialog from '../BtnEditModal/BtnEditModal';
import './TableCategoriesCharges.scss';

const TableCategoriesCharges = () => {
  const [columToSort, setColumToSort] = useState('');
  const [sortDirection, setSortDirection] = useState('desc');
  const [isOpen, setIsOpenModal] = useState(false);
  const [categoryId, setCategoryId] = useState(null);
  const dispatch = useDispatch();
  const charges = useSelector(selectCategoriesCharges);
  const [isEditOpen, setIsEditOpen] = useState(false);

  const invertdirection = {
    asc: 'desc',
    desc: 'asc',
  };

  const useStyles = makeStyles({
    table: {
      minWidth: 600,
    },
  });

  const deleteCategoriesCharges = (id) => {
    setIsOpenModal(true);
    setCategoryId(id);
  };

  const editCategoriesCharges = (id) => {
    setIsEditOpen(true);
    setCategoryId(id);
  };

  const labels = [
    { label: 'Owner', name: 'owner' },
    { label: 'Category', name: 'name' },
    { label: 'Description', name: 'description' },
    { label: 'Date', name: 'date' },
    { label: 'Money', name: 'money' },
  ];

  const cancelDelete = () => {
    setIsOpenModal(false);
  };

  const cancelEdit = () => {
    setIsEditOpen(false);
  };

  const submitEditingDataHandler = (data) => {
    const {
      id, categoryIdDat, description, date, money, type,
    } = data;
    dispatch(editCharges(id, categoryIdDat, description, date, money, type));
  };

  const removeItemById = () => {
    dispatch(removeCategoryCharges(categoryId));
  };

  const classes = useStyles();

  const handleSort = (columName) => {
    setColumToSort(columName);
    setSortDirection(columToSort === columName
      ? invertdirection[sortDirection]
      : 'asc');
  };

  const icon = sortDirection === 'asc'
    ? <ArrowDropDownIcon />
    : <ArrowDropUpIcon />;

  const data = orderBy(charges, columToSort, sortDirection);
  return (
    <>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              {
                labels.map(item => (
                  <TableCell
                    key={item.name}
                    onClick={() => handleSort(item.name)}
                  >
                    <div className="table__label__wrap">
                      {item.label}
                      {
                        columToSort === item.name ? icon : null
                      }
                    </div>
                  </TableCell>
                ))}
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map(charge => (
              <TableRow key={charge.id}>
                 <TableCell ><img className="avatar"src={`${process.env.REACT_APP_BASE_URL}/avatars/${charge.user.avatar}`} alt="avatar"/> </TableCell>
                <TableCell component="th" scope="row" >
                  <Icon
                    style={{ width: '40px' }}
                    className={`fa ${charge.category.icon.class}`}
                  />
                  {charge.category.name}
                </TableCell>
                <TableCell >{charge.description}</TableCell>
                <TableCell >{moment(charge.date)
                 .format('DD/MM/YYYY')}
                </TableCell>
                <TableCell >${charge.money}</TableCell>
                <TableCell align="right"> {charge.action}
                  <Dropdown
                    onDelete={() => deleteCategoriesCharges(charge.id)}
                    onEdit={() => editCategoriesCharges(charge.id)}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <AlertDialogSlide
        open={isOpen}
        onCancel={cancelDelete}
        onSubmit={removeItemById}
      />
      {categoryId && (
        <EditDialog
          open={isEditOpen}
          onCancel={cancelEdit}
          type="charge"
          оnSubmit={editCategoriesCharges}
          submitEditingDataHandler={submitEditingDataHandler}
          id={categoryId}
        />
      )
      }
    </>
  );
};

export default TableCategoriesCharges;
