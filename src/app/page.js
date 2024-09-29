import SEO from '../components/seo';
import { SEO as seoConstants } from '../../src/constants/seoConstants';
import AboutHome from './aboutHome/aboutHome';
import SliderHome from './sliderHome/sliderHome';
import ServiceHome from './serviceHome/serviceHome';
import ActionHome from './actionHome/actionHome';
import PortfolioHome from './portfolioHome/portfolioHome';

const HomePage=()=> {
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
      <SliderHome />
            <AboutHome />
            <PortfolioHome/>
            <ServiceHome/>
            <ActionHome/>
      </main>
    </>
  );
}
export default HomePage;
