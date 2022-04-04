const express = require("express");
const cors = require("cors");
const multer = require("multer");
const storage = require("./config/multer");
require("dotenv").config();
const app = express();
const { auth, products } = require("./routes");
require("./db/mongo_connection");

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(multer({ storage }).single("image"));

app.use("/dashboard/api/products", products);
app.use("/dashboard/api/auth", auth);

app.listen(PORT, () => {
  console.log("Server running on PORT", PORT);
});
