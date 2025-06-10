import { Link } from 'react-router-dom';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <Link to="/" className={styles.logo}>
          <h1>React Projects</h1>
        </Link>
        <nav className={styles.navMenu}>
          <Link to="/" className={styles.navLink}>Home</Link>
          <Link to="/projects" className={styles.navLink}>Projects</Link>
          <Link to="/about" className={styles.navLink}>About</Link>
        </nav>
      </div>
    </header>
  );
}
