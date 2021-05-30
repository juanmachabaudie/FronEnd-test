const { Router } = require("express");
const { searchedProducts, productDetail } = require("../controller/products");
const router = Router();

router.get("/items", searchedProducts);
router.get("/items/:id", productDetail);

module.exports = router;
