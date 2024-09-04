import { Link } from "react-router-dom";
import { Navbar, Nav} from "react-bootstrap";
import React from "react";

function NavigationBar() {

    return(
        <Navbar className="nav" expand="lg">
            <Navbar.Brand as={Link} to="/add-customer">Add Customer</Navbar.Brand> <br />
            <Navbar.Brand as={Link} to="/add-customer-list">Customer Details</Navbar.Brand> <br />
            <Navbar.Brand as={Link} to="/delete-customer">Delete Customer</Navbar.Brand> <br />
            <Navbar.Brand as={Link} to="/add-product">Add Product</Navbar.Brand> <br />
            <Navbar.Brand as={Link}k to="/update-product">Update Product</Navbar.Brand> <br />
            <Navbar.Brand as={Link} to="/delete-product">Delete Customer</Navbar.Brand> <br />
            <Navbar.Brand as={Link} to="/order-details">Order Details</Navbar.Brand> <br />
        </Navbar>
    );
}

export default NavigationBar;