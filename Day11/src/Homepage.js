import React from 'react';
import './Homepage.css';
import { Link } from 'react-router-dom';
import  { useState } from 'react';

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
        image: 'https://images.news18.com/punjabi/uploads/2022/01/1641463209_a-r-rahman.jpg',
      },
      {
        id: 2,
        name: 'Mayanadhi',
        singer: 'Pradeep Kumar',
        genre: 'Pop',
        date: '22 Apr 2023',
        time: '6:00 PM',
        location: 'Sadakathullah Appa College, Tirunelveli',
        image: 'https://i.scdn.co/image/ab6761610000e5eb8bad2f4b1b3159d8c3d29f45',
      },
      {
        id: 3,
        name: 'Mayanadhi',
        singer: 'Pradeep Kumar',
        genre: 'Pop',
        date: '14 Sept 2023',
        time: '4:00 PM',
        location: 'SH 15, Stone House Hill, Nilgiris,Ooty',
        image: 'https://i.scdn.co/image/ab6761610000e5eb8bad2f4b1b3159d8c3d29f45',
      },
      {
        id: 4,
        name: 'Anirudh Once Upon a Time Tour',
        singer: 'Anirudh Ravichandran',
        genre: 'Rock',
        date: ' 23 Oct 2023',
        time: '8:00 PM',
        location: 'Nithya Kalyana Perumal Temple Grounds, East Coast Road (ECR), Chennai',
        image: 'https://ngs-space1.sgp1.digitaloceanspaces.com/am/uploads/mediaGallery/image/1660978982237.jpg-org',
      },
      {
        id: 5,
        name: 'Aayirathil Oruvan',
        singer: 'G V Prakash',
        genre: 'Rock',
        date: ' 20 Aug 2023',
        time: '6:30 PM',
        location: 'Kuala Lumpur,Malaysia',
        image: 'https://pbs.twimg.com/media/EjoFL2ZVcAACxm9.jpg',
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
    <div class="homeback">
    <div class="main-wrap">
    <input id="slide-sidebar" type="checkbox" role="button" />
        <label for="slide-sidebar"><span><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAY1BMVEUAAAD///8vLy8HBwefn5+2traQkJBGRkZkZGQeHh4bGxve3t5gYGDY2Ng8PDzi4uKBgYHPz88uLi6+vr5vb281NTUXFxf39/e4uLjx8fHIyMhoaGirq6tOTk7o6Oh7e3slJSXS6+RuAAABpElEQVR4nO3b23aCMBCF4Y00HD1hhQiC8v5PWSi1VXufn4vZLzCfC0NC1owiODKAAVYDKJNtugmUdJuUb4DdXoGz3z0Dkjh0fSlOfgGH4D9/yf7wA6iZ+lK9AI5Ufek4Ayrg+T8SVxPgxNWXTpE+yfqayp9ZwFnYElhSq2ABhcA1MCdWwwIabVjARhkLyORYgJNHl0HhFV1IwGXeDcF/Qfa9Hbc5VT9vlwNJBwny7nEmbJGnkLVPp2IXfC0U7vW7wLtrnceBktdX598/TKgYwAAGMIABDGAAAxhgRQBfuY9AcZX/B+iHoFcl8dC/AG5DyOpLhtsfoEfuaZr+AbgT5efcF0BH1Ze6GeBHDjD6CYDe1Z4jlWR9TeUTFpAoZQGpRhYw8pfVOGBkASP/J8SXIf4iwl/F/GaEb8f8gYQ/kvGHUv5YvoIPEywGMIABDGAAAxjAAAZYDYBu4YCbWOg2HrqRCW/lopvZ6HY+vKERb+nEm1rxtl68sRm/rMab2/H2fnzAAR/xwIdc+DEffNCJH/Xih93wcb+IH3iM8JFPLgYwAA74AgZPMaEEVpRbAAAAAElFTkSuQmCC" class="toggleimg"></img></span></label>
        <div class="sidebar"><h2 class='menu'>Menu</h2>
        <Link to="/Ticket"><p class="details">Your Tickets</p></Link>
        <Link to="/Info"><p class="details">Profile</p></Link> 
        <p class="details">Payment</p>
        <p class="details">Notifications</p>
        <Link to="/Admin"><p class="details">Admin</p></Link>
        </div>
    <div class="portfolio">
      <header class="homeheader">
      <a href="#" class="logo">LiveTix</a>
      <nav class="nav-items">
      <a href="#">Home</a>
      <Link to="/Login"><a href="#">Logout</a></Link>
      
    </nav>
  </header>
  <center>
  <h1 class="book">BOOK YOUR TICKETS 
    FOR <span class="concert">CONCERT</span></h1>
    </center>
    <p class="under">Safe,Secure reliable ticketing.Your ticket to live entertainment</p>
    <div>
      <input 
      class="search-icon1" 
      type="search" 
      placeholder="Search for concert,singer,genre,date or location"
      value={searchTerm}
      onChange={handleInputChange}
      autofocus required />
  <button type="submit" onClick={handleSearch} class="search-icon2">Go</button>    
      <div>
        {searchResults.map((concert) => (
          <div key={concert.id} className="concertview">
            <img src={concert.image} alt={concert.name} className="concert-image" />
            <div className="concert-name">{concert.name}</div>
            <div className="concert-singer">Singer: {concert.singer}</div>
            <div className="concert-genre">Genre: {concert.genre}</div>
            <div className="concert-date">Date: {concert.date}</div>
            <div className="concert-time">Time: {concert.time}</div>
            <div className="concert-location">Location: {concert.location}</div>
            <Link to="/Seating"><a href="#" class="clickbook">Click here to Book Tickets</a></Link>
          </div>
        ))}
      <br></br>
      </div>
    </div>
    <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
    <h1 class="recommend">Upcoming Concerts</h1>
    <div class="events">
    <div class="contain">
      <div class="imagea"> <img src="https://i.pinimg.com/originals/70/e0/3d/70e03dd21e32921de6cbab66cdcb2dd1.jpg" class="imggal" /> </div> 
      <div class="text"> <b>Anirudh Ravichander</b><br></br>
      Anirudh's Time Tour<br></br>
      23 Oct 2023<br></br>
      Chennai<br></br>
      <Link to="/Seating"><a class="buttic">Book ticket</a></Link>
      </div>
      </div>
      <div class="contain">
      <div class="imagea"> <img src="https://c.ndtvimg.com/2022-06/j2h2qtro_ar-rahman_625x300_11_June_22.jpg" class="imggal"/> </div>
      <div class="text"> <b>AR Rahman</b><br></br>
      Marakuma Nenjam<br></br>
      20 Aug 2023<br></br>
      Coimbatore<br></br>
      <Link to="/Seating"><a class="buttic">Book ticket</a></Link>
      </div>
     </div>
     <div class="contain">
      <div class="imagea"> <img src="https://gumlet.assettype.com/film-companion%2Fimport%2Fwp-content%2Fuploads%2F2020%2F06%2Ffilm-companion-GV-PRAKASH-Lead-image-2.jpg?auto=format%2Ccompress&fit=max&w=400&dpr=2.6" class="imggal"/> </div>
      <div class="text"><b>GV Prakash</b><br></br>
      Details not updated...</div> 
     </div>
     <div class="contain">
      <div class="imagea"> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCQYVdTYWyAuDkwipTdHLmq0L5UoOxLNEx9GKGHIWb6IkkC6EEVErDjk6UTRfTq53bmUg&usqp=CAU" class="imggal"/> </div>
      <div class="text"><b>Sid Sriram</b><br></br>
      Details not updated...
      </div> 
     </div>
     <div class="contain">
      <div class="imagea"> <img src="https://i.pinimg.com/474x/51/5d/a0/515da0cb48a000496aaa8f1d2bc23465.jpg" class="imggal"/> </div>
      <div class="text"><b>Pradeep Kumar</b><br></br>
      Mayanadhi<br></br>
      30 Sept 2023<br></br>
      Ooty<br></br>
      <Link to="/Seating"><a class="buttic">Book ticket</a></Link>
      </div> 
     </div>
     <div class="contain">
      <div class="imagea"> <img src="https://1480864561.rsc.cdn77.org/assets/event_images/Singer-Karthik-Exclusive-Pictures-31274/misc-big/singer-karthik-exclusive-pictures-25.jpg" class="imggal"/> </div>
      <div class="text"><b>Karthik</b><br></br>
      Details not updated...</div> 
     </div>
     </div>
<footer class="footer">
  <div class="bottom-links">
    <div class="links">
    <ul>
       <li> <Link to="/Terms"> <a class="bt btleft" href="#">Terms and Conditions</a></Link></li>
        <li> <Link to="/Privacy"><a class="bt btleft" href="#">Privacy Policy</a></Link>

        </li>

    <li><Link to="/Contact"><a class="bt btleft" href="#">Contact  </a></Link>

        </li>
    </ul>
    <div class="links2">
    <ul class="socialmedia">
        <li><a class="bt btleft" href="https://www.instagram.com/"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png" class="insta"></img></a>

        </li>
        <li> <a class="bt btleft" href="https://www.facebook.com/login/"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png" class="fb"></img></a>

        </li>
        <li> <a class="bt btleft" href="https://twitter.com/i/flow/login?redirect_after_login=%2Flogin%3Flang%3Den"><img src="https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/twitter_circle-512.png" class="twit"></img></a>

        </li>
        
        
    </ul>
    </div>
    
    </div>
  </div>
</footer>
    
    </div>
</div>
 
</div>    
  
  )
}

export default ConcertSearch