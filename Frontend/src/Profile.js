import React, { useState } from 'react';
import axios from 'axios';

function Profile() {
  const [ID, setID] = useState('');
  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [City, setCity] = useState('');
  const [Contact, setContact] = useState('');
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      id: ID,
      name: Name,
      email: Email,
      password:Password,
      city:City,
      contact:Contact,
      
    };

   
    const token = localStorage.getItem('token');
    if (!token) {
      console.error('No JWT token found.');
      return;
    }

    try {
     
      const response = await axios.post('http://localhost:8080/postedit', formData, {
        headers: {
          Authorization: `Bearer ${token}`, 
        },
      });

      console.log(response.data); 
      
      setID('');
      setName('');
      setEmail('');
      setPassword('');
      setCity('');
      setContact('');
      
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <body>
      
<div class="profback"></div>
<div class="wrapper3">
  <div class="prof">
    <div class="content90">
        <center>
      <p class="editprof">Edit Profile</p></center>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <div class="grid-35">Your Photo
          </div>
          <div class="grid-65">
            <span class="photo" title="Upload your Avatar!"></span>
            <input type="file" class="btn" />
          </div>
        </fieldset>
        <fieldset>
          <div class="grid-35">
             Name
          </div>
            <div class="grid-65">
            <input type="text" class="inf" tabindex="1"
             value={Name}
             onChange={(e) => setName(e.target.value)} />
          </div>
        </fieldset>
        <fieldset>
          <div class="grid-35">
            Email-id
          </div>
          <div class="grid-65">
            <input type="email" class="inf" tabindex="6" 
             value={Email}
             onChange={(e) => setEmail(e.target.value)}/>
          </div>
        </fieldset>
        <fieldset>
          <div class="grid-35">
            Password
          </div>
          <div class="grid-65">
            <input type="password" class="inf" tabindex="5" 
             value={Password}
             onChange={(e) => setPassword(e.target.value)}/>
          </div>
        </fieldset>
        <fieldset>
          <div class="grid-35">
            City
          </div>
          <div class="grid-65">
            <input type="text" class="inf" tabindex="4" 
             value={City}
             onChange={(e) => setCity(e.target.value)}/>
          </div>
        </fieldset>
        <fieldset>
          <div class="grid-35">
            Contact-no
          </div>
          <div class="grid-65">
            <input type="text" class="inf" tabindex="4"
             value={Contact}
             onChange={(e) => setContact(e.target.value)} />
          </div>
        </fieldset>
       
        <fieldset>
          <input type="button" class="Btn cancel" value="Cancel" />
          <input type="submit" class="Btn" value="Save Changes" />
        </fieldset>

      </form>
    </div>
  </div>
</div>

</body>
  )
}

export default Profile