import React from 'react';
import { Button } from 'react-bootstrap';
import { FaFacebookF, FaGoogle, FaYoutube, FaInstagram } from "react-icons/fa";
import './RightNav.css';
import Zone from '../Zone/Zone';
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from '../../../firebase/firebase.config';
const provider = new GoogleAuthProvider();
const auth = getAuth(app);

const RightNav = () => {
    const handleGoogle = (event) => {
        signInWithPopup(auth,provider)
        .then(result=>{
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            console.log(token);
            const user = result.user;
            console.log(user);
        })
        .catch(error =>console.log(error.message))
    }
    return (
        <div>
            <h6>Login with</h6>
            <div className='d-flex'>
                <Button onClick={handleGoogle} variant="outline-secondary" className='me-2'><FaGoogle></FaGoogle></Button>
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