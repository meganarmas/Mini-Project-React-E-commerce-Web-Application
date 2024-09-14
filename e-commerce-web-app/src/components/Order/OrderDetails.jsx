import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Card } from 'react-bootstrap';


const OrderDetails = () => {
    const [id, setId] = useState("");
    const [order, setOrder] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
          .get(`http://127.0.0.1:5000/orders/${id}`)
          .then((response) => {
            alert("Order found!");
          })
          .catch((error) => {
            console.error("Error in searching for order:", error);
          });
      };
  
  
      return (
          <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                    placeholder="Order ID"
                    required
                />
                <button type="submit">Find Order Details</button>
                </form>
                <div>
                    <h3>{order.id}</h3>
                </div>
            </div>
        );
      }

export default OrderDetails;