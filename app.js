const express = require('express');
const path = require('path');

const app = express();

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/login', (req, res) => {
  res.render('login');
});

app.post('/login', (req, res) => {
  res.send('Logando');
});

app.listen(3000);
