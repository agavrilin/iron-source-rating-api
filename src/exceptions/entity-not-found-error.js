module.exports = class EntityNotFoundError extends Error {
  constructor(msg) {
    super();
    this.message = msg;
  }
};
