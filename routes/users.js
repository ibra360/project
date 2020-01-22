const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const passport = require('passport');
const router = express.Router();
const { ensureAuthenticated } = require('../helpers/auth');


// Load User Model
require('../models/User');
const User = mongoose.model('users');

// User Login Route
// router.get('/login', (req, res) => {
//   res.send({msg: "Hi"})
// });

// // User Register Route
// router.get('/register', (req, res) => {
//   res.render('users/register');
// });

// Login Form POST
router.post('/login', passport.authenticate('local'), (req, res) => {
  res.send({ Msg: "Autheticated" })
});

// Register Form POST
router.post('/register', (req, res) => {
  console.log(req.body)
  let errors = [];

  if (req.body.password != req.body.password2) {
    errors.push({ text: 'Passwords do not match' });
  }

  if (req.body.password.length < 4) {
    errors.push({ text: 'Password must be at least 4 characters' });
  }

  // if (errors.length > 0) {
  //   res.send({ msg: " password length less than 0" })
  // } 
  else {
    User.findOne({ email: req.body.email })
      .then(user => {
        if (user) {
          errors.push({ Email: "Email already exist" })
          res.send(errors)
        } else {
          const newUser = new User({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
          });

          bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
              if (err) throw err;
              newUser.password = hash;
              newUser.save()
                .then(user => {
                  res.send(user)
                })
                .catch(err => {
                  console.log(err);
                  return;
                });
            });
          });
        }
      });
  }
});

// Logout User
router.get('/logout', (req, res) => {
  req.logout();
  req.flash('success_msg', 'You are logged out');
  res.redirect('/users/login');
});


router.post('/postadd', ensureAuthenticated, (req, res) => {

   console.log(req.user._id)
  Ad = {}

  Ad.title = req.body.title;
  Ad.description = req.body.description;
  Ad.contact = req.body.contact;
  Ad.address = req.body.address;
  Ad.image = req.file.buffer.toString("base64");

  User.findOne({_id : req.user._id }).then(user => {
    console.log("Hi abdullah")
    if (user) {
      console.log("User Found")
      User.findOne({
        _id: req.user._id,
        "Ads.title": req.body.title
      }).then(users => {
        if (users) {
          console.log("Hiiiiiiii")
          User.findOneAndUpdate(
            {
              _id: req.user._id,
              "Ads.title": req.body.title
            },
            { $set: { "Ads.$": Ad } },
            { new: true }
          )
            .then(updatedAd => res.json(updatedAd))
            .catch(err => res.json(err));
        } else {
          // add to books
          console.log("Hi")
          user.Ads.unshift(Ad);
          // save to db
          user.save().then(user => res.json(user));
        }
      }).catch(err => res.send(err))

    }
    else{
      res.json({msg:"User Not Found"})
    }
  });

})


router.get('/getAllAd', (req, res) => {





})

module.exports = router;