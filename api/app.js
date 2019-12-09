//require('dotenv').config({ path: '.env' }); // chat

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // chat
const Chatkit = require('@pusher/chatkit-server'); // chat
const expressSession = require('express-session');
const morgan = require('morgan');
const path = require('path');
const db = require('./models');
const passport = require('./middlewares/authentication');
const app = express();
const PORT = process.env.PORT || 5000;



// this lets us parse 'application/json' content in http requests
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// setup passport and session cookies

app.use(expressSession({ 
  secret: 'super_long_secret_that_should_be_replaced', //process.env.SESSION_SECRET, 
  resave: false,
  saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

/*const chatkit = new Chatkit.default({
    instanceLocator: process.env.CHATKIT_INSTANCE_LOCATOR,
    key: process.env.CHATKIT_SECRET_KEY,
});
*/


// add http request logging to help us debug and audit app use
const logFormat = process.env.NODE_ENV==='production' ? 'combined' : 'dev';
app.use(morgan(logFormat));

// this mounts controllers/index.js at the route `/api`
app.use('/api', require('./controllers'));

// this mounts controllers/appConfig.js at the rout *** delete
app.use('/', require('./controllers/appConfig.js'));

// CHAT API ---------------------------
app.post('/chatusers', (req, res) => {
    const { userId } = req.body;

    chatkit
        .createUser({
            id: userId,
            name: userId,
        })
        .then(() => {
            res.sendStatus(201);
        })
        .catch(err => {
            if (err.error === 'services/chatkit/user_already_exists') {
                console.log(`User already exists: ${userId}`);
                res.sendStatus(200);
            } else {
                res.status(err.status).json(err);
            }
        });
});

app.post('/chatauthenticate', (req, res) => {
    const authData = chatkit.authenticate({
        userId: req.query.user_id,
    });
    res.status(authData.status).send(authData.body);
});


// END OF CHAT API --------------------------------

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



/*

require('dotenv').config({ path: '.env' });

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const Chatkit = require('@pusher/chatkit-server');

const app = express();

const chatkit = new Chatkit.default({
    instanceLocator: process.env.CHATKIT_INSTANCE_LOCATOR,
    key: process.env.CHATKIT_SECRET_KEY,
});

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/users', (req, res) => {
    const { userId } = req.body;

    chatkit
        .createUser({
            id: userId,
            name: userId,
        })
        .then(() => {
            res.sendStatus(201);
        })
        .catch(err => {
            if (err.error === 'services/chatkit/user_already_exists') {
                console.log(`User already exists: ${userId}`);
                res.sendStatus(200);
            } else {
                res.status(err.status).json(err);
            }
        });
});

app.post('/authenticate', (req, res) => {
    const authData = chatkit.authenticate({
        userId: req.query.user_id,
    });
    res.status(authData.status).send(authData.body);
});

app.set('port', process.env.PORT || 5200);
const server = app.listen(app.get('port'), () => {
    console.log(`Express running → PORT ${server.address().port}`);
});

*/ 
