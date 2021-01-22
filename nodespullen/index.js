const fs = require("fs");

// server-side JS
console.log("start");

fs.readFile("boek.txt", "utf8", (err, content) => { // zeer waarschijnlijk async
  console.log("Inhoud heb ik hier:", content);
});

setTimeout(() => {
  console.log('timeout');
}, 3000);

for (let i = 0; i < 40000; i++) { // synchroon
  console.log(".", i);
}

console.log("eind");

// Node.js - bijzonder in het afhandelen van heul veul requests
