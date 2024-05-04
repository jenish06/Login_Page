import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { NavLink } from "react-router-dom";


const Header = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Nav className="me-auto">
                        <NavLink to="/" style={{ color: "white",textDecoration: 'none', marginRight: "14px"}}>Sign Up</NavLink>
                        <NavLink to="/login" style={{ color: "white",textDecoration: 'none'  }}>LogIn</NavLink>
                    </Nav>
                </Container>
            </Navbar></>
    )
}

export default Header;

