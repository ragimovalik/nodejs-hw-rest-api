const { User } = require("../../models");

const current = async (req, res) => {
  const user = await User.findById(req.user._id);

  res.json({
    status: "success",
    code: 200,
    data: {
      email: user.email,
      subscription: user.subscription,
    },
  });
};

module.exports = current;