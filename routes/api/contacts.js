const express = require("express");
const router = express.Router();

const { joiSchema } = require("../../models/contact");
const {
  validation,
  asyncWrapper,
  isAuthenticate,
} = require("../../middlewares");
const ctrl = require("../../controllers/contacts");

router.get("/", asyncWrapper(isAuthenticate), ctrl.getAll);

router.get("/:contactId", asyncWrapper(isAuthenticate), ctrl.getById);

router.post(
  "/",
  asyncWrapper(isAuthenticate),
  validation(joiSchema),
  asyncWrapper(ctrl.addNewContact)
);

router.delete("/:contactId", asyncWrapper(isAuthenticate), ctrl.delById);

router.patch("/:contactId", asyncWrapper(isAuthenticate), ctrl.updateById);

router.patch(
  "/:contactId/favorite",
  asyncWrapper(isAuthenticate),
  ctrl.updateIsFavorite
);

module.exports = router;
