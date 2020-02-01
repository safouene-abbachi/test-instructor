const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const User = require('../../models/User');
const Gallery = require('../../models/Gallery');

// @route   POST api/user
// @desc    Register route
// @access  Public
router.post(
  '/:id',
  [
    check('title', 'title is required')
      .not()
      .isEmpty(),
    check('path', 'path is required')
      .not()
      .isEmpty()
  ],

  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });
    const galleryFields = {};
    const { title, path } = req.body;
    galleryFields.user = req.params.id;
    if (title) galleryFields.title = title;
    if (path) galleryFields.path = path;
    try {
      gallery = new Gallery(galleryFields);
      await gallery.save();
      res.json(gallery);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('server error');
    }
  }
);
// @route   GET api/Gallery
// @desc    GET route
// @access  Public

router.get('/:id', async (req, res) => {
  try {
    const gallery = await Gallery.find({ user: req.params.id }).populate(
      'gallery',
      ['title', 'path']
    );
    console.log('TCL: req.params.id', req.params.id);
    !gallery
      ? res.status(400).json({ msg: 'server error' })
      : res.json(gallery);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('server error');
  }
});
router.delete('/:id', async (req, res) => {
  try {
    // Remove Galleryi
    await Gallery.findOneAndRemove({ _id: req.params.id });

    res.json({ msg: 'Image deleted' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
