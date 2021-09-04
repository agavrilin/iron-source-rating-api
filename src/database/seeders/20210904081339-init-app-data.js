module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert('app', [{
    id: 'e6e607e5-85cb-4e4a-bfae-4398000751ca',
    name: 'Facebook',
    description: 'Facebook app',
    createdAt: '2021-09-04 05:08:48',
    updatedAt: '2021-09-04 05:08:48',
  }, {
    id: 'e7e607e5-85cb-4e4a-bfae-4398000751ca',
    name: 'Instagram',
    description: 'Instagram app',
    createdAt: '2021-09-04 05:08:48',
    updatedAt: '2021-09-04 05:08:48',
  }, {
    id: 'e8e607e5-85cb-4e4a-bfae-4398000751ca',
    name: 'Spotify',
    description: 'Spotify app',
    createdAt: '2021-09-04 05:08:48',
    updatedAt: '2021-09-04 05:08:48',
  }]),

  down: async () => {},
};
