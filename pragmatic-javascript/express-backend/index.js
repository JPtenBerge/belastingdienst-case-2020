const express = require("express");
const cors = require('cors');
const path = require('path');
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug'); // jade ejs

app.use(cors());
app.use(express.urlencoded());

// ASP.NET Core middleware

// app.use(express.static()); // static files

let teas = [];

app.get("/", (req, res) => {
  res.render('index', { message: 'hoi!', teas });
});
app.post('/tea', (req, res) => {
    teas.push(req.body);
    res.send('Bedankt voor de thee!');
});
app.get('/api/tea', (req, res) => {
  res.send(teas);
});

app.listen(1337, () => console.log("Listening @ :1337"));
