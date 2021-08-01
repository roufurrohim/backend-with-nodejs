const { failed, resLogin } = require('../helpers/response');

const auth = (req, res, next) => {
  try {
    const { headers } = req;
    if (headers.token === '123abc') {
      next();
    } else {
      resLogin(res, 'Anda Harus Login');
    }
  } catch (error) {
    failed(res, 502, error);
  }
};

module.exports = auth;
