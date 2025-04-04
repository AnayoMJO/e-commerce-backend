const express = require("express");
const productController = require("../controllers/product");

const router = express.Router();

router
	.post("/", productController.create)
	.get("/", productController.getAll)
	.get("/:id", productController.getById)
	.patch("/:id", productController.updateById)
	.patch("/undelete/:id", productController.unDeleteById)
	.delete("/:id", productController.deleteById);

module.exports = router;
