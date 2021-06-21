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

messague.addEventListener("keypress", () => {
  socket.emit("Chat:typing", {
    username: username.value,
  });
});

socket.on("Chat:message", (data) => {
  actions.innerHTML = "";
  output.innerHTML += `<p><strong>${data.username}: </strong><span>${data.messague} </span></p>`;
});

socket.on("Chat:typing", (data) => {
  actions.innerHTML = `<p><strong>${data.username} typing </strong></p>`;
});
