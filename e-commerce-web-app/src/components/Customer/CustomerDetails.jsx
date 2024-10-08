import React, { useState, useEffect} from 'react';
import axios from 'axios';
import { Button } from "react-bootstrap";

const CustomerDetail = () => {
    const [name, setName] = useState("");
    const [customer, setCustomer] = useState("");
    const [id, setId] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
          .get(`http://127.0.0.1:5000/customers/${id}`)
          .then((response) => {
            alert("Customer found!");
          })
          .catch((error) => {
            console.error("Error in searching for customer:", error);
          });
      };
  
  
      return (
          <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                    placeholder="Customer ID"
                    required
                />
                <button type="submit">Find Customer</button>
                </form>
                <div>
                    <h3>{customer.name}</h3>
                    <p>{customer.email}</p>
                    <p>{customer.phone}</p>
                </div>
            </div>
        );
      }

export default CustomerDetail;