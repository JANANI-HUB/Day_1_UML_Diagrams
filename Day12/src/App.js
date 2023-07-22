import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Login';
import './Login.css';
import SignUp from './SignUp';
import './Signup.css';
import Homepage from './Homepage';
import './Homepage.css';
import Frontpage from './Frontpage';
import './Frontpage.css';
import Seating from './Seating';
import './Seating.css';
import  Profile from './Profile';
import './Profile.css';
import  Info from './Info';
import './Info.css';
import Terms from './Terms';
import './Terms.css';
import Payment from './Payment';
import './Payment.css';
import Ticket from './Ticket';
import './Ticket.css';
import Admin from './Admin';
import './Admin.css';
import Add from './Add';
import './Add.css';
import Update from './Update';
import './Update.css';
import Delete from './Delete';
import './Delete.css';
import Get from './Get';
import './Get.css';
import Privacy from './Privacy';
import './Privacy.css';
import Contact from './Contact';
import './Contact.css';
import Ratings from './Ratings';
import './Ratings.css';
import Success from './Success';
import './Success.css';



function App() {
  return (
      <Router>
      <Routes>
      <Route path="/" element={<Frontpage/>}/>
      <Route  path="/Login" element={<Login/>}/>
      <Route path="/SignUp" element={<SignUp/>}/>
      <Route path="/Homepage" element={<Homepage/>}/>
      <Route path="/Seating" element={<Seating/>}/>
      <Route path="/Info" element={<Info/>}/>
      <Route path="/Profile" element={<Profile/>}/>
      <Route path="/Terms" element={<Terms/>}/>
      <Route path="/Payment" element={<Payment/>}/>
      <Route path="/Ticket" element={<Ticket/>}/>
      <Route path="/Admin" element={<Admin/>}/>
      <Route path="/Add" element={<Add/>}/>
      <Route path="/Update" element={<Update/>}/>
      <Route path="/Delete" element={<Delete/>}/>
      <Route path="/Get" element={<Get/>}/>
      <Route path="/Privacy" element={<Privacy/>}/>
      <Route path="/Contact" element={<Contact/>}/>
      <Route path="/Ratings" element={<Ratings/>}/>
      <Route path="/Success" element={<Success/>}/>
      </Routes>
     </Router>
         
       
      
    
  );
}

export default App;
