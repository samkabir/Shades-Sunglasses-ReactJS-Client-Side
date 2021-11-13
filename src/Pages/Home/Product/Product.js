import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { NavLink } from 'react-router-dom';
import { CardActionArea, CardActions } from '@mui/material';
import Button from '@mui/material/Button';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import DescriptionIcon from '@mui/icons-material/Description';

const Product = ({product}) => {
    const {_id, name, img, price, short_des} = product;
    return (
        <Grid item xs={12} md={4}>
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    height="150"
                    image={img}
                    alt=""
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h4" component="div">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <DescriptionIcon />{short_des}
                    </Typography>
                    <Typography variant="h5" color="text.secondary">
                        <AttachMoneyIcon />{price}
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <NavLink style={{textDecoration:'none'}} to={`/purchase/${_id}`}>
                        <Button variant="contained">
                        Buy Now
                        </Button>
                    </NavLink>    
                </CardActions>
            </Card>
        </Grid>
    );
};

export default Product;