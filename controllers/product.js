const Product = require("../models/product");
const asyncErrorhandler = require("../middlewares/asyncErrorHandler");

exports.create = asyncErrorhandler(async (req, res) => {
	const created = new Product(req.body);
	await created.save();
	res.status(201).json(created);
});

exports.getAll = asyncErrorhandler(async (req, res) => {
	const filter = {};
	const sort = {};
	let skip = 0;
	let limit = 0;

	if (req.query.brand) {
		filter.brand = { $in: req.query.brand };
	}
	if (req.query.category) {
		filter.category = { $in: req.query.category };
	}
	if (req.query.user) {
		filter["isDeleted"] = false;
	}
	if (req.query.sort) {
		sort[req.query.sort] = req.query.order
			? req.query.order === "asc"
				? 1
				: -1
			: 1;
	}
	if (req.query.page && req.query.limit) {
		const pageSize = req.query.limit;
		const page = req.query.page;
		skip = pageSize * (page - 1);
		limit = pageSize;
	}
	const totalDocs = await Product.find(filter)
		.sort(sort)
		.populate("brand")
		.countDocuments()
		.exec();
	const results = await Product.find(filter)
		.sort(sort)
		.populate("brand")
		.skip(skip)
		.limit(limit)
		.exec();
	res.set("X-Total-Count", totalDocs);
	res.status(200).json(results);
});

exports.getById = asyncErrorhandler(async (req, res) => {
	const { id } = req.params;
	const result = await Product.findById(id)
		.populate("brand")
		.populate("category");
	res.status(200).json(result);
});

exports.updateById = asyncErrorhandler(async (req, res) => {
	const { id } = req.params;
	const updated = await Product.findByIdAndUpdate(id, req.body, {
		new: true,
	});
	res.status(200).json(updated);
});

exports.unDeleteById = asyncErrorhandler(async (req, res) => {
	const { id } = req.params;
	const unDeleted = await Product.findByIdAndUpdate(
		id,
		{ isDeleted: false },
		{ new: true }
	).populate("brand");
	res.status(200).json(unDeleted);
});

exports.deleteById = asyncErrorhandler(async (req, res) => {
	const { id } = req.params;
	const deleted = await Product.findByIdAndDelete(
		id,
		{ isDeleted: true },
		{ new: true }
	).populate("brand");
	res.status(200).json(deleted);
});
