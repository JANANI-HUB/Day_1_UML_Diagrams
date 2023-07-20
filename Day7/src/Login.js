import React from 'react'
import './Login.css';
import { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
export default function Login() {
  const[name,setName] = useState("");
  const[mail,setMail] = useState("");
  const[password,setPassword] = useState("");
  
  const navigate=useNavigate();
  const handleChange = (e) => {
      e.preventDefault()
      if(mail.length !== 0 && (/^\S+@\S+\.\S+$/).test(mail) && (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=]).{8,}$/).test(password) && password.length >= 8 ){
          navigate('/Homepage')
      }
     
  }
  return (
    <>
    <form>
    <body>
   <header class="header">
   </header>
    
    <div class="background1"></div>
    <div class="container1">
        <div class="item">
            <h2 class="logo">LiveTix</h2>
            <div class="text-item">
                <h2>Welcome Back!<span></span></h2>
                <p>The faster you fill up,the faster you get ticket.........</p>
            </div>
        </div>
        <div class="login-section">
            <div class="form-box login">
                <form action="">
                    <h2>Log In</h2>
                    <div class="input-box">
                        <input type="text" placeholder='UserName' required  style={{color:"white"}} onChange = {e => setName(e.target.value)}/>
                        <div className='error'>{name.length===0?"Enter Your Name":""}</div>
                    </div>

                    <div class="input-box">
                        <input type="email" placeholder='Email-id'style={{color:"white"}}  required onChange = {e => setMail(e.target.value)}/>
                        <div className='error'> {mail.length === 0 || !((/^\S+@\S+\.\S+$/).test(mail))?"Please enter your valid Email-ID" : ""}</div>

                    </div>
                    <div class="input-box">
                        <input type="password" style={{color:"white"}}  pattern="^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@#$%^&+=]).{8,}$" 
                title="Password must contain letters [ Both Uppercase and LowerCase ] and numbers and one special character" placeholder='Password'required  onChange = {e => setPassword(e.target.value)}/>
                    <div className='error'>{password.length < 8 || !((/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=]).{8,}$/).test(password)) ?"Please enter valid Password" : ""} </div>
                    </div>
                    <button onClick={handleChange} class="loginbtn">Log In</button>
                    <div class="create-account">
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