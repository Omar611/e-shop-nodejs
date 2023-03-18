const express = require("express");

const router = express.Router();

// import controller
const {
  getAllProducts,
  getAllProductsStatic
  // getProduct,
  // createProduct,
  // updateProduct,
  // deleteProduct,
} = require("../controllers/products");

router.route("/").get(getAllProducts);
router.route("/static").get(getAllProductsStatic);
// router.route("/:id").get(getProduct);
// router.post("/", createProduct);
// router.put("/:id", updateProduct);
// router.delete("/:id", deleteProduct);

module.exports = router;