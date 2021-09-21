const { Contact } = require("../../models/");

const getAll = async (req, res, next) => {
  try {
    const contacts = await Contact.find({}, "name email phone favorite");

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
