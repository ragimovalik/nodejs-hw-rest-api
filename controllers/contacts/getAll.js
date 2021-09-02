const { Contact } = require("../../models/");

const getAll = async (req, res, next) => {
  try {
    const result = await Contact.find({}, "name email phone favorite");

    res.json({
      status: "succes",
      code: 200,
      data: {
        result: result,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = getAll;
