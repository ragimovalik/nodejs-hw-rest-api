const express = require("express");
const router = express.Router();

const { joiSchema } = require("../../models/contact");
const {
  validation,
  asyncWrapper,
  isAuthenticate,
} = require("../../middlewares");
const ctrl = require("../../controllers/contacts");

router.get("/", asyncWrapper(isAuthenticate), asyncWrapper(ctrl.getAll));

router.get(
  "/:contactId",
  asyncWrapper(isAuthenticate),
  asyncWrapper(ctrl.getById)
);

router.post(
  "/",
  asyncWrapper(isAuthenticate),
  validation(joiSchema),
  asyncWrapper(ctrl.addNewContact)
);

router.delete(
  "/:contactId",
  asyncWrapper(isAuthenticate),
  asyncWrapper(ctrl.delById)
);

router.patch(
  "/:contactId",
  asyncWrapper(isAuthenticate),
  asyncWrapper(ctrl.updateById)
);

router.patch(
  "/:contactId/favorite",
  asyncWrapper(isAuthenticate),
  asyncWrapper(ctrl.updateIsFavorite)
);

module.exports = router;
