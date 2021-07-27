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
  failed: (res, code, err) => {
    if (code === 400) {
      const response = {
        success: false,
        data: null,
        code: code,
        error: err,
        message: "Error on client side (input false)",
      };
      res.json(response);
    } else if (code === 404) {
      const response = {
        success: false,
        data: null,
        code: code,
        error: err,
        message: "Data not found",
      };
      res.json(response);
    } else if (code === 502) {
      const response = {
        success: false,
        data: null,
        code: code,
        error: err,
        message: "Invalid response from another request",
      };
      res.json(response);
    }
  },
};

module.exports = response;
