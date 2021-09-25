const { Contact } = require("../../models/");

const updateIsFavorite = async (req, res) => {
  const { contactId } = req.params;

  const isIncludeFavorite = Object.keys(req.body).includes("favorite");

  if (!isIncludeFavorite) {
    return res.status(400).json({
      message: "missing field favorite",
    });
  }

  const updatingResult = await Contact.findByIdAndUpdate(
    contactId,
    { favorite: req.body.favorite },
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

module.exports = updateIsFavorite;
