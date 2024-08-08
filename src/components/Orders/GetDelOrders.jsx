import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { ListGroup, Button, Container } from "react-bootstrap";

const OrderList = () => {
  const [orders, setOrders] = useState([]); 

  // Fetch orders function
  const fetchOrders = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:5000/orders'); 
      setOrders(response.data);
    } catch (error)  {
      console.log("Error fetching orders:", error);
    }
  }

  useEffect(() => {
    fetchOrders(); 
  }, [])

  // Delete order function 
  const deleteOrder = async (order_id) => {
    const confirmed = window.confirm("Are you sure you want to delete this order?");
    if (!confirmed) return;
    try {
      await axios.delete(`http://127.0.0.1:5000/orders/${order_id}`)
      fetchOrders(); 
    } catch (error) {
      console.log(`Error deleting order ${order_id}:`, error);
    }
  }

  return (
    <Container className="col-8 p-5">

      <h3>Orders</h3>
      <ListGroup>
        {orders.map((order) => (
          <ListGroup.Item key={order.order_id} className="d-flex justify-content-between align-items-center">
            <div>
              <p className="mb-0">
                <strong>Order ID: {order.order_id}</strong>, Date: {order.date}
              </p>
            </div>
            <div>
              <Button variant="outline-primary" className="me-2">
                <Link to={`/order-edit/${order.order_id}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                  Details
                </Link>
              </Button>
              <Button variant="outline-danger" onClick={() => deleteOrder(order.order_id)}>
                Delete
              </Button>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>

    </Container>
  );
}

export default OrderList;

