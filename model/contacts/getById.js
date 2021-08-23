const fileReading = require("./fileReading");
const contactsPath = require("./contactsPath");

async function getContactById(contactId) {
  try {
    const contacts = await fileReading(contactsPath);

    const requiredContact = contacts.find(
      (item) => item.id.toString() === contactId
    );

    if (!requiredContact) {
      throw new Error("There is no contact with such an ID");
    }

    // console.log("Required contact: ", requiredContact);

    return requiredContact;
  } catch (error) {
    console.log(error.message);
  }
}

module.exports = getContactById;
