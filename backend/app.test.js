const app = require("./app");

const supertest = require("supertest");

const request = supertest(app);

describe('Test endpoint response', () => {
  it('should return the response', async () => {
    const response = await request.get('/test');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Hello world');
  });
})