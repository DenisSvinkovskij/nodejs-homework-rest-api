const request = require('supertest');
const app = require('../app');
// const jwt = require('jsonwebtoken');
// const fs = require('fs');
// const path = require('path');

// require('dotenv').config();
// const { User } = require('../src/model/__mocks__/data');

// const SECRET_KEY = process.env.JWT_SECRET_KEY;
// const issueToken = (payload, secret) => jwt.sign(payload, secret);
// const token = issueToken({ id: User._id }, SECRET_KEY);

// jest.mock('cloudinary');

// const pathFile = path.join(__dirname, 'default-avatar-female.jpg');

// const buffer = fs.readFileSync(pathFile);
// jest.mock('../src/helpers/guard.js', () => {
//   return (req, res, next) => {
//     req.user = { id: 1 };
//     next();
//   };
// });

describe('should handle patch request /api/users/avatars', () => {
  test('should return 401 if token invalid', async done => {
    const res = await request(app)
      .patch('/api/users/avatars')
      .send('avatar')
      .set('Authorization', `Bearer`)
      .set('Accept', 'multipart/form-data')
      .expect('Content-Type', /json/);

    expect(res.status).toEqual(401);
    expect(res.body).toBeDefined();
    done();
  });

  // test('should return  in success', async () => {
  //   const res = await request(app)
  //     .patch(`/api/users/avatars`)
  //     .set('Authorization', `Bearer ${token}`)
  //     .attach('avatar', buffer, 'default-avatar-female.jpg');
  //   console.log(res.body);

  //   expect(res.status).toEqual(200);
  //   expect(res.body).toBeDefined();
  // });
});
