import styles from './page.module.scss';
import { projectPageMetadata } from '../../constants/seoConstants';
export const metadata = projectPageMetadata;

export default function Projects() {
  return (
    <>
      <main className={styles.main}>
        <h1>Our Projects</h1>
        <p>Details about the projects we are working on.</p>
      </main>
    </>
  );
}
