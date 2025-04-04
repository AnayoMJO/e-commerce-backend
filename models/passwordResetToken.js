const mongoose = require("mongoose");
const { Schema } = mongoose;

const passwordResetTokenSchema = new mongoose.Schema({
	user: {
		type: Schema.Types.ObjectId,
		ref: "User",
		required: true,
	},
	token: {
		type: String,
		required: true,
	},
	expiresAt: {
		type: Date,
		required: true,
	},
});

const passwordResetToken = mongoose.model(
	"passwordResetToken",
	passwordResetTokenSchema
);
module.exports = passwordResetToken;
