const socket = io();

//Dom elements
let messague = document.getElementById("message");
let username = document.getElementById("username");
let btn = document.getElementById("send");
let output = document.getElementById("output");
let actions = document.getElementById("actions");

btn.addEventListener("click", () => {
  socket.emit("Chat:message", {
    username: username.value,
    messague: messague.value,
  });
});
