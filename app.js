const express = require("express");
const cors = require("cors");
// const logger = require("morgan");
const mongoose = require("mongoose");
require("dotenv").config();

const contactsRouter = require("./routes/api/contacts");

const { DB_HOST, PORT = 4000 } = process.env;

const app = express();

// const formatsLogger = app.get("env") === "development" ? "dev" : "short";

// app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use("/api/v1/contacts", contactsRouter);

// app.get("/", (req, res) => {
//   res.send("<h2>Welcome</h2> <p>DB test project page</p>");
// });

// console.log(process.env.DB_HOST);

mongoose
  .connect(DB_HOST, {
    useNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database running success");
    app.listen(PORT);
  })
  .catch((error) => console.log(error));
