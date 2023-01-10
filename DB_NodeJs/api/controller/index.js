const listModel = require("../model/index");

//Get-Page---------------------------------
exports.getPage = async (req, res) => {
  try {
    const listItem = await listModel.find({});
    res.send({
      listItem,
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};
//Create-Item--------------------------------
exports.createItem = async (req, res) => {
  try {
    const { codeStock, marketPrice, volatility, totalTransaction } = req.body;
    await listModel.create({
      codeStock: codeStock,
      marketPrice: marketPrice,
      volatility: volatility,
      totalTransaction: totalTransaction,
    });
    res.send({ message: "Success" });
  } catch (error) {
    res.json({ message: error.message });
  }
};
//Update-Item--------------------------------
exports.updateItem = async (req, res) => {
  try {
    const id = req.params.id;
    const { codeStock, marketPrice, volatility, totalTransaction } = req.body;
    await listModel.findByIdAndUpdate(
      id,
      {
        codeStock: codeStock,
        marketPrice: marketPrice,
        volatility: volatility,
        totalTransaction: totalTransaction,
      },
      { new: true }
    );
    res.send({ message: "Success" });
  } catch (error) {
    res.json({ message: error.message });
  }
};
//Delete-Item--------------------------------
exports.deleteItem = async (req, res) => {
  try {
    const id = req.params.id;
    await listModel.findByIdAndDelete(id);
    res.send({ message: "Success" });
  } catch (error) {
    res.json({ message: error.message });
  }
};
