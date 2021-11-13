import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import useAuth from '../../hooks/useAuth'; 
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useForm } from "react-hook-form";
import { Alert  } from '@mui/material';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import DescriptionIcon from '@mui/icons-material/Description';
import { useHistory, useLocation } from 'react-router';

const Purchase = () => {
    const [product, setProduct] = useState({});
    const [orderPlaced, setorderPlaced] = useState(false);
    const {user} = useAuth();
    const {productId} = useParams();
    const initialInfo = { name: user.displayName, email: user.email, phone: '' };
    const [orderInfo, setOrderInfo] = useState(initialInfo);
    const { reset } = useForm();

    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/home';


    useEffect( () =>{
        fetch(`https://peaceful-depths-32449.herokuapp.com/products/${productId}`)
        .then(res => res.json())
        .then(data => setProduct(data))
    }, []);
    
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = {...orderInfo};
        newInfo[field] = value;
        setOrderInfo(newInfo);
    };
    const handleBookingSubmit = e => {
        //Collect Data
        const order = {
            ...orderInfo,
            price: product.price,
            productName: product.name,
            status: 'Pending'
        }
        //Send Data to server
        fetch('https://peaceful-depths-32449.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
        .then(res => res.json())
        .then(res => {
            if(res.insertedId){
                setorderPlaced(true);
                reset();
                history.push(redirect_url);
            }
        })
        e.preventDefault();
    };


    return (
        <Container>
            <Grid container spacing={2} sx={{ my: 10 }}>
                <Grid item xs={12} md={5}>
                    <Paper elevation={3} >
                        <img src={product.img} width="100%" height="300px" alt="" />
                        <Typography sx={{ max:'auto', textAlign:'center' }} variant="h6" gutterBottom component="div">
                            {product.name}
                        </Typography>
                        <Typography variant="h6" gutterBottom component="div">
                            <DescriptionIcon />{product.big_des}
                        </Typography>
                        <Typography variant="h6" gutterBottom component="div">
                            <AttachMoneyIcon />{product.price}
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                <Typography variant="h4" gutterBottom component="div">
                    Order Information
                </Typography>
                    <form onSubmit={handleBookingSubmit}>
                        <TextField 
                        sx={{width: '75%', m:2 }}
                        label="Name" 
                        name="name"
                        onBlur={handleOnBlur}
                        id="outlined-size-normal" 
                        defaultValue={user?.displayName} 
                        />
                        <TextField
                        sx={{width: '75%', m:2 }} 
                        label="Email" 
                        name="email"
                        onBlur={handleOnBlur}
                        id="outlined-size-normal" 
                        defaultValue={user?.email}
                        />
                        <TextField 
                        sx={{width: '75%', m:2 }}
                        label="Address" 
                        name="address"
                        onBlur={handleOnBlur}
                        id="outlined-size-normal" 
                        defaultValue="" 
                        />
                        <TextField 
                        sx={{width: '75%', m:2 }}
                        label="Phone Number" 
                        name="phone"
                        onBlur={handleOnBlur}
                        id="outlined-size-normal" 
                        defaultValue="" 
                        />
                        <Button type="submit" sx={{width: '75%', m:2 }} variant="contained"> Order Now </Button>
                    </form>
                    {!orderPlaced ? '' : <Alert severity="success">Order Placed!</Alert>}
                </Grid>
            </Grid>
        </Container>
    );
};

export default Purchase;