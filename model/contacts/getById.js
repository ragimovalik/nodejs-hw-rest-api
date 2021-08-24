const fileReading = require("./fileReading");
const contactsPath = require("./contactsPath");

async function getContactById(contactId) {
  try {
    const contacts = await fileReading(contactsPath);

    const requiredContact = contacts.find(
      (item) => item.id.toString() === contactId
    );

    if (!requiredContact) {
      return null;
      // throw new Error("There is no contact with such an ID");
    }

    // console.log("Required contact: ", requiredContact);

    return requiredContact;
  } catch (error) {
    throw error;
  }
}

module.exports = getContactById;
