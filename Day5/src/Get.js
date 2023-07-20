import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Get.css'

function Get() {
  const [taskData, setTaskData] = useState([]);

  useEffect(() => {
    axios
      .get('http://127.0.0.1:8080/get')
      .then((response) => {
        setTaskData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <div class="addback"></div>
      <div class="getblur">
      <table className="gen">
      <div className="container12">
        <thead>
          <tr className="form-title">
            <th className="header-cell">Concert ID</th>
            <th className="header-cell">Concert Name</th>
            <th className="header-cell">Singer Name</th>
            <th className="header-cell">Genre</th>
            <th className="header-cell">Date</th>
            <th className="header-cell">Time</th>
            <th className="header-cell">Location</th>
          
          </tr>
        </thead>
        <tbody>
          {taskData.map((admin) => (
            <tr key={admin.concertid}>
              <td>{admin.concertid}</td>
              <td>{admin.concertname}</td>
              <td>{admin.singername}</td>
              <td>{admin.genre}</td>
              <td>{admin.date}</td>
              <td>{admin.time}</td>
              <td>{admin.location}</td>
            
              
            </tr>
          ))}
        </tbody>
        </div>
      </table>
      </div>
    </div>
  );
}

export default Get;