import React from 'react';
import './Homepage.css';
import { Link } from 'react-router-dom';
function Homepage() {
  return (
    <body>
    <meta charset="UTF-8"/>
  <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>HomePage</title>
<header class="header">

      <a href="#" class="logo">LiveTix</a><br></br>
      <nav class="nav-items">
      <a href="#">Home</a>
      <a href="#">Profile</a>
      <Link to="/Login"><a href="#">Login</a></Link>
      
    </nav>
  </header>
   <main>  
    
   <div class="intro"> 
      <p class="new">New to the website? Log In above to continue..<img src="https://media3.giphy.com/media/lReVblhSRtxXtfK81w/200w.gif?cid=790b7611v8vt9dr0xl7fhziziq2z1lgnpd82tjtxufzg8bv1&ep=v1_gifs_search&rid=200w.gif&ct=g" class="arrow "></img></p>
      
      <h1>Get the tickets Now or Never</h1>
      <h2>Watch the most magnificant concert you've never seen</h2>
      <p>Get your chance to see the most incredible concert you've never seen in your life before...!</p>
    </div>
    
    
  </main>
  </body>
    
  
  )
}

export default Homepage