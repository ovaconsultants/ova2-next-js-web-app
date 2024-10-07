import SEO from '../components/seo';
import { SEO as seoConstants } from '../../src/constants/seoConstants';
import { companyName } from '../constants/commonConstant';
import Image from 'next/image';
import Link from 'next/link';

const HomePage = () => {
  const seoData = seoConstants.home;

  return (
    <>
      <SEO
        title={seoData.title}
        description={seoData.description}
        canonical={seoData.canonical}
        openGraph={seoData.openGraph}
        twitter={seoData.twitter}
      />
      <main>
        <section className="slider">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="block">
                  <h1 className="animated fadeInUp">
                    IT Consulting, Digital Marketing, <br /> Training &amp; AI
                    Design Agency
                  </h1>
                  <p className="animated fadeInUp">
                    We&apos;re passionate about the web & mobile apps and take
                    pride in our work.
                    <br /> Our collaborative approach ensures we provide
                    tailored solutions that meet our client&apos;s needs.
                  </p>
                  <a href="/contact" className="btn btn-main animated fadeInUp">
                    Connect Now !
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="about section">
          <div className="container">
            <div className="row">
              <div className="col-md-7">
                <div className="block">
                  <div className="section-title">
                    <h2 className="text-left">About Us</h2>
                    <p className="text-left">
                      Welcome to {companyName}, where innovation meets
                      expertise. Founded with a vision to bridge the gap between
                      technology and business, we specialize in IT consulting,
                      software development, and comprehensive training
                      solutions.
                    </p>
                  </div>
                  <p className="text-left">
                    Our mission is to empower businesses with cutting-edge
                    technology solutions and knowledge, enabling them to achieve
                    their full potential. We believe in fostering growth and
                    innovation through tailored strategies and expert guidance.
                  </p>
                </div>
              </div>
              <div className="col-md-5">
                <div className="block">
                  <Image
                    src="images/homePage/wrapper-img.png"
                    alt="Img"
                    width={1200}
                    height={200}
                  />
                  {/* <img src="" alt="Img" /> */}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="feature bg-2">
          <div className="container text-left">
            <div className="row justify-content-end">
              <div className="col-md-6">
                <h2 className="section-subtitle">Why Choose Us?</h2>
                <div className="text-left">
                  <p>
                    <b>Expert Team:</b> Our team consists of seasoned
                    professionals with extensive experience in IT consulting,
                    development, and training. We bring a wealth of knowledge
                    and a passion for technology to every project.
                  </p>
                  <p>
                    <b> Customer-Centric Approach:</b> We prioritize our
                    client&apos;s needs and work collaboratively to achieve
                    their goals. Our solutions are designed to be flexible,
                    scalable, and aligned with your business objectives.
                  </p>
                  <p>
                    <b>Innovation-Driven:</b> We stay ahead of industry trends
                    and continuously innovate to provide our clients with the
                    most effective and efficient solutions. Our commitment to
                    excellence ensures we deliver high-quality results every
                    time.
                  </p>
                </div>
                <Link href="/projects" className="btn btn-view-works">
                  View Works
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="service">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center">
                <div className="section-title">
                  <h2>Our Services</h2>
                  <p className="text-left">
                    At {companyName}, we offer a comprehensive suite of services
                    designed to meet the diverse needs of our clients. Our
                    expertise spans IT consulting, software development, and
                    professional training programs, ensuring that we provide
                    holistic solutions for your business challenges.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="service-item">
                  <i className="icon ion-coffee"></i>
                  <h4>Branding</h4>
                  <p className=" text-justify">
                    Our branding services help your business stand out by
                    creating a unique and compelling brand identity. We craft
                    strategies that resonate with your target audience and drive
                    brand loyalty.{' '}
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="service-item">
                  <i className="ion-compass"></i>
                  <h4>Web Design</h4>
                  <p className="text-justify">
                    Our web design solutions are focused on creating visually
                    stunning and user-friendly websites. We blend creativity
                    with functionality to deliver an exceptional online
                    experience for your users.{' '}
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="service-item">
                  <i className="ion-image"></i>
                  <h4>App Design</h4>
                  <p className="text-justify">
                    Transform your ideas into engaging mobile experiences with
                    our app design services. We focus on intuitive design and
                    seamless user interfaces to enhance customer engagement.{' '}
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="service-item">
                  <i className="ion-bug"></i>
                  <h4>Start Up</h4>
                  <p className="text-justify">
                    Empower your startup with tailored solutions that drive
                    growth and innovation. We provide strategic support and
                    expert guidance to help you navigate the competitive
                    landscape.{' '}
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="service-item">
                  <i className="ion-headphone"></i>
                  <h4>Logo Design</h4>
                  <p className="text-justify">
                    Make a lasting impression with a professionally designed
                    logo that captures the essence of your brand. Our logos are
                    designed to be memorable, versatile, and reflective of your
                    brand’s identity.{' '}
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="service-item">
                  <i className="ion-leaf"></i>
                  <h4>Development</h4>
                  <p className="text-justify">
                    From concept to deployment, our development services ensure
                    robust and scalable solutions. We specialize in creating
                    custom software that meets your business needs and drives
                    operational efficiency.{' '}
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="service-item">
                  <i className="ion-planet"></i>
                  <h4>Brand Identity</h4>
                  <p className="text-justify">
                    Build a strong and cohesive brand identity that
                    differentiates your business in the market. We develop
                    comprehensive brand strategies that encompass visual,
                    verbal, and experiential elements.
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="service-item">
                  <i className="ion-earth"></i>
                  <h4>IT Consulting</h4>
                  <p className="text-justify">
                    Optimize your IT infrastructure with our expert consulting
                    services. We provide strategic insights and innovative
                    solutions to help you leverage technology for maximum
                    business impact.{' '}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="call-to-action bg-1 section-sm overly">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="block">
                  <h2 className="mb-3">
                    We Create Amazing Digital Experiences.
                  </h2>
                  <p>
                    Learn more about our work and design philosophy. See the
                    successful projects we’ve completed for our clients, and get
                    to know our passionate and experienced design team. Discover
                    how we can help your business thrive in the digital world.
                    Let’s build something great together.
                  </p>
                  <Link
                    className="btn btn-main btn-solid-border"
                    href="/contact"
                  >
                    Connect with US
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
export default HomePage;
