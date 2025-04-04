const jwt = require("jsonwebtoken");

exports.generateToken = (payload, passwordReset = false) => {
	return jwt.sign(payload, process.env.SECRET_STR, {
		expiresIn: passwordReset
			? process.env.PASSWORD_RESET_TOKEN_EXPIRATION
			: process.env.LOGIN_EXPIRES,
	});
};
