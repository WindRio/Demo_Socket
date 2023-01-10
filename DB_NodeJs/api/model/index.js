const mongoose = require("mongoose");

const listSchema = mongoose.Schema({
  codeStock: {
    type: String,
  },
  marketPrice: {
    type: Number,
  },
  volatility: {
    type: Number,
  },
  totalTransaction: {
    type: Number,
  },
});

const listModel = mongoose.model("list", listSchema);
module.exports = listModel;
