import { products } from "./constants/data.js";
import Product from "./models/Product-Schema.js";

const Defaultdata = async () => {
  try {
    await Product.insertMany(products);
    console.log("data imported");
  } catch (error) {
    console.log("error while inserting the data", error.message);
  }
};

export default Defaultdata;
