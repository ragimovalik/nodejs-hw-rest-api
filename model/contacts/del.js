const fileReading = require("./fileReading");
const fileWriting = require("./fileWriting");

const contactsPath = require("./contactsPath");

const removeContact = async (contactId) => {
  try {
    const contacts = await fileReading(contactsPath);

    const idx = contacts.findIndex((item) => item.id.toString() === contactId);

    if (idx === -1) {
      return null;
    }

    const updatedContacts = contacts.filter(
      (item) => item.id.toString() !== contactId
    );

    await fileWriting(contactsPath, updatedContacts);

    return contacts[idx];
  } catch (error) {
    throw error;
  }
};
module.exports = removeContact;
