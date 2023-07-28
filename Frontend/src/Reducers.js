

const initialState = {
    name: '',
    email: '',
    message: '',
  };
  
  const contactReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'UPDATE_NAME':
        return {
          ...state,
          name: action.payload,
        };
      case 'UPDATE_EMAIL':
        return {
          ...state,
          email: action.payload,
        };
      case 'UPDATE_MESSAGE':
        return {
          ...state,
          message: action.payload,
        };
      case 'SEND_MESSAGE':
       
        return state;
      default:
        return state;
    }
  };
  
  export default contactReducer;
  