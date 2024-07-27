const { validation } = require("../helper");
const { logger } = require("../logger");
const { response } = require("../response");

const productValidation = {
  productsDetails: (req, res, next) => {
    try {
      let rules = {
        product_id: ["required"],
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
      logger.error(` [CATCH-ERROR] - Error in productsValidation ${err}`);
      return response({
        req,
        res,
        message: err?.message || "Validation failed",
        isError: true,
        code: 400,
        data: [],
      });
    }
  },

  create: (req, res, next) => {
    try {
      let rules = {
        name: ["required"],
        price: ["required", "numeric"],
        description: ["string"],
        quantity: ["numeric"],
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
      logger.error(`[CATCH-ERROR] - Error in productsValidation ${err}`);
      return response({
        req,
        res,
        message: err?.message || "Validation failed",
        isError: true,
        code: 400,
        data: [],
      });
    }
  },

  update: (req, res, next) => {
    try {
      let rules = {
        id: ["required"],
      };
      let bodyRules = {
        name: ["string"],
        description: ["string"],
        price: ["numeric"],
        quantity: ["numeric"],
      };
      const checkValidation = validation(req.params, rules);
      const bodyValidation = validation(req.body, bodyRules);
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
      } else if (bodyValidation !== true) {
        const fieldName = Object.keys(bodyValidation?.errors)[0];
        const msg =
          fieldName + ":" + bodyValidation?.errors[fieldName][0] ||
          bodyValidation;
        return response({
          req,
          res,
          message: msg,
          code: 400,
          data: bodyValidation,
          isError: true,
        });
      }
      next();
    } catch (err) {
      logger.error(`[CATCH-ERROR] - Error in productsValidation ${err}`);
      return response({
        req,
        res,
        message: err?.message || "Validation failed",
        isError: true,
        code: 400,
        data: [],
      });
    }
  },

  delete: (req, res, next) => {
    try {
      let rules = {
        id: ["required"],
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
      logger.error(`[CATCH-ERROR] -Error in productsValidation ${err}`);
      return response({
        req,
        res,
        message: err?.message || "Validation failed",
        isError: true,
        code: 400,
        data: [],
      });
    }
  },
};

module.exports = productValidation;
