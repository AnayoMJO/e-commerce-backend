const mongoose = require("mongoose");
const { Schema } = mongoose;

const reviewSchema = new mongoose.Schema(
	{
		user: {
			type: Schema.Types.Object,
			ref: "User",
			required: true,
		},
		product: {
			type: Schema.Types.Object,
			ref: "Product",
			required: true,
		},
		rating: {
			type: Number,
			required: true,
			min: 1,
			max: 5,
		},
		comment: {
			type: String,
			required: true,
		},
		createdAt: {
			type: Date,
			default: Date.now,
		},
	},
	{ versionKey: false }
);

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;
