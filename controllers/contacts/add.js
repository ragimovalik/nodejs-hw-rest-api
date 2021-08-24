const { addContact } = require("../../model/contacts");
const { contactAddingSchema } = require("../../validation/");

const addNewContact = async (req, res, next) => {
  try {
    const { value, error } = contactAddingSchema.validate(req.body);
    if (error) {
      return res.status(400).json({
        message: "Missing required name field",
      });
    }

    const dataForNewContact = req.body;

    const newContact = await addContact(dataForNewContact);

    if (!newContact) {
      return res.status(409).json({
        message: "The contact allready in contacts list",
      });
    }

    return res.status(201).json({
      status: "succes",
      code: 201,
      data: {
        result: newContact,
      },
      message: "New Contact successfully added",
    });
  } catch (error) {
    next(error);
  }
};

module.exports = addNewContact;
