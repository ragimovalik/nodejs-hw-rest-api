const fileReading = require("./fileReading");
const contactsPath = require("./contactsPath");

const listContacts = async () => {
  try {
    const contactsAll = await fileReading(contactsPath);

    return contactsAll;
  } catch (error) {
    throw error;
  }
};

module.exports = listContacts;
