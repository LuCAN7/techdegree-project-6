const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('body-parser');
const dataJSON = require('./data.json');

const app = express();

const PORT = process.env.PORT || 3000;
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug'); // what kind of files to look for

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/static', express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
  const projects = dataJSON.projects;

  res.render('index', { projects: projects});
});

app.get('/about', function (req, res) {
  res.render('about');
});

app.get('/project/:id', function (req, res) {
  const projects = dataJSON.projects;
  const id = parseInt(req.params.id) - 1;
  
  res.render('project', { project: projects[id] });
});

app.use((req, res, next) => {
  const error = new Error('Page Not Found');
  
  error.status = 404;
  console.log('There was an Error - ', error);
  next(error);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.locals.error = err;
  res.render('error');  
});

app.listen(PORT, () => {
  console.log(`Server is started on PORT: ${PORT}`);
});
