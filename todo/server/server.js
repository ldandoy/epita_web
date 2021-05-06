// server.js

const express = require('express');
const jwt = require('express-jwt');
const cookieParser = require('cookie-parser');
const jsonwebtoken = require('jsonwebtoken');
const cors = require('cors');
const csrf = require('csurf')
const app = express();
app.use(cors());

const jwtSecret = 'secret123';

/*app.get('/jwt', (req, res) => {
  res.json({
    token: jsonwebtoken.sign({ user: 'johndoe' }, jwtSecret)
  });
});*/

app.get('/jwt', (req, res) => {
  const token = jsonwebtoken.sign({ user: 'johndoe' }, jwtSecret);
  res.cookie('token', token, { httpOnly: true });
  res.json({ token });
});

app.use(cookieParser());
app.use(jwt({
  secret: 'secret123',
  algorithms: ['HS256'],
  getToken: req => req.cookies.token
}));

const csrfProtection = csrf({
  cookie: true
});
app.use(csrfProtection);
app.get('/csrf-token', (req, res) => {
  res.json({ csrfToken: req.csrfToken() });
});

const foods = [
  { id: 1, description: 'burritos' },
  { id: 2, description: 'quesadillas' },
  { id: 3, description: 'churos' }
];
app.get('/foods', (req, res) => {
  res.json(foods);
});

app.post('/foods', (req, res) => {
  foods.push({
    id: foods.length + 1,
    description: 'new food'
  });
  res.json({
    message: 'Food created!'
  });
});

app.listen(3001);
console.log('App running on localhost:3001');