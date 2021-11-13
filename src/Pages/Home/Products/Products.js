import React from 'react';
import useProducts from '../../../hooks/useProducts';
import Grid from '@mui/material/Grid';
import Product from '../Product/Product';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';

const Products = () => {
    const products = useProducts();

    return (
        <Container>
            <Typography sx={{ mt: 5, textAlign:'center' }} variant="h4">
                Featured Products
            </Typography>
            <Grid container sx={{ mb: 12, mt:5 }} spacing={2}>
            {
                products.slice(0, 6).map(product => <Product
                    key={product._id}
                    product={product}
                    >
                    </Product>)
            }
            </Grid>
        </Container>
    );
};

export default Products;

// https://i.ibb.co/yQNHz1k/1.jpg
// https://i.ibb.co/SsvHL75/2.jpg
// https://i.ibb.co/VJPkwcG/3.jpg
// https://i.ibb.co/mqZrNxG/4.jpg
// https://i.ibb.co/zPycX4v/5.jpg
// https://i.ibb.co/ZWjthC4/6.jpg
// https://i.ibb.co/jhfyGqG/7.jpg
// 
// 

