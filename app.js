const express = require("express");
const bodyParser = require("body-parser");
const sequelize = require("./db/db");
const { authRoutes } = require("./Routes/AuthRoutes");
const cors = require("cors")

const app = express();

app.use(express.json());
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));

app.use(authRoutes);


app.get("/", (req, res) => {
  res.send("<h1>hello</h1>");
});

sequelize
  .sync()
  .then(() => {
    console.log("connected");
    app.listen(4500);
  })
  .catch((error) => {
    console.log(error);
  });
