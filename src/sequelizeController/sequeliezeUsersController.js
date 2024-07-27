const { Op } = require("sequelize");
const { logger } = require("../../helpers/logger");
const { sequelizeErrorValidator } = require("../../helpers/helper");

const getUserDetailsByUserName = async ({ username }) => {
  try {
    logger.info("SQLZ - USER EXIT OR NOT CHECKER STARTED!");
  } catch (error) {
    logger.error(
      `SQLZ - ERROR OCCURRED IN USER EXIT OR NOT CHECKER! ${error?.message}`
    );
    const errorData = sequelizeErrorValidator(error);
    return errorData;
  }
};


module.exports = {
  getUserDetailsByUserName
};
