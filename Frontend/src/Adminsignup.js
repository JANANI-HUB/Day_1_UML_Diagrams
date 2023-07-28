import React, { useState } from 'react';
import './Signup.css';
import {useNavigate } from 'react-router-dom';

export default function Signup() {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleChange = async (e) => {
    e.preventDefault();

   
    if (mail.length !== 0 && (/^\S+@\S+\.\S+$/).test(mail) && (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=]).{8,}$/).test(password) && password.length >= 8) {
      const registrationData = {
        name: name,
        email: mail,
        password: password
      };

      try {
        const response = await fetch('http://localhost:8181/api/v1/auth/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(registrationData),
        });

        if (response.ok) {
            navigate('/Adminlogin'); 
            window.location.reload();
          } 
        else {
          console.log('Registration failed. Please try again.');
        }
      } catch (error) {
        console.error('Error during registration:', error);
      }
    } else {
      console.log('Please fill in all the required fields');
    }
  };

  return (
    <>
      <form>
        <body>
          <div className="background"></div>
          <div className="container">
            <div className="item">
              <h2 className="logo">LiveTix</h2>
              <p className="signup">
                <br /><br />
                Come for what you love <br />
                And stay for what you discover<br /><br /><br /><br /><br /><br />
                Sign up here to continue......
              </p>
            </div>
            <div className="login-section">
              <div className="form-box login">
                <form>
                  <h2>Sign Up</h2>
                  <div className="input-box">
                    <input type="text" placeholder='UserName' required onChange={e => setName(e.target.value)} />
                    <div className='signerror'>{name.length === 0 ? "Enter Your Name" : ""}</div>
                  </div>
                  <div className="input-box">
                    <input type="email" placeholder='Email-id' required onChange={e => setMail(e.target.value)} />
                    <div className='signerror'>{mail.length === 0 || !((/^\S+@\S+\.\S+$/).test(mail)) ? "Please enter your valid Email-ID" : ""}</div>

                  </div>
                  <div className="input-box">
                    <input type="password" pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=]).{8,}$"
                      title="Password may only contain letters [ Both Uppercase and LowerCase ] and numbers" placeholder='Password' required onChange={e => setPassword(e.target.value)} />
                    <div className='signerror'>{password.length < 8 || !((/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=]).{8,}$/).test(password)) ? "Please enter valid Password" : ""} </div>
                  </div>
                  <button onClick={handleChange} className="signupbtn">Sign Up</button>
                </form>
              </div>
            </div>
          </div>

        </body>
      </form>
    </>
  )
}
