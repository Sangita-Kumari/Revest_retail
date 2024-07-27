const { DataTypes, Model } = require("sequelize");
const sequelize = require("../../config/dbConnection");

class Product extends Model {
  static associate(models) {
    this.belongsToMany(models.SalesOrder, {
      through: "salesorderproducts",
      foreignKey: "productid",
      otherKey: "salesorderid",
    });
  }
}

Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Product",
    tableName: "product",
    paranoid: true,
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
    deletedAt: "deleted_at",
  }
);

module.exports = Product;
