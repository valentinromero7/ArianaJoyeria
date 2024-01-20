import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Carrito from '../carrito/carrito';

function NavBar() {
    return (
        <Navbar collapseOnSelect expand="lg" className="bg-clear">
            <Container>
                <Navbar.Brand href="#home"><img src="../../img/logoAriana.png" className="Logo"/></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">Joyas</Nav.Link>
                        <Nav.Link href="#pricing">Quienes somos?</Nav.Link>
                        <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Ver más</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                            Contactanos
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Ubicación</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                            Politica de privacidad
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                <Nav>
                    <Nav.Link href="#deets">Saber más</Nav.Link>
                    <Nav.Link eventKey={2} href="#memes">Mis compras</Nav.Link>
                    <Nav.Link href="#memes" className="contenedorCarrito"><Carrito/></Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;
