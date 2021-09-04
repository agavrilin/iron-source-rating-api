const EntityNotFoundError = require('../../../exceptions/entity-not-found-error');
const { getCustomerTypeFilterStrategy } = require('../../customer-type/service');
const { findCategoryByName } = require('../../category/repository');
const { findAppsByCategory } = require('../repository');

module.exports = async (categoryName, customerType) => {
  const customerTypeStrategy = getCustomerTypeFilterStrategy(customerType);

  if (!customerTypeStrategy) {
    throw new EntityNotFoundError(`CustomerType ${customerType} not found`);
  }

  const category = await findCategoryByName(categoryName);

  if (!category) {
    throw new EntityNotFoundError(`Category with name ${categoryName} not found`);
  }

  const appList = await findAppsByCategory(category.id);

  return customerTypeStrategy(appList);
};
