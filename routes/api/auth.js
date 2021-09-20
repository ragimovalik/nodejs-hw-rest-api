const express = require("express");
const router = express.Router();

const {
  validation,
  isAuthenticate,
  controllerWrapper,
} = require("../../middlewares");
const { joiSchema } = require("../../models/user");
const ctrl = require("../../controllers/auth");

router.post("/signup", validation(joiSchema), controllerWrapper(ctrl.signup));

router.post("/login", validation(joiSchema), controllerWrapper(ctrl.login));

router.get(
  "/logout",
  controllerWrapper(isAuthenticate),
  controllerWrapper(ctrl.logout)
);

router.get(
  "/current",
  controllerWrapper(isAuthenticate),
  controllerWrapper(ctrl.current)
);

module.exports = router;
