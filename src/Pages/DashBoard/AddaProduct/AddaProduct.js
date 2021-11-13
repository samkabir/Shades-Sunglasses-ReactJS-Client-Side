import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { useForm } from 'react-hook-form';

const AddaProduct = () => {
    const initialInfo = { name: '', img: '', big_des: '', price: '', short_des: '' };
    const [singleproduct, setSingleProduct] = useState(initialInfo);
    const { reset } = useForm();

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
                reset();
            }
        })
        e.preventDefault();
    }

    return (
        <div>
            <Container>
                <h3>Add A Product</h3>
                <Grid>
                    <form onSubmit={handleProductSubmit}>
                        <Grid>
                            <TextField
                                sx={{ width: '50%' }}
                                label="Name"
                                name="name"
                                onBlur={handleOnBlur}
                                variant="standard" 
                                />
                        </Grid>
                        <Grid>
                        <TextField
                            sx={{ width: '50%' }}
                            label="Image"
                            name="img"
                            onBlur={handleOnBlur}
                            variant="standard" 
                            />
                        </Grid>
                        <Grid>
                        <TextField
                            sx={{ width: '50%' }}
                            label="Detailed Description"
                            name="big_des"
                            onBlur={handleOnBlur}
                            variant="standard" 
                            />
                        </Grid>
                        <Grid>
                        <TextField
                            sx={{ width: '50%' }}
                            label="Short Description"
                            name="short_des"
                            onBlur={handleOnBlur}
                            variant="standard" 
                            />
                        </Grid>
                        <Grid>
                        <TextField
                            sx={{ width: '50%' }}
                            label="Price"
                            name="price"
                            type='number'
                            onBlur={handleOnBlur}
                            variant="standard" 
                            />
                        </Grid>
                        <Button sx={{ my: 2 }}type="submit" variant="contained">Submit</Button>
                    </form>
                </Grid>
            </Container>
        </div>
    );
};

export default AddaProduct;