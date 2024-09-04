import React, { useState, useEffect} from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';


function DeleteCustomer () {
    const [id, setId] = useState('');

    const DeleteID = () => {
        try {
            const response = axios.delete(`http://localhost:127.0.0.1/customers/${id}`);
            setId(response.data);
        } catch (error){
            console.log("Error fetching customer ids:", error);
        }
    };

    return (
        <div>
            <input type="text" value={id} onChange={(e) => setId(e.target.value)} required placeholder="Enter customer ID:">Enter Customer ID:</input>
            <Button onClick={DeleteID} variant="primary">Delete</Button>
        </div>
    );
}

export default DeleteCustomer;