const listModel = require("./api/model");

var express = require("express"),
  app = express(),
  port = process.env.PORT || 3001,
  mongoose = require("mongoose"),
  bodyParser = require("body-parser"),
  cors = require("cors");
mongoose.Promise = global.Promise;
mongoose
  .connect("mongodb://localhost:27017/Socket_TEST", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("DB Connected !!!");
  })
  .catch((err) => {
    console.log(err);
  });

const server = require("http").Server(app);

app.use(cors());
app.use(bodyParser.json());

var routes = require("./api/route/index");
routes(app);

app.use(function (req, res) {
  res.status(404).send({ url: req.originalUrl + " not found" });
});

const socketIO = require("socket.io")(server, {
  cors: { origin: "*" },
});
socketIO.on("connection", (socket) => {
  console.log(`⚡: ${socket.id} user just connected!`);
  // socket.emit("loadData", []);

  socket.on("getData", () => {
    listModel.find((err, data) => {
      if (err) return console.error(err);
      socket.emit("loadData", data);
    });
  });

  socket.on("create", async (data) => {
    try {
      await listModel.create(data);
      const res = await listModel.find({});
      socket.broadcast.emit("loadData", res);
      socket.emit("loadData", res);
    } catch (error) {
      console.log("error", error);
    }
  });
  socket.on("disconnect", () => {
    console.log(`🔥: ${socket.id} Disconnected`);
    socket.disconnect();
  });
});

server.listen(port, () => {
  console.log(`Server listening on ${port}`);
});
