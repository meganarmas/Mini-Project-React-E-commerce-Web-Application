import React, { useState } from 'react';
import axios from 'axios';

function CreateProductForm() {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
  
    const handleSubmit = (e) => {
      e.preventDefault();
      axios
        .post("http://127.0.0.1:5000/api/customers", { name, price })
        .then((response) => {
          alert("Customer created successfully!");
        })
        .catch((error) => {
          console.error("There was an error creating the customer!", error);
        });
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          required
        />
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Price of item"
          required
        />
        <button type="submit" variant="primary">Add Product</button>
      </form>
    );
  }

export default CreateProductForm;