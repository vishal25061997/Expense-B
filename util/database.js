const Sequelize = require("sequelize");

const sequelize = new Sequelize("expense_application", "root", "Yadav@123", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
