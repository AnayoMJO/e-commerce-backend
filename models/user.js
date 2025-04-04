const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "please enter your name"],
	},
	email: {
		type: String,
		unique: true,
		required: [true, "please enter your email"],
	},
	password: {
		type: String,
		required: [true, "please enter your password"],
		unique: true,
	},
	isVerified: {
		type: Boolean,
		default: false,
	},
	isAdmin: {
		type: Boolean,
		default: false,
	},
});

const User = mongoose.model("User", userSchema);
module.exports = User;
