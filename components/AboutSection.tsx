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
            Magni quod blanditiis non minus sed aut voluptatum illum quisquam
            aspernatur ullam vel beatae rerum ipsum voluptatibus
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
              <h3>We Are Finexo</h3>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration...
              </p>
              <p>Molestiae odio earum non qui cumque provident voluptates...</p>
              <a href="">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
