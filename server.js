const express = require('express');
const app = express();

// Allow access to everything in /public.
// This is for our stylesheets & images.
app.use(express.static('public'));

// Views #thepuglifechoseme
app.set('view engine', 'pug')

app.get("/", (req, res) => {
  res.render('login');
});

app.post("/secure", (req, res) => {
  res.render('secure');
});

app.listen(3000);
console.log("Lift off!");
