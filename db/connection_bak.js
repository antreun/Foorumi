var Sequelize = require('sequelize');

var sequelize = new Sequelize('foorumi', '', '', {
  dialect: 'sqlite',
  storage: 'db/database.sqlite'
});

module.exports = {
  DataTypes: Sequelize,
  sequelize: sequelize
};
