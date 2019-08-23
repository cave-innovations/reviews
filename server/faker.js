const faker = require('faker')

const listings = []
for (var i=0; i<100; i++) {
  const listing = {}
  listing.host_firstName = faker.name.firstName()
  listing.host_lastName = faker.name.lastName()
  listing.image_url = faker.image.imageUrl()
  listings.push(listing)
}

const reviews = []
for (var i=0; i<2500; i++) {
  const review = {}
  review.traveler_firstName = faker.name.firstName()
  review.traveler_lastName = faker.name.lastName()
  review.date = faker.date.past()
  review.imageUrl = faker.image.imageUrl()
  review.review = faker.lorem.paragraph()
  review.rating_accuracy = faker.random.number({min:0, max:5})
  review.rating_communication = faker.random.number({min:0, max:5})
  review.rating_cleanliness = faker.random.number({min:0, max:5})
  review.rating_location = faker.random.number({min:0, max:5})
  review.rating_checkin = faker.random.number({min:0, max:5})
  review.rating_value = faker.random.number({min:0, max:5})
  reviews.push(review)

}



const responses = []
for (var i=0; i<2500; i++) {
  const response = {}
  response.date = faker.date.past()
  response.response = faker.lorem.paragraph()
}

module.exports = {
  reviews,
  listings,
  responses
}
