const express = require("express");
const brandController = require("../controllers/brand");

const router = express.Router();

router.get("/", brandController.getAll);

module.exports = router;
