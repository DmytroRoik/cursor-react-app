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
import Dropdown from '../Dropdown/Dropdown';


const TableCategories = () => {
  const useStyles = makeStyles({
    table: {
      minWidth: 600,
    },
  });


  const categories = [{
    icon: 'fa fa-hamburger',
    name: 'Food',
    description: 'For all my food',
    date: '26/12/2019',
  },
  {
    icon: 'fa fa-tshirt',
    name: 'Clothes',
    description: '',
    date: '23/12/2019',
  },
  {
    icon: 'fa fa-utensils',
    name: 'Restouraunts',
    description: '',
    date: '22/12/2019',
  },
  {
    icon: 'fa fa-store-alt',
    name: 'Utility bills',
    description: '',
    date: '21/12/2019',
  },
  {
    icon: 'fa fa-paw',
    name: 'Pets',
    description: '',
    date: '21/12/2019',
  },
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
          {categories.map(category => (
            <TableRow key={category.category}>
              <TableCell component="th" scope="row" >
                <Icon style={{ width: '30px' }} className={category.icon} />
                {category.name}
              </TableCell>
              <TableCell >{category.description}</TableCell>
              <TableCell >{category.date}</TableCell>
              <TableCell align="right"> {category.action}
                <Dropdown />
              </TableCell>
            </TableRow>
                ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableCategories;
