const router = require("express").Router();

router.use("/products", require("./productsRoutes"));
router.use("/sales-order", require("./SalesOrderRoutes"));

module.exports = router;
