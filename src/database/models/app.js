const Sequelize = require('sequelize');

const db = require('../index');
const AppCategory = require('./appCategory');

const App = db.define('app', {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING(255),
    allowNull: false,
    unique: true,
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: true,
  },
  rating: {
    type: Sequelize.NUMBER,
    allowNull: false,
    defaultValue: 0,
  },
  createdAt: {
    type: Sequelize.DATE,
    allowNull: false,
    defaultValue: new Date(),
  },
  updatedAt: {
    type: Sequelize.DATE,
    allowNull: true,
  },
}, {
  defaultScope: {},
  engine: 'InnoDB',
  timestamps: true,
  tableName: 'app',
});

App.hasMany(AppCategory, { foreignKey: 'appID' });

module.exports = App;
