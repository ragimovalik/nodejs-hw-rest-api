const express = require("express");
const router = express.Router();

const ctrl = require("../../controllers/contacts");

router.get("/", ctrl.getAll);

router.get("/:contactId", ctrl.getById);

router.post("/", ctrl.addNewContact);

router.delete("/:contactId", ctrl.delById);

router.patch("/:contactId", ctrl.updateById);

module.exports = router;
