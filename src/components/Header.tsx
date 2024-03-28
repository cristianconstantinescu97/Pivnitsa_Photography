import Link from 'next/link';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter, faSquareFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import styles from '../styles/Header.module.css';


const Header = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const router = useRouter();

    return (
        <header className={styles.header}>
            <div className={styles.logoContainer}>
                <Link href="/" passHref>
                    <img src="/logo.png" alt="Pivnitsa Photography" className={styles.logo} />
                </Link>
            </div>
            <nav className={styles.nav}>
                <button className={`${styles.menuButton} ${isMenuOpen ? styles.open : ''}`} onClick={() => setMenuOpen(!isMenuOpen)}>
                    <span></span>
                </button>
                <ul className={`${styles.navList}`}>
                    <li><Link href="/"><span className={router.pathname === "/" ? styles.activeLink : styles.linkDia}>Home</span></Link></li>
                    <li><Link href="/About"><span className={router.pathname === "/About" ? styles.activeLink : styles.linkDia}>About</span></Link></li>
                    <li><Link href="/Gallery"><span className={router.pathname === "/Gallery" ? styles.activeLink : styles.linkDia}>Portfolio</span></Link></li>
                    <li><Link href="/Contact"><span className={router.pathname === "/Contact" ? styles.activeLink : styles.linkDia}>Contact</span></Link></li>
                </ul>
            </nav>
            <div className={styles.socialIcons}>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faXTwitter} className={styles.socialIcon} />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faSquareFacebook} className={styles.socialIcon} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram} className={styles.socialIcon} />
                </a>
            </div>
            {isMenuOpen && (
                <div className={`${styles.overlay} ${isMenuOpen ? styles.show : ''}`} onClick={() => setMenuOpen(false)}>
                    {
                        <ul className={styles.overlayNavList}>
                            <li><Link href="/"><span onClick={() => setMenuOpen(false)} className={router.pathname === "/" ? styles.activeLink : styles.linkDia}>Home</span></Link></li>
                            <li><Link href="/About"><span onClick={() => setMenuOpen(false)} className={router.pathname === "/About" ? styles.activeLink : styles.linkDia}>About</span></Link></li>
                            <li><Link href="/Gallery"><span onClick={() => setMenuOpen(false)} className={router.pathname === "/Gallery" ? styles.activeLink : styles.linkDia}>Portfolio</span></Link></li>
                            <li><Link href="/Contact"><span onClick={() => setMenuOpen(false)} className={router.pathname === "/Contact" ? styles.activeLink : styles.linkDia}>Contact</span></Link></li>
                        </ul>
                    }
                </div>
            )}
        </header>
    );
};

export default Header;
