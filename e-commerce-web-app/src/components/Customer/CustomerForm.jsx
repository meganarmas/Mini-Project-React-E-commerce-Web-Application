import React, { useState } from 'react';
import axios from 'axios';
import { Button, } from 'react-bootstrap';
import { useNavigation } from 'react-router-dom';


function CustomerForm() {
    const [name, setName] = useState ('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const navigate = useNavigation();

    const handleSubmit = (e) =>
        e.preventDefault();
       
    try {
        axios.get('http://localhost:127.0.0.1/customers', {name, email, phone});
        navigate('/customers');
    } catch (error) {
        console.error('Error fetching customers:', error);
    }


    return(
        <form onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required>Name</input>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required>Email</input>
            <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required>Phone</input>
            <Button type="submit" variant="primary">Submit</Button>
        </form>
    )
};

export default CustomerForm;