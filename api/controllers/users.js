const express = require('express');
const router = express.Router();
const db = require('../models');
const passport = require('../middlewares/authentication');
const { User } = db;

// This is a simple example for providing basic CRUD routes for
// a resource/model. It provides the following:
//    GET    /users
//    POST   /users
//    GET    /users/:id
//    PUT    /users/:id
//    DELETE /users/:id 

// There are other styles for creating these route handlers, we typically
// explore other patterns to reduce code duplication.
// TODO: Can you spot where we have some duplication below?


router.get('/', (req,res) => {
  User.findAll({})
    .then(users => res.json(users));
});


/*router.post('/',
  //move passports to login
  //passport.isAuthenticated(),
  (req, res) => {
    let { firstName, lastName, longitude, 
      latitude, email, password  } = req.body;
    
    User.create({
      firstName,
      lastName,
      longitude,
      latitude,
      email,
      password

     })
      .then(user => {
        res.status(201).json(user);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  }
);
*/

router.get('/:id', (req, res) => {
  const { id } = req.params;
  Post.findByPk(id)
    .then(post => {
      if(!post) {
        return res.sendStatus(404);
      }

      res.json(post);
    });
});


router.put('/:id',
  // move passports to login
  //passport.isAuthenticated(),
  (req, res) => {
    const { id } = req.params;
    Post.findByPk(id)
      .then(post => {
        if(!post) {
          return res.sendStatus(404);
        }

        post.content = req.body.content;
        post.save()
          .then(post => {
            res.json(post);
          })
          .catch(err => {
            res.status(400).json(err);
          });
      });
  }
);


router.delete('/:id',
  passport.isAuthenticated(),
  (req, res) => {
    const { id } = req.params;
    Post.findByPk(id)
      .then(post => {
        if(!post) {
          return res.sendStatus(404);
        }

        post.destroy();
        res.sendStatus(204);
      });
  }
);


module.exports = router;