const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		price: {
			type: Number,
			required: true,
		},
		discountPercentage: {
			type: Number,
			default: 0,
		},
		category: {
			type: Schema.Types.ObjectId,
			ref: "Category",
			required: false,
		},
		brand: {
			type: Schema.Types.ObjectId,
			ref: "brand",
			required: false,
		},
		stockQuantity: {
			type: Number,
			required: false,
		},
		thumbnail: {
			type: String,
			required: false,
		},
		images: {
			type: Array,
			required: false,
		},
		isDeleted: {
			type: Boolean,
			default: false,
		},
	},
	{ timestamps: true, versionKey: false }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
