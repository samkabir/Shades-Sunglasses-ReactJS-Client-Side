import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import useAuth from './../../../hooks/useAuth';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';


const Navigation = () => {
    const { user, logout } = useAuth();
    return (
        <>
            <Box sx={{ flexGrow: 1, pb: 2  }}>
                <AppBar style={{ background: '#000000' }} position="static">
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            <Link style={{textDecoration:'none', color:'white'}} to="/home">
                            Shades
                            </Link>
                        </Typography>
                    {
                        user?.email ?
                        <Box>
                            <Link style={{textDecoration:'none', color:'white'}} to="/explore"><Button color="inherit">Explore</Button></Link>
                            <Link style={{textDecoration:'none', color:'white'}} to="/dashboard"><Button color="inherit">DashBoard</Button></Link>
                            <Button onClick={logout} color="inherit">{user?.displayName} Logout<LogoutIcon /></Button>
                        </Box>
                        :
                        <Box>
                            <Link style={{textDecoration:'none', color:'white'}} to="/explore"><Button color="inherit">Explore</Button></Link>
                            <Link style={{textDecoration:'none', color:'white'}} to="/login"><Button color="inherit">Login<LoginIcon /></Button></Link>
                        </Box>
                    }
                    </Toolbar>
                </AppBar>   
            </Box>    
        </>
        );
};

export default Navigation;