import React from 'react';
import logo from '../../../assets/logo.png';
import moment from 'moment';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
import './Header.css';
import { FaRegUserCircle } from "react-icons/fa";

const Header = () => {
    return (
        <Container>
            <div className='text-center'>
                <img src={logo} className='logo' alt="taja_news_logo" />
                <p className='text-secondary'>Travel Without Fear and Courage</p>
                <h6 style={{ color: "#3f557a" }}>{moment().format("dddd, MMMM, YYYY, h:mm a ")}</h6>
            </div>
            <div className='d-flex animated-news-container'>
                <Button className='latest-btn' variant="danger">Latest</Button>
                <Marquee className='animated-text' pauseOnHover={true} speed={80}>
                    The places you can (and can’t) visit in 2024....All aboard the adventure! Asia's scenic railway routes for every traveller.... 7 must-see university campuses for students and tourists
                </Marquee>
            </div>
            <Navbar expand="lg" data-bs-theme="light">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#about">About</Nav.Link>
                            <Nav.Link href="#career">Career</Nav.Link>
                        </Nav>
                        <Nav className='d-flex align-items-center '>
                            <Nav.Link><Button variant=""><FaRegUserCircle size={'2em'}/></Button></Nav.Link>
                            <Nav.Link>
                                <Button variant="dark">Login</Button>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default Header;