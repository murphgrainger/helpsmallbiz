require('dotenv').config();
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const secure = require('express-force-https');
const goal = require('./routes/goal');
const pledge = require('./routes/pledge');

const port = process.env.PORT || 8080;

const app = express();

app.use(secure);
app.use(bodyParser.json())
app.use(morgan('dev'));
app.use(cors({
  origin: process.env.BASE_URL,
}));

app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));


app.use('/goal', goal);
app.use('/pledge', pledge);

app.get('/robots.txt', (req, res, next) => {
  res.type('text/plain');
  if (environment !== 'production') {
    res.send('User-agent: *\nDisallow: /');
  }
});

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html')); //serving build folder
});

app.listen(port, () => {
  console.log('Listening on port', port);
});
