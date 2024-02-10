import React, { useContext } from 'react';
import HeaderNavbar from '../Shared/HeaderNavbar/HeaderNavbar';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';
import { toast,ToastContainer } from 'react-toastify';

const Register = () => {
    const {createUser} = useContext(AuthContext);
   
    
    const handleRegistration = (event) => {
        event.preventDefault();
        const form = new FormData(event.currentTarget);
        
        const name = form.get("name");
        const email = form.get("email");
        const password = form.get("password");
        const photoUrl = form.get("photoUrl");
        createUser(email,password)
        .then(result=>{
            const loggedUser = result.user;
            // console.log(loggedUser.photoURL);
            
            toast(`Welcome ${loggedUser.email} for register Taja News`);
            event.currentTarget.reset();
        })
        .catch((error)=> toast(error.message));

    }

    return (
        <div className='h-100'>
            <div>
                <HeaderNavbar></HeaderNavbar>
                <ToastContainer></ToastContainer>
                <Form onSubmit={handleRegistration} className='w-50 bg-white mx-auto p-4 rounded'>
                    <h1 className='text-center mt-3 mb-5'>Register your account</h1>
                    <Form.Group className="mb-3" controlId="formName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" name="name" className='bg-light' placeholder="Enter name" required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formPhotoUrl">
                        <Form.Label>Photo url</Form.Label>
                        <Form.Control type="text" name="photo_url" className='bg-light' placeholder="Enter Photo url" required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" name="email" className='bg-light' placeholder="Enter email" required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" className='bg-light' placeholder="Password" required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="acceptTerms">
                        <Form.Check type="checkbox" label="Accept terms and conditions" required/>
                    </Form.Group>
                    <Button variant="dark" className="w-100" type="submit">
                        Registration
                    </Button>
                    <p className='text-center mt-2'>Already have an account? <Link to="/login" className='text-info'>Login</Link></p>

                </Form>
            </div>

        </div>
    );
};

export default Register;