const BusinessError = require('./business-error');
const ValidationError = require('./validation-error');

module.exports = (err, req, res) => {
  if (err instanceof BusinessError) {
    res.status(422).json({
      error: {
        message: err.message,
      },
    });
  }

  if (err instanceof ValidationError) {
    res.status(400).json({
      error: {
        message: err.message,
        field: err.field,
      },
    });
  }
};
