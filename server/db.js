const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('my_deploy', 'postgres', 'rita777rita', {
  host: 'localhost',
  dialect: 'postgres',
  logging: false,
});

module.exports = sequelize;
