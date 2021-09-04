const App = require('../../database/models/app');
const AppCategory = require('../../database/models/appCategory');

const findAppsByCategory = (categoryID) => App.findAll({
  attributes: ['id', 'name', 'description', 'rating'],
  include: {
    model: AppCategory,
    where: { categoryID },
    attributes: [],
  },
});

const findAppByName = (name) => App.findOne({
  where: { name },
});

const updateAppRating = async (id, rating) => {
  await App.update({ rating }, { where: { id } });

  return App.findOne({ where: { id } });
};

module.exports = {
  findAppsByCategory,
  findAppByName,
  updateAppRating,
};
