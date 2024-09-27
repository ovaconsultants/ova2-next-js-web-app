// pages/home.js or app/page.js
import SEO from '../components/SEO';
import { SEO as seoConstants } from '../constant.js';

const Home=()=> {
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
        <h1>Welcome to Ova2 Consultants</h1>
      </main>
    </>
  );
}
export default Home;
