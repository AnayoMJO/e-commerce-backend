const mongoose = require("mongoose");
const Brand = require("../models/brand");
const dotenv = require("dotenv").config({ path: "../config.env" });

const brands = [
	{ _id: "65a7e20102e12c44f59943da", name: "Apple" },
	{ _id: "65a7e20102e12c44f59943db", name: "Samsung" },
	{ _id: "65a7e20102e12c44f59943dc", name: "OPPO" },
	{ _id: "65a7e20102e12c44f59943dd", name: "Huawei" },
	{ _id: "65a7e20102e12c44f59943de", name: "Microsoft Surface" },
	{ _id: "65a7e20102e12c44f59943df", name: "Infinix" },
	{ _id: "65a7e20102e12c44f59943e0", name: "HP Pavilion" },
	{ _id: "65a7e20102e12c44f59943e1", name: "Impression of Acqua Di Gio" },
	{ _id: "65a7e20102e12c44f59943e2", name: "Royal_Mirage" },
	{ _id: "65a7e20102e12c44f59943e3", name: "Fog Scent Xpressio" },
	{ _id: "65a7e20102e12c44f59943e4", name: "Al Munakh" },
	{ _id: "65a7e20102e12c44f59943e5", name: "Lord - Al-Rehab" },
	{ _id: "65a7e20102e12c44f59943e6", name: "L'Oreal Paris" },
	{ _id: "65a7e20102e12c44f59943e7", name: "Hemani Tea" },
	{ _id: "65a7e20102e12c44f59943e8", name: "Dermive" },
	{ _id: "65a7e20102e12c44f59943e9", name: "ROREC White Rice" },
	{ _id: "65a7e20102e12c44f59943ea", name: "Fair & Clear" },
	{ _id: "65a7e20102e12c44f59943eb", name: "Saaf & Khaas" },
	{ _id: "65a7e20102e12c44f59943ec", name: "Bake Parlor Big" },
	{ _id: "65a7e20102e12c44f59943ed", name: "Baking Food Items" },
	{ _id: "65a7e20102e12c44f59943ee", name: "fauji" },
	{ _id: "65a7e20102e12c44f59943ef", name: "Dry Rose" },
	{ _id: "65a7e20102e12c44f59943f0", name: "Boho Decor" },
	{ _id: "65a7e20102e12c44f59943f1", name: "Flying Wooden" },
	{ _id: "65a7e20102e12c44f59943f2", name: "LED Lights" },
	{ _id: "65a7e20102e12c44f59943f3", name: "luxury palace" },
	{ _id: "65a7e20102e12c44f59943f4", name: "Golden" },
	{ _id: "65a7e20102e12c44f59943f5", name: "Furniture Bed Set" },
	{ _id: "65a7e20102e12c44f59943f6", name: "Ratttan Outdoor" },
	{ _id: "65a7e20102e12c44f59943f7", name: "Kitchen Shelf" },
	{ _id: "65a7e20102e12c44f59943f8", name: "Multi Purpose" },
	{ _id: "65a7e20102e12c44f59943f9", name: "AmnaMart" },
	{ _id: "65a7e20102e12c44f59943fa", name: "Professional Wear" },
	{ _id: "65a7e20102e12c44f59943fb", name: "Soft Cotton" },
	{ _id: "65a7e20102e12c44f59943fc", name: "Top Sweater" },
	{ _id: "65a7e20102e12c44f59943fd", name: "RED MICKY MOUSE.." },
	{ _id: "65a7e20102e12c44f59943fe", name: "Digital Printed" },
	{ _id: "65a7e20102e12c44f59943ff", name: "Ghazi Fabric" },
	{ _id: "65a7e20102e12c44f5994400", name: "IELGY" },
	{ _id: "65a7e20102e12c44f5994401", name: "IELGY fashion" },
	{ _id: "65a7e20102e12c44f5994402", name: "Synthetic Leather" },
	{ _id: "65a7e20102e12c44f5994403", name: "Sandals Flip Flops" },
	{ _id: "65a7e20102e12c44f5994404", name: "Maasai Sandals" },
	{ _id: "65a7e20102e12c44f5994405", name: "Arrivals Genuine" },
	{ _id: "65a7e20102e12c44f5994406", name: "Vintage Apparel" },
	{ _id: "65a7e20102e12c44f5994407", name: "FREE FIRE" },
	{ _id: "65a7e20102e12c44f5994408", name: "The Warehouse" },
	{ _id: "65a7e20102e12c44f5994409", name: "Sneakers" },
	{ _id: "65a7e20102e12c44f599440a", name: "Rubber" },
	{ _id: "65a7e20102e12c44f599440b", name: "Naviforce" },
	{ _id: "65a7e20102e12c44f599440c", name: "SKMEI 9117" },
	{ _id: "65a7e20102e12c44f599440d", name: "Strap Skeleton" },
	{ _id: "65a7e20102e12c44f599440e", name: "Stainless" },
	{ _id: "65a7e20102e12c44f599440f", name: "Eastern Watches" },
	{ _id: "65a7e20102e12c44f5994410", name: "Luxury Digital" },
	{ _id: "65a7e20102e12c44f5994411", name: "Watch Pearls" },
	{ _id: "65a7e20102e12c44f5994412", name: "Bracelet" },
	{ _id: "65a7e20102e12c44f5994413", name: "LouisWill" },
	{ _id: "65a7e20102e12c44f5994414", name: "Copenhagen Luxe" },
	{ _id: "65a7e20102e12c44f5994415", name: "Steal Frame" },
	{ _id: "65a7e20102e12c44f5994416", name: "Darojay" },
	{ _id: "65a7e20102e12c44f5994417", name: "Fashion Jewellery" },
	{ _id: "65a7e20102e12c44f5994418", name: "Cuff Butterfly" },
	{ _id: "65a7e20102e12c44f5994419", name: "Designer Sun Glasses" },
	{ _id: "65a7e20102e12c44f599441a", name: "mastar watch" },
	{ _id: "65a7e20102e12c44f599441b", name: "Car Aux" },
	{ _id: "65a7e20102e12c44f599441c", name: "W1209 DC12V" },
	{ _id: "65a7e20102e12c44f599441d", name: "TC Reusable" },
	{ _id: "65a7e20102e12c44f599441e", name: "Neon LED Light" },
	{ _id: "65a7e20102e12c44f599441f", name: "METRO 70cc Motorcycle - MR70" },
	{ _id: "65a7e20102e12c44f5994420", name: "BRAVE BULL" },
	{ _id: "65a7e20102e12c44f5994421", name: "shock absorber" },
	{ _id: "65a7e20102e12c44f5994422", name: "JIEPOLLY" },
	{ _id: "65a7e20102e12c44f5994423", name: "Xiangle" },
	{ _id: "65a7e20102e12c44f5994424", name: "lightingbrilliance" },
	{ _id: "65a7e20102e12c44f5994425", name: "Ifei Home" },
	{ _id: "65a7e20102e12c44f5994426", name: "DADAWU" },
	{ _id: "65a7e20102e12c44f5994427", name: "YIOSI" },
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
			const inserted = await Brand.insertMany(brands);
			console.log("Brand seeded successfully");
			mongoose.connection.close();
		} catch (error) {
			console.error("error inserting into database");
			mongoose.connection.close();
			process.exit(1);
		}
	});
