import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { ListGroup, Button, Container } from "react-bootstrap";

const CustomerList = () => {
  const [customers, setCustomers] = useState([]); 

  // Fetch customers function
  const fetchCustomers = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:5000/customers'); 
      setCustomers(response.data);
    } catch (error)  {
      console.log("Error fetching customers:", error);
    }
  }

  useEffect(() => {
    fetchCustomers(); 
  }, [])

  // Delete customer function 
  const deleteCustomer = async (customer_id) => {
    const confirmed = window.confirm("Are you sure you want to delete this customer?");
    if (!confirmed) return;
    try {
      await axios.delete(`http://127.0.0.1:5000/customers/${customer_id}`)
      fetchCustomers(); 
    } catch (error) {
      console.log(`Error deleting customer ${customer_id}:`, error);
    }
  }

  return (
    <Container className="customer-list col-8 p-5">
      <h3>Customers</h3>
      <ListGroup>
        {customers.map((customer) => (
          <ListGroup.Item key={customer.customer_id} className="d-flex justify-content-between align-items-center">
            <div>
              <p className="mb-0">
                <strong>ID:</strong> {customer.customer_id}  <strong>Name:</strong> {customer.name} <strong>Email:</strong> {customer.email} <strong>Phone: </strong> {customer.phone}
              </p>
            </div>
            <div>
              <Button variant="outline-primary" className="me-2">
                <Link to={`/customer-edit/${customer.customer_id}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                  Details
                </Link>
              </Button>
              <Button variant="outline-danger" onClick={() => deleteCustomer(customer.customer_id)}>
                Delete
              </Button>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
}

export default CustomerList;

