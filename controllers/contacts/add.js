const { Contact } = require("../../models/");
const { Conflict } = require("http-errors");

const addNewContact = async (req, res) => {
  console.log(req.user);

  try {
    const newContact = { ...req.body, owner: req.user._id };
    const result = await Contact.create(newContact);

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
