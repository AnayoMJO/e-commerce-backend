const Category = require("../models/category");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config({ path: "../config.env" });

const categories = [
	{ _id: "65a7e24602e12c44f599442c", name: "smartphones" },
	{ _id: "65a7e24602e12c44f599442d", name: "laptops" },
	{ _id: "65a7e24602e12c44f599442e", name: "fragrances" },
	{ _id: "65a7e24602e12c44f599442f", name: "skincare" },
	{ _id: "65a7e24602e12c44f5994430", name: "groceries" },
	{ _id: "65a7e24602e12c44f5994431", name: "home-decoration" },
	{ _id: "65a7e24602e12c44f5994432", name: "furniture" },
	{ _id: "65a7e24602e12c44f5994433", name: "tops" },
	{ _id: "65a7e24602e12c44f5994434", name: "womens-dresses" },
	{ _id: "65a7e24602e12c44f5994435", name: "womens-shoes" },
	{ _id: "65a7e24602e12c44f5994436", name: "mens-shirts" },
	{ _id: "65a7e24602e12c44f5994437", name: "mens-shoes" },
	{ _id: "65a7e24602e12c44f5994438", name: "mens-watches" },
	{ _id: "65a7e24602e12c44f5994439", name: "womens-watches" },
	{ _id: "65a7e24602e12c44f599443a", name: "womens-bags" },
	{ _id: "65a7e24602e12c44f599443b", name: "womens-jewellery" },
	{ _id: "65a7e24602e12c44f599443c", name: "sunglasses" },
	{ _id: "65a7e24602e12c44f599443d", name: "automotive" },
	{ _id: "65a7e24602e12c44f599443e", name: "motorcycle" },
	{ _id: "65a7e24602e12c44f599443f", name: "lighting" },
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
			const inserted = await Category.insertMany(categories);
			console.log("categories seeded successfully");
			mongoose.connection.close();
		} catch (error) {
			console.error("error inserting into database");
			mongoose.connection.close();
			process.exit(1);
		}
	});
