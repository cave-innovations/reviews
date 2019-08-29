import "regenerator-runtime/runtime"
import "core-js/stable";


const request = require('supertest')

const app = require('../server/app')

describe('GET /api/listings', () => {

  test('It should responds with an array of listings of length 100', async() => {
    const response = await request(app).get('/api/listings')
    console.log('Harrison',app)
    expect(response.body.length).toEqual(100);
    expect(response.statusCode).toBe(200);
  });
})

describe('GET /api/listing', () => {
  test('It should responds with an array containing a single listing object with properties Host_FirstName, Host_LastName, Image_Url', async() => {
    const response = await request(app).get('/api/listing').send({listingId: 1})
    expect(response.body[0].Host_FirstName).toBeDefined();
    expect(response.body[0].Host_LastName).toBeTruthy();
    expect(response.body[0].Image_Url).toBeTruthy();
    expect(response.statusCode).toBe(200);
  })
})


describe('GET /api/reviews', () => {
  test('It should responds with an array of reviews of length greater than 2000', async() => {
    const response = await request(app).get('/api/reviews')
    expect(response.body.length).toBeGreaterThan(2000)
    expect(response.statusCode).toBe(200)
  })
})

describe('GET /api/review', () => {
  test('It should responds with an array of reviews of length greater than 20 with each review containing the six rating properties ', async() => {
    const response = await request(app).get('/api/review').send({listingId: 1})
    expect(response.body.length).toBeGreaterThan(20);
    expect(response.body[0].Rating_Accuracy).toBeDefined();
    expect(response.body[0].Rating_Communication).toBeTruthy();
    expect(response.body[0].Rating_Cleanliness).toBeTruthy();
    expect(response.body[0].Rating_Location).toBeTruthy();
    expect(response.body[0].Rating_CheckIn).toBeTruthy();
    expect(response.body[0].Rating_Value).toBeTruthy();
    expect(response.statusCode).toBe(200);
  })
})

describe('GET /api/responses', () => {
  test('It should return an array of responses with each response containing properties date, response', async() => {
    const response = await request(app).get('/api/responses')
    expect(response.body[0].Date).toBeDefined()
    expect(response.body[0].Response).toBeDefined()
    expect(response.statusCode).toBe(200)
  })
})