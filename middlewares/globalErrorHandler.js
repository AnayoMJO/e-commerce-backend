const customError = require("../utils/customError");

const development = (res, error) => {
	res.status(error.statusCode).json({
		status: error.statusCode,
		message: error.message,
		stackTrace: error.stack,
		error: error,
	});
};

const castErrorHandler = (err) => {
	const mg = `invalid value ${err.value} for field ${err.path}`;
	return new customError(mg, 404);
};

const duplicateErrorHandler = (error) => {
	const name = error.keyValue.name;
	const mgs = `already in existance ${name} please use another`;
	return new customError(mgs, 404);
};

const validationErrorHandler = (err) => {
	const errors = Object.values(err.errors).map((val) => val.message);
	const errorMessages = errors.join(". ");
	const mgs = `inavlid input data:${errorMessages}`;
	return new customError(mgs, 404);
};

const handleExpiredJWT = (err) => {
	return new customError("JWT has expired please login again", 401);
};

const production = (res, error) => {
	if (error.isOperational) {
		res.status(error.statusCode).json({
			status: error.statusCode,
			message: error.message,
		});
	} else {
		res.status(500).json({
			status: error,
			message: "something went wrong please try again",
		});
	}
};

module.exports = (error, req, res, next) => {
	error.statusCode = error.statusCode || 500;
	error.status = error.status || "error";
	if (process.env.NODE_ENV === "development") {
		development(res, error);
	} else if (process.env.NODE_ENV === "production") {
		if (error.name === "CastError") {
			error = castErrorHandler(error);
		}
		if (error.code === 1100) (error) => duplicateErrorHandler(error);
		if (error.name === "validationError")
			(error) => validationErrorHandler(error);
		if (error.name === "TokenExpiredError") error = handleExpiredJWT(error);

		production(res, error);
	}
};
