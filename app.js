const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const addressRoute = require("./routes/address");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const orderRoute = require("./routes/order");
const cartRoute = require("./routes/cart");
const brandRoute = require("./routes/brand");
const categoryRoute = require("./routes/category");
const reviewroute = require("./routes/review");
const wishlistRoute = require("./routes/wishlist");
const customError = require("./utils/customError");
const globalErrorHandler = require("./middlewares/globalErrorHandler");

let app = express();

app.use(
	cors({
		origin: process.env.ORIGIN,
		credentials: true,
		exposedHeaders: ["X-Total-Count"],
		methods: ["GET", "POST", "PATCH", "DELETE"],
	})
);
app.use(express.json());
app.use(bodyParser.json());
app.use(cookieParser());
app.use(morgan());
app.use((req, res, next) => {
	console.log(`${req.method} ${req.url}`);
	next();
});

app.use("/address", addressRoute);
app.use("/user", userRoute);
app.use("/auth", authRoute);
app.use("/product", productRoute);
app.use("/order", orderRoute);
app.use("/cart", cartRoute);
app.use("/brand", brandRoute);
app.use("/category", categoryRoute);
app.use("/review", reviewroute);
app.use("/wishlist", wishlistRoute);
app.all("*", (req, res, next) => {
	const err = new customError(
		`could not find the requested url: ${req.originalUrl} on the server`,
		400
	);
	next(err);
});
app.use(globalErrorHandler);

module.exports = app;
