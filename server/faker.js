const faker = require('faker');

// listings
const listings = [];
for (var i = 0; i < 100; i++) {
  const listing = {};
  listing.hostFirstName = faker.name.firstName();
  listing.hostLastName = faker.name.lastName();
  listing.imageUrl = faker.random.image();
  listings.push(listing);
}

// reviews
const reviews = [];
for (var i = 1; i <= 100; i++) {
  for (var j = (i - 1) * 25; j < i * 25; j++) {
    const review = {};
    review.travelerFirstName = faker.name.firstName();
    review.travelerLastName = faker.name.lastName();
    review.date = faker.date.past();
    review.imageUrl = faker.random.image();
    review.review = faker.lorem.paragraph();
    review.ratingAccuracy = faker.random.number({min: 1, max: 5});
    review.ratingCommunication = faker.random.number({min: 1, max: 5});
    review.ratingCleanliness = faker.random.number({min: 1, max: 5});
    review.ratingLocation = faker.random.number({min: 1, max: 5});
    review.ratingCheckin = faker.random.number({min: 1, max: 5});
    review.ratingValue = faker.random.number({min: 1, max: 5});
    review.listingId = i;
    reviews.push(review);
  }
}


// responses
const responses = [];
for (var i = 1; i < 2500; i += 20) {
  const response = {};
  response.date = faker.date.past();
  response.response = faker.lorem.paragraph();
  response.reviewId = i;
  responses.push(response);
}

module.exports = {
  reviews,
  listings,
  responses
};