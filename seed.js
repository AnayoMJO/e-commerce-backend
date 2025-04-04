const mongoose = require("mongoose");
const Product = require("./models/product");
const dotenv = require("dotenv").config({ path: "./config.env" });

const products = [
	{
		title: "American Vintage Wood Pendant Light",
		description:
			"American Vintage Wood Pendant Light Farmhouse Antique Hanging Lamp Lampara Colgante",
		price: 46,
		discountPercentage: 8.84,
		stockQuantity: 138,
		brand: "65a7e20102e12c44f5994425",
		category: "65a7e24602e12c44f599443f",
		thumbnail: "https://cdn.dummyjson.com/product-images/99/thumbnail.jpg",
		images: "https://cdn.dummyjson.com/product-images/99/1.jpg",
		isDeleted: false,
		updatedAt: "2024-02-07T09:22:57.840Z",
	},
	{
		title: "Crystal chandelier maria theresa for 12 light",
		description: "Crystal chandelier maria theresa for 12 light",
		price: 47,
		discountPercentage: 16,
		stockQuantity: 133,
		brand: "65a7e20102e12c44f5994427",
		category: "65a7e24602e12c44f599443f",
		thumbnail: "https://cdn.dummyjson.com/product-images/100/thumbnail.jpg",
		images: "https://cdn.dummyjson.com/product-images/100/1.jpg",
		isDeleted: false,
		updatedAt: "2024-02-07T09:22:57.840Z",
	},
	{
		title: "iPhone 9",
		description: "An apple mobile which is nothing like apple",
		price: 549,
		discountPercentage: 12.96,
		stockQuantity: 14,
		brand: "65a7e20102e12c44f59943da",
		category: "65a7e24602e12c44f599442c",
		thumbnail: "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
		images: "https://cdn.dummyjson.com/product-images/1/1.jpg",
		isDeleted: false,
		updatedAt: "2024-02-07T09:22:57.840Z",
	},
	{
		title: "Fog Scent Xpressio Perfume custom",
		description:
			"Product details of Best Fog Scent Xpressio Perfume 100ml For Men cool long lasting perfumes for Men",
		price: 13,
		discountPercentage: 8.14,
		stockQuantity: 21,
		brand: "65a7e20102e12c44f59943e3",
		category: "65a7e24602e12c44f599442e",
		thumbnail: "https://cdn.dummyjson.com/product-images/13/thumbnail.webp",
		images: "https://cdn.dummyjson.com/product-images/13/1.jpg",
		isDeleted: false,
		updatedAt: "2024-02-07T09:22:57.840Z",
		stockQuantityQuantity: 5,
	},
	{
		title: "Samsung Universe 9",
		description:
			"Samsung's new variant which goes beyond Galaxy to the Universe",
		price: 1249,
		discountPercentage: 15.46,
		stockQuantity: 36,
		brand: "65a7e20102e12c44f59943db",
		category: "65a7e24602e12c44f599442c",
		thumbnail: "https://cdn.dummyjson.com/product-images/3/thumbnail.jpg",
		images: "https://cdn.dummyjson.com/product-images/3/1.jpg",
		isDeleted: false,
		updatedAt: "2024-02-07T09:22:57.840Z",
	},
	{
		title: "OPPOF19",
		description: "OPPO F19 is officially announced on April 2021.",
		price: 280,
		discountPercentage: 17.91,
		stockQuantity: 123,
		brand: "65a7e20102e12c44f59943dc",
		category: "65a7e24602e12c44f599442c",
		thumbnail: "https://cdn.dummyjson.com/product-images/4/thumbnail.jpg",
		images: "https://cdn.dummyjson.com/product-images/4/1.jpg",
		isDeleted: false,
		updatedAt: "2024-02-07T09:22:57.840Z",
	},
	{
		title: "Huawei P30",
		description:
			"Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
		price: 499,
		discountPercentage: 10.58,
		stockQuantity: 32,
		brand: "65a7e20102e12c44f59943dd",
		category: "65a7e24602e12c44f599442c",
		thumbnail: "https://cdn.dummyjson.com/product-images/5/thumbnail.jpg",
		images: "https://cdn.dummyjson.com/product-images/5/1.jpg",
		isDeleted: false,
		updatedAt: "2024-02-07T09:22:57.840Z",
	},
	{
		title: "MacBook Pro",
		description:
			"MacBook Pro 2021 with mini-LED display may launch between September, November",
		price: 1749,
		discountPercentage: 11.02,
		stockQuantity: 83,
		brand: "65a7e20102e12c44f59943da",
		category: "65a7e24602e12c44f599442d",
		thumbnail: "https://cdn.dummyjson.com/product-images/6/thumbnail.png",
		images: "https://cdn.dummyjson.com/product-images/6/1.png",
		isDeleted: false,
		updatedAt: "2024-02-07T09:22:57.840Z",
	},
	{
		title: "Samsung Galaxy Book",
		description:
			"Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched",
		price: 1499,
		discountPercentage: 4.15,
		stockQuantity: 50,
		brand: "65a7e20102e12c44f59943db",
		category: "65a7e24602e12c44f599442d",
		thumbnail: "https://cdn.dummyjson.com/product-images/7/thumbnail.jpg",
		images: "https://cdn.dummyjson.com/product-images/7/1.jpg",
		isDeleted: false,
		updatedAt: "2024-02-07T09:22:57.840Z",
	},
	{
		title: "Microsoft Surface Laptop 4",
		description:
			"Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibranttouchscreen.",
		price: 1499,
		discountPercentage: 10.23,
		stockQuantity: 68,
		brand: "65a7e20102e12c44f59943de",
		category: "65a7e24602e12c44f599442d",
		thumbnail: "https://cdn.dummyjson.com/product-images/8/thumbnail.jpg",
		images: "https://cdn.dummyjson.com/product-images/8/1.jpg",
		isDeleted: false,
		updatedAt: "2024-02-07T09:22:57.840Z",
	},
	{
		title: "Infinix INBOOK",
		description:
			"Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey – 1 Year Warranty",
		price: 1099,
		discountPercentage: 11.83,
		stockQuantity: 96,
		brand: "65a7e20102e12c44f59943df",
		category: "65a7e24602e12c44f599442d",
		thumbnail: "https://cdn.dummyjson.com/product-images/9/thumbnail.jpg",
		images: "https://cdn.dummyjson.com/product-images/9/1.jpg",
		isDeleted: false,
		updatedAt: "2024-02-07T09:22:57.840Z",
	},
	{
		title: "HP Pavilion 15-DK1056WM",
		description:
			"HP Pavilion 15-DK1056WM Gaming Laptop 10th Gen Core i5, 8GB, 256GB SSD, GTX 1650 4GB, Windows 10",
		price: 1099,
		discountPercentage: 6.18,
		stockQuantity: 89,
		brand: "65a7e20102e12c44f59943e0",
		category: "65a7e24602e12c44f599442d",
		thumbnail: "https://cdn.dummyjson.com/product-images/10/thumbnail.jpeg",
		images: "https://cdn.dummyjson.com/product-images/10/1.jpg",
		isDeleted: false,
		updatedAt: "2024-02-07T09:22:57.840Z",
	},
	{
		title: "perfume Oil",
		description:
			"Mega Discount, Impression of Acqua Di Gio by GiorgioArmani concentrated attar perfume Oil",
		price: 13,
		discountPercentage: 8.4,
		stockQuantity: 65,
		brand: "65a7e20102e12c44f59943e1",
		category: "65a7e24602e12c44f599442e",
		thumbnail: "https://cdn.dummyjson.com/product-images/11/thumbnail.jpg",
		images: "https://cdn.dummyjson.com/product-images/11/1.jpg",
		isDeleted: false,
		updatedAt: "2024-02-07T09:22:57.840Z",
	},
	{
		title: "Brown Perfume",
		description: "Royal_Mirage Sport Brown Perfume for Men & Women - 120ml",
		price: 40,
		discountPercentage: 15.66,
		stockQuantity: 52,
		brand: "65a7e20102e12c44f59943e2",
		category: "65a7e24602e12c44f599442e",
		thumbnail: "https://cdn.dummyjson.com/product-images/12/thumbnail.jpg",
		images: "https://cdn.dummyjson.com/product-images/12/1.jpg",
		isDeleted: false,
		updatedAt: "2024-02-07T09:22:57.840Z",
	},
	{
		title: "Fog Scent Xpressio Perfume",
		description:
			"Product details of Best Fog Scent Xpressio Perfume 100ml For Men cool long lasting perfumes for Men",
		price: 13,
		discountPercentage: 8.14,
		stockQuantity: 61,
		brand: "65a7e20102e12c44f59943e3",
		category: "65a7e24602e12c44f599442e",
		thumbnail: "https://cdn.dummyjson.com/product-images/13/thumbnail.webp",
		images: "https://cdn.dummyjson.com/product-images/13/1.jpg",

		updatedAt: "2024-02-07T09:22:57.840Z",
	},
	{
		title: "Non-Alcoholic Concentrated Perfume Oil",
		description:
			"Original Al Munakh® by Mahal Al Musk | Our Impression of Climate | 6ml Non-Alcoholic Concentrated Perfume Oil",
		price: 120,
		discountPercentage: 15.6,
		stockQuantity: 114,
		brand: "65a7e20102e12c44f59943e4",
		category: "65a7e24602e12c44f599442e",
		thumbnail: "https://cdn.dummyjson.com/product-images/14/thumbnail.jpg",
		images: "https://cdn.dummyjson.com/product-images/14/1.jpg",
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
			console.error("error inserting into database");
			mongoose.connection.close();
			process.exit(1);
		}
	});
