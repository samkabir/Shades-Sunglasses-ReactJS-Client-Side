import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

const ManageProducts = () => {
    
    const [allproducts, setAllProducts] = useState([]);
    const [approved, setApproved] = useState(false);
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://peaceful-depths-32449.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [approved]);

    const handleDelete = id => {
        if(window.confirm('Are you sure?')){
            const url = `https://peaceful-depths-32449.herokuapp.com/products/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                if(data.deletedCount){
                    alert('Product Deleted!')
                    const remaining = allproducts.filter(product => product._id !== id);
                    setAllProducts(remaining);
                    setApproved(true);
                }
            })
        }
    }

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="Orders table">
                <TableHead>
                <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell align="right">Description</TableCell>
                    <TableCell align="right">Price</TableCell>
                    <TableCell align="right">Delete Options</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {products.map((row) => (
                    <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell component="th" scope="row">
                            {row.name}
                        </TableCell>
                        <TableCell align="right">{row.short_des}</TableCell>
                        <TableCell align="right">{row.price}</TableCell>
                        <TableCell align="right">
                            <Button onClick={() => {handleDelete(row._id)}} variant="contained">Delete</Button>
                        </TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default ManageProducts;