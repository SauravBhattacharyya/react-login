const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const User = require("./model/user");
const user = require("./model/user");
const { json } = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect(
  `mongodb+srv://admin:admin@cluster0.l0ozy.mongodb.net/?retryWrites=true&w=majority`
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", () => console.log("Connected Successfully"));

app.get("/", (req, res) => {
  res.send("Welcome?");
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  user.findOne({ email }).then((obj) => {
    if (obj.password === password) {
      res.send({ status: 200, message: "User Found", data: obj._id });
    } else {
      res.send({ status: 404, message: "User not found" });
    }
  });
});

app.post("/register", async (req, res) => {
  let obj = {
    email: req.body.email,
    password: req.body.password,
    phone: req.body.phone,
  };
  user.create(obj, (err, obj) => {
    if (err) {
      console.log(err);
    } else {
      console.log(obj);
      res.send({ status: 200, data: obj });
    }
  });
});

app.get("/getUser", async (req, res) => {
  let { id } = req.query;
  user.findById(id, (err, obj) => {
    if (err) {
      res.send({ status: 404, data: "Error in getting details" }).status(404);
    }

    res.send({ status: 200, email: obj.email, phone: obj.phone });
  });
});

app.listen(3001, () => console.log("Listening on Port 3001"));
