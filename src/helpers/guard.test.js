const guard = require('./guard');
const passport = require('passport');
require('../config/passport');

describe('Unit testing guard middleware', () => {
  let req, res, next;
  beforeEach(() => {
    (req = {}), (res = {}), (next = jest.fn());
  });
  test('should guard stop auth', async () => {
    const resu = await guard(req, res, next);
    expect(passport).toHaveBeenCalled();
    // passport.authenticate.toBeDefined();
    console.log(resu);
  });
});
