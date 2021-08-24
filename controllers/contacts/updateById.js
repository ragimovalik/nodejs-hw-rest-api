const { updateContact } = require("../../model/contacts");
const { contactUpdatingSchema } = require("../../validation");

const updateById = async (req, res, next) => {
  try {
    const { value, error } = contactUpdatingSchema.validate(req.body);
    if (error) {
      return res.status(400).json({
        message: "Missing fields",
      });
    }

    const { contactId } = req.params;
    const dataToUpdate = req.body;

    const updatingResult = await updateContact(contactId, dataToUpdate);

    if (!updatingResult) {
      return res.status(404).json({
        message: "There is no contact with such ID",
      });
    }

    res.status(200).json({
      status: "success",
      code: 200,
      data: {
        result: updatingResult,
      },
      message: `Contact with ID ${contactId} was successfully updated`,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = updateById;
