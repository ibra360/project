const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const AdSchema = new Schema({
    name:{
      type: String,
      required: true
    },
    type:{
      type: String,
      required: true
    },
    rent:{
      type: Number,
      required: true
    },
    date: {
      type: Date,
      default: Date.now
    }
  });
  
  mongoose.model('users', UserSchema);