import { Box } from '@mui/system';
import React from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';
import PaymentIcon from '@mui/icons-material/Payment';
import CopyrightIcon from '@mui/icons-material/Copyright';
import HomeIcon from '@mui/icons-material/Home';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

const Footer = () => {
    return (
        <Box sx={{backgroundColor:'black', mb:'-20px', color:'white'}}>
            <Container>
                <Grid container spacing={2} sx={{py: 5}}>
                    <Grid item xs={12} md={4} sx={{ my:'auto' }}>
                        <Typography variant="h6" gutterBottom component="div" >
                        <HomeIcon sx={{ mx:'15px'}} />
                        Address
                        </Typography>
                        <Typography variant="subtitle2" gutterBottom component="div" >
                        159/2A, Road#15, Gulshan 2, Dhaka, Bangladesh
                        </Typography>
                        <Typography variant="subtitle2" gutterBottom component="div" >
                        <LocalPhoneIcon sx={{ mx:'15px'}} />Mobile: +880136542161
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={4} sx={{ mx:'auto', textAlign:'center'}}>
                        <PaymentIcon />
                        <Typography variant="body2" gutterBottom>
                            Copyright <CopyrightIcon sx={{ mb:'-5px'}} /> Samiul Kabir 
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={4}  sx={{ my:'auto'}}>
                        <Typography variant="subtitle2" gutterBottom component="div" >
                            <FacebookIcon sx={{ mx:'15px'}} />
                            <TwitterIcon sx={{ mx:'15px'}} />
                            <GitHubIcon sx={{ mx:'15px'}} />
                            <GoogleIcon sx={{ mx:'15px'}} />
                        </Typography>
                        
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Footer;