const { getContactById } = require("../../model/contacts");

const getById = async (req, res, next) => {
  try {
    const { contactId } = req.params;

    const requestedContact = await getContactById(contactId);

    if (!requestedContact) {
      res.status(404).json({
        message: "Contact with such ID not found",
      });
    }

    res.status(200).json({
      status: "success",
      code: 200,
      data: {
        result: requestedContact,
      },
    });

    return requestedContact;
  } catch (error) {
    next(error);
  }
};

module.exports = getById;