import React, { useState } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';
import { Form, Button, Container } from 'react-bootstrap';
import NavigationBar from '../MainCom/NavBar';

function ChangeOrder() {
    const { id } = useParams();
    const [customerId, setCustomerId] = useState('');
    const [date, setDate] = useState('');
    const [productIds, setProductIds] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.put(`http://127.0.0.1:5000/orders/${id}`, {
                customer_id: customerId,
                date: date,
                product_id: productIds.split(',').map(id => id.trim())  // Assume productIds is a comma-separated list of product IDs
            });
            console.log('Order updated successfully:', response.data);

            setCustomerId('');
            setDate('');
            setProductIds('');
        } catch (error) {
            console.error('There was an error updating the order!', error);
        }
    };

    return (
        <>
        <NavigationBar/>
        <Container className='col-6 pt-5'>
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
                <Form.Label>Customer ID</Form.Label>
                <Form.Control
                    type="number"
                    placeholder="Enter customer ID"
                    value={customerId}
                    onChange={(e) => setCustomerId(e.target.value)}
                    required
                />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Order Date</Form.Label>
                <Form.Control
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Product IDs (comma-separated)</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter product IDs"
                    value={productIds}
                    onChange={(e) => setProductIds(e.target.value)}
                    required
                />
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit Change
            </Button>
        </Form>
        </Container>
     </>
    );
}

export default ChangeOrder;
