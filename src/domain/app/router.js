const controller = require('./controller');

module.exports = (router) => {
  router
    .get('/relevantApplication', controller.appListing)
    .post('/installedApps', controller.updateAppRating);
};
