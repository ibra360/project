const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  // address: {
  //   type: String,
  //   required: true
  // },
  // city: {
  //   type: String,
  //   required: true
  // },
  // contact: {
  //   type: Number,
  //   required: true
  // },

  Ads: [{

    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    address: {
      type: String,
      required: true
    },
    contact: {
      type: Number,
      required: true
    },
    image: {
      type: String,
      required: true
    },

  }],

  date: {
    type: Date,
    default: Date.now
  }
});

mongoose.model('users', UserSchema);