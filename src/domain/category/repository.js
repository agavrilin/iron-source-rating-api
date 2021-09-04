const Category = require('../../database/models/category');

const findCategoryByName = (name) => Category.findOne({ where: { name } });

module.exports = {
  findCategoryByName,
};
