const fileReading = require("./fileReading");
const contactsPath = require("./contactsPath");

const listContacts = async () => {
  try {
    const contactsAll = await fileReading(contactsPath);

    return contactsAll;
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = listContacts;
