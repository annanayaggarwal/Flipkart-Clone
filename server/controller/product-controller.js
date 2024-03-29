import Product from "../models/Product-Schema.js";

export const getproducts = async (request, response) => {
  try {
    const products = await Product.find({});
    return response.status(200).json(products);
  } catch (error) {
    return response.status(500).json({ message: error.message });
  }
};

export const getproductById = async (request, response) => {
  try {
    const id = request.params.id;
    const product = await Product.findOne({ id: id });
    return response.status(200).json(product);
  } catch (error) {
    return response.status(500).json({ message: error.message });
  }
};
