const { updateContact } = require("../../model/contacts");

const updateById = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const dataToUpdate = req.body;

    const updatingResult = await updateContact(contactId, dataToUpdate);

    if (!updatingResult) {
      res.status(404).json({
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
