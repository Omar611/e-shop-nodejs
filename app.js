require("dotenv").config();
require("express-async-errors");

const express = require("express");

const app = express();

// import middleware
const errorHandler = require("./middleware/error-handler");
const notFound = require("./middleware/not-found");

// routes
app.get("/", (req, res) => {
	res.send('<h1>Store API</h1><a href="/api/v1/products">products routes</a>');
});

// import routes
const productsRoutes = require("./routes/products");

// use routes
app.use("/api/v1/products", productsRoutes);

//  middleware
app.use(express.static("public"));
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

app.use(errorHandler);
app.use(notFound);

const PORT = process.env.PORT || 5000;

// require connect to db
const connectDB = require("./db/connect");

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, console.log(`Server is running on port ${PORT}...`));
  } catch (error) {
    console.log(error);
  }
};

start();