// components/TeamSection.tsx
import React from 'react';
import Image from 'next/image';

const TeamSection: React.FC = () => {
  return (
    <section className="team_section layout_padding">
      <div className="container-fluid">
        <div className="heading_container heading_center">
          <h2>
            Our <span> Team</span>
          </h2>
        </div>

        <div className="team_container">
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="box">
                <div className="img-box">
                  <Image
                    width={200}
                    height={200}
                    src="/images/team-1.jpg"
                    className="img1"
                    alt="Team member 1"
                  />
                </div>
                <div className="detail-box">
                  <h5>Joseph Brown</h5>
                  <p>Marketing Head</p>
                </div>
                <div className="social_box">
                  <a href="#">
                    <i className="fa fa-facebook" aria-hidden="true"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-linkedin" aria-hidden="true"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-instagram" aria-hidden="true"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-youtube-play" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="box">
                <div className="img-box">
                  <Image
                    width={200}
                    height={200}
                    src="/images/team-2.jpg"
                    className="img1"
                    alt="Team member 2"
                  />
                </div>
                <div className="detail-box">
                  <h5>Nancy White</h5>
                  <p>Marketing Head</p>
                </div>
                <div className="social_box">
                  <a href="#">
                    <i className="fa fa-facebook" aria-hidden="true"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-linkedin" aria-hidden="true"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-instagram" aria-hidden="true"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-youtube-play" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="box">
                <div className="img-box">
                  <Image
                    width={200}
                    height={200}
                    src="/images/team-3.jpg"
                    className="img1"
                    alt="Team member 3"
                  />
                </div>
                <div className="detail-box">
                  <h5>Earl Martinez</h5>
                  <p>Marketing Head</p>
                </div>
                <div className="social_box">
                  <a href="#">
                    <i className="fa fa-facebook" aria-hidden="true"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-linkedin" aria-hidden="true"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-instagram" aria-hidden="true"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-youtube-play" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="box">
                <div className="img-box">
                  <Image
                    width={200}
                    height={200}
                    src="/images/team-4.jpg"
                    className="img1"
                    alt="Team member 4"
                  />
                </div>
                <div className="detail-box">
                  <h5>Josephine Allard</h5>
                  <p>Marketing Head</p>
                </div>
                <div className="social_box">
                  <a href="#">
                    <i className="fa fa-facebook" aria-hidden="true"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-linkedin" aria-hidden="true"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-instagram" aria-hidden="true"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-youtube-play" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
