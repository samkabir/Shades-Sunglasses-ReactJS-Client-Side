import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';


const MyOrder = () => {
    const {user} = useAuth();

    const [orders, setOrders] = useState([])
    useEffect( () => {
        const url = `https://peaceful-depths-32449.herokuapp.com/orders?email=${user.email}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setOrders(data))
    }, [])

    const handleDelete = id => {
        if(window.confirm('Are you sure?')){
            const url = `https://peaceful-depths-32449.herokuapp.com/orders/${id}`;
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

    return (
        <>
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="Orders table">
                <TableHead>
                <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell align="right">Email</TableCell>
                    <TableCell align="right">Product</TableCell>
                    <TableCell align="right">Price</TableCell>
                    <TableCell align="right">Delete Options</TableCell>
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
                    <TableCell align="right">{row.price}</TableCell>
                    <TableCell align="right"><Button onClick={() => {
                        handleDelete(row._id)}} variant="contained">Delete</Button></TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
        </>
    );
};

export default MyOrder;