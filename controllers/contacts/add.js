const { Contact } = require("../../models/");
const { Conflict } = require("http-errors");

const addNewContact = async (req, res) => {
  try {
    const result = await Contact.create({ ...req.body, owner: req.user._id });

    res.status(201).json({
      status: "success",
      code: 201,
      data: {
        result: result,
      },
      message: "New contact successfully added",
    });
  } catch (error) {
    throw new Conflict(error.message);
  }
};

module.exports = addNewContact;
