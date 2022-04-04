const products = require("../services/products.services");

const postProduct = async (req, res) => {
  const {
    brand,
    article,
    title,
    price,
    highlighted,
    saleoff,
    unites,
    description,
    specifications,
  } = req.body;
  try {
    const data = await products.postProduct({
      brand,
      article,
      title,
      price,
      highlighted,
      saleoff,
      unites,
      description,
      specifications,
    });
    return res.status(data.status).json(data);
  } catch (error) {
    res.status(error.status).json({ message: error.message });
  }
};
const postImage = async (req, res) => {
  try {
    const data = await products.postImage(req.file, req.body.productId);
    return res.status(data.status).json(data);
  } catch (error) {
    res.status(error.status).json({ message: error.message });
  }
};

const putProduct = async (req, res) => {
  const {
    brand,
    article,
    title,
    price,
    highlighted,
    saleoff,
    unites,
    description,
    specifications,
  } = req.body;
  try {
    const data = await products.putProduct(
      {
        brand,
        article,
        title,
        price,
        highlighted,
        saleoff,
        unites,
        description,
        specifications,
      },
      req.body.productId
    );
    return res.status(data.status).json(data);
  } catch (error) {
    res.status(error.status).json({ message: error.message });
  }
};
const deleteProduct = async (req, res) => {
  try {
    const data = await products.deleteProduct(req.params.id);
    return res.status(data.status).json(data);
  } catch (error) {
    res.status(error.status).json({ message: error.message });
  }
};
module.exports = {
  postProduct,
  postImage,
  putProduct,
  deleteProduct,
};
