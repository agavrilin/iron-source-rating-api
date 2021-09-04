const EntityNotFoundError = require('../../../exceptions/entity-not-found-error');
const { findAppByName, updateAppRating } = require('../repository');

module.exports = async (installedApp) => {
  const app = await findAppByName(installedApp);

  if (!app) {
    throw new EntityNotFoundError(`App with name ${installedApp} not found`);
  }

  const newRating = app.rating + 1;

  return updateAppRating(app.id, newRating);
};
