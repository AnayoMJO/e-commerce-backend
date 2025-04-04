const nodeMailer = require("nodemailer");

const transporter = nodeMailer.createTransport({
	host: "sandbox.smtp.mailtrap.io",
	port: 465,
	secure: false,
	auth: {
		user: "6624e5c7bf3268",
		pass: "9381d2ea91125e",
	},
});

exports.sendMail = async ({ receiverEmail }, subject, body) => {
	await transporter.sendMail({
		from: "6624e5c7bf3268",
		to: receiverEmail,
		subject: subject,
		html: body,
	});
};
