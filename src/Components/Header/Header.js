import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../logo.png";
const Header = () => {
  return (
    <div className="App sticky-top">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img className="img-fluid" src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/blogs">
                Blogs
              </Nav.Link>
              <Nav.Link as={Link} to="/inventory">
                Inventory
              </Nav.Link>
              <Nav.Link as={Link} to="/myproduct">
                MyProducts
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#login">Login</Nav.Link>
              <Nav.Link href="#register">Register</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
