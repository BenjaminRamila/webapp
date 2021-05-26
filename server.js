require("dotenv").config();

const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();

require("./config/connectDB")();

app.use(cookieParser());
if (process.env.NODE_ENV !== "production") app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", require("./routes/api"));

const port = process.env.PORT || 5000;

app.listen(port, () =>
  console.log(`1: Server listening on port ${port}`)
);
