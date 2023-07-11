import React from 'react'
import './Signup.css';
import { Link } from 'react-router-dom';
function SignUp() {
  return (
    <body>
    
    <div class="background"></div>
    <div class="container">
        <div class="item">
            <h2 class="logo"><i class='bx bxl-xing'></i>LiveTix</h2>
            <p class ="signup"><br></br><br></br>
            Come for what to love <br></br>
            And stay for what you discover<br></br><br></br><br></br><br></br><br></br>
            Sign up here to continue........
            </p>
        </div>
        <div class="login-section">
            <div class="form-box login">
                <form action="">
                    <h2>Sign Up</h2>
                    <div class="input-box">
                        <span class="icon"><i class='bx bxs-envelope'></i></span>
                        <input type="text" placeholder='Name' required/>
                    </div>
                    <div class="input-box">
                        <span class="icon"><i class='bx bxs-envelope'></i></span>
                        <input type="email" placeholder='Email' required/>
                    </div>
                    <div class="input-box">
                        <span class="icon"><i class='bx bxs-lock-alt' ></i></span>
                        <input type="password" placeholder='Password'required/>
                    </div>
                    <div class="input-box">
                        <span class="icon"><i class='bx bxs-envelope'></i></span>
                        <input type="date" placeholder='DOB' required/>
                    </div>
                    <div class="input-box">
                        <span class="icon"><i class='bx bxs-envelope'></i></span>
                        <input type="text" placeholder='Gender' required/>
                    </div>
                    
                    <Link to="/Homepage"><button class="btn">Sign Up</button></Link>
                </form>
            </div>
            
                   
               
            </div>
        </div>
    
</body>
    
  )
}

export default SignUp