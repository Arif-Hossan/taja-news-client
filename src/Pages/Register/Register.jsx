import React, { useContext, useState } from 'react';
import HeaderNavbar from '../Shared/HeaderNavbar/HeaderNavbar';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';
import { toast, ToastContainer } from 'react-toastify';
import { sendEmailVerification } from 'firebase/auth'; 
import { FaEye ,FaEyeSlash } from "react-icons/fa";
const Register = () => {
    const { createUser } = useContext(AuthContext);
    const [registrationError, setRegistrationError] = useState("");
    const [showPassword,setShowPassword] = useState(false);

    const handleRegistration = (event) => {
        event.preventDefault();

        const form = new FormData(event.currentTarget);
        const name = form.get("name");
        const email = form.get("email");
        const password = form.get("password");
        const retypePassword = form.get('retypePassword');
        const photoUrl = form.get("photoUrl");
        const terms = form.get('terms');
        // console.log(terms);
        //clear error 
        setRegistrationError('');
        // console.log(password.length);
        // password validation
        if (password.length < 6) {
            toast("Please enter 6 character password");
            return;
        }
        // match the password with retype password
        if(password !== retypePassword){
            toast("Please enter the same password");
            return;
        }
        // accept terms condition
        if (!terms) {
            toast("Please accept our terms and condition");
            return;
        }

        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                // event.currentTarget.reset();
                toast("User created successfully");
                sendEmailVerification(loggedUser)
                    .then(() => {
                        toast('Please check your email')
                    })
                // clear the form
                event.target.reset();
            })

       

   
            .catch ((error) => toast(error.message));
    };

return (
    <div className='h-100'>
        <div>
            <HeaderNavbar></HeaderNavbar>
            <ToastContainer></ToastContainer>
            <Form onSubmit={handleRegistration} className='w-50 bg-white mx-auto p-4 rounded'>
                <h1 className='text-center mt-3 mb-5'>Register your account</h1>
                <Form.Group className="mb-3" controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name="name" className='bg-light' placeholder="Enter name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPhotoUrl">
                    <Form.Label>Photo url</Form.Label>
                    <Form.Control type="text" name="photo_url" className='bg-light' placeholder="Enter Photo url" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name="email" className='bg-light' placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3 position-relative" controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type={showPassword ? "text" : "password"} name="password" className='bg-light' placeholder="Password" required />
                    <span className='position-absolute top-50 end-0 pe-2' onClick={()=>setShowPassword(!showPassword)}>{
                        showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                    }
                    </span>
                </Form.Group>
                <Form.Group className="mb-3 position-relative" controlId="formResetPassword">
                    <Form.Label>Retype Password</Form.Label>
                    <Form.Control type={showPassword ? "text" : "password"} name="retypePassword" className='bg-light' placeholder="Retype Password" required />
                    <span className='position-absolute top-50 end-0 pe-2' onClick={()=>setShowPassword(!showPassword)}>{
                        showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                    }
                    </span>
                </Form.Group>
                <Form.Group className="mb-3" controlId="terms">
                    <Form.Check type="checkbox" label="Accept terms and conditions" name='terms' />
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
