import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import img from '../../../images/Login/login-img.jpg'
import { Container, TextField, Typography, CircularProgress, Alert  } from '@mui/material';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, isLoading, authError } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e =>{
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }
    return (
        <>
            <Container>
                <Grid container spacing={2}>
                    <Grid sx={{ my: 5}} item xs={12} md={6}>
                        <Typography variant="body1" gutterBottom>Login</Typography>
                        <form onSubmit={handleLoginSubmit}>
                            <TextField 
                            sx={{width: '75%', m:2 }}
                            id="standard-basic" 
                            label="Your Email" 
                            name="email"
                            onChange={handleOnChange}
                            variant="standard" />
                            <TextField 
                            sx={{width: '75%', m:2 }}
                            type="password"
                            id="standard-basic" 
                            label="Your Password"
                            name="password"
                            onChange={handleOnChange}
                            variant="standard" />
                            <Button type="submit" sx={{width: '75%', m:2 }} variant="contained"> Login </Button>
                            <NavLink 
                            style={{textDecoration:'none'}}
                            to="/register">
                                <Button variant="text">New user? Please Register</Button>
                            </NavLink>
                            {isLoading && <CircularProgress />}
                            {user?.email && <Alert severity="success">Login successfully!</Alert>}
                            {authError && <Alert severity="error">{authError}</Alert>}
                        </form>
                    </Grid>
                    <Grid sx={{ my: 5 }} item xs={12} md={6}>
                        <img style={{width: '100%'}} src={img} alt="" />
                    </Grid>
                </Grid>
            </Container>  
        </>
    );
};

export default Login;