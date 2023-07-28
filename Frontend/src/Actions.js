

export const updateName = (name) => {
    return {
      type: 'UPDATE_NAME',
      payload: name,
    };
  };
  
  export const updateEmail = (email) => {
    return {
      type: 'UPDATE_EMAIL',
      payload: email,
    };
  };
  
  export const updateMessage = (message) => {
    return {
      type: 'UPDATE_MESSAGE',
      payload: message,
    };
  };
  
  export const sendMessage = (messageData) => {
   
    return {
      type: 'SEND_MESSAGE',
      payload: messageData,
    };
  };
  