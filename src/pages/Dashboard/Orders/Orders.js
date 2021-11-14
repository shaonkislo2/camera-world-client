import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';

const Orders = () => {
    const {user} = useAuth();
    const [orders, setOrders] = useState([]);

    useEffect(() =>{
        const url = `https://aqueous-peak-41185.herokuapp.com/order?email=${user.email}`
        fetch(url)
        .then(res => res.json())
        .then(data => setOrders(data))
    },[])

    // Delete order

    const handleDeleteOrder = id =>{
        const proceed = window.confirm('Are you sure, you want to delete');
        if(proceed){
          const url = `https://aqueous-peak-41185.herokuapp.com/order/${id}`;
        fetch(url, {
          method:'DELETE'
        })
        .then(res => res.json())
        .then(data => {
          if(data.deletedCount > 0){
            // alert('deleted successfully')           
            const remainingOrders = orders.filter(order => order._id !== id)
            setOrders(remainingOrders);
          }
          
        })
        }
    }

    return (
        <div>
            <h2>Orders : {orders.length} </h2>
            <TableContainer component={Paper}>
      <Table  aria-label="Orders table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell >Email</TableCell>
            <TableCell >Phone</TableCell>
            <TableCell >Products</TableCell>

            
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((row) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.customerName}
              </TableCell>
              <TableCell >{row.email}</TableCell>
              <TableCell >{row.phone}</TableCell>
              <TableCell >{row.productName}</TableCell>
              <Button onClick={() =>handleDeleteOrder (row?._id)} variant="contained">Delete</Button>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    );
};

export default Orders;