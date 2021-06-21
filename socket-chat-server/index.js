const express = require("express");
const app = express();
const path = require("path");
const SocketIO = require("socket.io");

app.use(express.static(path.join(__dirname, "public")));

const server = app.listen(process.env.PORT || 7777, () => {
  console.log(`Server on port ${process.env.PORT || 7777}`);
});

const io = SocketIO(server);

io.on("connection", (socket) => {
  console.log(`new connection`, socket.id);
  socket.on("Chat:message", (data) => {
    console.log(data);
  });
});
