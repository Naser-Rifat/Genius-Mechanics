import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { NavHashLink } from 'react-router-hash-link';


const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
                <Container>
                    <Navbar.Brand href="#home">G Mechanics</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">

                        <Nav.Link as={NavHashLink} to="/home#home" className="text-white">Home</Nav.Link>
                        <Nav.Link as={NavHashLink} to="/home#services" className="text-white">Services</Nav.Link>
                        <Nav.Link as={NavHashLink} to="/home#experts" className="text-white">Experts</Nav.Link>
                        <Nav.Link as={NavHashLink} to="/addservice" className="text-white">Add services</Nav.Link>
                        <Nav.Link as={NavHashLink} to="/manageservice" className="text-white">Manage Service</Nav.Link>

                        {
                            user?.email ? <button onClick={logOut} className="btn btn-warning">Logout </button> :
                                <Nav.Link as={Link} to="/login" className="text-white">Login</Nav.Link>
                        }

                        <Navbar.Text className="ms-2"> <a href="#login">{user?.displayName && user?.displayName}</a>

                        </Navbar.Text>
                    </Navbar.Collapse>
                    <Nav className="me-auto">

                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;