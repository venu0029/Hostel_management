const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const RoomSchema = new Schema({
  id: {
    type: String,
    required: true,
    trim: true,
  },
  type: {
    type: String,
    enum: ['CLEANING', 'REPAIR']
  },
  hostel:{
    type : String,
    enum:['BOYS HOSTEL' , 'GIRLS HOSTEL']
  },
  block: {
    type: String,
    enum: ['A', 'B', 'C', 'D', 'E', 'F'],
    required: true,
    trim: true
  },
  incharge: {
    type: String,
    trim: true,
  },
  time: {
    type: String,
    trim: true,
    required: true
  },
  gender: {
    type: String,
    enum: ['BOY', 'GIRL'],
    required: true,
  }
});

module.exports = Student = mongoose.model("room", RoomSchema);
