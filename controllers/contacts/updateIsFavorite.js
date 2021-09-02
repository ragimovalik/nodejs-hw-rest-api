const { Contact } = require("../../models/");
const updateById = require("./updateById");

const updateIsFavorite = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const { favorite } = req.body;

    if (!favorite) {
      return res.status(400).json({
        message: "missing field favorite",
      });
    }

    const updatingResult = await Contact.findByIdAndUpdate(
      contactId,
      { favorite },
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
  } catch (error) {
    next(error);
  }
};

module.exports = updateIsFavorite;
