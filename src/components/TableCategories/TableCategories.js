import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Icon from '@material-ui/core/Icon';
import './TableCategories.scss';
import Dropdown from "../Dropdown/Dropdown";


const TableCategories = () => {
  const useStyles = makeStyles({
    table: {
      minWidth: 600,
    },
  });

  const createData = (category, description, date, action) => ({
    category, description, date, action,
  });

  const rows = [
    createData(
      <span>
        <Icon style={{ width: '30px' }}className="fa fa-hamburger" />
        Food
      </span>,
      'For all my food',
      '26/12/2019',
      <Dropdown/>
    ),
    createData(
      <span>
        <Icon style={{ width: '30px' }}className="fa fa-tshirt" />
        Clothes
      </span>,
      '',
      '23/12/2019',
      <Dropdown/>
    ),
    createData(
      <span>
        <Icon style={{ width: '30px' }}className="fa fa-utensils" />
        Restouraunts
      </span>,
      '',
      '22/12/2019',
      <Dropdown/>
    ),
    createData(
      <span>
        <Icon style={{ width: '30px' }}className="fa fa-store-alt" />
        Utility bills
      </span>,
      '',
      '21/12/2019',
      <Dropdown/>
    ),
    createData(
      <span>
        <Icon style={{ width: '30px' }}className="fa fa-paw" />
        Pets
      </span>,
      '',
      '21/12/2019',
      <Dropdown/>
    ),
  ];


  const classes = useStyles();

  return (
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
          {rows.map(row => (
            <TableRow key={row.category}>
              <TableCell component="th" scope="row">
                {row.category}
              </TableCell>
              <TableCell >{row.description}</TableCell>
              <TableCell >{row.date}</TableCell>
              <TableCell align="right">{row.action}</TableCell>

            </TableRow>
                ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableCategories;
