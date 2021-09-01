const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const DB_HOST = require("./config");

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send("<h2>Welcome</h2> <p>DB test project page</p>");
});

mongoose
  .connect(DB_HOST, {
    useNewURLParser: true,
    // useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database connect success");
    app.listen(4000);
  })
  .catch((error) => console.log(error));
