import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import moment from 'moment';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import { orderBy } from 'lodash';
import Paper from '@material-ui/core/Paper';
import Icon from '@material-ui/core/Icon';
import './TableCategoriesIncomes.scss';
import Dropdown from '../Dropdown/Dropdown';
import AlertDialogSlide from '../HomeBtnDeleteModal/HomeBtnDeleteModal';
import { selectCategoriesIncomes } from '../../redux/selectors/home.selectors';
import {
  editIncomes,
  loadCategoriesIncomes,
  removeCategoryIncomes,
} from '../../redux/actions/home.actions';

import EditDialog from '../BtnEditModal/BtnEditModal';

const TableCategoriesCharges = () => {
  const [columToSort, setColumToSort] = useState('');
  const [sortDirection, setSortDirection] = useState('desc');
  const [isOpen, setIsOpenModal] = useState(false);
  const [categoryId, setCategoryId] = useState(null);
  const dispatch = useDispatch();
  const incomes = useSelector(selectCategoriesIncomes);
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

  useEffect(() => {
    dispatch(loadCategoriesIncomes());
  }, []);

  const deleteCategoriesIncomes = (id) => {
    setIsOpenModal(true);
    setCategoryId(id);
  };

  const cancelDelete = () => {
    setIsOpenModal(false);
  };

  const removeItemById = () => {
    dispatch(removeCategoryIncomes(categoryId));
  };

  const editCategoriesIncome = (id) => {
    setIsEditOpen(true);
    setCategoryId(id);
  };

  const cancelEdit = () => {
    setIsEditOpen(false);
  };

  const submitEditingDataHandler = (data) => {
    const {
      id, categoryIdDat, description, date, money, type,
    } = data;
    dispatch(editIncomes(id, categoryIdDat, description, date, money, type));
  };

  const classes = useStyles();

  const labels = [
    { label: 'Category', name: 'name' },
    { label: 'Description', name: 'description' },
    { label: 'Date', name: 'date' },
    { label: 'Money', name: 'money' },
  ];

  const handleSort = (columName) => {
    setColumToSort(columName);
    setSortDirection(columToSort === columName
      ? invertdirection[sortDirection]
      : 'asc');
  };

  const icon = sortDirection === 'asc'
    ? <ArrowDropDownIcon />
    : <ArrowDropUpIcon />;

  const data = orderBy(incomes, columToSort, sortDirection);

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
            {data.map(income => (
              <TableRow key={income.id}>
                <TableCell component="th" scope="row" >
                  <Icon
                    style={{ width: '40px' }}
                    className={`fa ${income.category.icon.class}`}
                  />
                  {income.category.name}
                </TableCell>
                <TableCell >{income.description}</TableCell>
                <TableCell >{moment(income.date).format('DD/MM/YYYY')}</TableCell>
                <TableCell >${income.money}</TableCell>
                <TableCell align="right"> {income.action}
                  <Dropdown
                    onDelete={() => deleteCategoriesIncomes(income.id)}
                    onEdit={() => editCategoriesIncome(income.id)}
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
      {categoryId && <EditDialog
        open={isEditOpen}
        onCancel={cancelEdit}
        type="income"
        оnSubmit={editCategoriesIncome}
        submitEditingDataHandler={submitEditingDataHandler}
        id={categoryId}
      />}
    </>
  );
};

export default TableCategoriesCharges;
