const request = require('supertest');
const { expect } = require('chai');
const app = require('../app');

describe('GET /', () => {
  it('Broken Endpoint with wrong status code. ', async () => {
    const response = await request(app).get('/');

    expect(response.status).to.equal(400);
    // expect(response.status).to.equal(200); is the right one
  });
});
