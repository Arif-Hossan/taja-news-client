import React from 'react';
import HeaderNavbar from '../Shared/HeaderNavbar/HeaderNavbar';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='vh-100'>
            <div>
                <HeaderNavbar></HeaderNavbar>

                <Form className='w-50 bg-white mx-auto p-4 rounded'>
                    <h1 className='text-center mt-3 mb-5'>Register your account</h1>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" name="name" className='bg-light' placeholder="Enter name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Photo url</Form.Label>
                        <Form.Control type="text" name="photo_url" className='bg-light' placeholder="Enter Photo url" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" name="email" className='bg-light' placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" className='bg-light' placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="acceptTerms">
                        <Form.Check type="checkbox" label="Accept terms and conditions" />
                    </Form.Group>
                    <Button variant="dark" className="w-100" type="submit">
                        Login
                    </Button>
                    <p className='text-center mt-2'>Already have an account? <Link to="/login" className='text-info'>Login</Link></p>

                </Form>
            </div>

        </div>
    );
};

export default Register;