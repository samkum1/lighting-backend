const sendSuccessResponse = (res, data, message = 'Success') => {
  res.status(200).json({ success: true, message, data });
};

const sendErrorResponse = (res, message, statusCode = 400) => {
  res.status(statusCode).json({ success: false, message });
};

module.exports = {
  sendSuccessResponse,
  sendErrorResponse,
};
