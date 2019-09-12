const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('body-parser');
const projects = require('./data.json')

const app = express();

// view engine setup
app.set('view engine', 'pug'); // what kind of files to look for
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser());

// app.set('views', path.join(__dirname, 'views'));
// app.use(express.static(path.join(__dirname, 'public')));

app.use('/static', express.static('public'));

// console.dir("1-",app.locals.title);
// console.log(projects.projects[0]);

app.get('/', function (req, res) {
  // const routeParams = req.param;
  const data = projects.projects;
  // console.log(routeParams);
  console.log(data);
  // console.log('Reponse Body:', req.body);
  // console.log('Response Locals:', req.locals);
  // res.locals = data.projects;
  // let message = 'Relax this is only a test'
  res.render('index', { projects: data });
 
});

app.get('/about', function (req, res) {
  res.render('about');
 
  
});

// app.get('/projects/:id', function (req, res) {
//   const project = res.params.id;
//   console.log(project)
//   // res.render('project', { project: project });
  
// });

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
  // res.render('error');  
});


app.listen(3000, () => {
  console.log('Server is started on PORT:3000...');
});

