const productValidation = require("../../helpers/Validators/productsValidator");
const {
  getAllProductsContoller,
  createProductController,
  updateProductController,
  deleteProductController,
} = require("../controller/ProductController");

const router = require("express").Router();

router.get("/", getAllProductsContoller);
router.post("/create", productValidation.create, createProductController);
router.put("/update/:id", productValidation.update, updateProductController);
router.delete("/delete/:id", productValidation.delete, deleteProductController);

module.exports = router;
