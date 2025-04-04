const Address = require("../models/address");
const asyncErrorHandler = require("../middlewares/asyncErrorHandler");

exports.create = asyncErrorHandler(async (req, res) => {
	const created = new Address(req.body);
	await created.save();
	res.status(201).json(created);
});

exports.getUserById = asyncErrorHandler(async (req, res) => {
	const { id } = req.params;
	const results = await Address.find({ user: id });
	res.status(200).json(results);
});

exports.updateById = asyncErrorHandler(async (req, res) => {
	const { id } = req.params;
	const updated = await Address.findByIdAndUpdate(id, req.body, {
		new: true,
	});
});

exports.deleteById = asyncErrorHandler(async (req, res) => {
	const { id } = req.params;
	const deleted = await Address.findByIdAndDelete(id);
	res.status(200).json(deleted);
});
