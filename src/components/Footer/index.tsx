import styles from './footer.module.scss';

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.footerContent}>
      <span>
        This website is under MIT License created with 💖 and ☕ by Chofito.
      </span>
    </div>
  </footer>
);

export default Footer;
