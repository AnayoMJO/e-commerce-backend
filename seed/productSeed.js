const mongoose = require("mongoose");
const Product = require("../models/product");
const dotenv = require("dotenv").config({ path: "../config.env" });

const products = [
	{
		_id: "65a7e45902e12c44f599444e",
		title: "iPhone 9",
		description: "An apple mobile which is nothing like apple",
		price: 549,
		discountPercentage: 12.96,
		stockQuantity: 14,
		brand: "65a7e20102e12c44f59943da",
		category: "65a7e24602e12c44f599442c",
		thumbnail: "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
		images: [
			"https://cdn.dummyjson.com/product-images/1/1.jpg",
			"https://cdn.dummyjson.com/product-images/1/2.jpg",
			"https://cdn.dummyjson.com/product-images/1/3.jpg",
			"https://cdn.dummyjson.com/product-images/1/4.jpg",
			"https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
		],
		isDeleted: false,
		updatedAt: "2024-02-07T09:22:57.840Z",
	},
	{
		_id: "65a7e45902e12c44f599445b",
		title: "Non-Alcoholic Concentrated Perfume Oil",
		description:
			"Original Al Munakh® by Mahal Al Musk | Our Impression of Climate | 6ml Non-Alcoholic Concentrated Perfume Oil",
		price: 120,
		discountPercentage: 15.6,
		stockQuantity: 114,
		brand: "65a7e20102e12c44f59943e4",
		category: "65a7e24602e12c44f599442e",
		thumbnail: "https://cdn.dummyjson.com/product-images/14/thumbnail.jpg",
		images: [
			"https://cdn.dummyjson.com/product-images/14/1.jpg",
			"https://cdn.dummyjson.com/product-images/14/2.jpg",
			"https://cdn.dummyjson.com/product-images/14/3.jpg",
			"https://cdn.dummyjson.com/product-images/14/thumbnail.jpg",
		],
		isDeleted: false,
		updatedAt: "2024-02-07T09:22:57.840Z",
	},
	{
		_id: "65a7e45902e12c44f599445c",
		title: "Eau De Perfume Spray",
		description:
			"Genuine  Al-Rehab spray perfume from UAE/Saudi Arabia/Yemen High Quality",
		price: 30,
		discountPercentage: 10.99,
		stockQuantity: 105,
		brand: "65a7e20102e12c44f59943e5",
		category: "65a7e24602e12c44f599442e",
		thumbnail: "https://cdn.dummyjson.com/product-images/15/thumbnail.jpg",
		images: [
			"https://cdn.dummyjson.com/product-images/15/1.jpg",
			"https://cdn.dummyjson.com/product-images/15/2.jpg",
			"https://cdn.dummyjson.com/product-images/15/3.jpg",
			"https://cdn.dummyjson.com/product-images/15/4.jpg",
			"https://cdn.dummyjson.com/product-images/15/thumbnail.jpg",
		],
		isDeleted: false,
		updatedAt: "2024-02-07T09:22:57.840Z",
	},
	{
		_id: "65a7e45902e12c44f599445d",
		title: "Hyaluronic Acid Serum",
		description:
			"L'OrÃ©al Paris introduces Hyaluron Expert Replumping Serum formulated with 1.5% Hyaluronic Acid",
		price: 19,
		discountPercentage: 13.31,
		stockQuantity: 110,
		brand: "65a7e20102e12c44f59943e6",
		category: "65a7e24602e12c44f599442f",
		thumbnail: "https://cdn.dummyjson.com/product-images/16/thumbnail.jpg",
		images: [
			"https://cdn.dummyjson.com/product-images/16/1.png",
			"https://cdn.dummyjson.com/product-images/16/2.webp",
			"https://cdn.dummyjson.com/product-images/16/3.jpg",
			"https://cdn.dummyjson.com/product-images/16/4.jpg",
			"https://cdn.dummyjson.com/product-images/16/thumbnail.jpg",
		],
		isDeleted: false,
		updatedAt: "2024-02-07T09:22:57.840Z",
	},
	{
		_id: "65a7e45902e12c44f599445e",
		title: "Tree Oil 30ml",
		description:
			"Tea tree oil contains a number of compounds, including terpinen-4-ol, that have been shown to kill certain bacteria,",
		price: 12,
		discountPercentage: 4.09,
		stockQuantity: 78,
		brand: "65a7e20102e12c44f59943e7",
		category: "65a7e24602e12c44f599442f",
		thumbnail: "https://cdn.dummyjson.com/product-images/17/thumbnail.jpg",
		images: [
			"https://cdn.dummyjson.com/product-images/17/1.jpg",
			"https://cdn.dummyjson.com/product-images/17/2.jpg",
			"https://cdn.dummyjson.com/product-images/17/3.jpg",
			"https://cdn.dummyjson.com/product-images/17/thumbnail.jpg",
		],
		isDeleted: false,
		updatedAt: "2024-02-07T09:22:57.840Z",
	},
	{
		_id: "65a7e45902e12c44f599445f",
		title: "Oil Free Moisturizer 100ml",
		description:
			"Dermive Oil Free Moisturizer with SPF 20 is specifically formulated with ceramides, hyaluronic acid & sunscreen.",
		price: 40,
		discountPercentage: 13.1,
		stockQuantity: 88,
		brand: "65a7e20102e12c44f59943e8",
		category: "65a7e24602e12c44f599442f",
		thumbnail: "https://cdn.dummyjson.com/product-images/18/thumbnail.jpg",
		images: [
			"https://cdn.dummyjson.com/product-images/18/1.jpg",
			"https://cdn.dummyjson.com/product-images/18/2.jpg",
			"https://cdn.dummyjson.com/product-images/18/3.jpg",
			"https://cdn.dummyjson.com/product-images/18/4.jpg",
			"https://cdn.dummyjson.com/product-images/18/thumbnail.jpg",
		],
		isDeleted: false,
		updatedAt: "2024-02-07T09:22:57.840Z",
	},
	{
		_id: "65a7e45902e12c44f5994460",
		title: "Skin Beauty Serum.",
		description:
			"Product name: rorec collagen hyaluronic acid white face serum riceNet weight: 15 m",
		price: 46,
		discountPercentage: 10.68,
		stockQuantity: 54,
		brand: "65a7e20102e12c44f59943e9",
		category: "65a7e24602e12c44f599442f",
		thumbnail: "https://cdn.dummyjson.com/product-images/19/thumbnail.jpg",
		images: [
			"https://cdn.dummyjson.com/product-images/19/1.jpg",
			"https://cdn.dummyjson.com/product-images/19/2.jpg",
			"https://cdn.dummyjson.com/product-images/19/3.png",
			"https://cdn.dummyjson.com/product-images/19/thumbnail.jpg",
		],
		isDeleted: false,
		updatedAt: "2024-02-07T09:22:57.840Z",
	},
	{
		_id: "65a7e45902e12c44f5994461",
		title: "Freckle Treatment Cream- 15gm",
		description:
			"Fair & Clear is Pakistan's only pure Freckle cream which helpsfade Freckles, Darkspots and pigments. Mercury level is 0side effects.",
		price: 70,
		discountPercentage: 16.99,
		stockQuantity: 140,
		brand: "65a7e20102e12c44f59943ea",
		category: "65a7e24602e12c44f599442f",
		thumbnail: "https://cdn.dummyjson.com/product-images/20/thumbnail.jpg",
		images: [
			"https://cdn.dummyjson.com/product-images/20/1.jpg",
			"https://cdn.dummyjson.com/product-images/20/2.jpg",
			"https://cdn.dummyjson.com/product-images/20/3.jpg",
			"https://cdn.dummyjson.com/product-images/20/4.jpg",
			"https://cdn.dummyjson.com/product-images/20/thumbnail.jpg",
		],
		isDeleted: false,
		updatedAt: "2024-02-07T09:22:57.840Z",
	},
	{
		_id: "65a7e45902e12c44f5994462",
		title: "- Daal Masoor 500 grams",
		description: "Fine quality Branded Product Keep in a cool and dry place",
		price: 20,
		discountPercentage: 4.81,
		stockQuantity: 133,
		brand: "65a7e20102e12c44f59943eb",
		category: "65a7e24602e12c44f5994430",
		thumbnail: "https://cdn.dummyjson.com/product-images/21/thumbnail.png",
		images: [
			"https://cdn.dummyjson.com/product-images/21/1.png",
			"https://cdn.dummyjson.com/product-images/21/2.jpg",
			"https://cdn.dummyjson.com/product-images/21/3.jpg",
		],
		isDeleted: false,
		updatedAt: "2024-02-07T09:22:57.840Z",
	},
	{
		_id: "65a7e45902e12c44f5994463",
		title: "Elbow Macaroni - 400 gm",
		description: "Product details of Bake Parlor Big Elbow Macaroni - 400 gm",
		price: 14,
		discountPercentage: 15.58,
		stockQuantity: 146,
		brand: "65a7e20102e12c44f59943ec",
		category: "65a7e24602e12c44f5994430",
		thumbnail: "https://cdn.dummyjson.com/product-images/22/thumbnail.jpg",
		images: [
			"https://cdn.dummyjson.com/product-images/22/1.jpg",
			"https://cdn.dummyjson.com/product-images/22/2.jpg",
			"https://cdn.dummyjson.com/product-images/22/3.jpg",
		],
		isDeleted: false,
		updatedAt: "2024-02-07T09:22:57.840Z",
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
			const inserted = await Product.insertMany(products);
			console.log("Product seeded successfully");
			mongoose.connection.close();
		} catch (error) {
			console.log(error);
			console.error("error inserting into database");
			mongoose.connection.close();
			process.exit(1);
		}
	});
