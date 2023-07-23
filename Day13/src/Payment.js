import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Payment() {
  const [formData, setFormData] = useState({
    name: '',
    cardNumber: '',
    cardType: '',
    expiryDate: '',
    cvv: '',
    amount:''
  });

  const { name, cardNumber, cardType, expiryDate, cvv,amount} = formData;

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform submit logic here
    console.log('Form submitted:', formData);
  };

  const isFormValid = name !== '' && cardNumber !== '' && cardType !== '' && expiryDate !== '' && cvv !== '' && amount !== '';

  return (
    <div>
      <div className="mainscreen">
        <div className="card">
          <div className="leftside">
          </div>
          <div className="rightside">
            <form onSubmit={handleSubmit}>
              <h2>Payment Information</h2>
              <p>Card Holder Name</p>
              <input
                type="text"
                className="inputbox5"
                name="name"
                value={name}
                onChange={handleInputChange}
                required
                placeholder="Name"
              />
              <p>Card Number</p>
              <input
                type="text"
                className="inputbox5"
                name="cardNumber"
                value={cardNumber}
                onChange={handleInputChange}
                minlength="16"
                maxlength="16"
                placeholder="0000 0000 0000 0000"
                required
              />

              <p>Card Type</p>
              <select
                className="inputbox5"
                name="cardType"
                value={cardType}
                onChange={handleInputChange}
                required
              >
                <option value="">--Select a Card Type--</option>
                <option value="Visa">Visa</option>
                <option value="RuPay">RuPay</option>
                <option value="MasterCard">MasterCard</option>
              </select>
              <div className="expcvv">
                <p className="expcvv_text">Expiry</p>
                <input
                  type="date"
                  className="inputbox5"
                  name="expiryDate"
                  value={expiryDate}
                  onChange={handleInputChange}
                  required
                />

                <p className="expcvv_text2">CVV</p>
                <input
                  type="password"
                  className="inputbox5"
                  name="cvv"
                  value={cvv}
                  onChange={handleInputChange}
                  minlength="3"
                  maxlength="3"
                  required
                />  <br></br>
                <p>Amount</p>
                <input
                  type="text"
                  className="inputbox5"
                  name="amount"
                  value={amount}
                  onChange={handleInputChange}
                  required
                /> 
              </div>
            </form>
          </div>
        </div>
              <Link to="/Success"><button type="submit" className="buttonpay" disabled={!isFormValid}>Pay Now</button></Link>
      </div>
    </div>
  );
}

export default Payment;
