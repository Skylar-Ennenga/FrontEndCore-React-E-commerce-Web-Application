import React, { useState } from 'react';
import axios from 'axios';
import { Modal, Button, Form, Container } from 'react-bootstrap';

function CreateProduct() {
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [modalMessage, setModalMessage] = useState('');
    const [showModal, setShowModal] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('http://127.0.0.1:5000/products', {
                name: productName,
                price: productPrice
            });

            setModalMessage('Product added successfully!'); // Set the success message
            setShowModal(true); // Show the modal

            setProductName('');
            setProductPrice('');
        } catch (error) {
            setModalMessage('There was an error adding the product!');
            setShowModal(true); // Show the modal on error as well
        }
    };

    const handleClose = () => setShowModal(false);

    return (
        <>
        <Container className='col-6 pt-5'>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Product Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter product name"
                        value={productName}
                        onChange={(e) => setProductName(e.target.value)}
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Product Price</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="Enter product price"
                        value={productPrice}
                        onChange={(e) => setProductPrice(e.target.value)}
                        required
                        min="0"
                        step="1.00"
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Add Product
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
        </>
    );
}

export default CreateProduct;
