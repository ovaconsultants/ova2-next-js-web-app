// pages/home.js or app/page.js
import SEO from '../components/seo';
import { SEO as seoConstants } from '../../src/constants/seoConstants';

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
        <h4>Welcome to Ova2 Consultants</h4>
      </main>
    </>
  );
}
export default HomePage;
