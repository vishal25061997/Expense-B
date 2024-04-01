const Sequelize = require("sequelize");
const sequelize = require("../util/database");

//id, name , password, phone number, role

const Expense = sequelize.define("expenses", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  // name:Sequelize.STRING,
  expenseamount: Sequelize.STRING,
  description: Sequelize.STRING,
  category: Sequelize.STRING,
});

module.exports = Expense;
