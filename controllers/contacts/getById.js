const { Contact } = require("../../models/");

const getById = async (req, res) => {
  const { contactId } = req.params;

  const requestedContact = await Contact.findById(contactId).populate(
    "owner",
    "email"
  );

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
};

module.exports = getById;
