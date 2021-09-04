const Sequelize = require('sequelize');

const db = require('../index');

const AppCategory = db.define('appCategory', {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  categoryID: {
    type: Sequelize.STRING(255),
    allowNull: false,
    unique: true,
  },
  appID: {
    type: Sequelize.TEXT,
    allowNull: true,
  },
  createdAt: {
    type: 'TIMESTAMP',
    allowNull: false,
    defaultValue: Date.now,
  },
  updatedAt: {
    type: Sequelize.DATE,
    allowNull: true,
  },
}, {
  defaultScope: {},
  engine: 'InnoDB',
  timestamps: true,
  tableName: 'appCategory',
});

module.exports = AppCategory;
