const { Contact } = require("../../models");

const delById = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const removingResult = await Contact.findByIdAndDelete(contactId).populate(
      "owner",
      "email"
    );

    if (!removingResult) {
      return res.status(404).json({
        message: "There is no contact with such ID",
      });
    }

    res.status(200).json({
      status: "success",
      code: 200,
      data: {
        result: removingResult,
      },
      message: `Contact with ID ${contactId} was successfully deleted`,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = delById;
