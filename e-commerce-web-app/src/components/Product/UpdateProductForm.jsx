
import React, { useState } from 'react';
import axios from 'axios';
import { Button, } from 'react-bootstrap';
import { useNavigation } from 'react-router-dom';


function UpdateProductForm() {
    const [name, setName] = useState ('');
    const [price, setPrice] = useState('');
    const { id } = useParams();;
    const navigate = useNavigation();

    const fetchProduct = (e) =>
        e.preventDefault();
       
    try {
        axios.put('http://localhost:127.0.0.1/products', {name, price});
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

export default UpdateProductForm;