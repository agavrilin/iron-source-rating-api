module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert('appCategory', [{
    id: 'a0abf566-6936-4f63-92e0-4b20b458af8d',
    categoryID: 'ffb46300-207c-4cee-ac6e-1c7b7b628195',
    appID: 'e6e607e5-85cb-4e4a-bfae-4398000751ca',
    createdAt: '2021-09-04 05:08:48',
    updatedAt: '2021-09-04 05:08:48',
  }, {
    id: '71678585-39ac-47df-b962-3f979c098219',
    categoryID: 'ffb46300-207c-4cee-ac6e-1c7b7b628195',
    appID: 'e7e607e5-85cb-4e4a-bfae-4398000751ca',
    createdAt: '2021-09-04 05:08:48',
    updatedAt: '2021-09-04 05:08:48',
  }, {
    id: '831d995f-8b75-4667-9d47-3f9f60135786',
    categoryID: '80e9230c-8132-4b47-b531-32e9fcd21b65',
    appID: 'e8e607e5-85cb-4e4a-bfae-4398000751ca',
    createdAt: '2021-09-04 05:08:48',
    updatedAt: '2021-09-04 05:08:48',
  }]),

  down: async () => {},
};
