const express = require("express");
const router = express.Router();

const ctrl = require("../../controllers/contacts");

router.get("/", ctrl.getAll);

router.get("/:contactId", ctrl.getById);

// router.get("/:contactId", async (req, res, next) => {
//   res.json({ message: "New test message" });
// });

router.post("/", ctrl.addNewContact);

// router.post("/", async (req, res, next) => {
//   res.json({ message: "New test message" });
// });

router.delete("/:contactId", ctrl.delById);

// router.delete("/:contactId", async (req, res, next) => {
//   res.json({ message: "New test message" });
// });

router.patch("/:contactId", ctrl.updateById);

// router.patch("/:contactId", async (req, res, next) => {
//   res.json({ message: "template message" });
// });

module.exports = router;
