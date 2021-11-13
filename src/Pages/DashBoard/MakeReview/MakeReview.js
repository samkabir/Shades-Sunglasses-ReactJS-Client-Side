import React from 'react';
import { useForm } from 'react-hook-form';

const MakeReview = () => {
    const {  register, handleSubmit, reset, formState: { errors } } = useForm();
   
    const handleReviewSubmit = data => {
        
        fetch('https://peaceful-depths-32449.herokuapp.com/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(res => {
            if(res.insertedId){
                alert('Review added successfully');
                reset();
            }
        })
        
    }
    return (
        <div>
            <h3>Leave your Review!</h3>
            <form onSubmit={handleSubmit(handleReviewSubmit)}>
                <div className="form">
                    <input placeholder="Name"  {...register("name")} />
                    {errors.name && <span className="error">This field is required</span>}
                </div>
                <div className="form">
                    <input placeholder="Comment"  {...register("comment")} />
                    {errors.comment && <span className="error">This field is required</span>}
                </div>

                <div className="form">
                    <input placeholder="Rating" {...register("rating")} />
                    {errors.rating && <span className="error">This field is required</span>}
                </div>
                <div className="form">
                    <input id="btn" type="submit" />
                </div>
                
            </form>
        </div>
    );
};

export default MakeReview;