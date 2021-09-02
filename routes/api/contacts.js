const express = require("express");
const router = express.Router();

const { joiSchema } = require("../../models/contact");
const { validation } = require("../../middlewares");
const ctrl = require("../../controllers/contacts");

// const validationMiddleware = validation(joiSchema);

router.get("/", ctrl.getAll);

router.get("/:contactId", ctrl.getById);

router.post("/", validation(joiSchema), ctrl.addNewContact);

router.delete("/:contactId", ctrl.delById);

router.patch("/:contactId", ctrl.updateById);

router.patch("/:contactId/favorite", ctrl.updateIsFavorite);

module.exports = router;
