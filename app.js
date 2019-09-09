const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('body-parser');

const app = express();

// view engine setup
app.set('view engine', 'pug');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser());

app.get('/', function (req, res) {
  res.render('./index');
  // let dave = require('./views/index');
  
})

app.listen(3000, () => {
  console.log('Server is working...');
});