const axios = require("axios");
const { categories, items, detailItem } = require("../utils");

const productController = {
  searchedProducts: async (req, res) => {
    try {
      const { q } = req.query;
      const request = await axios.get(
        `https://api.mercadolibre.com/sites/MLA/search?q=${q}`
      );
      const data = request.data;
      const productsObj = {
        author: {
          name: "Juan Manuel",
          lastname: "Gimenez Chabaudie",
        },
        categories: [categories(data.filters[0].values[0].path_from_root)],
        items: [items(data.results)],
      };
      res.status(200).send(productsObj);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  productDetail: async (req, res) => {
    try {
      const { id } = req.params;
      const detail = await axios.get(`https://api.mercadolibre.com/items/${id}`);
      const description = await axios.get(
        `https://api.mercadolibre.com/items/${id}/description`
      );
      const dataDetail = detail.data;
      const dataDescription = description.data;
      const productObj = {
        author: {
          name: "Juan Manuel",
          lastname: "Gimenez Chabaudie",
        },
        item: detailItem(dataDetail, dataDescription),
      };
      res.status(200).send(productObj);
    } catch (error) {
      res.status(500).json(error);
    }
  },
};

module.exports = productController;
