const express = require("express");
const app = express();
require("express-ws")(app);

let clients = [];
app.ws("/chat", (ws, req) => {
	clients.push(ws);

	ws.on("message", (msg) => {
		clients.forEach((c) => c.send(msg));
	});
	ws.on("close", () => {
		clients.splice(clients.indexOf(ws), 1);
	});
});

app.listen(3000, () => console.log('Chatserver listening @ :3000'));
