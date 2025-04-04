const mongoose = require("mongoose");
const { Schema } = mongoose;

const otpSchema = new mongoose.Schema({
	user: {
		type: Schema.Types.ObjectId,
		ref: "User",
		required: true,
	},
	otp: {
		type: String,
		required: true,
	},
	expiresAt: {
		type: Date,
		required: true,
	},
});

const otp = mongoose.model("otp", otpSchema);
module.exports = otp;
