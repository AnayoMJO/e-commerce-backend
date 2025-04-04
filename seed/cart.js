const mongoose = require("mongoose");
const dotenv = require("dotenv").config({ path: "../config.env" });
const Cart = require("../models/cart");

const cartItems = [
	{
		_id: "65c357fe2f21c40d167c276b",
		user: "65b8e564ea5ce114184ccb96",
		product: "65a7e45902e12c44f5994453",
		quantity: 1,
	},
	{
		_id: "65c3581d2f21c40d167c278f",
		user: "65b8e564ea5ce114184ccb96",
		product: "65a7e45902e12c44f599445d",
		quantity: 4,
	},
	{
		_id: "65c3584f2f21c40d167c27f5",
		user: "65b8e564ea5ce114184ccb96",
		product: "65a7e45902e12c44f59944a1",
		quantity: 2,
	},
];

mongoose
	.connect(process.env.LOCAL_DB_CON, { useNewUrlParser: true })
	.then(() => {
		console.log("Database Connected successfully");
	})
	.catch(() => {
		console.log(
			"an error has occured cound not connect to DataBase please try again"
		);
	})
	.then(async () => {
		try {
			const inserted = await Cart.insertMany(cartItems);
			console.log("cartItems seeded successfully");
			mongoose.connection.close();
		} catch (error) {
			console.error("error inserting into database");
			mongoose.connection.close();
			process.exit(1);
		}
	});
