import React, { useState, useEffect} from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';


function DeleteCustomer () {
    const [id, setId] = useState('');

    const handleDelete = (e) => {
        e.preventDefault();
        axios
          .delete(`http://127.0.0.1:5000/customers/${id}`)
          .then((response) => {
            alert("Customer deleted successfully.");
          })
          .catch((error) => {
            console.error("Error in deleting customer information:", error);
          });
      };
  
  
      return (
          <div>
               <input
              type="text"
              value={id}
              onChange={(e) => setId(e.target.value)}
              placeholder="Customer ID"
              required
            />
            <button onClick={handleDelete}>Delete Customer</button>
            </div>
        );
      }

export default DeleteCustomer;