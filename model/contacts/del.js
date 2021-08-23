const fileReading = require("./fileReading");
const fileWriting = require("./fileWriting");

const contactsPath = require("./contactsPath");

const removeContact = async (contactId) => {
  try {
    const contacts = await fileReading(contactsPath);

    const idx = contacts.findIndex((item) => item.id.toString() === contactId);

    if (idx === -1) {
      throw new Error("There is no contact with such ID");
    }

    const updatedContacts = contacts.filter((item) => {
      if (item.id.toString() === contactId) {
        console.log(`Contact with ID ${contactId} was successfully deleted`);
      }
      return item.id.toString() !== contactId;
    });

    await fileWriting(contactsPath, updatedContacts);

    return contacts[contactId];
  } catch (error) {
    console.log(error.message);
  }
};
module.exports = removeContact;
