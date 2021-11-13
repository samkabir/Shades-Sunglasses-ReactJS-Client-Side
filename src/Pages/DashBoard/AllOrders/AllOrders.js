import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

const AllOrders = () => {
    const [orders, setOrders] = useState([]);
    const [approved, setApproved] = useState(false);
    useEffect(() => {
        fetch('https://peaceful-depths-32449.herokuapp.com/ordersall')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [approved]);

    const handleDelete = id => {
        if(window.confirm('Are you sure?')){
            const url = `https://peaceful-depths-32449.herokuapp.com/ordersall/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                if(data.deletedCount){
                    alert('Order Deleted!')
                    const remaining = orders.filter(order => order._id !== id);
                    setOrders(remaining);
                }
            })
        }
    }
    const handleStatus = id => {
        const url = `https://peaceful-depths-32449.herokuapp.com/ordersall/${id}`;
        fetch(url, {
            method:'PUT'
        })
        .then(res=>res.json())
        .then(data => {
            console.log(data);
            if(data.acknowledged){
                alert('Order Approved!');
                setApproved(true);
            }
        })
    }

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="Orders table">
                <TableHead>
                <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell align="right">Email</TableCell>
                    <TableCell align="right">Product</TableCell>
                    <TableCell align="right">Address</TableCell>
                    <TableCell align="right">Price</TableCell>
                    <TableCell align="right">Delete Options</TableCell>
                    <TableCell align="right">Order Status</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {orders.map((row) => (
                    <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                    <TableCell component="th" scope="row">
                        {row.name}
                    </TableCell>
                    <TableCell align="right">{row.email}</TableCell>
                    <TableCell align="right">{row.productName}</TableCell>
                    <TableCell align="right">{row.address}</TableCell>
                    <TableCell align="right">{row.price}</TableCell>
                    <TableCell align="right">
                        <Button onClick={() => {handleDelete(row._id)}} variant="contained">Delete</Button>
                    </TableCell>
                    <TableCell align="right">
                        <Button onClick={() => {handleStatus(row._id)}} variant="contained">{row.status}</Button>
                    </TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default AllOrders;