const express = require("express");
const cors = require("cors");
const logger = require("morgan");
const mongoose = require("mongoose");
require("dotenv").config();

const contactsRouter = require("./routes/api/contacts");
const authRouter = require("./routes/api/auth");

const { DB_HOST, PORT = 4000 } = process.env;

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use(express.static("public"));

// Auth router
app.use("/api/v1/users", authRouter);
// POST /api/v1/users/signup
// POST /api/v1/users/login
// GET /api/v1/users/logout

app.use("/api/v1/contacts", contactsRouter);

app.use((req, res) => {
  res.status(404).json({
    status: "error",
    code: 404,
    message: "Not found",
  });
});

app.use((err, _, res, __) => {
  const { code = 500, message = "Server error" } = err;

  res.status(code).json({
    status: "fail",
    code,
    message,
  });
});

mongoose
  .connect(DB_HOST, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Database connection successful`);
    });
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
