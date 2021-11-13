import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';

const AddaProduct = () => {
    const initialInfo = { name: '', img: '', big_des: '', price: '', short_des: '' };
    const [singleproduct, setSingleProduct] = useState(initialInfo);

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = {...singleproduct};
        newInfo[field] = value;
        setSingleProduct(newInfo);
    }
    const handleProductSubmit = e => {
         
        fetch('http://localhost:5000/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(singleproduct)
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
            <form onSubmit={handleProductSubmit}>
                <TextField
                    sx={{ width: '50%' }}
                    label="Name"
                    name="name"
                    onBlur={handleOnBlur}
                    variant="standard" 
                    />
                <TextField
                    sx={{ width: '50%' }}
                    label="Image"
                    name="img"
                    onBlur={handleOnBlur}
                    variant="standard" 
                    />
                <TextField
                    sx={{ width: '50%' }}
                    label="Detailed Description"
                    name="big_des"
                    onBlur={handleOnBlur}
                    variant="standard" 
                    />
                <TextField
                    sx={{ width: '50%' }}
                    label="Short Description"
                    name="short_des"
                    onBlur={handleOnBlur}
                    variant="standard" 
                    />
                <TextField
                    sx={{ width: '50%' }}
                    label="Price"
                    name="price"
                    onBlur={handleOnBlur}
                    variant="standard" 
                    />
                <Button type="submit" variant="contained">Submit</Button>
            </form>
        </div>
    );
};

export default AddaProduct;