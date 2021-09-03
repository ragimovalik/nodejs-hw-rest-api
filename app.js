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

app.use("/api/v1/auth", authRouter);
// POST /api/v1/auth/register
// POST /api/v1/auth/login
// GET /api/v1/auth/logout

// POST /api/v1/auth/signup
// POST /api/v1/auth/signin
// GET /api/v1/auth/signout

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
