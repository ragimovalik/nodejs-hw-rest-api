const { addContact } = require("../../model/contacts");

const addNewContact = async (req, res, next) => {
  try {
    const dataForNewContact = req.body;

    const newContact = await addContact(dataForNewContact);

    if (!newContact) {
      res.status(409).json({
        message: "The contact allready in contacts list",
      });
    }

    res.status(201).json({
      status: "succes",
      code: 201,
      data: {
        result: newContact,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = addNewContact;
