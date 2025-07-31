import React from "react";

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-4 mt-5 text-center shadow-lg">
      <div className="container">
        <div className="d-flex justify-content-center align-items-center gap-2">
          <i className="bi bi-house-door-fill" style={{fontSize:'1.5rem'}}></i>
          <span className="fw-bold">Hostel Management</span>
        </div>
        <div className="mt-2">
          &copy; {new Date().getFullYear()} <a href="https://github.com/starkblaze01/Hostel-Management#team-members" className="text-white fw-bold" target="_blank" rel="noopener noreferrer">Team Web Tech</a>
        </div>
      </div>
    </footer>
  );
}
