const express = require("express");
const router = express.Router();

const { validation } = require("../../middlewares");
const { joiSchema } = require("../../models/user");
const ctrl = require("../../controllers/auth");

router.post("/register", validation(joiSchema), ctrl.register);

router.post("/login", validation(joiSchema), ctrl.login);

// router.get("/logout", ctrl.logout);

module.exports = router;
