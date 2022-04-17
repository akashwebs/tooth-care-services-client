import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../Assets/images/logo.png'
import './Header.css'

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" className='navbar' variant="light">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img className='nav-logo' src={logo} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                       
                        
                    </Nav>
                    <Nav>
                       
                        <Nav.Link as={Link} to='home'>
                            Home
                        </Nav.Link>
                        <Nav.Link as={Link} to='services'>
                            Services
                        </Nav.Link>
                        <Nav.Link as={Link} to='about'>
                            About
                        </Nav.Link>
                        <Nav.Link as={Link} to='login'>
                            Login
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;