const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateStudentInput(data) {
  const errors = {};
  const genders = ['MALE', 'FEMALE'];
  const blocks = ['A', 'B', 'C', 'D', 'E', 'F'];
  const hostels = ['BOYS HOSTEL', 'GIRLS HOSTEL'];

  data.name = !isEmpty(data.name) ? data.name : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.batch = !isEmpty(data.batch) ? data.batch : "";
  data.id = !isEmpty(data.id) ? data.id : "";
  data.block = !isEmpty(data.block) ? data.block : "";
  data.hostel = !isEmpty(data.hostel) ? data.hostel : "";
  data.room = !isEmpty(data.room) ? data.room : "";
  data.gender = !isEmpty(data.gender) ? data.gender : "";
  
  if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = "Email Field is Required";
  }
  if (Validator.isEmpty(data.name)) {
    errors.name = "Name is Required";
  }
  if (Validator.isEmpty(data.batch)) {
    errors.batch = "Batch is required";
  } else if (data.batch < 2022 || data.batch > 2026) {
    errors.batch = "Batch must be between 2022 and 2026";
  }
  if (Validator.isEmpty(data.id)) {
    errors.id = "Student Id is Required";
  }
  if (Validator.isEmpty(data.block) || !blocks.includes(data.block)) {
    errors.block = "Block is Required and must be A, B, C, D, E, or F";
  }
  if (Validator.isEmpty(data.hostel) || !hostels.includes(data.hostel)) {
    errors.hostel = "Hostel is Required and must be BOYS HOSTEL or GIRLS HOSTEL";
  }
  if (Validator.isEmpty(data.room)) {
    errors.room = "Room is Required";
  }
  if (Validator.isEmpty(data.gender) || !genders.includes(data.gender)) {
    errors.gender = "Gender Missing or Invalid";
  }

  // Validate gender and hostel compatibility
  if (data.gender && data.hostel) {
    if (data.gender === 'MALE' && data.hostel !== 'BOYS HOSTEL') {
      errors.hostel = "Male students can only be assigned to BOYS HOSTEL";
    }
    if (data.gender === 'FEMALE' && data.hostel !== 'GIRLS HOSTEL') {
      errors.hostel = "Female students can only be assigned to GIRLS HOSTEL";
    }
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
