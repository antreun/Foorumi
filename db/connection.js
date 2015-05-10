var Sequelize = require('sequelize');

var sequelize = new Sequelize('postgres://knwcjemnmftxyy:w17VYvFG6d5NBdXmxitFec67tl@ec2-184-73-253-4.compute-1.amazonaws.com:5432/d71rv0fjb6tf0f', {
  dialect: 'postgres',
  storage: 'postgres'
});

module.exports = {
  DataTypes: Sequelize,
  sequelize: sequelize
};
