import React from 'react';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import img1 from '../../../images/services/1.png';
import img2 from '../../../images/services/2.png';
import img3 from '../../../images/services/3.png';
import img4 from '../../../images/services/4.png';

const Services = () => {
    return (
        <Container>
            <Typography sx={{ my: 5, textAlign:'center' }} variant="h4">
                Services
            </Typography>
            <Grid container spacing={2} sx={{ p: 1, mb: 5, borderRadius: 1, textAlign: 'center',}} >
                <Grid item xs={12} md={3}>
                    <Paper elevation={3} sx={{py:2}}>
                        <img src={img1} width="60px" height="60px" alt="" />
                        <Typography variant="h6" gutterBottom component="div">
                            CASH ON DELIVERY
                        </Typography>
                        <Typography variant="subtitle2" gutterBottom component="div">
                            COD service all over Bangladesh
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Paper elevation={3} sx={{py:2}}>
                        <img src={img2} width="60px" height="60px" alt="" />
                        <Typography variant="h6" gutterBottom component="div">
                            EASY RETURN & EXCHANGE
                        </Typography>
                        <Typography variant="subtitle2" gutterBottom component="div">
                            Transparent return policy
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Paper elevation={3} sx={{py:2}}>
                        <img src={img3} width="60px" height="60px" alt="" />
                        <Typography variant="h6" gutterBottom component="div">
                            DEDICATED TO YOUR CARE
                        </Typography>
                        <Typography variant="subtitle2" gutterBottom component="div">
                            Customer satisfaction is our Attitude
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Paper elevation={3} sx={{py:2}}>
                        <img src={img4} width="60px" height="60px" alt="" />
                        <Typography variant="h6" gutterBottom component="div">
                            SAFE & SECURE CHECKOUT
                        </Typography>
                        <Typography variant="subtitle2" gutterBottom component="div">
                            Because we care, we’re security aware.
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Services;