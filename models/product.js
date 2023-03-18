const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "Please enter product name"],
		trim: true,
		maxlength: [100, "Product name cannot exceed 100 characters"],
	},
	price: {
		type: Number,
		required: [true, "Please enter product price"],
		maxlength: [5, "Product name cannot exceed 5 characters"],
		default: 0.0,
	},
	ratings: {
		type: Number,
		default: 4.5,
	},
	featured: {
		type: Boolean,
		default: false,
	},
	company: {
		type: String,
		required: [true, "Please enter product company"],
    enum: {
      values: ["ikea", "liddy", "caressa", "marcos"],
      message: "{VALUE} is not supported ,Please select correct company for product",
    }
	},
	createdAt: {
		type: Date,
		default: Date.now(),
	},
});

module.exports = mongoose.model("Product", productSchema);
