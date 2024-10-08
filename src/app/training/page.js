// src/app/training/Training.js
import SEO from '@/components/seo';
import styles from './page.module.scss';
import { SEO as seoConstants } from '../../constants/seoConstants';

export default function Training() {
  const seoData = seoConstants.training;
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
        <h1>Our Training</h1>
        <p>Information about our training programs.</p>
      </main>
    </>
  );
}
