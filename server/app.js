const express = require('express');
const app = express();
const port = 3306;
const cors = require('cors')
const db = require('./db');
const bodyParser = require('body-parser');

app.use(cors())

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('public'));

// listings
app.get('/api/listings', (req, res) => {
  mysql = 'select * from listings';
  db.query(mysql, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
});

// listing
app.get('/api/listing', (req, res) => {
  mysql = `select * from listings where id = ${Number(req.query.listingId) ? Number(req.query.listingId) : Number(req.body.listingId) }`;
  db.query(mysql, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
});


// reviews
app.get('/api/reviews', (req, res) => {
  mysql = 'select * from reviews';
  db.query(mysql, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
});


// review
app.get('/api/review', (req, res) => {
  mysql = `select * from reviews where listing_id =${Number(req.query.listingId) ? Number(req.query.listingId) : Number(req.body.listingId)}`;
  // mysql = `select * from reviews inner join responses on reviews.id=responses.review_id where reviews.id=1`
  db.query(mysql, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
});


// responses
app.get('/api/responses', (req, res) => {
  mysql = 'select * from responses';
  db.query(mysql, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
});

// response
app.get('/api/response', (req, res) => {
  mysql = `select * from responses where review_id = ${req.body.review_id}`;
  db.query(mysql, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
});

module.exports = app;
module.exports.port = port;