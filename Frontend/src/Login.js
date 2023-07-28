import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Login() {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleChange = async (e) => {
    e.preventDefault();

    
    if (
      mail.length !== 0 &&
      (/^\S+@\S+\.\S+$/).test(mail) &&
      (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=]).{8,}$/).test(password) && 
      password.length >= 8
    ) {
      try {
        
        const response = await axios.post('http://localhost:8181/api/v1/auth/authenticate', {
          email: mail,
          password: password,
        });

        if (response.status === 200) {
          
          navigate('/Homepage'); 
          let token = response.data.token;
          let user = response.data.userResponse;
          localStorage.setItem('token', token);
          localStorage.setItem('user', JSON.stringify(user));
        } else {
          console.log('Invalid credentials. Please try again.');
        }
      } catch (error) {
        console.error('Error during login:', error);
      }
    }
  };

  return (
    <>
      <form>
        <body>
          <header className="header"></header>

          <div className="background1"></div>
          <div className="container1">
            <div className="item">
              <h2 className="logo">LiveTix</h2>
              <div className="text-item">
                <h2>Welcome Back!<span></span></h2>
                <p>The faster you fill up, the faster you get a ticket.........</p>
              </div>
            </div>
            <div className="login-section">
              <div className="form-box login">
                <form action="">
                  <h2>Log In</h2>

                  <div className="input-box">
                    <input type="email" placeholder='Email-id' style={{ color: "white" }} required onChange={e => setMail(e.target.value)} />
                    <div className='error'> {mail.length === 0 || !((/^\S+@\S+\.\S+$/).test(mail)) ? "Please enter your valid Email-ID" : ""}</div>
                  </div>
                  <div className="input-box">
                    <input type="password" style={{ color: "white" }} pattern="^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@#$%^&+=]).{8,}$"
                      title="Password must contain letters [ Both Uppercase and LowerCase ] and numbers and one special character" placeholder='Password' required onChange={e => setPassword(e.target.value)} />
                    <div className='error'>{password.length < 8 || !((/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=]).{8,}$/).test(password)) ? "Please enter valid Password" : ""} </div>
                  </div>
                  <button onClick={handleChange} className="loginbtn">Log In</button>
                  <div className="create-account">
                    <p>Don't have an Account? <Link to="/signup">Sign Up</Link> </p>
                  </div>
                </form>
              </div>
            </div>
          </div>

        </body>
      </form>
    </>
  )
}
