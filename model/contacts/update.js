const contactsPath = require("./contactsPath");
const fileReading = require("./fileReading");
const fileWriting = require("./fileWriting");

const updateContact = async (contactId, body) => {
  try {
    const contacts = await fileReading(contactsPath);

    const idx = contacts.findIndex((item) => item.id.toString() === contactId);

    if (idx === -1) {
      return null;
    }

    contacts[idx] = { ...contacts[idx], ...body };

    await fileWriting(contactsPath, contacts);

    return contacts[idx];
  } catch (error) {
    throw error;
  }
};

module.exports = updateContact;
