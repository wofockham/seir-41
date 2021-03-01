const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser'); // Probably unnecessary.

global.Vocab = require('./api/models/vocabModel');
const routes = require('./api/routes/vocabRoutes');

mongoose.Promise = global.Promise;
mongoose.set('useFindAndModify', false);
mongoose.connect(
  '...', // TODO
  { useNewUrlParser: true }
);

const port = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); // Probably replaced with: app.use(express.json());

routes(app);
app.listen(port);

// Default 404
app.use((req, res) => {
  res.status(404).send({ url: `${ req.originalUrl } not found` });
})

console.log('Server started on http://localhost:' + port);
