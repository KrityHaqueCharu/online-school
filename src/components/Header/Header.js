import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar,Nav } from 'react-bootstrap';

const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt=""/>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">Home</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#features">courses</Nav.Link>
      <Nav.Link href="#pricing">tag</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
        </div>
    );
};

export default Header;