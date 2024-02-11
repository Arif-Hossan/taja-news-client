import React, { useContext, useState } from 'react';
import Header from '../Shared/Header/Header';
import HeaderNavbar from '../Shared/HeaderNavbar/HeaderNavbar';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';
import { ToastContainer, toast } from 'react-toastify';
import { FaEye ,FaEyeSlash } from "react-icons/fa";
const Login = () => {
    const {logIn} = useContext(AuthContext);
    const [showPassword,setShowPassword] = useState(false);
    const handleLogin = (event) => {
        event.preventDefault();
        // const form = event.target;
        // console.log(form); 
        // const email= email.value;
        // console.log(email); 
        const form = new FormData(event.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email,password);
        logIn(email,password)
        .then(result=>{
            const loggedUser = result.user;
            console.log(loggedUser);
            toast(`Welcome ${loggedUser.email} for Login`)
        })
        .catch(error=>{
            console.log(error.message);
        })

        
        
    };
    
    
    return (
        <div className='h-100'>
            <div>
                <HeaderNavbar></HeaderNavbar>
                <ToastContainer></ToastContainer>
                <Form onSubmit={handleLogin} className='w-50 bg-white mx-auto p-4 rounded'>
                <h1 className='text-center mt-3 mb-5'>Log in your account</h1>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name="email" className='bg-light' placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3 position-relative" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type={showPassword ? "text" : "password"} name="password" className='bg-light' placeholder="Password" />
                       
                        <span className='position-absolute top-50 end-0 pe-2' onClick={()=>setShowPassword(!showPassword)}>
                            {showPassword ? <span><FaEyeSlash></FaEyeSlash></span>:<span><FaEye></FaEye></span>}
                    </span>
                        
                        
                    </Form.Group>
                   

                    <Button variant="dark" className="w-100" type="submit">
                        Login
                    </Button>
                    <p className='text-center mt-2'>Don't have an account? <Link to="/register" className='text-danger'>Register</Link></p>

                </Form>
            </div>

        </div>
    );
};

export default Login;