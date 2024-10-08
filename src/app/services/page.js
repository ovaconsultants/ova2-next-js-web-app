// src/app/services/Services.js
import SEO from '@/components/seo';
import styles from './page.module.scss';
import { SEO as seoConstants } from '../../constants/seoConstants';

export default function Services() {
  const seoData = seoConstants.Services;
  return (
    <>
    <SEO
   title={seoData.title}
   description={seoData.description}
   canonical={seoData.canonical}
   openGraph={seoData.openGraph}
   twitter={seoData.twitter}
 />
    <main className={styles.main}>
      <h1>Our Services</h1>
      <p>Details about the services we offer.</p>
    </main>
    </>
  );
}
