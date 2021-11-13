import React from 'react';
import Grid from '@mui/material/Grid';
import MyOrder from '../MyOrders/MyOrder';
import useAuth from '../../../hooks/useAuth';
import AllOrders from '../AllOrders/AllOrders';

const DashBoardHome = () => {
    const {admin} = useAuth();
    return (
        <Grid container spacing={2}>
            {admin?
            <Grid item xs={12} md={12}>
                <AllOrders></AllOrders>
            </Grid>
            :
            <Grid item xs={12} md={12}>
                <MyOrder></MyOrder>
            </Grid>}
        </Grid>
    );
};

export default DashBoardHome;