const fs = require("fs/promises");

const fileWriting = async (path, data) => {
  try {
    const dataToString = JSON.stringify(data);

    await fs.writeFile(path, dataToString);

    console.log("File has been successfully updated");

    return;
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = fileWriting;
