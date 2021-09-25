const fs = require("fs/promises");
const path = require("path");
const Jimp = require("jimp");

const { User } = require("../../models");

const avatarsDir = path.join(__dirname, "../../public/avatars");

const updateAvatar = async (req, res) => {
  console.log(req.file);
  console.log(req.user);

  const { path: tempPath, originalname } = req.file;
  const uploadPath = path.join(avatarsDir, `${req.user._id}`, originalname);

  try {
    const file = await Jimp.read(tempPath);
    await file.resize(250, 250).write(tempPath);

    // Сначала перемещаем (переименовываем), после сохраняем.
    await fs.rename(tempPath, uploadPath);
    const avatar = `/avatars/${req.user._id}/${originalname}`;

    await User.findByIdAndUpdate(req.user._id, { avatarURL: avatar });

    res.status(200).json({
      status: "success",
      code: 200,
      data: {
        result: avatar,
      },
    });
  } catch (error) {
    await fs.unlink(tempPath);
    throw error;
  }
};

module.exports = updateAvatar;
