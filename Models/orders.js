const Sequelize = require("sequelize");
const sequelize = require("../util/database");

//id, name , password, phone number, role

const Order = sequelize.define("order", {
  razorpay_order_id: {
    type: Sequelize.STRING,
    autoIncrement: false,
    allowNull: false,
    primaryKey: false,
  },
  razorpay_payment_id: Sequelize.STRING,
  razorpay_signature: Sequelize.STRING,
  status_code: Sequelize.INTEGER,
});

module.exports = Order;
