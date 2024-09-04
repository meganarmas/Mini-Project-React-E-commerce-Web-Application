import React, { useState } from 'react';
import axios from 'axios';
import { Button, } from 'react-bootstrap';


function CreateProductForm() {
    const [name, setName] = useState ('');
    const [price, setPrice] = useState('');


    const fetchProduct = (e) =>
        e.preventDefault();
       
    try {
        axios.post('http://localhost:127.0.0.1/products', {name, price});
        navigate('/products');
    } catch (error) {
        console.error('Error fetching products:', error);
    }


    return(
        <form onSubmit={fetchProduct}>
            <input type="text" value={id} onChange={(e) => setId(e.target.value)} required>Product Id</input>
            <input type="email" value={name} onChange={(e) => setName(e.target.value)} required>Product Name</input>
            <input type="tel" value={price} onChange={(e) => setPrice(e.target.value)} required>Price</input>
            <Button type="submit" variant="primary">Submit</Button>
        </form>
    )
};

export default CreateProductForm;