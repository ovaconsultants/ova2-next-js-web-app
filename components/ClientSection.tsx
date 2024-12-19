// components/ClientSection.tsx
import React from 'react';
import Image from 'next/image';

const ClientSection: React.FC = () => {
  return (
    <section className="client_section layout_padding">
      <div className="container">
        <div className="heading_container heading_center psudo_white_primary mb_45">
          <h5>
            We create amazing digital experiences. Explore our work and design
            approach. Check out the successful projects we&apos;ve delivered for
            our clients and meet our dedicated, skilled design team. Learn how
            we can help your business succeed in the digital landscape. Let’s
            create something amazing together.
          </h5>
        </div>
        <div className="carousel-wrap">
          <div className="owl-carousel client_owl-carousel">
            <div className="item">
              <div className="box">
                <div className="img-box">
                  <Image
                    width={200}
                    height={200}
                    src="/images/client1.jpg"
                    alt="Client 1"
                    className="box-img"
                  />
                </div>
                <div className="detail-box">
                  <div className="client_id">
                    <div className="client_info">
                      <h6>LusDen</h6>
                      <p>magna aliqua. Ut</p>
                    </div>
                    <i className="fa fa-quote-left" aria-hidden="true"></i>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam...
                  </p>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="box">
                <div className="img-box">
                  <Image
                    width={200}
                    height={200}
                    src="/images/client2.jpg"
                    alt="Client 2"
                    className="box-img"
                  />
                </div>
                <div className="detail-box">
                  <div className="client_id">
                    <div className="client_info">
                      <h6>Zen Court</h6>
                      <p>magna aliqua. Ut</p>
                    </div>
                    <i className="fa fa-quote-left" aria-hidden="true"></i>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt...
                  </p>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="box">
                <div className="img-box">
                  <Image
                    width={200}
                    height={200}
                    src="/images/client1.jpg"
                    alt="Client 1"
                    className="box-img"
                  />
                </div>
                <div className="detail-box">
                  <div className="client_id">
                    <div className="client_info">
                      <h6>LusDen</h6>
                      <p>magna aliqua. Ut</p>
                    </div>
                    <i className="fa fa-quote-left" aria-hidden="true"></i>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                  </p>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="box">
                <div className="img-box">
                  <Image
                    width={200}
                    height={200}
                    src="/images/client2.jpg"
                    alt="Client 2"
                    className="box-img"
                  />
                </div>
                <div className="detail-box">
                  <div className="client_id">
                    <div className="client_info">
                      <h6>Zen Court</h6>
                      <p>magna aliqua. Ut</p>
                    </div>
                    <i className="fa fa-quote-left" aria-hidden="true"></i>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientSection;
