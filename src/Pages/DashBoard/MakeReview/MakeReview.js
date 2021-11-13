import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

const MakeReview = () => {
    const initialInfo = { name: '', comment: '' };
    const [review, setReview] = useState(initialInfo);

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = {...review};
        newInfo[field] = value;
        setReview(newInfo);
    }
    const handleReviewSubmit = e => {
        
        fetch('https://peaceful-depths-32449.herokuapp.com/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
        .then(res => res.json())
        .then(res => {
            if(res.insertedId){
            }
        })
        e.preventDefault();
    }
    return (
        <div>
            <h3>Leave your Review!</h3>
            <form onSubmit={handleReviewSubmit}>
                <Container>
                    <Grid sx={{ my: 5}} xs={12} md={12}>
                        <Grid >
                            <TextField
                                sx={{ width: '50%' }}
                                label="Name"
                                type="text"
                                name="name"
                                onBlur={handleOnBlur}
                                variant="standard" />
                        </Grid>
                        <Grid >
                        <TextField
                            sx={{ width: '50%' }}
                            label="Comment"
                            type="text"
                            name="comment"
                            onBlur={handleOnBlur}
                            variant="standard" />
                        </Grid>
                        <Grid>
                        <TextField
                            sx={{ width: '50%' }}
                            type="number"
                            label="Rating"
                            name="rating"
                            onBlur={handleOnBlur}
                            variant="standard" />
                        </Grid>
                    </Grid>
                    <Button type="submit" variant="contained">Submit</Button>
                </Container>
            </form>
        </div>
    );
};

export default MakeReview;