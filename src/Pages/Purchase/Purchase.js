import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Grid from '@mui/material/Grid';

const Purchase = () => {
    const [product, setProduct] = useState({});
        const {productId} = useParams();
        useEffect( () =>{
            fetch(`http://localhost:5000/products/${productId}`)
            .then(res => res.json())
            .then(data => setProduct(data))
        }, [])
        console.log(product);
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
            
            </Grid>
            <Grid item xs={12} md={6}>
            
            </Grid>
        </Grid>
    );
};

export default Purchase;