import React, { useState } from 'react';

const ConcertSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    if (searchTerm.trim() === '') {
      // Empty search term, do not perform search
      return;
    }

    // Perform search operation here based on the searchTerm
    // You can use an API to fetch the concert data or use any other data source

    // For the sake of this example, let's assume we have an array of concerts
    const concerts = [
      {
        id: 1,
        name: 'Marakuma Nenjam',
        singer: 'AR Rahman',
        genre: 'Melody',
        date: '20 Aug 2023',
        time: '7:00 PM',
        location: 'Codissia Grounds,Coimbatore',
        image: 'concert_a_image_url.jpg',
      },
      {
        id: 2,
        name: 'Concert B',
        singer: 'Singer B',
        genre: 'Pop',
        date: '15 August',
        time: '7:30 PM',
        location: 'Venue B',
        image: 'concert_b_image_url.jpg',
      },
      {
        id: 3,
        name: 'Concert C',
        singer: 'Singer A',
        genre: 'Jazz',
        date: '25 September',
        time: '9:00 PM',
        location: 'Venue C',
        image: 'concert_c_image_url.jpg',
      },
      // ... additional concert objects
    ];

    // Filter the concerts based on the search term
    const filteredConcerts = concerts.filter(
      (concert) =>
        concert.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        concert.singer.toLowerCase().includes(searchTerm.toLowerCase()) ||
        concert.genre.toLowerCase().includes(searchTerm.toLowerCase()) ||
        concert.date.toLowerCase().includes(searchTerm.toLowerCase()) ||
        concert.location.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setSearchResults(filteredConcerts);
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Search for a concert, singer, genre, date, or location"
      />
      <button onClick={handleSearch}>Search</button>

      <div>
        {searchResults.map((concert) => (
          <div key={concert.id} className="concert">
            <div className="concert-name">{concert.name}</div>
            <div className="concert-singer">Singer: {concert.singer}</div>
            <div className="concert-genre">Genre: {concert.genre}</div>
            <div className="concert-date">Date: {concert.date}</div>
            <img src={concert.image} alt={concert.name} className="concert-image" />
            <div className="concert-time">Time: {concert.time}</div>
            <div className="concert-location">Location: {concert.location}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConcertSearch;
