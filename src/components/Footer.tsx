import styles from '../styles/Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            © {new Date().getFullYear()} Pivnitsa Photography. All rights reserved.
        </footer>
    );
};

export default Footer;
