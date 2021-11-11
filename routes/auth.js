const express = require('express');
const router = express.Router();
const User = require('../models/user');
const { getToken, isAuth } = require('../utils');
const bcrypt = require('bcryptjs');
const Joi = require('@hapi/joi'); 
const jwt = require('jsonwebtoken');
const config = require('config');
//get user
router.get('/', isAuth, async function (req, res) {
  //find user by findBYId using req.user in which we used token to get th user and
  // /select is used if user find by id return user without password to client
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('server error');
  }
});
//register user 

router.post('/register', async (req, res) => {


 
  const { name, email, password} = req.body;
  try {
    let user = await User.findOne({ email });
    //check if user exist
    if (user) {
      return res.status(400).json({
        errors: [
          {
            message: 'User already exist',
            context: {
              label: 'exist',
            },
          },
        ],
      });
    }
    user = new User({
      name,
      email,
      password,
    });
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);
    await user.save();
    const payload = {
      id: user.id,
      isAdmin: user.isAdmin,
    };
    jwt.sign(
      payload,
      config.get('TOKEN_SECRET'), 
      { expiresIn: '1800s' },
      function (err, token) {
        if (err) {
          throw err;
        }
        res.json({ token });
      }
    );
    
  } catch (err) {
    console.error(err.message);
    res.status(500).send('server error');
  }
});
//Login user

router.post('/signin', async (req, res) => {
  const { email, password } = req.body;
  console.log(email);
  console.log(password);

  try {
    let signinUser = await User.findOne({
      email,
    });
    if (!signinUser) {
      return res.status(400).json({ errors: [{ msg: 'Invalid Credentials' }] });
    }
    //compare password see if email and password matches
    const isMatch = await bcrypt.compare(password, signinUser.password);
    if (!isMatch && !signinUser.isAdmin) {
      return res.status(400).json({ errors: [{ msg: 'Invalid Credentials' }] });
    }
    const payload = {
      id: signinUser.id,
      isAdmin: signinUser.isAdmin,
    };

    jwt.sign(
      payload,
      config.get('TOKEN_SECRET'),
      { expiresIn: '18s' },
      function (err, token) {
        if (err) {
          throw err;
        }
        res.json({ token });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send('server error');
  } 
});

module.exports = router;
