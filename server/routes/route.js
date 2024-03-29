import express from "express";
import { usersignup, userlogin } from "../controller/user-controller.js";
import { getproducts,getproductById } from "../controller/product-controller.js";

const router = express.Router();

router.post("/signup", usersignup);
router.post("/login", userlogin);

router.get("/products", getproducts);
router.get("/product/:id", getproductById);

export default router;
