const multer = require("multer");
const path = require("path");

const FILE_SIZE = 1024; // max file size 1024 bytes

const tempDir = path.join(__dirname, "../tmp");

const multerConfig = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, tempDir);
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
  limits: {
    fileSize: FILE_SIZE,
  },
});

const upload = multer({
  storage: multerConfig,
});

module.exports = upload;
