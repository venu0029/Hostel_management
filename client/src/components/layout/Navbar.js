import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

class Navbar extends Component {
  constructor() {
    super();
    this.onLougoutClick = this.onLougoutClick.bind(this);
  }

  onLougoutClick(e) {
    e.preventDefault();
    this.props.logoutUser(this.props.history);
  }

  render() {
    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <Link onClick={this.onLougoutClick.bind(this)} className="nav-link d-flex align-items-center" to="/">
            <img
              className="rounded-circle border border-light me-2"
              src={user.avatar}
              alt={user.name}
              title="Gravatar Image"
              style={{ width: "32px", height: "32px" }}
            />
            Log Out
          </Link>
        </li>
      </ul>
    );

    const unauthLinks = (
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/register">
            <i className="bi bi-person-plus"></i> Sign Up
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login">
            <i className="bi bi-box-arrow-in-right"></i> Login
          </Link>
        </li>
      </ul>
    );

    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm mb-4">
        <div className="container">
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <img src={require('../../img/hostel.jpg')} alt="Logo" style={{width:'40px',height:'40px',marginRight:'10px',borderRadius:'50%'}} />
            <span className="fw-bold">Hostel Management</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mobile-nav"
            aria-controls="mobile-nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="mobile-nav">
            {isAuthenticated ? authLinks : unauthLinks}
          </div>
        </div>
      </nav>
    );
  }
}

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Navbar);
