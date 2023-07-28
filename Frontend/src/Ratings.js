import React, { useState } from 'react';
import axios from 'axios';

function Ratings() {
  const [ID, setID] = useState('');
  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [Feedback, setFeedback] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!ID || !Name || !Email || !Feedback) {
      setErrorMessage('Please fill in all the details.');
      return;
    }

    const formData = {
      id: ID,
      name: Name,
      email: Email,
      feedback: Feedback,
    };

    const token = localStorage.getItem('token');
    if (!token) {
      console.error('No JWT token found.');
      return;
    }

    try {
      
      const response = await axios.post('http://localhost:9025/api/v1/feedback/postfeed', formData, {
        headers: {
          Authorization: `Bearer ${token}`, 
        },
      });

      console.log(response.data); 
      
      setID('');
      setName('');
      setEmail('');
      setFeedback('');
      setErrorMessage(''); 
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className="ratingsback">
        <div className="formContainer">
          <div className="heading">FEEDBACK FORM</div>
          <div className="description"></div>
          <div className="form">
            <form id="form" onSubmit={handleSubmit}>
              <p className="ratname">ID</p>
              <input
                name="id"
                type="text"
                id="id"
                value={ID}
                onChange={(e) => setID(e.target.value)}
              />
              <p className="ratname">Name</p>
              <input
                name="name"
                type="text"
                id="name"
                value={Name}
                onChange={(e) => setName(e.target.value)}
                />
              <p className="ratname">Email</p>
              <input
                name="email"
                type="email"
                id="email"
                value={Email}
                onChange={(e) => setEmail(e.target.value)}
                />
              <p className="ratname">Feedback</p>
              <textarea
                name="feedback"
                id="feedback"
                value={Feedback}
                onChange={(e) => setFeedback(e.target.value)}
                />
              <button type="submit">SUBMIT</button>
            </form>
                {errorMessage && <center><p style={{ color: 'yellow'}}>{errorMessage}</p></center>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ratings;
