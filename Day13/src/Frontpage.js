import React from 'react';
import './Frontpage.css';
import { Link } from 'react-router-dom';

function Frontpage() {
  return (
    <body>
    <div class="frontbackground">
    <div class="intro"> 
    <h1>Welcome to LiveTix!<img src="https://ugokawaii.com/wp-content/uploads/2022/11/handshake-1024x1024.gif" class="wel"></img></h1>
    <center>
      <h2 class="tic">Get the tickets Now or Never</h2><br></br>
      <h2 class="glow">Watch the most magnificant concert you've never seen</h2><br></br>
      <p class="glowp">Get your chance to see the most incredible concert you've never seen in your life before...!</p>
      </center>
      <p class="new">New to the website? Login to continue..</p>
      <Link to="/Adminlogin"><a class="blue-btn" href="#">Admin</a></Link>
      <Link to="/Login"><a class="blue-btn" href="#">User</a></Link>

    </div>
    </div>
  </body>
    
  
  )
}

export default Frontpage