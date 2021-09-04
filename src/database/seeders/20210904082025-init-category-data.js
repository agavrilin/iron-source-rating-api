module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert('category', [{
    id: 'ffb46300-207c-4cee-ac6e-1c7b7b628195',
    name: 'social',
    description: 'social app category',
    createdAt: '2021-09-04 05:08:48',
    updatedAt: '2021-09-04 05:08:48',
  }, {
    id: '80e9230c-8132-4b47-b531-32e9fcd21b65',
    name: 'music',
    description: 'music app category',
    createdAt: '2021-09-04 05:08:48',
    updatedAt: '2021-09-04 05:08:48',
  }, {
    id: '8759e97b-e10d-4a71-a7d2-24b0007f6e4f',
    name: 'video-editing',
    description: 'video-editing app category',
    createdAt: '2021-09-04 05:08:48',
    updatedAt: '2021-09-04 05:08:48',
  }]),

  down: async () => {},
};
