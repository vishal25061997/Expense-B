const Sequelize = require("sequelize");

const sequelize = new Sequelize("expenses", "root", "Yadav@123", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
