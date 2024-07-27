const { DataTypes, Model } = require("sequelize");
const sequelize = require("../../config/dbConnection"); // Adjust the path as per your project structure

class SalesOrder extends Model {}

SalesOrder.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    customername: {
      type: DataTypes.STRING(255), // Max length of 255 characters
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(255), // Max length of 255 characters
      allowNull: false,
    },
    mobilenumber: {
      type: DataTypes.STRING(255), // Max length of 255 characters
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING(255), // Max length of 255 characters
      allowNull: false,
    },
    orderdate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    deleted_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "SalesOrder",
    tableName: "salesorder",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
    deletedAt: "deleted_at",
  }
);

module.exports = SalesOrder;


