const express = require("express");
const router = express.Router();

const joiSchema = require("../../models/contact");
const { validation } = require("../../middlewares");
const ctrl = require("../../controllers/contacts");

router.get("/", ctrl.getAll);

// router.get("/:contactId", ctrl.getById);

router.post("/", validation(joiSchema), ctrl.addNewContact);

// router.delete("/:contactId", ctrl.delById);

// router.patch("/:contactId", ctrl.updateById);

module.exports = router;
