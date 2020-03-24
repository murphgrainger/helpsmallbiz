require('dotenv').config();
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const business = require('./business');

const port = process.env.PORT || 8080;
const app = express();

app.use(bodyParser.json())
app.use(morgan('dev'));
app.use(cors({
  origin: process.env.BASE_URL,
}));

app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));


app.use('/business', business);

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html')); //serving build folder
});

app.listen(port, () => {
  console.log('Listening on port', port);
});
