import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Login';
import './Login.css';
import SignUp from './SignUp';
import './Signup.css';
import Homepage from './Homepage';
import './Homepage.css';


function App() {
  return (
      <Router>
      <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route  path="/Login" element={<Login/>}/>
      <Route path="/SignUp" element={<SignUp/>}/>
      <Route path="/Homepage" element={<Homepage/>}/>
      </Routes>
      </Router>

       
      
    
  );
}

export default App;
