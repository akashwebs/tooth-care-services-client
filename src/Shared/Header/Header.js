import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import logo from '../../Assets/images/logo.png'
import auth from '../../Firebase/firebase.init';
import './Header.css'

const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    return (
        <Navbar sticky='top' collapseOnSelect expand="lg" className='navbar' variant="light">
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
                        <Nav.Link href='home#services'>
                            Services
                        </Nav.Link>
                        <Nav.Link as={Link} to='blog'>
                            Blog
                        </Nav.Link>
                        <Nav.Link as={Link} to='about'>
                            About
                        </Nav.Link>
                        {
                            user ?
                                <button className='btn btn-link text-decoration-none' onClick={()=>signOut(auth)}>Log Out</button>
                                :
                                <Nav.Link as={Link} to='login'>
                                    Login
                                </Nav.Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;