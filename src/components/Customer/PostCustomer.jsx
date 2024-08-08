import React, { useState } from 'react';
import axios from 'axios';
import { Modal, Button, Form, Container } from 'react-bootstrap';

function CreateCustomer() {
    const [customerName, setCustomerName] = useState('');
    const [customerEmail, setCustomerEmail] = useState('');
    const [customerPhone, setCustomerPhone] = useState('');
    const [modalMessage, setModalMessage] = useState('');
    const [showModal, setShowModal] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('http://127.0.0.1:5000/customers', {
                name: customerName,
                email: customerEmail,
                phone: customerPhone
            });

            setModalMessage('Customer created successfully!'); // Set the success message
            setShowModal(true); // Show the modal

            setCustomerName('');
            setCustomerEmail('');
            setCustomerPhone('');
        } catch (error) {
            setModalMessage('There was an error creating the customer!');
            setShowModal(true); // Show the modal on error as well
        }
    };

    const handleClose = () => setShowModal(false);

    return (
        <Container className='col-6 p-5'>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Customer Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter customer name"
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Customer Email</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter customer email"
                        value={customerEmail}
                        onChange={(e) => setCustomerEmail(e.target.value)}
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Customer Phone</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter customer phone"
                        value={customerPhone}
                        onChange={(e) => setCustomerPhone(e.target.value)}
                        required
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Create Customer
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

export default CreateCustomer;

