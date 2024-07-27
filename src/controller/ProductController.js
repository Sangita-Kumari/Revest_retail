const { response } = require("../../helpers/response");
const Product = require("../models/Product");
const { logger } = require("../../helpers/logger");

const createProductController = async (req, res) => {
  try {
    const { name, descritpion, price, quantity = 0 } = req.body;
    let createData = {
      name: name,
      description: descritpion,
      price: price,
      quantity: quantity || 0,
    };
    const product = await Product.create(createData);
    return response({
      req,
      res,
      message: "Product created successfully",
      data: product,
      code: 200,
      isError: false,
    });
  } catch (error) {
    logger.error(`[CATCH-ERROR] - Error in create product ${error}`);
    return response({
      req,
      res,
      message: error?.message || "failed to create product",
      isError: true,
      code: 400,
    });
  }
};

const getAllProductsContoller = async (req, res) => {
  try {
    const products = await Product.findAll();
    return response({
      req,
      res,
      message: "Products retrieved successfully",
      data: products,
      code: 200,
      isError: false,
    });
  } catch (error) {
    logger.error(`[CATCH-ERROR] - Error in get all products ${error}`);
    return response({
      req,
      res,
      message: error.message,
      isError: true,
      code: 400,
    });
  }
};

const getProductById = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (!product) {
      return response({
        req,
        res,
        message: "Product not found",
        isError: true,
        code: 404,
      });
    }
    return response({
      req,
      res,
      message: "Product retrieved successfully",
      data: product,
      code: 200,
      isError: false,
    });
  } catch (error) {
    logger.error(`[CATCH-ERROR] - Error in get product by id ${error}`);
    return response({
      req,
      res,
      message: error.message,
      isError: true,
      code: 400,
    });
  }
};

const updateProductController = async (req, res) => {
  try {
    const productId = req.params.id;
    const product = await Product.findByPk(productId);

    if (!product) {
      return response({
        req,
        res,
        message: "Product not found",
        isError: true,
        code: 404,
      });
    }

    const updatedProduct = await product.update(req.body, {
      fields: Object.keys(req.body),
    });

    return response({
      req,
      res,
      message: "Product updated successfully",
      data: updatedProduct,
      code: 200,
      isError: false,
    });
  } catch (error) {
    logger.error(`[CATCH-ERROR] - Error in update product ${error}`);
    return response({
      req,
      res,
      message: error.message,
      isError: true,
      code: 400,
    });
  }
};

const deleteProductController = async (req, res) => {
  try {
    const productId = req.params.id;

    const product = await Product.findByPk(productId);
    if (!product) {
      return response({
        req,
        res,
        message: "Product not found",
        isError: true,
        code: 404,
      });
    }
    await product.destroy();
    return response({
      req,
      res,
      message: "Product deleted successfully",
      data: {},
      code: 200,
      isError: false,
    });
  } catch (error) {
    logger.error(`[CATCH-ERROR] -Error in delete product ${error}`);
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
  createProductController,
  getAllProductsContoller,
  getProductById,
  updateProductController,
  deleteProductController,
};
