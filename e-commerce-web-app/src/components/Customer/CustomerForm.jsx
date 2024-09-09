import React, { useState } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";

function CustomerForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://127.0.0.1/customers", { name, email, phone })
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
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <input
        type="tel"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Phone"
        required
      />
      <Button type="submit" variant="primary">Create Customer</Button>
    </form>
  );
}

export default CustomerForm;