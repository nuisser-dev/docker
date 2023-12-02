const request = require('supertest');
const app = require('./index');

describe('GET /api/data', () => {
  it('should return a list of data', async () => {
    const response = await request(app).get('/api/data');

    expect(response.status).toBe(200);
    expect(response.body.length).toBe(10);
  });
});

afterAll(() => {
    // close the server
    app.close();
});
  