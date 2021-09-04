const { CUSTOMER_TYPE_MAP } = require('./const');

const gold = (appList = []) => {
  const shuffledAppList = appList.sort(() => 0.5 - Math.random());

  return [shuffledAppList[0], shuffledAppList[1]];
};

const bronze = (appList = []) => {
  const sortedAppList = appList.sort((appOne, appTwo) => {
    if (appOne.rating < appTwo.rating) {
      return 1;
    }
    if (appOne.rating > appTwo.rating) {
      return -1;
    }
    return 0;
  });

  return [sortedAppList[0], sortedAppList[1]];
};

const getCustomerTypeFilterStrategy = (customerType) => {
  const customerTypeStrategyMap = {
    [CUSTOMER_TYPE_MAP.gold]: gold,
    [CUSTOMER_TYPE_MAP.bronze]: bronze,
  };

  return customerTypeStrategyMap[customerType];
};

module.exports = {
  getCustomerTypeFilterStrategy,
};
