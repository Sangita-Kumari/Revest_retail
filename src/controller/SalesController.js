const SalesOrder = require("../models/SalesOrder");
const Product = require("../models/Product");
const axios = require("axios");
require("dotenv").config();
const { response } = require("../../helpers/response");
const { logger } = require("../../helpers/logger");
const { Op } = require("sequelize");

const getSalesOrders = async (req, res) => {
  try {
    const { customername, email, mobilenumber, status, orderdate } = req.query;
    const conditions = {};

    if (customername)
      conditions.customername = { [Op.like]: `%${customername}%` };
    if (email) conditions.email = { [Op.like]: `%${email}%` };
    if (mobilenumber)
      conditions.mobilenumber = { [Op.like]: `%${mobilenumber}%` };
    if (status) conditions.status = { [Op.eq]: status };
    if (orderdate) conditions.orderdate = { [Op.eq]: orderdate };
    const salesOrders = await SalesOrder.findAll({
      where: conditions,
    });

    return response({
      req,
      res,
      message: "Sales orders retrieved successfully",
      data: salesOrders,
      code: 200,
      isError: false,
    });
  } catch (error) {
    logger.error(`[CATCH-ERROR] - Error in get all sales orders: ${error}`);
    return response({
      req,
      res,
      message: error.message,
      isError: true,
      code: 400,
    });
  }
};

const createSalesOrder = async (req, res) => {
  try {
    const salesOrder = await SalesOrder.create(req.body);
    const salesOrderJson = salesOrder.toJSON();

    try {
      await axios.post(process.env.THIRD_PARTY_API_URL, salesOrderJson, {
        headers: {
          Authorization: `Bearer ${process.env.THIRD_PARTY_API_KEY}`,
        },
      });
      logger.info("Sales order pushed to third-party API successfully.");
    } catch (error) {
      logger.error(`Error pushing sales order to third-party API: ${error}`);
    }

    return response({
      req,
      res,
      message:
        "Sales order created successfully and uploaded to third party api",
      data: salesOrder,
      code: 201,
      isError: false,
    });
  } catch (error) {
    logger.error(`[CATCH-ERROR] - Error in creating sales order: ${error}`);
    return response({
      req,
      res,
      message: error.message,
      isError: true,
      code: 400,
    });
  }
};

const getSalesOrder = async (req, res) => {
  try {
    const salesOrder = await SalesOrder.findByPk(req.params.id, {
      include: Product,
    });
    if (!salesOrder) {
      return response({
        req,
        res,
        message: "Sales order not found",
        code: 404,
        isError: true,
      });
    }
    return response({
      req,
      res,
      message: "Sales order retrieved successfully",
      data: salesOrder,
      code: 200,
      isError: false,
    });
  } catch (error) {
    logger.error(`[CATCH-ERROR] - Error in getting sales order: ${error}`);
    return response({
      req,
      res,
      message: error.message,
      isError: true,
      code: 400,
    });
  }
};

const updateSalesOrder = async (req, res) => {
  try {
    const salesOrder = await SalesOrder.findByPk(req.params.id);
    if (!salesOrder) {
      return response({
        req,
        res,
        message: "Sales order not found",
        code: 404,
        isError: true,
      });
    }
    await salesOrder.update(req.body);
    if (req.body.productIds) {
      const products = await Product.findAll({
        where: { id: req.body.productIds },
      });
      await salesOrder.setProducts(products);
    }
    return response({
      req,
      res,
      message: "Sales order updated successfully",
      data: salesOrder,
      code: 200,
      isError: false,
    });
  } catch (error) {
    logger.error(`[CATCH-ERROR] - Error in updating sales order: ${error}`);
    return response({
      req,
      res,
      message: error.message,
      isError: true,
      code: 400,
    });
  }
};

const deleteSalesOrder = async (req, res) => {
  try {
    const salesOrder = await SalesOrder.findByPk(req.params.id);
    if (!salesOrder) {
      return response({
        req,
        res,
        message: "Sales order not found",
        code: 404,
        isError: true,
      });
    }
    await salesOrder.destroy();
    return response({
      req,
      res,
      message: "Sales order deleted successfully",
      code: 200,
      isError: false,
    });
  } catch (error) {
    logger.error(`[CATCH-ERROR] - Error in deleting sales order: ${error}`);
    return response({
      req,
      res,
      message: error.message,
      isError: true,
      code: 400,
    });
  }
};

module.exports = {
  getSalesOrders,
  createSalesOrder,
  getSalesOrder,
  updateSalesOrder,
  deleteSalesOrder,
};
