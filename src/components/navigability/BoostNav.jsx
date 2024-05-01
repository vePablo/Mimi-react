import { useState, useEffect } from 'react';
import { Navbar, Container, Nav, NavDropdown, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import CarritoWidget from '../products/carrito/CarritoWidget';
//Firebase
import { auth } from '../../firebase/config';
import { signOut } from 'firebase/auth';
//Toastify
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';


import './Navbar.css'; 

const BoostNav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [usuario, setUsuario] = useState(null);

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

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(usuarioFirebase => {
      setUsuario(usuarioFirebase);
    });

    return () => unsubscribe();
  }, []);
  useEffect(() => {
    if (usuario) {
      toast.success("¡Inicio de sesión exitoso!");
    }
  }, [usuario]);

  const cerrarSesion = async () => {
    try {
      await signOut(auth);
      toast.success('Sesión cerrada exitosamente');
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
      toast.error('Hubo un error al cerrar sesión');
    }
  };
  
  return (
    <Navbar bg={scrolled ? 'light-scrolled' : 'light'} expand="lg" className={scrolled ? 'scrolled' : ''} fixed="top">
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
            {usuario ? (
              <>
                <Nav.Link>{usuario.email}</Nav.Link>
                <Button variant="secondary" onClick={cerrarSesion}>Cerrar sesión</Button>
              </>
            ) : (
              <Nav.Link as={Link} to="/login" className='Nav-login'>Login</Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
      <ToastContainer />
    </Navbar>
  )
}

export default BoostNav;
