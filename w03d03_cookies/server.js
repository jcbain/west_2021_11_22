const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const pageText = require('./data/languages.json');

// console.log('pageText', pageText);

const users = {
  123: {
    id: '123',
    email: 'scully@xfiles.com',
    password: 'abcd'
  }
}

const findUserByEmail = (email) => {
  for(const userId in users) {
    const user = users[userId];
    if(user.email === email) {
      return user;
    }
  }
  return null;
}

const app = express();
const port = 4545;

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public')); // serve up static files in the public directory
app.use(cookieParser());

app.set('view engine', 'ejs');

// log us in
// check if the email the client sent us is in our database of users
// if the passsword associate with that found user mathces the password the client sent
// log them in -> set a cookie 
app.post('/login', (req, res) => {
  // console.log('req.body', req.body);
  const email = req.body.email;
  const password = req.body.password;

  if (!email || !password) {
    return res.status(400).send("email and password cannot be blank");
  }

  const user = findUserByEmail(email);
  console.log('user', user);
  
  if(!user){
    return res.status(400).send("a user with that email does not exist")
  }

  if(user.password !== password) {
    return res.status(400).send('password does not match')
  }

  res.cookie('user_id', user.id);
  res.redirect('/secrets')
})

app.post('/register', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  if (!email || !password) {
    return res.status(400).send("email and password cannot be blank");
  }

  const user = findUserByEmail(email);

  if(user) {
    return res.status(400).send("a user already exists with that email")
  }

  const id = Math.floor(Math.random() * 2000) + 1;

  users[id] = {
    id: id,
    email: email,
    password: password
  }

  console.log('users', users);

  res.redirect('/login')


})

app.post('/logout', (req, res) => {
  res.clearCookie('user_id');
  res.redirect('/login')
})

app.get('/secrets', (req, res) => {
  const userId = req.cookies.user_id;

  if(!userId) {
    return res.status(401).send("you are not authorized to be here");
  }

  const user = users[userId];

  if(!user) {
    return res.status(400).send("you have an old cookie. Please create an account or login")
  }

  const templateVars = {
    email: user.email,
  };

  res.render('secrets', templateVars);

  // res.send('you made it')
})

app.get('/login', (req, res) => {
  res.render('login');
})

app.get('/register', (req, res) => {
  res.render('register');
})

app.get('/home', (req, res) => {

  console.log('req.cookies', req.cookies);

  const selectedLanguage = req.cookies.language || "eo";
  const templateVars = {
    head: pageText.homeHeaders[selectedLanguage],
    body: pageText.homeBodies[selectedLanguage]
  };

  res.render('home', templateVars);
})

app.get('/about', (req, res) => {
  const selectedLanguage = req.cookies.language || "zh";
  const templateVars = {
    head: pageText.aboutHeaders[selectedLanguage],
    body: pageText.aboutBodies[selectedLanguage]
  };

  res.render('about', templateVars);
});

app.get('/languages/:language_code', (req, res) => {
  console.log('req.params', req.params);
  const languageCode = req.params.language_code;

  res.cookie('language', languageCode);
  res.redirect('/home')

})


app.listen(port, () => console.log(`🛸 listening on port ${port}`));