import * as socketio from "socket.io";

import app from "./config/app";
import env from "./env";

const SERVER_HOSTNAME = env.getHostName();
const SERVER_PORT = env.getPort();

let http = require("http").Server(app);
let io = require("socket.io")(http);

// Websocket handler.
io.on("connection", function (socket: any) {
  console.log("User socket opened!");
  socket.on("message", (msg: string) => {
    console.log("Sending message: " + msg);
    io.emit("message", msg);
  });
});

// Main HTTP server, cannout use an express instance with socket.io
const server = http.listen(SERVER_PORT, SERVER_HOSTNAME, () => {
  console.log("Server listening on " + SERVER_HOSTNAME + ":" + SERVER_PORT);
});
