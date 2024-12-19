// components/ServiceSection.tsx
import React from 'react';
import Image from 'next/image';

const ServiceSection: React.FC = () => {
  return (
    <section className="service_section layout_padding">
      <div className="service_container">
        <div className="container">
          <div className="heading_container heading_center">
            <h2>
              Our <span>Services</span>
            </h2>
            <p>
              At OVA2 Consultants, we provide an extensive array of services
              meticulously crafted to cater to the diverse requirements of our
              esteemed clients. Our areas of expertise encompass IT consulting,
              software development, and comprehensive professional training
              programs, enabling us to deliver well-rounded and strategic
              solutions to address complex business challenges with precision
              and excellence.
            </p>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="box">
                <div className="img-box">
                  <Image
                    width={200}
                    height={200}
                    src="/images/branding.avif"
                    alt="Service 1"
                  />
                </div>
                <div className="detail-box">
                  <h5>Branding</h5>
                  <p>
                    Our branding services are designed to elevate your business
                    by developing a distinctive and impactful brand identity. We
                    create tailored strategies that engage your target audience
                    and foster long-term brand loyalty.
                  </p>
                  <a href="">Read More</a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="box">
                <div className="img-box">
                  <Image
                    width={200}
                    height={200}
                    src="/images/s2.png"
                    alt="Service 2"
                  />
                </div>
                <div className="detail-box">
                  <h5>Web Design</h5>
                  <p>
                    Our web design services prioritize crafting visually
                    captivating and highly intuitive websites. By combining
                    innovative design with seamless functionality, we ensure an
                    outstanding online experience for your users.
                  </p>
                  <a href="">Read More</a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="box">
                <div className="img-box">
                  <Image
                    width={200}
                    height={200}
                    src="/images/s3.png"
                    alt="Service 3"
                  />
                </div>
                <div className="detail-box">
                  <h5>App Design</h5>
                  <p>
                    Bring your ideas to life with our mobile app design
                    services, creating captivating and interactive experiences.
                    We emphasize intuitive layouts and smooth user interfaces to
                    boost customer engagement and satisfaction.
                  </p>
                  <a href="">Read More</a>
                </div>
              </div>
            </div>
          </div>
          <div className="btn-box">
            <a href="">View All</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
