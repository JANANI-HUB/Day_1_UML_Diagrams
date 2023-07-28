import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Seating.css';
const MovieSeating = () => {
  const [seats, setSeats] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  
  const seatLayout = [
    ['A1', 'A2', 'A3', 'A4','A5','A6'],
    ['B1', 'B2', 'B3', 'B4','B5','B6'],
    ['C1', 'C2', 'C3', 'C4','C5','C6'],
    ['D1', 'D2', 'D3', 'D4','D5','D6'],
    ['E1', 'E2', 'E3', 'E4','E5','E6'],
    ['F1', 'F2', 'F3', 'F4','F5','F6'],
  ];
  

  const amountTypes = {
    regular: 1000,
    premium: 2500,
    vip: 5000,
  };

  const bookedSeats = ['A3', 'B2', 'C1','D4','E3','F5','C6'];

 
  const isOccupied = (seat) => {
    return seats.includes(seat) || bookedSeats.includes(seat);
  };

  
  const handleSeatSelection = (seat) => {
    if (isOccupied(seat)) {
      return;
    }

    if (seats.includes(seat)) {
      setSeats(seats.filter((selectedSeat) => selectedSeat !== seat));
    } else {
      setSeats([...seats, seat]);
    }
  };
  const calculateAmount = () => {
    let amount = 0;

    seats.forEach((seat) => {
      const seatType = getSeatType(seat);
      amount += amountTypes[seatType];
    });

    setTotalAmount(amount);
  };
  const getSeatType = (seat) => {
    if (seat.startsWith('A') || seat.startsWith('B')) {
      return 'vip';
    } else if (seat.startsWith('C') || seat.startsWith('D')) {
      return 'premium';
    } else {
      return 'regular';
    }
  };

  return (
    <div class="seatbackground">
    <div>
      <h2 class="bys">Book Your Seats</h2>
      <p class="d">A and B - VIP &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;   Rs.5000</p>
      <p class="d">C and D - Premium  &nbsp;  &nbsp;  Rs.2500</p>
      <p class="d">E and F - Regular &nbsp;  &nbsp;  &nbsp;  &nbsp;   Rs.1000</p>
      <center>
        <div class="screen">
          Screen
        </div>
      <div class="alignment">
        {seatLayout.map((row, rowIndex) => (
          <div class="boxes" key={rowIndex}>
            {row.map((seat, seatIndex) => (
              <button
              key={seatIndex}
              onClick={() => handleSeatSelection(seat)}
              className={`seat ${isOccupied(seat) ? 'occupied' : ''} ${seats.includes(seat) ? 'selected' : ''}`}
              disabled={isOccupied(seat)}
              >
                {seat}
              </button>
            ))}
          </div>
        ))}
        <h3>Total Amount: {totalAmount}</h3>
      <div class="btn-group">
  <button  onClick={calculateAmount} disabled={seats.length === 0}>Calculate Amount</button>
  <Link to="/Payment"><button >Pay Now</button></Link>
</div>
      </div>
     
        </center>
      
      
        
      
    </div>
    </div>
  );
};

export default MovieSeating;
