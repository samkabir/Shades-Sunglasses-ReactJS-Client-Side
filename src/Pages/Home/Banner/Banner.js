import React from 'react';
import Grid from '@mui/material/Grid';
import { Button, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import bg from '../../../images/Banner/banner.jpg';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div>
            <Grid style={{ background: '#d8e8eb' }} container spacing={2}>
                <Grid sx={{ my: 12 }} item xs={12} md={6}>
                    <Box sx={{ p: 5}}>
                        <Typography variant="h3" gutterBottom>
                            A BROAD RANGE OF TRENDY EYEWEAR
                        </Typography>
                        <Typography variant="subtitle2" gutterBottom component="div">
                            Perfect look with a suitable pair of glasses. Put on eyewear & put on positive view mode.
                        </Typography>
                        <Link style={{textDecoration:'none', color:'white'}} to="/explore"><Button style={{ background: '#000000' }} sx={{ my: 2, px:3, py:1}} variant="contained">Explore!</Button></Link>
                    </Box>
                </Grid>
                <Grid sx={{ my: 12 }} item xs={12} md={6}>
                    <img
                        style={{ width: '620px' }}
                        src={bg} alt="" />
                </Grid>
            </Grid>
        </div>
    );
};

export default Banner;