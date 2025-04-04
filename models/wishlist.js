const mongoose = require("mongoose");
const { Schema } = mongoose;

const wishlistSchema = new mongoose.Schema(
	{
		user: {
			type: Schema.Types.ObjectId,
			ref: "User",
			require: true,
		},
		product: {
			type: Schema.Types.ObjectId,
			ref: "Product",
			require: true,
		},
		note: {
			type: String,
		},
	},
	{ timestamps: true, versionKey: false }
);

const Wishlist = mongoose.model("Wishlist", wishlistSchema);
module.exports = Wishlist;
