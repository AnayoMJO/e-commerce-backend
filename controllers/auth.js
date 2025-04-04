const User = require("../models/user");
const bcrypt = require("bcryptjs");
const { sendMail } = require("../utils/email");
const { generateOtp } = require("../utils/generateOtp");
const Otp = require("../models/otp");
const { sanitizeUser } = require("../utils/sanitizeUser");
const { generateToken } = require("../utils/generateToken");
const passwordResetToken = require("../models/passwordResetToken");

exports.signup = async (req, res) => {
	try {
		const existingUser = await User.findOne({ email: req.body.email });
		if (existingUser) {
			return res.status(400).json({ message: "User already exists" });
		}
		const hashedPassword = await bcrypt.hash(req.body.password, 10);
		req.body.password = hashedPassword;
		const createdUser = new User(req.body);
		await createdUser.save();
		const secureInfo = sanitizeUser(createdUser);
		const token = generateToken(secureInfo);

		res.cookie("token", token, {
			sameSite: process.env.PRODUCTION === "true" ? "None" : "Lax",
			maxAge: new Date(
				Date.now() + parseInt(process.env.COOKIE_EXPIRATION_DAYS, 10)
			),
			httpOnly: true,
			secure: process.env.PRODUCTION === "true" ? true : false,
		});
		res.status(201).json(sanitizeUser(createdUser));
		console.log(createdUser);
	} catch (error) {
		console.log(error);
		res
			.status(500)
			.json({ message: "Error occured, could not signup please try again" });
	}
};

exports.login = async (req, res) => {
	try {
		const existingUser = await User.findOne({ email: req.body.email });
		if (
			existingUser &&
			(await bcrypt.compare(req.body.password, existingUser.password))
		) {
			const secureInfo = sanitizeUser(existingUser);
			const token = generateToken(secureInfo);
			res.cookie("token", token, {
				sameSite: process.env.PRODUCTION === "true" ? "None" : "Lax",
				maxAge: new Date(
					Date.now() + parseInt(process.env.COOKIE_EXPIRATION_DAYS)
				),
				httpOnly: true,
				secure: process.env.PRODUCTION === "true" ? true : false,
			});
			console.log(existingUser);
			return res.status(200).json(sanitizeUser(existingUser));
		}
		res.clearCookie("token");
		console.log(req.body);
		console.log("Invalid Credentials");
		return res.status(404).json({ message: "Invalid Credentails" });
	} catch (error) {
		console.log(error);
		console.log("Some error occured while logging in, please try again later");
		res.status(500).json({
			message: "Some error occured while logging in, please try again later",
		});
	}
};

exports.verifyOtp = async (req, res) => {
	try {
		const { email } = req.body;
		const otp = req.body.otp;
		const isValidUserId = await User.findOne({ email });
		//console.log("user to verify OTP:", isValidUserId);
		if (!isValidUserId) {
			return res.status(404).json({
				message: "User not Found, for which the otp has been generated",
			});
		}
		const isOtpExisting = await Otp.findOne({ user: isValidUserId._id });
		console.log("Plaintext otp:", typeof otp, otp);
		console.log("Hashed otp:", typeof isOtpExisting.otp, isOtpExisting.otp);

		if (!isOtpExisting) {
			return res.status(404).json({ message: "Otp not found" });
		}
		if (isOtpExisting.expiresAt < new Date()) {
			await Otp.findByIdAndDelete(isOtpExisting._id);
			return res.status(400).json({ message: "Otp has been expired" });
		}
		if (isOtpExisting && (await bcrypt.compare(otp, isOtpExisting.otp))) {
			await Otp.findByIdAndDelete(isOtpExisting._id);
			const verifiedUser = await User.findByIdAndUpdate(
				isValidUserId._id,
				{ isVerified: true },
				{ new: true }
			);
			return res.status(200).json(sanitizeUser(verifiedUser));
		}
		return res.status(400).json({ message: "Otp is invalid or expired" });
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: "Some Error occured" });
	}
};

exports.resendOtp = async (req, res) => {
	try {
		const { email } = req.body;
		const existingUser = await User.findOne({ email });
		if (!existingUser) {
			return res.status(404).json({ message: "User not found" });
			1;
		}
		await Otp.deleteMany({ user: existingUser._id });
		const otp = generateOtp();
		console.log("otp generated", otp);
		const hashedOtp = await bcrypt.hash(otp, 10);
		console.log("otp generated hashed", hashedOtp);
		const newOtp = new Otp({
			user: existingUser._id,
			otp: hashedOtp,
			expiresAt: Date.now() + parseInt(process.env.OTP_EXPIRATION_TIME),
		});
		await newOtp.save();
		console.log("otp generated saved");

		await sendMail(
			{ receiverEmail: existingUser.email },
			`OTP Verification for AnayoMJO E-commerce store Account`,
			`Your One-Time Password (OTP) for account verification 
is: <b>${otp}</b>.</br>Do not share this OTP with anyone 
for security reasons`
		);
		res
			.status(201)
			.json({ message: "OTP sent to your email, please check your emaail" });
	} catch (error) {
		res.status(500).json({
			message: "Some error occured while resending otp, please try again later",
		});
		console.log("email error:", error);
	}
};

exports.forgotPassword = async (req, res) => {
	let newToken;
	try {
		const isExistingUser = await User.findOne({ email: req.body.email });
		//console.log(isExistingUser.email);
		if (!isExistingUser) {
			return res
				.status(404)
				.json({ message: "Provided email does not exists" });
		}
		await passwordResetToken.deleteMany({ user: isExistingUser._id });
		const ProvidedasswordResetToken = generateToken(
			sanitizeUser(isExistingUser),
			true
		);
		console.log(ProvidedasswordResetToken);
		const hashedToken = await bcrypt.hash(ProvidedasswordResetToken, 10);
		newToken = new passwordResetToken({
			user: isExistingUser._id,
			token: hashedToken,
			expiresAt: Date.now() + parseInt(process.env.OTP_EXPIRATION_TIME),
		});
		await newToken.save();

		await sendMail(
			{ receiverEmail: isExistingUser.email },
			"Password Reset Link for your E-commerce store Account",
			`<p>Dear ${isExistingUser.name},
We received a request to reset the password for your  E-commerce 
store account. If you initiated this request, please use the 
following link to reset your password:</p>
        
<p><a href=${process.env.ORIGIN}/reset-password/${isExistingUser._id}/${passwordResetToken} target="_blank">Reset Password</
a></p>
        
<p>This link is valid for a limited time. If you did not request 
a password reset, please ignore this email. Your account 
security is important to us.
        
Thank you,
The  E-commerce store Team</p>`
		);
		console.log("password reset token: ", newToken);
		res.status(200).json({
			message: `Password Reset link sent to ${isExistingUser.email} please check your email`,
		});
	} catch (error) {
		console.log(error);
		res
			.status(500)
			.json({ message: "Error occured while sending password reset mail" });
	}
};

exports.resetPassword = async (req, res) => {
	const passwordn = req.body.passwordn;
	//const { token } = req.body;
	try {
		const isExistingUser = await User.findOne({ email: req.body.email });
		//console.log(isExistingUser.email);

		if (!isExistingUser) {
			return res.status(404).json({ message: "User does not exists" });
		}
		const isResetTokenExisting = await passwordResetToken.findOne({
			user: isExistingUser._id,
		});
		//console.log(isResetTokenExisting);
		if (!isResetTokenExisting) {
			console.log("invalid token");
			return res.status(404).json({ message: "Reset Link is Not Valid" });
		}
		if (isResetTokenExisting.expiresAt < Date.now()) {
			await passwordResetToken.findByIdAndDelete(isResetTokenExisting._id);
			console.log("expired token");
			return res.status(404).json({ message: "Reset Link has expired" });
		}
		if (
			isResetTokenExisting &&
			isResetTokenExisting.expiresAt > Date.now() &&
			(await bcrypt.compare(req.body.token, isResetTokenExisting.token))
		) {
			console.log("token is existting");
			await passwordResetToken.findByIdAndDelete(isResetTokenExisting._id);

			await User.findByIdAndUpdate(isExistingUser._id, {
				password: await bcrypt.hash(passwordn, 10),
			});
			return res.status(200).json({ message: "Password Updated Successfuly" });
		}
		return res.status(404).json({ message: "Reset Link has been expired" });
	} catch (error) {
		console.log(error);
		res.status(500).json({
			message:
				"Error occured while resetting the password, please try again later",
		});
	}
};

exports.logout = async (req, res) => {
	try {
		res.cookie("token", {
			maxAge: 0,
			sameSite: process.env.PRODUCTION === "true" ? "None" : "Lax",
			httpOnly: true,
			secure: process.env.PRODUCTION === "true" ? true : false,
		});
		res.status(200).json({ message: "Logout successful" });
	} catch (error) {
		console.log(error);
	}
};

exports.checkAuth = async (req, res) => {
	try {
		if (req.user) {
			const user = await User.findById(req.user._id);
			return res.status(200).json(sanitizeUser(user));
		}
		res.sendStatus(401);
	} catch (error) {
		console.log(error);
		res.sendStatus(500);
	}
};
