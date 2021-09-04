module.exports = {
  development: {
    username: 'root',
    password: 'super-secure',
    database: 'iron_source_rating_dev',
    host: 'localhost',
    port: 3306,
    dialect: 'mysql',
    migrationStorage: 'sequelize',
    migrationStorageTableName: 'sequelize_meta',
    seederStorage: 'sequelize',
    seederStorageTableName: 'sequelize_data',
  },
};
