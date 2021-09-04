module.exports = class BusinessError extends Error {
  constructor(msg) {
    super();
    this.message = msg;
  }
};
