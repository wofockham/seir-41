import axios from 'axios';

const baseURL = 'http://localhost:3000/words/';
// const baseURL = 'http://dd4bf08d797c.ngrok.io/words/'; // Joel's server

// Higher order function to handle errors in just one way.
const handleError = (fn) => (...params) =>
  fn(...params).catch((error) => {
    console.error(error);
  });

  export const api = {
    getWord: handleError(async (id) => {
      const res = await axios.get(baseURL + id);
      return res.data;
    }),
    getWords: handleError(async () => {
      const res = await axios.get(baseURL);
      return res.data;
    }),
    deleteWord: handleError(async (id) => {
      const res = await axios.delete(baseURL + id);
      return res.data;
    }),
    createWord: handleError(async (payload) => {
      const res = await axios.post(baseURL, payload);
      return res.data;
    }),
    updateWord: handleError(async (payload) => {
      const res = await axios.put(baseURL + payload._id, payload);
      return res.data;
    })
  };
