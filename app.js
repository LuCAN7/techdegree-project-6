const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('body-parser');
const projects = require('./data.json')

const app = express();

// view engine setup
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser());

app.use('/static', express.static('public'));

console.log(projects.projects[0]);

app.get('/', function (req, res) {

  console.log('Reponse Body:', res.body);
  console.log('res.locals', res.locals);
  // res.locals = data.projects;
  let message = 'Relax this is only a test'
  res.render('index', {headingTest: "Let's Web together!!!", message: message});
  // let dave = require('./views/index');
  
});

app.get('/about', function (req, res) {
  res.render('about');
  
});

app.get('/projects/:id', function (req, res) {
  const project = res.params.id;
  res.render('project', { project: project });
  
});

app.use((req, res, next) => {
  const err = new Error('Not Found');
  // console.log('...Problem');
  // ('Oh noes, Something went wrong!');
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.locals.error = err;
  res.status(err.status);
  res.render('error');
  
});


app.listen(3000, () => {
  console.log('Server is started on PORT:3000...');
});

