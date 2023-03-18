const getAllProducts = async (req, res) => {
  res.status(200).json({ msg: "all products" });
  // const products = await Product.find({}).sort("name");
  // res.status(200).json({ products });
}

const getAllProductsStatic = async (req, res) => {
  res.status(200).json({ msg: "all products" });
  // const products = await Product.find({}).sort("name");
  // res.status(200).json({ products });
}

module.exports = {
  getAllProducts,
  getAllProductsStatic,
};