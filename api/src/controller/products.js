const productController = {
  searchedProducts: async (req, res) => {
    res.send("Estoy en el Search Bar");
  },
  productDetail: async (req, res) => {
    res.send("Estoy en el detalle de producto");
  },
};

module.exports = productController;
