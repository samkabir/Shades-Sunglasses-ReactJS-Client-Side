import React from 'react';
import useReviews from '../../../hooks/useReviews';
import SingleReview from '../SingleReview/SingleReview';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';

const Reviews = () => {
    const reviews = useReviews();
    return (
        <Container>
            <Typography sx={{ mt: 5, textAlign:'center' }} variant="h4">
                Reviews
            </Typography>
            <Grid container sx={{ mb: 12, mt: 4 }} spacing={2}>
           {
               reviews.map(reviewsingle => <SingleReview
                key={reviewsingle._id}
                reviewsingle={reviewsingle}
               >
               </SingleReview>)
           }
           </Grid>
        </Container>
    );
};

export default Reviews;

// {
//     "name": "Mr Simpson",
//     "review": "asdasdasdasdad dasdasd asdasdas long blah blah",
//     "Rating": 4
// },
// {
//     "name": "Mr Simpson",
//     "review": "asdasdasdasdad dasdasd asdasdas long blah blah",
//     "Rating": 4
// },
// {
//     "name": "Mr Simpson",
//     "review": "asdasdasdasdad dasdasd asdasdas long blah blah",
//     "Rating": 2
// },
// {
//     "name": "Mr Simpson",
//     "review": "asdasdasdasdad dasdasd asdasdas long blah blah",
//     "Rating": 3
// },
// {
//     "name": "Mr Simpson",
//     "review": "asdasdasdasdad dasdasd asdasdas long blah blah",
//     "Rating": 5
// }
