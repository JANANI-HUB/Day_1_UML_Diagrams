import React from 'react'
import './Signup.css';
import { useState } from 'react';
import {Link} from 'react-router-dom';
import { Button } from '@mui/material';
export default function Signup() {
  const[name,setName] = useState("");
  const[mail,setMail] = useState("");
  const[password,setPassword] = useState("");
  const[cont,setCont] = useState("");
  
  const handleChange = (e) => {
    e.preventDefault()
    if(mail.length !== 0 && (/^\S+@\S+\.\S+$/).test(mail) && (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=]).{8,}$/).test(password) && password.length >= 8 ){
        window.location.href = "/Homepage";
    }
}
  return (
    <>
    <form>
    <body>
    <div class="background"></div>
    <div class="container">
        <div class="item">
            <h2 class="logo">LiveTix</h2>
            <p class="signup"><br></br><br></br>
                Come for what to love <br></br>
                And stay for what you discover<br></br><br></br><br></br><br></br><br></br>    
                Sign up here to continue......        </p>
        </div>
        <div class="login-section">
            <div class="form-box login">
                <form action="">
                    <h2>Sign Up</h2>
                    <div class="input-box">
                        <input type="text" placeholder='UserName' required   onChange = {e => setName(e.target.value)}/>
                        <div className='signerror'>{name.length===0?"Enter Your Name":""}</div>
                    </div>
                    <div class="input-box">
                        <input type="text" placeholder='City' required   onChange = {e => setCont(e.target.value)}/>
                        <div className='signerror'>{name.length<1?"Enter City":""}</div>
                    </div>
                    <div class="input-box">
                        <input type="tel" minLength="10" pattern="[0-9]{10}" placeholder='Contact-No' required onChange = {e => setCont(e.target.value)}/>
                        <div className='signerror'>{cont.length<10?"Enter Valid Contact No":""}</div>

                    </div>
                    <div class="input-box">
                        <input type="email" placeholder='Email-id' required onChange = {e => setMail(e.target.value)}/>
                        <div className='signerror'>{mail.length === 0 || !((/^\S+@\S+\.\S+$/).test(mail))?"Please enter your valid Email-ID" : ""}</div>

                    </div>
                    <div class="input-box">
                        <input type="password" pattern=" ^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@#$%^&+=]).{8,}$"
                title="Password may only contain letters [ Both Uppercase and LowerCase ] and numbers" placeholder='Password'required  onChange = {e => setPassword(e.target.value)}/>
                    <div className='signerror'>{password.length < 8 || !((/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=]).{8,}$/).test(password)) ?"Please enter valid Password" : ""} </div>
                    </div>
                    <button onClick={handleChange} class="signupbtn">Sign Up</button>
                </form>
            </div>
            </div>
        </div>
    
</body>
</form>
</>
  )
}