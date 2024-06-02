import React, { useState } from 'react';
import { MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import axios from 'axios';
import '../../src/App.css';
import { useNavigate } from 'react-router-dom';

function UserLogin() {
    const [userId, setUserId] = useState('');
    const [userEmail, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({ userEmail: '', password: ''});

    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        
        // if (!userId) {
        //     setErrors(prevState => ({ ...prevState, userId: 'User ID is required' }));
        //     return;
        // }
        if (!userEmail) {
            setErrors(prevState => ({ ...prevState, userEmail: 'Email is required' }));
            return;
        }
        if (!password) {
            setErrors(prevState => ({ ...prevState, password: 'Password is required' }));
            return;
        }
        try {
            const response = await axios.post(`http://localhost:1211/getUserByEmail`, { userEmail: userEmail, password: password });
            console.log(response.data);
            console.log(userEmail, password);
            if (response.data.userEmail === userEmail && response.data.password === password) {
                alert("Login success");
                console.log('Login successful', response.data);
                sessionStorage.setItem('session', 'userEmail');
                sessionStorage.setItem('user', JSON.stringify(response.data));
                sessionStorage.setItem('uid',response.data.userId);
                console.log('UserID', sessionStorage.getItem('uid'));
                navigate("/UserInformationProvider");
            } else {
                alert("Wrong email or password");
            }
        } catch (error) {
            console.error('Login failed', error);
        }
    };

    return (
        <div className="card" style={{height: "500px",marginBlock:30}}>
            <MDBContainer fluid className="p-3 my-5 h-custom">
                <MDBRow>
                    <MDBCol col='10' md='6'>
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" className="img-fluid" alt="Sample image" style={{ width: "600px" }} />
                    </MDBCol>
                    <MDBCol col='4' md='6' id="two" >
                        <h1 className="text h1 fw-bold mb-5 mx-1 mx-md-4 mt-4" data-testId="loginheader">Login</h1>
                        <div className="InputContainer">
                            <form onSubmit={handleLogin}>
                                <br></br>
                                <br></br>
                                {/* <label>UserID</label>
                                <MDBInput wrapperClass='mb-4' style={{ width: "300px" }} className='form-control' type='number' name ='userId' value={userId} onChange={(e) => setUserId(e.target.value)} />
                                {errors.userId && <p style={{ color: 'red' }}>{errors.userId}</p>} */}
                                <label data-testId="emailaddress">Email Address</label>
                                <MDBInput wrapperClass='mb-4' style={{ width: "300px" }} className='form-control' type='email' name = 'email' value={userEmail} onChange={(e) => setEmail(e.target.value)} />
                                {errors.userEmail && <p style={{ color: 'red' }}>{errors.userEmail}</p>}
                                <label data-testId="password">Password</label>
                                <MDBInput wrapperClass='mb-4' style={{ width: "300px" }} className='form-control' type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                                {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
                                <br></br>
                                <div className='text-md-start mt-4 pt-2'>
                                    <button type="submit" className="btn btn-primary">Login</button>
                                    <p className="small fw-bold mt-2 pt-1 mb-2">Don't have an account? <a href="./UserRegister" className="link-danger">Register</a></p>
                                </div>
                            </form>
                        </div>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </div>
    );
}

export default UserLogin;
