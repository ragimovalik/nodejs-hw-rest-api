const contactsPath = require("./contactsPath");
const fileReading = require("./fileReading");
const fileWriting = require("./fileWriting");

const updateContact = async (contactId, body) => {
  try {
    const contacts = await fileReading(contactsPath);

    const requiredContactIdx = contacts.findIndex(
      (item) => item.id.toString() === contactId
    );

    if (!requiredContactIdx === -1) {
      return null;
      // throw new Error("There is no contact with such an ID");
    }

    contacts[requiredContactIdx] = { ...contacts[requiredContactIdx], ...body };

    await fileWriting(contactsPath, contacts);

    return contacts[requiredContactIdx];
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = updateContact;
