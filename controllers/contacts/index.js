const getAll = require("./getAll");
const getById = require("./getById");
const addNewContact = require("./add");
const updateById = require("./updateById");
const delById = require("./delById");
const updateIsFavorite = require("./updateIsFavorite");

module.exports = {
  getAll,
  getById,
  addNewContact,
  updateById,
  updateIsFavorite,
  delById,
};
