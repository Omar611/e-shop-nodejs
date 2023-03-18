const Product = require("../models/product");

const getAllProductsStatic = async (req, res) => {
	const search = req.query.search;
	const products = await Product.find({
		name: { $regex: search, $options: "i" },
	}).sort("name");
	res.status(200).json({ products, nbHits: products.length });
};

const getAllProducts = async (req, res) => {
	const { featured, company, name, sort, fields} = req.query;
	const queryObject = {};

	if (featured) queryObject.featured = featured === "true" ? true : false;
	if (company) queryObject.company = company;
	if (name) queryObject.name = { $regex: name, $options: "i" };

	const result = Product.find(queryObject);
  
	if (sort) {
		const sortList = sort.split(",").join(" ");
    result.sort(sortList);
	} else {
    result.sort("createdAt name");
  }

  if(fields) {
    const fieldsList = fields.split(',').join(' ');
    result.select(fieldsList);
  }

	const products = await result;

	res.status(200).json({ products, nbHits: products.length });
};

module.exports = {
	getAllProducts,
	getAllProductsStatic,
};
