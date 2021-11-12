import React from 'react';
import useProducts from '../../../hooks/useProducts';
import Grid from '@mui/material/Grid';
import Product from '../Product/Product';
import Container from '@mui/material/Container';

const Products = () => {
    const products = useProducts();

    return (
        <Container>
            <Grid container sx={{ my: 12 }} spacing={2}>
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
// https://i.ibb.co/0jLBHLg/8.jpg
// https://i.ibb.co/m8SXWDG/9.jpg
// https://i.ibb.co/qjyb75r/10.jpg
// https://i.ibb.co/d0HYp8n/11.jpg
// https://i.ibb.co/JybH2yc/12.jpg
// https://i.ibb.co/YPBFRsp/13.jpg
// https://i.ibb.co/6mYXnJm/14.png
// https://i.ibb.co/F0dPQ4S/15.jpg
// https://i.ibb.co/F0dPQ4S/15.jpg
// https://i.ibb.co/ck0TGGs/17.jpg
// https://i.ibb.co/yshWxm0/18.jpg
// https://i.ibb.co/bKrs9Wm/19.jpg
// https://i.ibb.co/6FMpbGw/20.jpg
// https://i.ibb.co/XXPPHXv/21.jpg

// {
//     "name": "WHISTLER BLACK",
//     "img": "https://i.ibb.co/SsvHL75/2.jpg",
//     "short-des": "asdasdasd",
//     "big-des": "asdasdasd",
//     "status": "Pending"
// },
// {
//     "name": "WHISTLER BLACK",
//     "img": "https://i.ibb.co/VJPkwcG/3.jpg",
//     "short-des": "asdasdasd",
//     "big-des": "asdasdasd",
//     "status": "Pending"
// },
// {
//     "name": "WHISTLER BLACK",
//     "img": "https://i.ibb.co/mqZrNxG/4.jpg",
//     "short-des": "asdasdasd",
//     "big-des": "asdasdasd",
//     "status": "Pending"
// },
// {
//     "name": "aWHISTLER BLACK",
//     "img": "https://i.ibb.co/zPycX4v/5.jpg",
//     "short-des": "WHISTLER BLACK",
//     "big-des": "asdasdasd",
//     "status": "Pending"
// },
// {
//     "name": "WHISTLER BLACK",
//     "img": "https://i.ibb.co/ZWjthC4/6.jpg",
//     "short-des": "asdasdasd",
//     "big-des": "asdasdasd",
//     "status": "Pending"
// },
// {
//     "name": "WHISTLER BLACK",
//     "img": "https://i.ibb.co/jhfyGqG/7.jpg",
//     "short-des": "asdasdasd",
//     "big-des": "asdasdasd",
//     "status": "Pending"
// },
// {
//     "name": "WHISTLER BLACK",
//     "img": "https://i.ibb.co/0jLBHLg/8.jpg",
//     "short-des": "asdasdasd",
//     "big-des": "asdasdasd",
//     "status": "Pending"
// }