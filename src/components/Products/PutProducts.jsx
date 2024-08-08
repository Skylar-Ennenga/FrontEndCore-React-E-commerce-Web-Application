import React, { useState } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';
import { Form, Button, Container } from 'react-bootstrap';
import NavigationBar from '../MainCom/NavBar';


function ChangeProduct() {
    const { id } = useParams();
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.put(`http://127.0.0.1:5000/products/${id}`, {
                name: productName,
                price: productPrice
            });
            console.log('Product added successfully:', response.data);

            setProductName('');
            setProductPrice('');
        } catch (error) {
            console.error('There was an error adding the product!', error);
        }
    };

    return (
        <>
        <NavigationBar/>
    <Container className='col-md-6 pt-5'>
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
                Submit Change
            </Button>
        </Form>
    </Container>
    </>
    );
}

export default ChangeProduct;