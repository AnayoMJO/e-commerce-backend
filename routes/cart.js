const express = require("express");

const cartControler = require("../controllers/cart");

const router = express.Router();

router
	.post("/", cartControler.create)
	.get("/user/:id", cartControler.getByUserId)
	.patch("/:id", cartControler.updateById)
	.delete("/:id", cartControler.deleteById)
	.delete("/user/:id", cartControler.deleteByUserId);

module.exports = router;
