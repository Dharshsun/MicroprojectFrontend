import React from 'react';
import { useState } from 'react';
import { MDBContainer, MDBCard, MDBCardBody, MDBCol, MDBRow, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register() {
    const [input, setInput] = useState({
        "userName": "",
        "userEmail": "",
        "password": "",
        "confirmPassword": ""
    });
    const [errors, setErrors] = useState({
        "userName": "",
        "userEmail": "",
        "password": "",
        "confirmPassword": ""
    });

    const navigate = useNavigate();

    const inputChange = (e) => {
        console.log("onchange");
        setInput({ ...input, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: "" });
    }

    const handleRegister = async (e) => {
        e.preventDefault();
        let validationErrors = {};
        if (!input.userName) validationErrors.userName = "Name is required";
        if (!input.userEmail) validationErrors.userEmail = "Email is required";
        if (!input.password) validationErrors.password = "Password is required";
        else if (!input.userEmail.includes('@')) validationErrors.userEmail = "Email should contain @";
        if (input.password !== input.confirmPassword) validationErrors.confirmPassword = "Passwords do not match";
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        try {
            console.log(input);
            const response = await axios.post(`http://localhost:1211/UserRegister`, input);
            alert("Registered Successfully");
            navigate("/UserLogin");
            console.log('register successful', response.data);
        } catch (error) {
            console.error('Registration failed', error);
        }
    };

    return (
        <MDBContainer fluid className="p-3 my-5 h-custom">
            <MDBCard className='text-black m-5' style={{ borderRadius: '25px' }}>
                <MDBCardBody>
                    <MDBRow>
                        <MDBCol col='10' md='6'>
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" className="img-fluid" alt="Sample image" style={{ width: "100%" }} />
                        </MDBCol>
                        <MDBCol md='5' lg='3' className='order-2 order-lg-1 d-flex flex-column align-items-center'>
                            <h1 className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</h1>
                            <div className='InputContainer1'>
                                <form onSubmit={handleRegister}>
                                    <div className="d-flex flex-row align-items-center mb-4 ">
                                        <label>Name</label>
                                        <input type='text' className='form-control' name="userName" onChange={inputChange} />
                                        {errors.userName && <p style={{ color: 'red' }}>{errors.userName}</p>}
                                    </div><br></br>
                                    <div className="d-flex flex-row align-items-center mb-4">
                                        <MDBIcon fas icon="envelope me-3" size='lg' />
                                        <label>Email Address</label>
                                        <input className='form-control' type='email' name="userEmail" onChange={inputChange} />
                                        {errors.userEmail && <p style={{ color: 'red' }}>{errors.userEmail}</p>}
                                    </div><br></br>
                                    <div className="d-flex flex-row align-items-center mb-4">
                                        <MDBIcon fas icon="lock me-3" size='lg' />
                                        <label>Password</label>
                                        <input className='form-control' type='password' name="password" onChange={inputChange} />
                                        {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
                                    </div><br></br>
                                    <div className="d-flex flex-row align-items-center mb-4">
                                        <MDBIcon fas icon="lock me-3" size='lg' />
                                        <label>Confirm Password</label>
                                        <input className='form-control' type='password' name="confirmPassword" onChange={inputChange} />
                                        {errors.confirmPassword && <p style={{ color: 'red' }}>{errors.confirmPassword}</p>}
                                    </div><br></br>
                                    <div className='text-md-start mt-4 pt-2'>
                                        <button type="submit" className="btn btn-success">Register</button>
                                        <p className="small fw-bold mt-2 pt-1 mb-2">Already have an account? <a href="./UserLogin" className="link-danger">Sign in</a></p>
                                    </div>
                                </form>
                            </div>
                        </MDBCol>
                    </MDBRow>
                </MDBCardBody>
            </MDBCard><br></br>
        </MDBContainer>
    );
}

export default Register;
