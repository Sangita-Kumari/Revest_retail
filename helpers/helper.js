const { response } = require("./response");
const Validator = require("validatorjs");

const sequelizeErrorValidator = (error) => {
  if (
    error?.name === "SequelizeValidationError" ||
    error?.name === "SequelizeUniqueConstraintError" ||
    error?.name === "SequelizeDatabaseError" ||
    error?.name === "SequelizeConnectionError" ||
    error?.name === "SequelizeConnectionRefusedError" ||
    error?.name === "SequelizeHostNotReachableError" ||
    error?.name === "SequelizeInvalidConnectionError" ||
    error?.name === "SequelizeConnectionTimedOutError" ||
    error?.name === "SequelizeHostNotFoundError"
  ) {
    return {
      code: 400,
      message: "Error occurred in validation/db constraint/db connection",
    };
  } else if (error?.name === "AggregateError") {
    return {
      code: 400,
      message: "Error occurred in Aggregate",
    };
  } else {
    return {
      code: 400,
      message:
        "column does not exist / inserting data getting error / Database table Error",
    };
  }
};

const auth = (req, res, next) => {
  try {
    const roleName = req.query.role;
    if (roleName == 1) {
      next();
    }
    return response({
      req,
      res,
      message: "Permission failed ",
      code: 444,
      data: [],
      isError: true,
    });
  } catch (error) {
    return response({
      req,
      res,
      message: "checker failed: " + error?.message,
      code: 444,
      data: [],
      isError: true,
    });
  }
};

module.exports = {
  validation: (data, rules) => {
    const customErrorMessages = {
      required: " field is required",
    };
    const validation = new Validator(data, rules, customErrorMessages);
    if (validation.fails()) {
      return validation.errors;
    }
    return true;
  },

  auth,
  sequelizeErrorValidator,
};
