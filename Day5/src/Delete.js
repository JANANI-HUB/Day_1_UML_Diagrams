import React, { useState } from 'react';
import axios from 'axios';

function Delete() {
  const [concertID, setConcertID] = useState('');

  const handleDelete = (e) => {
    e.preventDefault();

    // Prepare the concert ID for the DELETE request
    const concertid = concertID;

    // Replace 'http://example.com/api/concerts' with the actual endpoint URL
    axios.delete(`http://127.0.0.1:8080/delete/${concertid}`)
      .then((response) => {
        console.log(response.data); // Handle the response as needed
        // Optionally, you can reset the form field after successful deletion:
        setConcertID('');
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <div className="addback"></div>
      <div className="addblur">
        <div className="adddiv">
          <form onSubmit={handleDelete}>
            <div className="form-group">
              Concert ID :
              <input
                className="ain0"
                type="text"
                placeholder="Enter concert ID"
                value={concertID}
                onChange={(e) => setConcertID(e.target.value)}
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
