import styles from './page.module.scss';
import { servicesPageMetadata } from '../../constants/seoConstants';
export const metadata = servicesPageMetadata;

export default function Services() {
  return (
    <>
      <main className={styles.main}>
        <h1>Our Services</h1>
        <p>Details about the services we offer.</p>
      </main>
    </>
  );
}
