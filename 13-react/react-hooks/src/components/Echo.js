import React, { useState } from 'react';

const Echo = () => {
  const [message, setMessage] = useState(''); // Initial state
  return (
    <div>
      <h2>{ message }</h2>
      <input onInput={ (event) => setMessage( event.target.value ) } />
    </div>
  )
};

export default Echo;
