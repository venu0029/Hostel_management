import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";

class Home extends Component {
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }
  render() {
    return (
      <div className="landing d-flex align-items-center justify-content-center" style={{minHeight:'100vh'}}>
        <div className="dark-overlay landing-inner text-light w-100">
          <div className="container py-5">
            <div className="row justify-content-center">
              <div className="col-md-8 text-center">
                <img src={require('../../img/hostel.jpg')} alt="Hostel" className="mb-4 rounded shadow" style={{width:'120px',height:'120px',objectFit:'cover'}} />
                <h1 className="display-4 fw-bold mb-3">Hostel Management System</h1>
                <p className="lead mb-4">Manage students, rooms, and staff efficiently. Clean, modern, and easy to use.</p>
                <div className="d-flex justify-content-center gap-3">
                  <Link to="/register" className="btn btn-lg btn-success px-4">
                    <i className="bi bi-person-plus"></i> Sign Up
                  </Link>
                  <Link to="/login" className="btn btn-lg btn-outline-light px-4">
                    <i className="bi bi-box-arrow-in-right"></i> Login
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Home);
