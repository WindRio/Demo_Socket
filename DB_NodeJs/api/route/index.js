const {
  getPage,
  createItem,
  updateItem,
  deleteItem,
} = require("../controller/index");

const routes = (app) => {
  app.get("/socket", getPage),
    app.post("/socket", createItem),
    app.put("/socket/:id", updateItem),
    app.delete("/socket/:id", deleteItem);
};

module.exports = routes;
