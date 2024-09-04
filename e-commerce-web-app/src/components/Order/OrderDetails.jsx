import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Card } from 'react-bootstrap';


function OrderDetails() {
    const [id, setId] = useState("");
    const [order, setOrder] = useState(null);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      axios
        .put(`http://127.0.0.1:5000/api/orders/${id}`)
        .then((response) => {
          alert("Product update successfully!");
        })
        .catch((error) => {
          console.error("There was an error updating product", error);
        });
    };

  return (
    <Container className="order-detail">
      <h2>Order Details</h2>
      <Card>
        <Card.Body>
          <Card.Title>Order ID: {order.id}</Card.Title>
          <Card.Text>
            <strong>Customer:</strong> {order.customer.name}<br />
            <strong>Product:</strong> {order.product.name}<br />
            <strong>Quantity:</strong> {order.quantity}<br />
            <strong>Total Price:</strong> ${order.totalPrice}<br />
            <strong>Status:</strong> {order.status}<br />
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default OrderDetails;