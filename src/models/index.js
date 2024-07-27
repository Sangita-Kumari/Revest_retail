const Sequelize = require("sequelize");
const sequelize = require("../../config/dbConnection");

const SalesOrder = require("./SalesOrder");
const Product = require("./Product");
const SalesOrderProduct = require("./SalesOrderProduct");

// Define associations
SalesOrder.belongsToMany(Product, {
  through: SalesOrderProduct,
  foreignKey: "salesOrderId",
  otherKey: "productId",
});

Product.belongsToMany(SalesOrder, {
  through: SalesOrderProduct,
  foreignKey: "productId",
  otherKey: "salesOrderId",
});

const db = {
  sequelize,
  Sequelize,
  SalesOrder,
  Product,
  SalesOrderProduct,
};

module.exports = db;
