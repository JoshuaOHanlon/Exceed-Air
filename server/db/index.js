const mongoose = require('mongoose');

const dbairports = mongoose.createConnection('mongodb://localhost/airports', { useNewUrlParser: true, useUnifiedTopology: true });
const dbexceedAir = mongoose.createConnection('mongodb://localhost/exceedair', { useNewUrlParser: true, useUnifiedTopology: true });

dbairports.on('error', console.error.bind(console, 'connection error: '));
dbairports.once('open', () => {
  console.log('Connected to: Airports');
});

const airportSchema = new mongoose.Schema({
  ident: String,
  type: String,
  name: String,
  elevation: Number,
  continent: String,
  iso_country: String,
  iso_region: String,
  municipality: String,
  gps_code: String,
  iata_code: String,
  local_code: String,
  coordinates: String
});

dbexceedAir.on('error', console.error.bind(console, 'connection error: '));
dbexceedAir.once('open', () => {
  console.log('Connected to: Exceed Air');
});

const bookingSchema = new mongoose.Schema({
  firstName: String,
  lastName: String
});

const AirportDB = dbairports.model('AirportDB', airportSchema, 'AirportDB');
const ExceedAirDB = dbexceedAir.model('ExceedAirDB', bookingSchema);

module.exports = { AirportDB, ExceedAirDB };
