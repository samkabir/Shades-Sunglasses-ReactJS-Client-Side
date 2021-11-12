import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import useAuth from './../../../hooks/useAuth';


const Navigation = () => {
    const { user, logout } = useAuth();
    return (
        <>
            <Box sx={{ flexGrow: 1, pb: 2  }}>
                <AppBar style={{ background: '#000000' }} position="static">
                    <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        News
                    </Typography>
                    {
                        user?.email ?
                        <Button onClick={logout} color="inherit">Logout</Button>
                        :
                        <Box>
                            <Link style={{textDecoration:'none', color:'white'}} to="/explore"><Button color="inherit">Explore</Button></Link>
                            <Link style={{textDecoration:'none', color:'white'}} to="/login"><Button color="inherit">Login</Button></Link>
                        </Box>
                    }
                    </Toolbar>
                </AppBar>   
            </Box>    
        </>
        );
};

export default Navigation;