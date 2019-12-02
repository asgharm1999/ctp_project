const express = require('express');
const bodyParser = require('body-parser');
const expressSession = require('express-session');
const morgan = require('morgan');
const path = require('path');
const db = require('./models');
const passport = require('./middlewares/authentication');
const app = express();
const PORT = process.env.PORT || 5000;



// this lets us parse 'application/json' content in http requests
app.use(bodyParser.json())

// setup passport and session cookies

app.use(expressSession({ 
  secret: 'secret session',//process.env.SESSION_SECRET, 
  resave: false,
  saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());



// add http request logging to help us debug and audit app use
const logFormat = process.env.NODE_ENV==='production' ? 'combined' : 'dev';
app.use(morgan(logFormat));

// this mounts controllers/index.js at the route `/api`
app.use('/api', require('./controllers'));

// this mounts controllers/appConfig.js at the rout *** delete
app.use('/', require('./controllers/appConfig.js'));

// for production use, we serve the static react build folder
if(process.env.NODE_ENV==='production') {
  app.use(express.static(path.join(__dirname, '../client/build')));

  // all unknown routes should be handed to our react app
  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
  });
}

// update DB tables based on model updates. Does not handle renaming tables/columns
// NOTE: toggling this to true drops all tables (including data)
db.sequelize.sync({ force: false });

// start up the server
app.listen(PORT, () => console.log(`Listening on ${PORT}`));

// show all express routes
const listEndpoints = require('express-list-endpoints');
 
 
app.route('/')
  .all(function(req, res) {
    // Handle request
  })
  .get(function(req, res) {
    // Handle request
  })
  .post(function(req, res) {
    // Handle request
  });
 
app.route('/about')
  .get(function(req, res) {
    // Handle request
  });
 
console.log(listEndpoints(app));
/* It omits the 'all' verbs.
[{
    path: '/',
    methods: ['GET', 'POST']
  },
  {
    path: '/about',
    methods: ['GET']
}]
*/
