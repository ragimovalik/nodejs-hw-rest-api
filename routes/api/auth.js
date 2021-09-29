const express = require("express");
const router = express.Router();

const {
  validation,
  isAuthenticated,
  asyncWrapper,
  upload,
} = require("../../middlewares");
const { joiSchema, emailValidation } = require("../../models/user");
const ctrl = require("../../controllers/auth");

router.post("/signup", validation(joiSchema), asyncWrapper(ctrl.signup));

router.post(
  "/verify",
  validation(emailValidation),
  asyncWrapper(ctrl.resendVerify)
);

router.post("/login", validation(joiSchema), asyncWrapper(ctrl.login));

router.get("/logout", asyncWrapper(isAuthenticated), asyncWrapper(ctrl.logout));

router.get("/verify/:verificationToken", asyncWrapper(ctrl.verify));

router.get(
  "/current",
  asyncWrapper(isAuthenticated),
  asyncWrapper(ctrl.current)
);

router.patch(
  "/avatars",
  asyncWrapper(isAuthenticated),
  upload.single("avatar"),
  asyncWrapper(ctrl.updateAvatar)
);

module.exports = router;
