const mongoose = require('mongoose');
const GalerySchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  title: {
    type: String
  },
  path: [
    {
      type: String
    }
  ]
});
module.exports = galery = mongoose.model('galery', GalerySchema);
