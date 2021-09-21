const { Contact } = require("../../models/");

const getAll = async (req, res, next) => {
  try {
    const contacts = await Contact.find({ owner: req.user._id }).populate(
      "owner",
      "email"
    );

    res.json({
      status: "succes",
      code: 200,
      data: {
        result: contacts,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = getAll;
