import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Card } from "react-bootstrap";

const OrderDetails = () => {
    const {id} = useState("");
    const [order, setOrder] = useState(null);

    useEffect(() => {
        fetchOrderDetails();
    }, {id});

    const fetchOrderDetails = async () => {
        try {
            const response = await axios.get(`http://localhost:127.0.0.1/orders${id}`);
            setOrder(response.data);
        } catch (error){
            console.log("Error fetching order details:", error);
        }
    };


    if (!order) {
        return <div>Finding details...</div>;
    }

    return(
        <Container className="order-detail">
            <h2>Order Details</h2>
            <Card>
                <Card.Body>
                    <Card.Title>Order ID: {order.id}</Card.Title>
                    <Card.Text>
                        <strong>Customer:</strong> {order.customer.name}
                        <strong>Product:</strong> {order.product.name}
                        <strong>Price:</strong> {order.total_price}
                        <strong>Status:</strong> {order.status}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    );
};


export default OrderDetails;