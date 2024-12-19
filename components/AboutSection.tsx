// components/AboutSection.tsx
import React from 'react';
import Image from 'next/image';

const AboutSection: React.FC = () => {
  return (
    <section className="about_section layout_padding">
      <div className="container">
        <div className="heading_container heading_center">
          <h2>
            About <span>Us</span>
          </h2>
          <p>
            Welcome to OVA2 Consultants, a distinguished firm where innovation
            seamlessly integrates with expertise. Founded with a clear vision to
            bridge the critical gap between technology and business, we are
            committed to delivering exceptional services in IT consulting,
            advanced software development, and comprehensive training solutions.
            Our unwavering dedication to excellence ensures we provide
            transformative solutions that empower organizations to thrive in an
            ever-evolving digital landscape.
          </p>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="img-box">
              <Image
                width={200}
                height={200}
                src="/images/about-img.png"
                alt="About us"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="detail-box">
              <h3>We Are Ova2 Consultants</h3>
              <p>
                Our mission is to empower businesses by delivering innovative
                technology solutions and valuable knowledge, enabling them to
                realize their full potential. We are dedicated to driving growth
                and fostering innovation through customized strategies and
                expert support.
              </p>
              <a href="">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
