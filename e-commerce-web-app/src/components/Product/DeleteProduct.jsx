import React, { useState, useEffect} from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';

function DeleteProduct () {
        const [id, setId] = useState("");

      
        const handleDelete = (e) => {
          e.preventDefault();
          axios
            .delete(`http://127.0.0.1:5000/products/${id}`)
            .then((response) => {
              alert("Product deleted successfully.");
            })
            .catch((error) => {
              console.error("Error in deleting product:", error);
            });
        };
    
    
        return (
            <div>
              <h1 style={{color: 'darkslategray', fontFamily: 'Arial'}}>Delete Product from Catalog</h1>
                 <input
                type="text"
                value={id}
                onChange={(e) => setId(e.target.value)}
                placeholder="Product ID"
                required
              />
              <button onClick={handleDelete}>Delete Product</button>
              </div>
          );
        }

export default DeleteProduct;