const request = require('supertest');
const app = require('../app');

describe('Supported Languages API', () => {
  it('should get supported languages with valid authentication', async () => {
    const res = await request(app)
      .get('/api/languages/supported_languages')
      .set('Authorization', `Bearer ${process.env.ACCESS_TOKEN}`);

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('result');
    expect(res.body.result).toHaveProperty('languages');
  });

 
});

describe('Supported Voices API', () => {
  it('should get supported voices with valid authentication', async () => {
    const res = await request(app)
      .get('/api/languages/supported_voices')
      .set('Authorization', `Bearer ${process.env.ACCESS_TOKEN}`);

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('result');
    expect(res.body.result).toHaveProperty('voice'); 
  });

});
