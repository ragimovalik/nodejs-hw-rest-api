const fs = require("fs/promises");

const fileReading = async (path) => {
  try {
    const readedFile = await fs.readFile(path);
    const parsedData = await JSON.parse(readedFile);

    return parsedData;
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = fileReading;
