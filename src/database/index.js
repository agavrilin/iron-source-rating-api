const Sequelize = require('sequelize');

const {
  DB_HOST, DB_NAME, DB_USER, DB_PASSWORD,
} = process.env;

let connection;

try {
  connection = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    host: DB_HOST,
    dialect: 'mysql',
    logging: false,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
    timezone: '-03:00',
  });
} catch (err) {
  console.log(`@Exception on DB connection: ${err.message}`);
}

module.exports = connection;
