const { Contact } = require("../../models/");

const updateById = async (req, res) => {
  const { contactId } = req.params;
  const dataToUpdate = req.body;

  const updatingResult = await Contact.findByIdAndUpdate(
    contactId,
    dataToUpdate,
    { new: true }
  );

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
};

module.exports = updateById;
