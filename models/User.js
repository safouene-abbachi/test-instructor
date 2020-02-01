const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
  name: {
    type: String
  },
  surName: {
    type: String
  },
  birthYear: {
    type: String
  },
  birthPlace: {
    type: String
  }
});
module.exports = User = mongoose.model('user', UserSchema);
