import React from 'react';
import Header from '../Pages/Shared/Header/Header';
import Footer from '../Pages/Shared/Footer/Footer';
import { Outlet } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import RightNav from '../Pages/Shared/RightNav/RightNav';
import LeftNav from '../Pages/Shared/LeftNav/LeftNav';

const NewsLayout = () => {
    return (
        <div>
             <Header></Header>
            <Container>
                <Row>
                    <Col lg={9}><h2><Outlet></Outlet></h2></Col>
                    <Col lg={3}><RightNav></RightNav></Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default NewsLayout;