const request = require('supertest');
const app = require('../app');

describe('Campaign API', () => {
  it('should create a new campaign', async () => {
    const res = await request(app)
      .post('/api/campaigns/create')
      .send({
        name: 'Test Campaign',
        description: 'This is a test campaign'
      });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('id');
  });

  // Add other tests similarly
});