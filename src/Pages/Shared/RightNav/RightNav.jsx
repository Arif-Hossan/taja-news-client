import React from 'react';
import { Button } from 'react-bootstrap';
import { FaFacebookF, FaGoogle, FaYoutube, FaInstagram } from "react-icons/fa";
import './RightNav.css';
import Zone from '../Zone/Zone';


const RightNav = () => {
    return (
        <div>
            <h6>Login with</h6>
            <div className='d-flex'>
                <Button variant="outline-secondary" className='me-2'><FaGoogle></FaGoogle></Button>
                <Button variant="outline-primary"><FaFacebookF></FaFacebookF></Button>
            </div>
            <h6 className='mt-5'>Social Media</h6>
            <div className='d-flex'>
                <Button variant="outline-danger" className='me-2' ><FaInstagram></FaInstagram></Button>
                <Button variant="outline-primary" className='me-2'><FaFacebookF></FaFacebookF></Button>
                <Button variant="outline-danger"><FaYoutube></FaYoutube></Button>
            </div>
            <Zone></Zone>
            <div>
                
            </div>
        </div>
    );
};

export default RightNav;