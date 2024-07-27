const { logger } = require("./logger");
const moment = require("moment");

const response = ({ req, res, code, message, data, isError }) => {
  try {
    logger.info(
      `FINAL RESPONSE: [${req.method}]:${req.originalUrl}, [isError]: ${isError}, [statusCode]: ${code}, [message]: ${message}`
    );

    return res.status(200).json({
      isError: isError || false,
      code: code || (isError == false ? 200 : 4444),
      message: message,
      data: data || [],
    });
  } catch (error) {
    logger.error(`[CATCH-ERROR]: RESPONSE HANDLER ERROR ${error?.message}`);
    return res.status(200).json({
      code: code || 4444,
      message: error?.message || "Error in response handler",
      data: data || [],
    });
  }
};

module.exports = {
  response,
};
