import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { FaRegUserCircle } from "react-icons/fa";

const HeaderNavbar = () => {
    return (
        <Navbar expand="lg" data-bs-theme="light">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/about">About</Nav.Link>
                            <Nav.Link href="/career">Career</Nav.Link>
                        </Nav>
                        <Nav className='d-flex align-items-center '>
                            <Nav.Link href="/login"><Button variant=""><FaRegUserCircle size={'2em'}/></Button></Nav.Link>
                            <Nav.Link href="/login">
                                <Button variant="dark">Login</Button>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    );
};

export default HeaderNavbar;