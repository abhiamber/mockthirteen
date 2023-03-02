let { Schema, model } = require("mongoose");

let scoreSchema = new Schema({
  name: String,
  score: Number,
});

let ScoreModel = model("score", scoreSchema);

module.exports = ScoreModel;
