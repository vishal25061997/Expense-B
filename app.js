// const path = require('path');
const bodyParser = require("body-parser");
const express = require("express");
var cors = require("cors");
const sequelize = require("./util/database");
const User = require("./Models/users");
const Expense = require("./Models/Expenses");
const Order = require("./Models/orders");
const userRoutes = require("./routes/user");
const expenseRoutes = require("./routes/expense");
const purchaseRoutes = require("./routes/purchase");
const premiumFeatureRoutes = require("./routes/premiumFeature");

const app = express();
const dotenv = require("dotenv");

// get config vars
dotenv.config();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false })); ////this is for handling forms
app.use(express.json()); //this is for handling jsons

app.use("/user", userRoutes);
app.use("/expense", expenseRoutes);
app.use("/purchase", purchaseRoutes);
app.use("/premium", premiumFeatureRoutes);

User.hasMany(Expense);
Expense.belongsTo(User);

User.hasMany(Order);
Order.belongsTo(User);

sequelize
  .sync()
  .then(() => {
    console.log("connected");
    app.listen(4500);
  })
  .catch((err) => {
    console.log("not connected");
    console.log(err);
  });
