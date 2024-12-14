// src/app/training/Training.js
import SEO from '../../components/seo';
import styles from './page.module.scss';
import { trainingPageMetadata } from '../../constants/seoConstants';
export const metadata = trainingPageMetadata;
export default function Training() {
  return (
    <>
      <main className={styles.main}>
        <h1>Our Training</h1>
        <p>Information about our training programs.</p>
      </main>
    </>
  );
}
