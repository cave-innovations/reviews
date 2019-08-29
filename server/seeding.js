const mysql = require('mysql')
const faker = require('./faker')
const db = require('./db')

// populating the listings table
function populateListing(listing) {
  const listingSql = `insert into listings (host_firstname, host_lastname, image_url) values('${listing.host_firstName}','${listing.host_lastName}', '${listing.image_url}')`
  db.query(listingSql, (err, rows, fields) => {
    if(err) {
      console.log(err)
    } else {
      console.log(`Listing of ${listing.host_firstName} added!`)
    }
  })
}

faker.listings.forEach(listing => populateListing(listing))

// populating the reviews table
function populateReview(review) {
  const reviewSql = `insert into reviews (traveler_firstname,traveler_lastname, date, image_url, review, rating_accuracy, rating_communication, rating_cleanliness, rating_location, rating_checkin, rating_value, listing_id) values('${review.traveler_firstName}','${review.traveler_lastName}', '${review.date.toJSON().slice(0, 10).replace('T', ' ')}', '${review.imageUrl}', '${review.review}', ${review.rating_accuracy}, ${review.rating_communication}, ${review.rating_cleanliness}, ${review.rating_location}, ${review.rating_checkin}, ${review.rating_value}, ${review.listing_id})`
  db.query(reviewSql, (err, rows, fields) => {
    if(err) {
      console.log(err)
    } else {
      console.log(`Review of ${review.traveler_firstName} posted!`)
    }
  })
}
faker.reviews.forEach(review => populateReview(review))


//populating the responses table
function populateResponse(response) {
  const responseSql = `insert into responses (date, response, review_id) values(
  '${response.date.toJSON().slice(0, 10).replace('T', ' ')}', '${response.response}', ${response.review_id})`
  db.query(responseSql, (err, rows, fields) => {
    if(err) {
      console.log(err)
    } else {
      console.log(`Response to the review ${response.review_id} posted!`)
    }
  })
}

faker.responses.forEach(response => populateResponse(response))
