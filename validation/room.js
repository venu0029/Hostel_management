const Validator = require("validator");
const isEmpty = require("./is-empty");
const mongoose = require("mongoose")

const validateRoomInput = data => {
  const errors = {};
  const blocks = ['A', 'B', 'C', 'D', 'E', 'F'];
  const genders = ['BOY', 'GIRL'];
  const hostels = ['BOYS HOSTEL', 'GIRLS HOSTEL'];
  const work = ['CLEANING', 'REPAIR'];
  const { id, block, gender, type, incharge, time, hostel } = data

  data.id = !isEmpty(data.id) ? data.id : "";
  data.block = !isEmpty(data.block) ? data.block : "";
  data.hostel = !isEmpty(data.hostel) ? data.hostel : "";
  data.gender = !isEmpty(data.gender) ? data.gender : "";
  data.type = !isEmpty(data.type) ? data.type : "";
  data.incharge = !isEmpty(data.incharge) ? data.incharge : "";
  data.time = !isEmpty(data.time) ? data.time : "";


  if (Validator.isEmpty(id)) {
    errors.id = "Room id is missing";
  }

  if (Validator.isEmpty(block) || !blocks.includes(block)) {
    errors.block = "Room block is missing or invalid";
  }

  if (Validator.isEmpty(hostel) || !hostels.includes(hostel)) {
    errors.hostel = "Hostel is missing or invalid";
  }

  if (Validator.isEmpty(gender) || !genders.includes(gender)) {
    errors.gender = "Occupancy is missing or invalid";
  }

  if (Validator.isEmpty(type) || !work.includes(type)) {
    errors.type = "Action Missing or Invalid";
  }
  if (Validator.isEmpty(incharge)) {
    errors.incharge = "Incharge Name Required";
  }
  if (Validator.isEmpty(time)) {
    errors.time = "Date and Time Required";
  }

  // Validate gender and hostel compatibility
  if (data.gender && data.hostel) {
    if (data.gender === 'BOY' && data.hostel !== 'BOYS HOSTEL') {
      errors.hostel = "BOY rooms can only be assigned to BOYS HOSTEL";
    }
    if (data.gender === 'GIRL' && data.hostel !== 'GIRLS HOSTEL') {
      errors.hostel = "GIRL rooms can only be assigned to GIRLS HOSTEL";
    }
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};

module.exports = {
  validateRoomInput
}
