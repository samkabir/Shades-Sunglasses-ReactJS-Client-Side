import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import Grid from '@mui/material/Grid';

const SingleReview = ({ reviewsingle }) => {
    const {name, comment, rating} = reviewsingle;
    const [value, setValue] = React.useState(parseInt(rating));
    return (
        <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ m: 2, p:2, minHeight:'200px' }}>
                <Typography variant="subtitle1" gutterBottom component="div">
                    {name}
                </Typography>
                <Typography variant="h5" gutterBottom component="div">
                    {comment}
                </Typography>
                <Rating name="read-only" value={value} readOnly />
            </Paper>   
        </Grid>
    );
};

export default SingleReview;