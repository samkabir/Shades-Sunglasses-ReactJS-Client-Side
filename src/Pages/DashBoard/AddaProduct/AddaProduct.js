import React from 'react';
import Container from '@mui/material/Container';
import { useForm } from 'react-hook-form';
import './AddaProduct.css'

const AddaProduct = () => {

    const {  register, handleSubmit, reset, formState: { errors } } = useForm();

    const handleProductSubmit = data => {
        console.log(data);
        fetch('https://peaceful-depths-32449.herokuapp.com/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(res => {
            if(res.insertedId){
                alert('added successfully');
                reset();
            }
        })
        
    }

    return (
        <div>
            <Container>
                <h3>Add A Product</h3>
                
                    <form onSubmit={handleSubmit(handleProductSubmit)}>
                        
                        <div className="form">
                        <input placeholder="Name"  {...register("name")} />
                        {errors.name && <span className="error">This field is required</span>}
                        </div>
                        <div className="form">
                        <input placeholder="Image URL"  {...register("img")} />
                        {errors.img && <span className="error">This field is required</span>}
                        </div>

                        <div className="form">
                        <input placeholder="Big Description" {...register("big_des")} />
                        {errors.big_des && <span className="error">This field is required</span>}
                        </div>

                        <div className="form">
                        <input placeholder="Short Description"  {...register("short_des")} />
                        {errors.short_des && <span className="error">This field is required</span>}
                        </div>
                        <div className="form">
                        <input placeholder="Price"  {...register("price")} />
                        {errors.price && <span className="error">This field is required</span>}
                        </div>
                        <div className="form">
                        <input id="btn" type="submit" />
                        </div>
                    </form>
            </Container>
        </div>
    );
};

export default AddaProduct;