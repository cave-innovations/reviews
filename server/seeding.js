const mysql = require('mysql');
const faker = require('./faker');
const db = require('./db');

// populating the listings table
var populateListing = function(listing) {
  const listingSql = `insert into listings (host_firstname, host_lastname, image_url) values('${listing.hostFirstName}','${listing.hostLastName}', '${listing.imageUrl}')`;
  db.query(listingSql, (err, rows, fields) => {
    if (err) {
      console.log(err);
    } else {
      console.log(`Listing of ${listing.hostFirstName} added!`);
    }
  });
};

faker.listings.forEach(listing => populateListing(listing));

// populating the reviews table
var populateReview = function(review) {
  const reviewSql = `insert into reviews (traveler_firstname,traveler_lastname, date, image_url, review, rating_accuracy, rating_communication, rating_cleanliness, rating_location, rating_checkin, rating_value, listing_id) values('${review.travelerFirstName}','${review.travelerLastName}', '${review.date.toJSON().slice(0, 10).replace('T', ' ')}', '${review.imageUrl}', '${review.review}', ${review.ratingAccuracy}, ${review.ratingCommunication}, ${review.ratingCleanliness}, ${review.ratingLocation}, ${review.ratingCheckin}, ${review.ratingValue}, ${review.listingId})`;
  db.query(reviewSql, (err, rows, fields) => {
    if (err) {
      console.log(err);
    } else {
      console.log(`Review of ${review.travelerFirstName} posted!`);
    }
  });
};

faker.reviews.forEach(review => populateReview(review));


//populating the responses table
// var populateResponse = function(response) {
//   const responseSql = `insert into responses (date, response, review_id) values(
//   '${response.date.toJSON().slice(0, 10).replace('T', ' ')}', '${response.response}', ${response.reviewId})`;
//   db.query(responseSql, (err, rows, fields) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(`Response to the review ${response.review_id} posted!`);
//     }
//   });
// };

// faker.responses.forEach(response => populateResponse(response));
