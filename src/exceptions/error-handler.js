const BusinessError = require('./business-error');
const EntityNotFoundError = require('./entity-not-found-error');
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

  if (err instanceof EntityNotFoundError) {
    res.status(404).json({
      error: {
        message: err.message,
      },
    });
  }

  res.status(500);
};
