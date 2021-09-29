const express = require("express");
const router = express.Router();

const { joiSchema } = require("../../models/contact");
const {
  validation,
  asyncWrapper,
  isAuthenticated,
} = require("../../middlewares");
const ctrl = require("../../controllers/contacts");

router.get("/", asyncWrapper(isAuthenticated), asyncWrapper(ctrl.getAll));

router.get(
  "/:contactId",
  asyncWrapper(isAuthenticated),
  asyncWrapper(ctrl.getById)
);

router.post(
  "/",
  asyncWrapper(isAuthenticated),
  validation(joiSchema),
  asyncWrapper(ctrl.addNewContact)
);

router.delete(
  "/:contactId",
  asyncWrapper(isAuthenticated),
  asyncWrapper(ctrl.delById)
);

router.patch(
  "/:contactId",
  asyncWrapper(isAuthenticated),
  asyncWrapper(ctrl.updateById)
);

router.patch(
  "/:contactId/favorite",
  asyncWrapper(isAuthenticated),
  asyncWrapper(ctrl.updateIsFavorite)
);

module.exports = router;
