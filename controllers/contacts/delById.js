const { removeContact } = require("../../model/contacts");

const delById = async (req, res, next) => {
  try {
    console.log(removeContact);
  } catch (error) {
    next(error);
  }
};

module.exports = delById;
