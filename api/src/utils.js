const categories = (apiCategories) => {
  const categoriesApi = [];
  for (const category of apiCategories) {
    categoriesApi.push(category.name);
  }
  return categoriesApi;
};

const items = (data) => {
  const itemsApi = [];
  for (let i = 0; i < 4; i++) {
    itemsApi.push({
      id: data[i].id,
      title: data[i].title,
      price: {
        currency: data[i].currency_id,
        amount: Intl.NumberFormat("de-DE").format(data[i].price),
        decimals: "",
      },
      picture: data[i].thumbnail,
      condition: data[i].condition == "new" ? "Nuevo" : "Usado",
      free_shipping: data[i].shipping.free_shipping,
    });
  }
  return itemsApi;
};

const detailItem = (item, description) => {
  return {
    id: item.id,
    title: item.title,
    price: {
      currency: item.currency_id,
      amount: Intl.NumberFormat("de-DE").format(item.price),
      decimals: "",
    },
    picture: item.pictures[0].url,
    condition: item.condition == "new" ? "Nuevo" : "Usado",
    free_shipping: item.shipping.free_shipping,
    sold_quantity: Intl.NumberFormat("de-DE").format(item.sold_quantity),
    description: description.plain_text,
  };
};

module.exports = {
  categories,
  items,
  detailItem,
};
