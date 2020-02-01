const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const User = require('../../models/User');
const Gallery = require('../../models/Gallery');

// @route   POST api/user
// @desc    Register route
// @access  Public
router.post(
  '/',
  [
    check('name', 'Name is required')
      .not()
      .isEmpty(),
    check('surName', 'Sur Name is required')
      .not()
      .isEmpty(),
    check('birthYear', 'the birth year is required')
      .not()
      .isEmpty(),
    check('birthPlace', 'the birth place is required')
      .not()
      .isEmpty()
  ],

  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });
    const { name, surName, birthYear, birthPlace } = req.body;

    try {
      user = new User({
        name,
        surName,
        birthYear,
        birthPlace
      });
      await user.save();
      res.json(user);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('server error');
    }
  }
);
// @route   GET api/user
// @desc    GET route
// @access  Public

router.get('/', async (req, res) => {
  try {
    const user = await User.find().populate('user', [
      'name',
      'surName',
      'birthYear',
      'birthPlace'
    ]);
    !user ? res.status(400).json({ msg: 'server error' }) : res.json(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('server error');
  }
});
// @route    DELETE api/user
// @desc     Delete user
// @access   Private
router.delete('/:id', async (req, res) => {
  try {
    // Remove user posts
    await Gallery.findOneAndRemove({ gallery: req.params.id });

    // Remove user
    await User.findOneAndRemove({ _id: req.params.id });

    res.json({ msg: 'User deleted' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});
// @route    Alter api/user
// @desc     Alter user
// @access   Private
router.put('/:id', async (req, res) => {
  const { name, surName, birthYear, birthPlace } = req.body;
  const userFields = {};
  if (name) userFields.name = name;
  if (surName) userFields.surName = surName;
  if (birthYear) userFields.birthYear = birthYear;
  if (birthPlace) userFields.birthPlace = birthPlace;

  try {
    // Alter user
    await User.findOneAndUpdate(
      { _id: req.params.id },
      { $set: userFields },
      { new: true, upsert: true }
    );

    res.json({ msg: 'User modified' });
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
