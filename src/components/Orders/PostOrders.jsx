import React, { useState } from 'react';
import axios from 'axios';
import { Modal, Button, Form, Container } from 'react-bootstrap';

function CreateOrder() {
    const [customerId, setCustomerId] = useState('');
    const [date, setDate] = useState('');
    const [productIds, setProductIds] = useState('');
    const [modalMessage, setModalMessage] = useState('');
    const [showModal, setShowModal] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('http://127.0.0.1:5000/orders', {
                customer_id: customerId,
                date: date,
                product_id: productIds.split(',').map(id => id.trim())  // Assume productIds is a comma-separated list of product IDs
            });

            setModalMessage('Order created successfully!'); // Set the success message
            setShowModal(true); // Show the modal

            setCustomerId('');
            setDate('');
            setProductIds('');
        } catch (error) {
            setModalMessage('There was an error creating the order!');
            setShowModal(true); // Show the modal on error as well
        }
    };

    const handleClose = () => setShowModal(false);

    return (
        <Container className='col-6'>
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
                    Create Order
                </Button>
            </Form>

            {/* Modal to display success/error messages */}
            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Success!</Modal.Title>
                </Modal.Header>
                <Modal.Body>{modalMessage}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
}

export default CreateOrder;
