const express = require("express");
const router = express.Router();

const ctrl = require("../../controllers/contacts");

router.get("/", ctrl.getAll);

router.get("/:contactId", async (req, res, next) => {
  res.json({ message: "New test message" });
});

router.post("/", async (req, res, next) => {
  res.json({ message: "New test message" });
});

router.delete("/:contactId", async (req, res, next) => {
  res.json({ message: "New test message" });
});

router.patch("/:contactId", async (req, res, next) => {
  res.json({ message: "template message" });
});

module.exports = router;
