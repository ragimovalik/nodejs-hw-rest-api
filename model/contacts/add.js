const { nanoid } = require("nanoid");

const fileReading = require("./fileReading");
const fileWriting = require("./fileWriting");

const contactsPath = require("./contactsPath");

const addContact = async (data) => {
  try {
    // data validation

    const contacts = await fileReading(contactsPath);

    let newContact;

    contacts.find((item) => {
      if (
        item.name === data.name ||
        item.email === data.email ||
        item.phone === data.phone
      ) {
        throw new Error("The contact allready in contacts list");
      }
      return (newContact = {
        id: nanoid(6),
        name: data.name,
        email: data.email,
        phone: data.phone,
      });
    });

    const contactsUpdate = [...contacts, newContact];

    await fileWriting(contactsPath, contactsUpdate);

    console.log("New Contact successfully added: ", newContact);

    return newContact;
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = addContact;

/*
Adding contact. Updating contacts list. 
@param {string} name.
@param {string} email.
@param {string} phone.
*/
