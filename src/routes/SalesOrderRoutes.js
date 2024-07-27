const { Router } = require("express");
const {
  getSalesOrders,
  createSalesOrder,
  getSalesOrder,
  updateSalesOrder,
  deleteSalesOrder,
  restoreSalesOrder,
} = require("../controller/SalesController");
const salesOrderValidation = require("../../helpers/Validators/salesOrderValidation");

const router = Router();

router.get("/", getSalesOrders);
router.post("/create", salesOrderValidation.create, createSalesOrder);
router.get("/:id", salesOrderValidation.idParam, getSalesOrder);
router.put("/:id", salesOrderValidation.update, updateSalesOrder);
router.delete("/:id", salesOrderValidation.idParam, deleteSalesOrder);

module.exports = router;
