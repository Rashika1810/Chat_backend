const express = require("express");
const dotenv = require("dotenv");
const { default: mongoose } = require("mongoose");
const app = express();
dotenv.config();

const connectDb = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI);
    console.log("server connected to database");
  } catch (error) {
    console.log("Server not connected to db ", error.message);
  }
};

connectDb();

app.get("/", (req, resp) => {
  resp.send("First API of this repo");
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log("Server is running"));
