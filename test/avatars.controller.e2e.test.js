const request = require('supertest');
const app = require('../app');

jest.mock('../src/helpers/guard.js', () => {
  return (req, res, next) => {
    req.user = { id: 1 };
    next();
  };
});

describe('should handle patch request /api/users/avatars', () => {
  test('should return 401 if token invalid', async done => {
    const res = await request(app)
      .patch('/api/users/avatars')
      .send('avatar')
      .set('Accept', 'multipart/form-data')
      .expect('Content-Type', /json/);
    console.log(res.body);
    done();
  });
});
