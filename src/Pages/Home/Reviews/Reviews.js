import React from 'react';
import useReviews from '../../../hooks/useReviews';
import SingleReview from '../SingleReview/SingleReview';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

const Reviews = () => {
    const reviews = useReviews();
    return (
        <Container>
            <Grid container sx={{ my: 12 }} spacing={2}>
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
