const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const airports = require('./routes/airports.js');
const booking = require('./routes/booking.js');
require('dotenv').config();

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Home Page');
});

//  Router
app.use('/airports', airports);
app.use('/booking', booking);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log('App listenening on Port: ' + PORT);
});
