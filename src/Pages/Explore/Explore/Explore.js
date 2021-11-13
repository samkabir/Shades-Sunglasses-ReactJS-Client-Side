import React from 'react';
import useProducts from '../../../hooks/useProducts';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import ExploreAllProducts from '../ExploreAllProducts/ExploreAllProducts';
import Typography from '@mui/material/Typography';
import Footer from '../../Shared/Footer/Footer';

const Explore = () => {
    const products = useProducts();
    return (
        <>
        <Container>
            <Typography sx={{ mt: 5, textAlign:'center' }} variant="h4">
               All Products
            </Typography>
            <Grid container sx={{ my: 12 }} spacing={2}>
            {
                products.map(product => <ExploreAllProducts
                    key={product._id}
                    product={product}
                    >
                    </ExploreAllProducts>)
            }
            </Grid>
        </Container>
        <Footer></Footer>
        </>
    );
};

export default Explore;