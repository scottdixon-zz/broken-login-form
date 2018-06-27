const express = require('express');
const session = require('express-session');
const authenticate  = require('./checkPass');
const bodyParser = require('body-parser')
const app = express();




// Allow access to everything in /public.
// This is for our stylesheets & images.
app.use(express.static('public'));
app.use(session({
  secret: 'abc123',
  resave: false,
  saveUninitialized: true
}));

app.use(bodyParser.urlencoded({extended:false}))

// Views #thepuglifechoseme
app.set('view engine', 'pug')

app.get("/", (req, res) => {
  res.render('login');
});

app.post("/secure", authenticate, (req, res) => {
 
  if (req.session.loggedIn){
    res.render('secure');
  } else {
    res.status(401).send(`Wrong password: sign in attempts ${req.session.loginAttempts}`)
  }
});

app.listen(3000);
console.log("Lift off!");
