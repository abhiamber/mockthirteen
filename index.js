const express = require("express");
const app = express();
let conncet = require("./config/db");
require("dotenv").config();
let PORT = process.env.PORT || 8080;
let ScoreModel = require("./model/score.model");

app.use(express.json());
let cors = require("cors");
app.use(cors());

app.get("/", async (req, res) => {
  res.send("hurray13.....");
});

app.get("/question", async (req, res) => {
  let arr = [];
  for (let i = 0; i < 10; i++) {
    let x = Math.random() * 8;
    x = Math.floor(x);
    let r = (Math.random() + 1).toString(36).substring(x);
    arr.push(r);
  }
  res.send({ arr });
});

app.get("/score", async (req, res) => {
  try {
    let score = await ScoreModel.find().sort({ score: -1 });
    res.send({ messg: score });
  } catch (e) {
    console.log(e);
    res.send({ messg: e.message });
  }
});
app.post("/score", async (req, res) => {
  let { name, level } = req.body;

  try {
    let score = new ScoreModel({ name, level });
    await score.save();
    res.send({ messg: "YOur Welcome you can play again" });
  } catch (e) {
    console.log(e.emssage);
    res.send({ messg: e.message });
  }
});

app.listen(PORT, async () => {
  await conncet();
  console.log("server is working");
});
