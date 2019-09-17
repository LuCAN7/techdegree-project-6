const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('body-parser');
const dataJSON = require('./data.json');

const app = express();

// const PORT = process.env.PORT || 4000;
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug'); // what kind of files to look for

//
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());

app.use('/static', express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
  const projects = dataJSON.projects;
  // console.log();
  res.render('index', { projects: projects});
 
});

app.get('/about', function (req, res) {
  res.render('about');
  // res.send('<h2> this is the about page </h2>');
});

app.get('/project/:id', function (req, res) {
  const projects = dataJSON.projects;
  const id = parseInt(req.params.id) - 1;
  
  res.render('project', { project: projects[id] });
  
});


// app.use((req, res, next) => {
//   const err = new Error('Not Found');
//   // console.log('...Problem');
//   // ('Oh noes, Something went wrong!');
//   err.status = 404;
//   next(err);
// });

// app.use((err, req, res, next) => {
//   res.locals.error = err;
//   res.status(err.status);
//   // res.render('error');  
// });


app.listen(4000, () => {
  console.log(`Server is started on PORT: 4000...`);
});

