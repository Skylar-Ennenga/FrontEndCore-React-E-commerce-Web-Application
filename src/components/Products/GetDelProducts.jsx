import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { ListGroup, Button, Container } from "react-bootstrap";

const ProductList = () => {
  const [products, setProducts] = useState([]); 
  const navigate = useNavigate(); 

  // Fetch product function
  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:5000/products'); 
      setProducts(response.data);
    } catch (error)  {
      console.log("Error fetching products:", error);
      // Optionally handle the error state here, e.g., set an error message in state
    }
  }
console.log(products)
  useEffect(() => {
    fetchProducts(); 
  }, [])

    // Delete product function 
    const deleteProduct = async (product_id) => {
        const confirmed = window.confirm("Are you sure you want to delete this product?");
        if (!confirmed) return;
        try {
          await axios.delete(`http://127.0.0.1:5000/products/${product_id}`)
          fetchProducts(); 
        } catch (error) {
          console.log(`Error deleting products ${products}`)
        }
      }

  return (
    <Container className="col-8 pt-5">
      <h3>Products</h3>
      <ListGroup>
        {products.map((product) => (
          <ListGroup.Item key={product.product_id} className="d-flex justify-content-between align-items-center">
            <div>
              <p className="mb-0">
                <strong>{product.name}</strong>: ${product.price}
              </p>
            </div>
            <div>
              <Button variant="outline-primary" className="me-2">
                <Link to={`/product-edit/${product.product_id}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                  Edit
                </Link>
              </Button>
              <Button variant="outline-danger" onClick={() => deleteProduct(product.product_id)}>
                Delete
              </Button>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
        
  );
}

export default ProductList;