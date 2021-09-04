const Sequelize = require('sequelize');

const db = require('../index');
const AppCategory = require('./appCategory');

const Category = db.define('category', {
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
  tableName: 'category',
});

Category.hasMany(AppCategory, { foreignKey: 'categoryID' });

module.exports = Category;
