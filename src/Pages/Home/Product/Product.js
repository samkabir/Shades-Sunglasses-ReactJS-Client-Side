import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Link } from 'react-router-dom';
import { Button, CardActionArea, CardActions } from '@mui/material';

const Product = ({product}) => {
    const {_id, name, img, price, short_des} = product;
    return (
        <Grid item xs={12} md={4}>
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    height="140"
                    image={img}
                    alt=""
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h4" component="div">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {short_des}
                    </Typography>
                    <Typography variant="h5" color="text.secondary">
                        {price}
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Link to={`/purchase/${_id}`}>
                        <Button size="small" color="primary">
                        Buy Now
                        </Button>
                    </Link>    
                </CardActions>
            </Card>
        </Grid>
    );
};

export default Product;