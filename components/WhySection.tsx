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
              <h5>Expert Management</h5>
              <p>
                Incidunt odit rerum tenetur alias architecto asperiores omnis...
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
              <h5>Secure Investment</h5>
              <p>
                Incidunt odit rerum tenetur alias architecto asperiores omnis...
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
              <h5>Instant Trading</h5>
              <p>
                Incidunt odit rerum tenetur alias architecto asperiores omnis...
              </p>
            </div>
          </div>
          <div className="box">
            <div className="img-box">
              <Image
                width={200}
                height={200}
                src="/images/w4.png"
                alt="Why choose us 4"
              />
            </div>
            <div className="detail-box">
              <h5>Happy Customers</h5>
              <p>
                Incidunt odit rerum tenetur alias architecto asperiores omnis...
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
