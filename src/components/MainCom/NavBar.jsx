import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import image from "../../assets/Images/logo.webp";

function NavigationBar() {
  return (
    <>

        <Navbar className="navbar navbar-expand-lg bg-body-tertiary">
          <Container className="container-fluid">
            <Navbar.Brand href="/">
              <img
                alt="Site Logo"
                src={image}
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{" "}
              E-Commerce
            </Navbar.Brand>
          </Container >
          <Nav.Link as={NavLink} to="/" className="px-3">
            Home
          </Nav.Link>
          <Nav.Link as={NavLink} to="/products" className="px-3">
            Products
          </Nav.Link>
          <Nav.Link as={NavLink} to="/accounts" className="px-3">
            Account
          </Nav.Link>
          <Nav.Link as={NavLink} to="/orders" className="px-3">
            Orders
          </Nav.Link>
          <Nav.Link as={NavLink} to="/customers" className="px-3">
            Cuctomers
          </Nav.Link>
        </Navbar>

    </>
  );
}

export default NavigationBar;
