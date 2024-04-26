import { useState, useEffect } from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from "react-router-dom";

import './Navbar.css'; 
import CarritoWidget from '../products/carrito/CarritoWidget';

const BoostNav = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) { 
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Navbar bg={scrolled ? 'light-scrolled' : 'light'} expand="lg" className={scrolled ? 'scrolled' : ''}fixed="top">
      <Container>
        <Navbar.Brand as={Link} to="/">Soy Mimi</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/item">Productos</Nav.Link>
            <NavDropdown title="Categorías" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/productos/cuadernos">Cuadernos</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/productos/tarjetas">Tarjetas</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/productos/remeras">Remeras</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/contacts">Nosotros</Nav.Link>
            
             <CarritoWidget />
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default BoostNav;
