import React from 'react';
import { connect } from 'react-redux';
import { updateName, updateEmail, updateMessage, sendMessage } from './Actions';
import './Contact.css';

function Contact(props) {
  const { name, email, message } = props;

  const handleNameChange = (e) => {
    props.updateName(e.target.value);
  };

  const handleEmailChange = (e) => {
    props.updateEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    props.updateMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    props.sendMessage({ name, email, message });
  };

  return (
    <div>
      <div className="contactback">
        <form className="formcontact" onSubmit={handleSubmit}>
          <h2 className="contactus">CONTACT US</h2>
          <p type="Name:" className="conp">
            <input
              placeholder="Write your name here.."
              className="contactinp"
              value={name}
              onChange={handleNameChange}
            />
          </p>
          <p type="Email:" className="conp">
            <input
              placeholder="Let us know how to contact you back.."
              className="contactinp"
              value={email}
              onChange={handleEmailChange}
            />
          </p>
          <p type="Message:" className="conp">
            <input
              placeholder="What would you like to tell us.."
              className="contactinp"
              value={message}
              onChange={handleMessageChange}
            />
          </p>
          <button className="conbutton" type="submit">
            Send Message
          </button>
          <p className="conp2">Contact: 1234567894&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Email: livetix@gmail.com</p>
        </form>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    name: state.name,
    email: state.email,
    message: state.message,
  };
};

const mapDispatchToProps = {
  updateName,
  updateEmail,
  updateMessage,
  sendMessage,
};

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
