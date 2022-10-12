import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import {

    Link,
} from "react-router-dom";


const Header = () => {


    return (

        <div>

            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to='/'>SkyPearl-Edu</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">

                        <Nav className="ms-auto">
                            <Nav.Link as={Link} to='/home'
                            >Home</Nav.Link>
                            <Nav.Link as={Link} to='/topics'>Topics</Nav.Link>
                            <Nav.Link as={Link} to='/statistics'>Statistics</Nav.Link>
                            <Nav.Link as={Link} to='/blog'>Blog</Nav.Link>
                            <Nav.Link as={Link} to='/about'>About Us</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div>

            </div>

        </div>

    );
};

export default Header;