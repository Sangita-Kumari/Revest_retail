const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const SalesOrderProduct = sequelize.define('SalesOrderProduct', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  salesOrderId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'SalesOrders',
      key: 'id'
    }
  },
  productId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Products',
      key: 'id'
    }
  }
});

module.exports = SalesOrderProduct;


