const path = require('path');
const express = require('express');
const morgan = require('morgan')
const cors = require('cors');
const bodyParser = require('body-parser');

const jwt = require('./helpers/jwt');
const errorHandler = require('./helpers/error-handler');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(morgan('combined'));
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// use JWT auth to secure the api
app.use('/api', jwt());

// api routes
app.use('/api/users', require('./handlers/users/users.controller'));
app.use('*', require('./handlers/react/react.controller'));

// global error handler
app.use(errorHandler);

// start server
const port = 4000;
const server = app.listen(port, function () {
  console.log('Server listening on port ' + port);
});
