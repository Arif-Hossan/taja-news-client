import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar, ToastContainer } from 'react-bootstrap';
import { FaRegUserCircle } from "react-icons/fa";
import { AuthContext } from '../../../providers/AuthProviders';
import { toast } from 'react-toastify';

const HeaderNavbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut();
        toast("Logged out successfully")
    }
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
                        <Nav.Link href="/login"><Button variant=""><FaRegUserCircle size={'2em'} /></Button></Nav.Link>
                        {
                            user ?
                               
                                    <Button onClick={handleLogOut} variant="dark">Logout</Button>
                                :
                                <Nav.Link href="/login">
                                    <Button variant="dark">Login</Button>
                                </Nav.Link>

                        }


                        {/* {user ? <span className=''>{user.email} <Button variant="dark" onClick={handleLogOut}> logout</Button></span> : <Nav.Link href="/login">
                            <Button variant="dark">Login</Button>
                        </Nav.Link>} */}

                    </Nav>
                </Navbar.Collapse>
            </Container>
            <ToastContainer></ToastContainer>
        </Navbar>
    );
};

export default HeaderNavbar;