import React, { useState, useEffect} from 'react';
import axios from 'axios';
import { Button } from "react-bootstrap";

const CustomerDetail = () => {
    const {id, setId} = useState("");
    const [customer, setCustomer] = useState(null);

    useEffect(() => {
        fetchCustomerDetails();
    }, {id});

    const fetchCustomerDetails = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/api/customers/${customerId}`);
            setCustomer(response.data);
        } catch (error){
            console.log("Error fetching order details:", error);
        }
    };


    if (!customers) {
        return <div>Finding details...</div>;
    }

    return(
        <div>
            <form onSubmit={fetchCustomerDetails}>
            <input type="text" value={id} onChange={(e) => setId(e.target.value)} required>Customer ID:</input>
            <Button Click={fetchCustomerDetails} variant="primary">Get Customer Details:</Button>
            </form>
            {customer && (
                <div>
                    <h2>{customer.name}</h2>
                    <p>{customer.email}</p>
                    <p>{customer.phone}</p>
            </div>
            )}
        </div>
    );
};

export default CustomerDetail;