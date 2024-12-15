// components/HeaderSection.tsx
import React from 'react';

const HeaderSection: React.FC = () => {
  return (
    <header className="header_section">
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg custom_nav-container ">
          <a className="navbar-brand" href="/">
            <span>Ova2 Consultants</span>
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className=""> </span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="/">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/service">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/why">
                  Why Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/team">
                  Team
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  <i className="fa fa-user" aria-hidden="true"></i> Login
                </a>
              </li>
              <form className="form-inline">
                <button
                  className="btn my-2 my-sm-0 nav_search-btn"
                  type="submit"
                >
                  <i className="fa fa-search" aria-hidden="true"></i>
                </button>
              </form>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default HeaderSection;
