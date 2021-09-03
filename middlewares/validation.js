const validation = (schema) => {
  const validateThat = (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(400).json({
        message: error.message,
      });
    }
    next();
  };

  return validateThat;
};

module.exports = validation;
