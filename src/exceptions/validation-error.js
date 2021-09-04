module.exports = class ValidationError extends Error {
  constructor(msg, field) {
    super();
    this.message = msg;
    this.field = field;
  }
};
