import React, { useState } from 'react';
import axios from 'axios';

const Delete = () => {
  const [concertID, setconcertID] = useState('');
  const [taskDeleted, setTaskDeleted] = useState(false);
  const [notification, setNotification] = useState('');
  const [formError, setFormError] = useState('');



    const handleDeleteTask = async (e) => {
      e.preventDefault();
      const token = localStorage.getItem('token');
  
      
      if (!token) {
        console.log('No token found. Redirect to login page or handle the error.');
        return;
      }
  
      const concertID = e.target.elements.concertID.value;
  
      try {
        await axios.delete(`http://127.0.0.1:8181/delete/${concertID}`, {
          headers: {
            Authorization: `Bearer ${token}`, 
          },
        });
  
        setTaskDeleted(true);
      } catch (error) {
        console.error(error);
        
      }
    };

  return (
    <div>
      <div className="addback"></div>
      <div className="addblur">
        <div className="adddiv">
          <form onSubmit={handleDeleteTask}>
            <div className="form-group">
              Concert ID :
              <input
                className="ain0"
                type="text"
                name='concertID'
                placeholder="Enter concert ID"
                value={concertID}
                onChange={(e) => setconcertID(e.target.value)}
              />
            </div>
            <div className="form-group">
              <button className="addbut" type="submit">Delete Concert</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Delete;
