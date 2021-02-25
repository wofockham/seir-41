import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NumberFact = () => {
  console.log('rendering <NumberFact />');
  const [fact, setFact] = useState(null);

  useEffect(() => {
    axios.get('http://numbersapi.com/random/trivia').then((result) => {
      console.log('setting a new state');
      setFact(result.data); // this should show a fact in the console.
    });
  }, []); // empty array means "run this function only once".

  return (
    <p>{ fact }</p>
  )
};

export default NumberFact;
