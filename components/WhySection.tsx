// components/WhySection.tsx
import React from 'react';
import Image from 'next/image';

const WhySection: React.FC = () => {
  return (
    <section className="why_section layout_padding">
      <div className="container">
        <div className="heading_container heading_center">
          <h2>
            Why Choose <span>Us</span>
          </h2>
        </div>
        <div className="why_container">
          <div className="box">
            <div className="img-box">
              <Image
                width={200}
                height={200}
                src="/images/w1.png"
                alt="Why choose us 1"
              />
            </div>
            <div className="detail-box">
              <h5>Expert Team</h5>
              <p>
                Our team is composed of distinguished experts with profound
                experience in IT consulting, software development, and
                professional training. We take pride in leveraging our extensive
                knowledge and unwavering commitment to deliver unparalleled
                solutions for every project.
              </p>
            </div>
          </div>
          <div className="box">
            <div className="img-box">
              <Image
                width={200}
                height={200}
                src="/images/w2.png"
                alt="Why choose us 2"
              />
            </div>
            <div className="detail-box">
              <h5>Customer&apos;s approach</h5>
              <p>
                We place our clients&apos; priorities at the forefront, working
                in close collaboration to ensure their goals are successfully
                achieved. Our solutions are thoughtfully crafted to be
                adaptable, scalable, and perfectly aligned with your business
                objectives.
              </p>
            </div>
          </div>
          <div className="box">
            <div className="img-box">
              <Image
                width={200}
                height={200}
                src="/images/w3.png"
                alt="Why choose us 3"
              />
            </div>
            <div className="detail-box">
              <h5>Innovation-Driven</h5>
              <p>
                We remain at the forefront of industry advancements,
                consistently innovating to offer our clients the most efficient
                and impactful solutions. Our unwavering dedication to excellence
                guarantees the delivery of superior results on every occasion.
              </p>
            </div>
          </div>
        </div>
        <div className="btn-box">
          <a href="">Read More</a>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
