const request = require('supertest');
const app = require('../app');

describe('Call API', () => {
  it('should make a new call', async () => {
    const res = await request(app)
      .post('/api/calls/make')
      .set('Authorization', 'Bearer YOUR_ACCESS_TOKEN')
      .send({
      });

    expect(res.statusCode).toEqual(200);
    expect(res.body.result).toHaveProperty('callId');
  });



  it('should get the status of a call', async () => {
    const res = await request(app)
      .get('/api/calls/status')
      .query({ callId: 'VALID_CALL_ID' })
      .set('Authorization', 'Bearer YOUR_ACCESS_TOKEN');

    expect(res.statusCode).toEqual(200);
    expect(res.body.result).toHaveProperty('status');
  });

  

  it('should get the transcription of a call', async () => {
    const res = await request(app)
      .get('/api/calls/transcription')
      .query({ callId: 'VALID_CALL_ID' })
      .set('Authorization', 'Bearer YOUR_ACCESS_TOKEN');

    expect(res.statusCode).toEqual(200);
    expect(res.body.result).toHaveProperty('transcription');
  });

 

  it('should get post-call analysis', async () => {
    const res = await request(app)
      .get('/api/calls/post_analysis')
      .query({ callId: 'VALID_CALL_ID' })
      .set('Authorization', 'Bearer YOUR_ACCESS_TOKEN');

    expect(res.statusCode).toEqual(200);
    expect(res.body.result).toHaveProperty('analysis');
  });


});
