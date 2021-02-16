const express = require('express');
const router = express.Router();
const axios = require('axios');
const bodyParser = require('body-parser');
const { AirportDB } = require('../db/index.js');

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.get('/', (req, res) => {
  res.send('Airports Home');
});

//  Returns all info on airport
router.get('/:icaoID', (req, res) => {
  axios.get(`https://api.flightplandatabase.com/nav/airport/${req.params.icaoID}`)
    .then((data) => {
      res.send(data.data);
    })
    .catch((err) => {
      res.send(err);
    })
});

router.get('/db/:name', (req, res) => {
  const regex = new RegExp(req.params.name, 'i');
  AirportDB.find({ name: regex }).limit(10).exec((err, docs) => {
    if (err) {
      console.log(err);
    } else {
      res.send(docs);
    }
  });
});

router.post('/flight', (req, res) => {
  //  TODO - select plane type - Cirrus / Kodiak [Kodiak double price]
  //  Total cost / cost per seat
  const dist = calcDistance(req.body.lat1, req.body.lon1, req.body.lat2, req.body.lon2);
  const flightTime = Math.round(((dist/140) + Number.EPSILON) * 100) / 100;
  const flightCost = Math.round(((300 * flightTime) + Number.EPSILON) * 100) / 100;
  const pilotCost = Math.round(((100 * flightTime) + Number.EPSILON) * 100) / 100;
  const totalCost = flightCost + pilotCost;
  const output = {
    dist,
    flightTime,
    totalCost,
    flightCost,
    pilotCost
  }
  res.send(output);
})

//  Calculate Distance Function
const calcDistance = (lat1, lon1, lat2, lon2) => {
	if ((lat1 == lat2) && (lon1 == lon2)) {
		return 0;
	}
	else {
		let radlat1 = Math.PI * lat1/180;
		let radlat2 = Math.PI * lat2/180;
		let theta = lon1-lon2;
		let radtheta = Math.PI * theta/180;
		let dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
		if (dist > 1) {
			dist = 1;
		}
		dist = Math.acos(dist);
		dist = dist * 180/Math.PI;
		dist = dist * 60 * 1.1515;
		dist = dist * 0.8684;

    dist = Math.round((dist + Number.EPSILON) * 100) / 100

		return dist;
	}
}

module.exports = router;
