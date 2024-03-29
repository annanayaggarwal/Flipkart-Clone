import express from "express";
import Connection from "./database/db.js";
import dotenv from "dotenv";
import defaultdata from "./default.js";
import router from "./routes/route.js";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
const PORT = 8000;

dotenv.config();

app.use(cors());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use("/", router);

Connection();

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});

defaultdata();
