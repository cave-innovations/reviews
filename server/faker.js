const faker = require('faker');

// listings
const listings = [];
for (var i = 0; i < 100; i++) {
  const listing = {};
  listing.host_firstName = faker.name.firstName();
  listing.host_lastName = faker.name.lastName();
  listing.image_url = faker.random.image();
  listings.push(listing);
}

// reviews
const reviews = [];
for (var i = 1; i <= 100; i++) {
  for (var j = (i - 1) * 25; j < i * 25; j++) {
    const review = {};
    review.traveler_firstName = faker.name.firstName();
    review.traveler_lastName = faker.name.lastName();
    review.date = faker.date.past();
    review.imageUrl = faker.random.image();
    review.review = faker.lorem.paragraph();
    review.rating_accuracy = faker.random.number({min: 1, max: 5});
    review.rating_communication = faker.random.number({min: 1, max: 5});
    review.rating_cleanliness = faker.random.number({min: 1, max: 5});
    review.rating_location = faker.random.number({min: 1, max: 5});
    review.rating_checkin = faker.random.number({min: 1, max: 5});
    review.rating_value = faker.random.number({min: 1, max: 5});
    review.listing_id = i;
    reviews.push(review);
  }
}


// responses
const responses = [];
for (var i = 1; i < 2500; i += 20) {
  const response = {};
  response.date = faker.date.past();
  response.response = faker.lorem.paragraph();
  response.review_id = i;
  responses.push(response);
}

module.exports = {
  reviews,
  listings,
  responses
};