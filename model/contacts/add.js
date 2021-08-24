const { nanoid } = require("nanoid");

const fileReading = require("./fileReading");
const fileWriting = require("./fileWriting");

const contactsPath = require("./contactsPath");

const addContact = async (data) => {
  try {
    const contacts = await fileReading(contactsPath);

    const dataCheck = contacts.find(
      (item) =>
        item.name === data.name ||
        item.email === data.email ||
        item.phone === data.phone
    );

    if (dataCheck) return null;

    const newContact = {
      id: nanoid(6),
      name: data.name,
      email: data.email,
      phone: data.phone,
    };

    const contactsUpdate = [...contacts, newContact];

    await fileWriting(contactsPath, contactsUpdate);

    return newContact;
  } catch (error) {
    throw error;
  }
};

module.exports = addContact;

/*
Adding contact. Updating contacts list. 
@param {string} name.
@param {string} email.
@param {string} phone.
*/
