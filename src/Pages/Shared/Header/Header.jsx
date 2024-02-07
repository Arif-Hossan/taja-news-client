import React from 'react';
import logo from '../../../assets/logo.png';
import moment from 'moment';
import { Button, Container } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
import './Header.css';
import HeaderNavbar from '../HeaderNavbar/HeaderNavbar';

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
            <HeaderNavbar></HeaderNavbar>
        </Container>
    );
};

export default Header;