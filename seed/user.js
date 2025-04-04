const User = require("../models/user");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config({ path: "../config.env" });

const users = [
	{
		_id: "65b8e564ea5ce114184ccb96",
		name: "anayo",
		email: "anayo@gmail.com",
		password: "$2a$10$GH8p5cAsGFEdYsLaSfTQ3e1eUs7KbLmVBltjbX4DDCj2eyO2KW/Ze",
		isVerified: true,
		isAdmin: false,
		__v: 0,
	},
	{
		_id: "65c2526fdcd9253acfbaa731",
		name: "john",
		email: "john@gmail.com",
		password: "$2a$10$tosjkprqtomSah0VJNyKi.TIv1JU65pl1i1IJ6wUttjYw.ENF99jG",
		isVerified: true,
		isAdmin: false,
		__v: 0,
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
			const inserted = await User.insertMany(users);
			console.log("Users seeded successfully");
			mongoose.connection.close();
		} catch (error) {
			console.error("error inserting into database");
			mongoose.connection.close();
			process.exit(1);
		}
	});
