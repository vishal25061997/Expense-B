// const Sequelize= require("sequelize");
// const sequelize=require("../db/db")

// const User= sequelize.define("authexpense",{
//     id:{
//         type:Sequelize.INTEGER,
//         autoIncrement:true,
//         allowNull:false,
//         primaryKey:true,
//     },
//     name: {
//         type: Sequelize.STRING,
//         allowNull: false,
//       },
//       email: {
//         type: Sequelize.STRING,
//         allowNull: false,
//       },
//       password: {
//         type: Sequelize.STRING,
//         allowNull: false,
//       }
// })

// module.exports={User}

const Sequelize = require("sequelize");
const sequelize = require("../db/db");

const User = sequelize.define("User", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true, // Ensure emails are unique
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = User;
