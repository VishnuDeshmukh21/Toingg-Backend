const request = require('supertest');
const app = require('../app');

describe('Campaign API', () => {
  it('should create a new campaign', async () => {
    const res = await request(app)
      .post('api/campaigns/create')
      .set('Authorization', 'Bearer YOUR_ACCESS_TOKEN')
      .send({
        "title": "Example Campaign Titleaaaa",
        "voice": "jenny", 
        "language": "english",
    "script": "This is a placeholder script that is exactly 200 characters long. It is used to ensure that the input meets the minimum length requirement for the script field in the API request. This example text is used to test the validation to confirm that the length condition is met."
    ,    "purpose": "General purpose of the campaign", 
        "knowledgeBase": "Some knowledge base information",
        "calendar": "10Am to 10Pm IST",
        "firstLine": "Initial line for the campaign",
        "tone": "Neutral",
        "postCallAnalysis": False,
        "postCallAnalysisSchema": {}
    }
    );

    expect(res.statusCode).toEqual(201);
    expect(res.body.result).toHaveProperty('id');
  });

  
});


describe('Campaign API', () => {
  it('should get a list of campaigns', async () => {
    const res = await request(app)
      .get('api/campaigns/')
      .set('Authorization', 'Bearer YOUR_ACCESS_TOKEN');

    expect(res.statusCode).toEqual(200);
    expect(res.body.result).toBeInstanceOf(Array);
  });

  
});




describe('Campaign API', () => {
  it('should update an existing campaign', async () => {
    const res = await request(app)
      .post('api/campaigns/update')
      .set('Authorization', 'Bearer YOUR_ACCESS_TOKEN')
      .send({
        campaignModelData: {
          title: 'Updated Campaign',
          voice: 'default',
          language: 'english',
          script: 'Updated script...',
          purpose: 'Updated Purpose',
          knowledgeBase: 'Updated Knowledge Base',
          calendar: '10Am to 10Pm IST',
          firstLine: 'Updated First Line',
          tone: 'Neutral',
          postCallAnalysis: false,
          postCallAnalysisSchema: {}
        },
        campId: 'VALID_CAMPAIGN_ID'
      });

    expect(res.statusCode).toEqual(200);
    expect(res.body.result).toHaveProperty('id');
  });


});
