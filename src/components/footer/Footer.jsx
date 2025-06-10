import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

export default function Footer() { 
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h3>React Projects</h3>
            <p>This website is only for practicing purposes.</p>
          </div>
          
          <div className={styles.footerSection}>
            <h4>Links</h4>
            <Link to="/" className={styles.footerLink}>Home</Link>
            <Link to="/projects" className={styles.footerLink}>Projects</Link>
            <Link to="/about" className={styles.footerLink}>About</Link>
          </div>
          
          <div className={styles.footerSection}>
            <h4>Social</h4>
            <a href="https://github.com/mohammad-ebadi" target="_blank"  className={styles.footerLink}>
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/mohammad-ebadi-code/" target="_blank"  className={styles.footerLink}>
              LinkedIn
            </a>
            <a href="mailto:mohammad.ebadi.code@gmail.com" className={styles.footerLink}>
              Email
            </a>
          </div>
        </div>
        
        <div className={styles.footerBottom}>
          <p>&copy; {new Date().getFullYear()} React Projects. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}