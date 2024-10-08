// src/app/projects/Projects.js
import SEO from '@/components/seo';
import styles from './page.module.scss';
import { SEO as seoConstants } from '../../constants/seoConstants';

export default function Projects() {
  const seoData = seoConstants.Projects;
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
      <h1>Our Projects</h1>
      <p>Details about the projects we are working on.</p>
    </main>
    </>
  );
}
