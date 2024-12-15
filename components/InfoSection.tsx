// components/InfoSection.tsx
import React from 'react';

const InfoSection: React.FC = () => {
  return (
    <section className="info_section layout_padding2">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-3 info_col">
            <div className="info_contact">
              <h4>Address</h4>
              <div className="contact_link_box">
                <a href="">
                  <i className="fa fa-map-marker" aria-hidden="true"></i>
                  <span>Location</span>
                </a>
                <a href="">
                  <i className="fa fa-phone" aria-hidden="true"></i>
                  <span>Call +01 1234567890</span>
                </a>
                <a href="">
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                  <span>demo@gmail.com</span>
                </a>
              </div>
            </div>
            <div className="info_social">
              <a href="">
                <i className="fa fa-facebook" aria-hidden="true"></i>
              </a>
              <a href="">
                <i className="fa fa-twitter" aria-hidden="true"></i>
              </a>
              <a href="">
                <i className="fa fa-linkedin" aria-hidden="true"></i>
              </a>
              <a href="">
                <i className="fa fa-instagram" aria-hidden="true"></i>
              </a>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 info_col">
            <div className="info_detail">
              <h4>Info</h4>
              <p>
                necessary, making this the first true generator on the
                Internet...
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-2 mx-auto info_col">
            <div className="info_link_box">
              <h4>Links</h4>
              <div className="info_links">
                <a className="active" href="/">
                  Home
                </a>
                <a className="" href="/about">
                  About
                </a>
                <a className="" href="/service">
                  Services
                </a>
                <a className="" href="/why">
                  Why Us
                </a>
                <a className="" href="/team">
                  Team
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 info_col">
            <h4>Subscribe</h4>
            <form action="#">
              <input type="text" placeholder="Enter email" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
