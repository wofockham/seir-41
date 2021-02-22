const express = require('express');
const ejs = require('ejs');
const _ = require('underscore');
const axios = require('axios');

const server = express(); // returns a server object.
server.set('view-engine', ejs); // see docs.
server.use(express.static('public')); // see docs.

const PORT = 1337; // Single definition for ease of modification later (readable + DRY);

// request / response
server.get('/', (req, res) => {
  const brothers = 'Groucho Harpo Chico Zeppo Gummo'.split(' ');
  const randomBrother = _(brothers).sample();
  res.render('home.ejs', { brother: randomBrother, lucky: _.random(40) }); // "Instance" variables.
});

// Dynamic URLs
server.get('/hello/:name', (req, res) => {
  res.send(`Hello ${ req.params.name }`);
});

// Calculator
server.get('/calc/:x/:y/:operator', (req, res) => {
  let answer;

  if (req.params.operator === '+') {
    answer = Number(req.params.x) + Number(req.params.y);
  } else if (req.params.operator === '-') {
    answer = Number(req.params.x) - Number(req.params.y);
  } // TODO: handle multiplication and division
  res.render('calc.ejs', { answer: answer });
});

// JSON API
server.get('/info.json', (req, res) => {
  res.json({
    name: 'Groucho',
    instrument: 'guitar',
    vice: 'cigars',
    lucky: _.random(40)
  });
});

// axios in Node (httparty)
server.get('/trivia', (req, res) => {
  axios.get('http://numbersapi.com/random/trivia').then((response) => {
    res.render('trivia.ejs', { fact: response.data });
  });
});

// Forms
server.get('/ask', (req, res) => {
  res.render('ask.ejs');
});

server.get('/answer', (req, res) => {
  res.render('answer.ejs', { question: req.query.question, answer: 'No comment'});
});

server.listen(PORT, () => console.log(`Now serving on http://localhost:${ PORT }`));
