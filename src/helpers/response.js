const response = {
  success: (res, data, code, message) => {
    const response = {
      success: true,
      data: data,
      code: code,
      message: message,
    };
    res.json(response);
  },
  failed: (err) => {
    const response = {
      success: false,
      data: null,
      code: 404,
      message: err,
    };
    res.json(response);
  },
};

module.exports = response;
