const { Contact } = require("../../models/");

const getAll = async (req, res) => {
  const contacts = await Contact.find({ owner: req.user._id }).populate(
    "owner",
    "email"
  );

  res.json({
    status: "succes",
    code: 200,
    data: {
      result: contacts,
    },
  });
};

module.exports = getAll;
