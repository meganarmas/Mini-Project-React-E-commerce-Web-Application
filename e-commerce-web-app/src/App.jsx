import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import OrderDetails from './components/Order/OrderDetails';
import CreateProductForm from './components/Product/CreateProductForm';
import DeleteProduct from './components/Product/DeleteProduct';
import UpdateProductForm from './components/Product/UpdateProductForm';
import DeleteCustomer from './components/Customer/DeleteCustomer';
import CustomerForm from './components/Customer/CustomerForm';
import CustomerDetail from './components/Customer/CustomerDetails';
import './App.css'

function App() {
  return (
    <div>
      <NavigationBar />
      
          <Routes>
          <Route path="/add-customer" element={<CustomerForm />} />
          <Route path="add-customer-list" element={<CustomerDetail />} />
          <Route path="delete-customer" element={<DeleteCustomer />} />
          <Route path="add-product" element={<CreateProductForm />} />
          <Route path="/update-product" element={<UpdateProductForm />} />
          <Route path="/delete-product" element={<DeleteProduct />} />
          <Route path="/order-details" element={<OrderDetails />} />
        </Routes>
      </div>
  );
}


export default App;
