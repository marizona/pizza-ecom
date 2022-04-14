import React from "react";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg shadow-sm p-3 mb-5 bg-white rounded">
        <a className="navbar-brand" href="#">
          Buon Apetito!
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ml-auto">
            <a className="nav-item nav-link" href="#">
              Login
            </a>
            <a className="nav-item nav-link" href="#">
              Cart
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}
