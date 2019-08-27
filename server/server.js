const express = require('express');
const app = express();
const port = 5050;
const db = require('./db');

const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('public'));

// listings
app.get('/api/listings', (req, res) => {
  mysql = `select * from listings where id = ${Number(req.query.listingId)}`;
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
  mysql = `select * from reviews where listing_id =${Number(req.query.listingId)}`;
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
  mysql = `select * from responses where review_id = ${req.body.review_id}`;
  db.query(mysql, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
});

app.listen(port, () => console.log(`Server is listening on port ${port}`));