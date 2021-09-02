const { Contact } = require("../../models/");

const addNewContact = async (req, res, next) => {
  try {
    const result = await Contact.create(req.body);

    res.status(201).json({
      status: "success",
      code: 201,
      data: {
        result: result,
      },
      message: "New contact successfully added",
    });
  } catch (error) {
    next(error);
  }
};

module.exports = addNewContact;
