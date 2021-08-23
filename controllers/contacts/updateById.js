const { updateContact } = require("../../model/contacts");

const updateById = async (req, res, next) => {
  try {
    console.log(updateContact);
  } catch (error) {
    next(error);
  }
};

module.exports = updateById;
