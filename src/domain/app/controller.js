const ValidationError = require('../../exceptions/validation-error');
const usecase = require('./usecases');

const appListing = async (req, res, next) => {
  const { category, customerType } = req.query;

  if (!category || !customerType) {
    throw new ValidationError('category and customerType should be defined in query params');
  }

  try {
    const appList = await usecase.appListing(category, customerType);

    return res.json({
      apps: appList,
    });
  } catch (error) {
    return next(error);
  }
};

const updateAppRating = async (req, res, next) => {
  const { installedApp } = req.body;

  if (!installedApp) {
    throw new ValidationError('installedApp should be defined in query params');
  }

  try {
    const app = await usecase.appInstall(installedApp);

    return res.json({
      app,
    });
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  appListing,
  updateAppRating,
};
