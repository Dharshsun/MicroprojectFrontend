import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

function AdminLogin() {
  const [adminId, setAdminId] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    // Validation
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // Email should have @ and .com

    

    if (!email.match(emailPattern)) {
      alert("Email should have @ and .com");
      return;
    }

    if (password === '') {
      alert("Password should not be empty");
      return;
    }

    try {
      const response = await axios.post(`http://localhost:1211/getAdminByEmail`, { email: email, password: password });
      console.log(response.data)
      if (response.data.email === email && response.data.password === password) {
        alert("Login success")
        console.log('Login successful', response.data);
        navigate("/AdminDashboard")
      }
      else {
        alert("Wrong username or password");
      }
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  return (
    <div>
      <h1 className='adminheader' data-testId="adminHeader">Admin Portal Login</h1>
      <div className="container d-flex justify-content-center align-items-center" style={{ height: '90vh', marginLeft: '380px', marginTop: '50px' }}>
        <div className="row">
          <div className="col-md-4 offset-md-4">
            <div className="card mt-5 " style={{ border: '0.5px solid black', width: '500px', boxShadow: '5px 5px 5px  black', borderRadius: '8px' }}>
              <div style={{ padding: '20px' }}>
                <div className="card-header">
                  <h2>Login</h2>
                </div>
                <div className="card-body">
                  <form onSubmit={handleLogin}>
                    
                    <div className="form-outline mb-3">
                      <label>Email:</label>
                      <input
                      data-testid="emailplaceholder"
                        type="text"
                        className="form-control"
                        placeholder="Enter Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="form-outline mb-3" style={{ width: '2290px' }}>
                      <label>Password</label>
                      <div className="input-group">
                        <input
                         data-testid="passwordplaceholder"
                          type={showPassword ? "text" : "password"}
                          className="form-control"
                          placeholder="Enter password"
                          required
                          onChange={(e) => setPassword(e.target.value)}
                          style={{ paddingRight: "280px" }}
                        />
                        <button
                          type="button"
                          className="btn btn-outline-secondary"
                          onClick={() => setShowPassword(!showPassword)}
                          style={{
                            position: "absolute",
                            backgroundColor: "transparent",
                            border: "none",
                            right: "10px",
                            top: "50%",
                            transform: "translateY(-50%)",
                            zIndex: "100"
                          }}
                        >
                          {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                      </div>
                    </div><br></br>

                    <button type="submit" className="btn btn-primary">
                      Login
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;
