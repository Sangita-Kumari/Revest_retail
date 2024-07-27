const { validation } = require("../helper");
const { logger } = require("../logger");
const { response } = require("../response");

const salesOrderValidation = {
  create: (req, res, next) => {
    try {
      let rules = {
        customername: "required|string",
        email: "required|email",
        mobilenumber: "required|numeric",
        status: "required|string",
        orderdate: "required|date",
      };

      const checkValidation = validation(req.body, rules);
      if (checkValidation !== true) {
        const fieldName = Object.keys(checkValidation?.errors)[0];
        const msg =
          fieldName + ":" + checkValidation?.errors[fieldName][0] ||
          checkValidation;
        return response({
          req,
          res,
          message: msg,
          code: 400,
          data: checkValidation,
          isError: true,
        });
      }
      next();
    } catch (err) {
      logger.error(`[CATCH-ERROR] - Error in salesOrderValidation: ${err}`);
      return response({
        req,
        res,
        message: err.message || "Validation failed",
        isError: true,
        code: 400,
        data: [],
      });
    }
  },

  update: (req, res, next) => {
    try {
      let rules = {
        customerName: "string",
        email: "email",
        mobileNumber: "phone",
        status: "string",
        orderDate: "date",
        productIds: "array",
      };

      const checkValidation = validation(req.body, rules);
      if (checkValidation !== true) {
        const fieldName = Object.keys(checkValidation?.errors)[0];
        const msg =
          fieldName + ":" + checkValidation?.errors[fieldName][0] ||
          checkValidation;
        return response({
          req,
          res,
          message: msg,
          code: 400,
          data: checkValidation,
          isError: true,
        });
      }
      next();
    } catch (err) {
      logger.error(`[CATCH-ERROR] - Error in salesOrderValidation: ${err}`);
      return response({
        req,
        res,
        message: err.message || "Validation failed",
        isError: true,
        code: 400,
        data: [],
      });
    }
  },

  idParam: (req, res, next) => {
    try {
      let rules = {
        id: "required",
      };

      const checkValidation = validation(req.params, rules);
      if (checkValidation !== true) {
        const fieldName = Object.keys(checkValidation?.errors)[0];
        const msg =
          fieldName + ":" + checkValidation?.errors[fieldName][0] ||
          checkValidation;
        return response({
          req,
          res,
          message: msg,
          code: 400,
          data: checkValidation,
          isError: true,
        });
      }
      next();
    } catch (err) {
      logger.error(`[CATCH-ERROR] - Error in salesOrderValidation: ${err}`);
      return response({
        req,
        res,
        message: err.message || "Validation failed",
        isError: true,
        code: 400,
        data: [],
      });
    }
  },
};

module.exports = salesOrderValidation;
