import React, { useState, useReducer } from 'react';

// Reducer function to handle state changes
const feedbackReducer = (state, action) => {
  switch (action.type) {
    case 'SET_STATUS':
      return { ...state, status: action.payload };
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};

const FeedbackForm = () => {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    feedback: '',
  });

  const [state, dispatch] = useReducer(feedbackReducer, {
    status: '',
    loading: false,
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    removeStatus();
    addLoading();
    validate();
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const setStatusMessage = (content) => {
    removeLoading();
    dispatch({ type: 'SET_STATUS', payload: content });
  };

  const removeStatus = () => {
    dispatch({ type: 'SET_STATUS', payload: '' });
  };

  const addLoading = () => {
    dispatch({ type: 'SET_LOADING', payload: true });
  };

  const removeLoading = () => {
    dispatch({ type: 'SET_LOADING', payload: false });
  };

  const isEmpty = (value) => {
    return value.trim().length === 0;
  };

  const invalidLength = (value, len) => {
    return value.length > len;
  };

  const validateEmail = (email) => {
    // Regular expression for email validation (same as in the original code)
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  const validate = () => {
    const { name, email, feedback } = formValues;
    let hasErrors = false;
    let errors = '';

    if (isEmpty(name)) {
      errors = `${errors}  Please enter your name !!!`;
      hasErrors = true;
    }

    if (invalidLength(name, 59)) {
      errors = `${errors} Name cant exceed 60 characters`;
      hasErrors = true;
    }

    if (!validateEmail(email)) {
      errors = `${errors} Is that a valid email ? ? `;
      hasErrors = true;
    }

    if (isEmpty(email)) {
      errors = `${errors} Email can not be empty `;
      hasErrors = true;
    }

    if (invalidLength(email, 319)) {
      errors = `${errors} Email can not exceed 320 characters`;
      hasErrors = true;
    }

    if (isEmpty(feedback)) {
      errors = `${errors} Feedback cant be empty`;
      hasErrors = true;
    }

    if (invalidLength(feedback, 5999)) {
      errors = `${errors} Thats a long feedback,sorry feedback can not exceed 6000 characters`;
      hasErrors = true;
    }

    if (hasErrors) {
      setStatusMessage(errors);
    } else {
      // Uncomment the following line to send data to the server
      // sendData(JSON.stringify(formValues));
    }
  };

  const sendData = (jsonData) => {
    // Simulate server response (Remove this part and implement your server communication)
    setTimeout(() => {
      setStatusMessage(
        'Thank you! We got your feedback, we look forward to more from you.'
      );
      setFormValues({
        name: '',
        email: '',
        feedback: '',
      });
    }, 1000);
  };

  return (
    <div>
      <div class="ratingsback">
      <div className="formContainer">
        <div className="heading">FEEDBACK FORM </div>
        <div className="description"></div>
        <div className="form">
          <form id="form" onSubmit={handleSubmit}>
            <p className="ratname"> Name</p>
            <input
              name="name"
              type="text"
              id="name"
              value={formValues.name}
              onChange={handleInputChange}
            />
            <p className="ratname">Email</p>
            <input
              name="email"
              type="email"
              id="email"
              value={formValues.email}
              onChange={handleInputChange}
            />
            <p className="ratname">Feedback</p>
            <textarea
              name="feedback"
              id="feedback"
              value={formValues.feedback}
              onChange={handleInputChange}
            />
            <button type="submit">SUBMIT</button>
          </form>
        </div>

        {state.loading && (
          <div id="loading">
            <div></div>
            <div></div>
            <div></div>
          </div>
        )}

        {state.status && <div id="status">{state.status}</div>}
      </div>
    </div>
    </div>
  );
};

export default FeedbackForm;
