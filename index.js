const mongoose = require("mongoose");
const dotenv = require("dotenv").config({ path: "./config.env" });
const app = require("./app");

mongoose
	.connect(process.env.LOCAL_DB_CON, { useNewUrlParser: true })
	.then(() => {
		console.log("Database Connected successfully");
	})
	.catch(() => {
		console.log(
			"an error has occured cound not connect to DataBase please try again"
		);
	});

const PORT = process.env.SERVER_PORT || 5000;
app.listen(PORT, () => {
	console.log(`Server has successfully started and is running on port: ${PORT} 
successfully`);
});
