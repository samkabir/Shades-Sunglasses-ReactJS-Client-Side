import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';

const MakeReview = () => {
    const initialInfo = { name: '', comment: '', rating:'' };
    const [review, setReview] = useState(initialInfo);

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = {...review};
        newInfo[field] = value;
        setReview(newInfo);
    }
    const handleReviewSubmit = e => {
        
        fetch('http://localhost:5000/reviews', {
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
            <form onSubmit={handleReviewSubmit}>
                <TextField
                    sx={{ width: '50%' }}
                    label="Name"
                    name="name"
                    onBlur={handleOnBlur}
                    variant="standard" />
                <TextField
                    sx={{ width: '50%' }}
                    label="Comment"
                    name="comment"
                    onBlur={handleOnBlur}
                    variant="standard" />
                <Button type="submit" variant="contained">Submit</Button>
            </form>
        </div>
    );
};

export default MakeReview;