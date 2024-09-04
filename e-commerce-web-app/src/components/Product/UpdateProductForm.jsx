
import React, { useState } from 'react';
import axios from 'axios';

function UpdateProduct() {
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
  
    const handleSubmit = (e) => {
      e.preventDefault();
      axios
        .put(`http://127.0.0.1:5000/api/products/${id}`, { name, price })
        .then((response) => {
          alert("Product update successfully!");
        })
        .catch((error) => {
          console.error("There was an error updating product", error);
        });
    };


    return (
        <form onSubmit={handleSubmit}>
             <input
            type="text"
            value={id}
            onChange={(e) => setId(e.target.value)}
            placeholder="Product ID"
            required
          />
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
            placeholder="Price of product"
            required
          />
          <button type="submit" variant="primary">Update Product</button>
        </form>
      );
    }

export default UpdateProduct;