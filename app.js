const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('body-parser');

app.get('/', function (req, res) {
  res.send('hello world')
})

app.listen(3000)