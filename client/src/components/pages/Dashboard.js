import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentUser } from "../../actions/authActions";


// const clean = require("../../img/cleaning.jpg");
const student = require("../../img/student.jpg");
const staff = require("../../img/staff.jpeg");
const bedRoom = require("../../img/bedroom.jpeg");
class Dashboard extends Component {
  componentDidMount() {
    if (!this.props.auth.isAuthenticated) {
      this.props.history.push("/");
    }
  }

  render() {
    const { user } = this.props.auth;
    return (
      <div className="mid container py-5">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Welcome, {user.name}!</h2>
        </div>
        <div className="row g-4 justify-content-center">
          <div className="col-md-4">
            <div className="card shadow h-100 border-primary">
              <img src={student} className="card-img-top" alt="Student" style={{height:'180px',objectFit:'cover'}} />
              <div className="card-body d-flex flex-column justify-content-between">
                <h5 className="card-title text-primary">Student</h5>
                <p className="card-text">Add new Student and allot Room or Check Info</p>
                <a href="/student" className="btn btn-outline-primary mt-auto">Go to Student</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow h-100 border-success">
              <img src={bedRoom} className="card-img-top" alt="Room" style={{height:'180px',objectFit:'cover'}} />
              <div className="card-body d-flex flex-column justify-content-between">
                <h5 className="card-title text-success">Room Repair/Cleaning Status</h5>
                <p className="card-text">Add Room Repair/Cleaning or Check Info</p>
                <a href="/block" className="btn btn-outline-success mt-auto">Go to Room</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow h-100 border-info">
              <img src={staff} className="card-img-top" alt="Staff" style={{height:'180px',objectFit:'cover'}} />
              <div className="card-body d-flex flex-column justify-content-between">
                <h5 className="card-title text-info">Staff Info</h5>
                <p className="card-text">Add more Staff or Check their info</p>
                <a href="/staff" className="btn btn-outline-info mt-auto">Go to Staff</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  // getCurrentUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps
  ,
  { getCurrentUser }
)(Dashboard);
