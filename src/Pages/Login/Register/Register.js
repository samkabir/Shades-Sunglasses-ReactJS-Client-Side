import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import img from '../../../images/Login/login-img.jpg'
import { Container, TextField, Typography, CircularProgress, Alert } from '@mui/material';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


const Register = () => {
    const [loginData, setLoginData] = useState({});

    const { user, registerUser, isLoading, authError } = useAuth();

    const handleOnBlur = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e =>{
        if(loginData.password !== loginData.password2){
            alert('Your Password Did not match');
            return;
        };
        registerUser(loginData.email, loginData.password);
        e.preventDefault();
    }
    return (
        <Container>
                <Grid container spacing={2}>
                    <Grid sx={{ my: 5}} item xs={12} md={6}>
                        <Typography variant="body1" gutterBottom>Register</Typography>
                        {!isLoading && <form onSubmit={handleLoginSubmit}>
                            <TextField 
                            sx={{width: '75%', m:2 }}
                            id="standard-basic" 
                            label="Your Name" 
                            name="name"
                            onBlur={handleOnBlur}
                            variant="standard" />

                            <TextField 
                            sx={{width: '75%', m:2 }}
                            id="standard-basic" 
                            label="Your Email" 
                            name="email"
                            type="email"
                            onBlur={handleOnBlur}
                            variant="standard" />

                            <TextField 
                            sx={{width: '75%', m:2 }}
                            type="password"
                            id="standard-basic" 
                            label="Your Password"
                            name="password"
                            onBlur={handleOnBlur}
                            variant="standard" />

                            <TextField 
                            sx={{width: '75%', m:2 }}
                            type="password"
                            id="standard-basic" 
                            label="Retype Password"
                            name="password2"
                            onBlur={handleOnBlur}
                            variant="standard" />

                            <Button type="submit" sx={{width: '75%', m:2 }} variant="contained"> Register </Button>

                                <NavLink 
                            style={{textDecoration:'none'}}
                            to="/login">
                                <Button variant="text">Already Registered?</Button>
                            </NavLink>

                        </form>
                        }
                        {isLoading && <CircularProgress />}
                        {user?.email && <Alert severity="success">User Created successfully!</Alert>}
                        {authError && <Alert severity="error">{authError}</Alert>}
                    </Grid>
                    <Grid sx={{ my: 5 }} item xs={12} md={6}>
                        <img style={{width: '100%'}} src={img} alt="" />
                    </Grid>
                </Grid>
            </Container>  
    );
};

export default Register;