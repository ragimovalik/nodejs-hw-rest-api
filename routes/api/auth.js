const express = require("express");
const router = express.Router();

const {
  validation,
  isAuthenticate,
  asyncWrapper,
} = require("../../middlewares");
const { joiSchema } = require("../../models/user");
const ctrl = require("../../controllers/auth");

router.post("/signup", validation(joiSchema), asyncWrapper(ctrl.signup));

router.post("/login", validation(joiSchema), asyncWrapper(ctrl.login));

router.get("/logout", asyncWrapper(isAuthenticate), asyncWrapper(ctrl.logout));

router.get(
  "/current",
  asyncWrapper(isAuthenticate),
  asyncWrapper(ctrl.current)
);

module.exports = router;
