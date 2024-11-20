// src/components/navbar/Navbar.js
import styles from './navbar.module.scss';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <Link href="/services">Services</Link>
        </li>
        <li className={styles.li}>
          <Link href="/projects">Projects</Link>
        </li>
        <li className={styles.li}>
          <Link href="/training">Training</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
