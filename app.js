const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('body-parser');

const app = express();

// view engine setup
app.set('view engine', 'pug');

app.get('/', function (req, res) {
  res.render('./views/index.pug');
  
})

app.listen(3000, () => {
  console.log('Server is working...');
});