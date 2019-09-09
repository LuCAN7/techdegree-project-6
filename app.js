const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('body-parser');

const app = express();

// view engine setup
app.set('view engine', 'pug');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser());

app.use('/static', express.static('public'));

app.use((req, res, next) => {
  // console.log('...Problem');
  const err = new Error('Not Found');
  // ('Oh noes, Something went wrong!');
  next(err);
});

app.get('/', function (req, res) {

  console.log(res.locals);
  // res.locals = data.projects;
  res.render('layout');
  // let dave = require('./views/index');
  
});

app.get('/about', function (req, res) {
  res.render('about');
  
});

app.get('/projects/:id', function (req, res) {
  const project = res.params.id;
  res.render('project', { project: project });
  
})

app.use((err, req, res, next) => {
  res.locals.error = err;
  res.status(err.status);
  res.render('error');
  
});


app.listen(3000, () => {
  console.log('Server is started on PORT:3000...');
});