import React, { useState } from 'react';
import styles from '../../assets/css/startup_admin/NavbarSection.module.css';

const NavbarSection = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className={styles.navbar}>
            {/* Brand Name */}
            <div className={styles.navbarBrand}>
                MII FOUNDATION
            </div>

            {/* Hamburger Menu for Mobile */}
            <button className={styles.navbarToggler} onClick={toggleMobileMenu}>
                <i className="bi bi-list"></i> {/* Bootstrap hamburger icon */}
            </button>

            {/* Navigation Links */}
            <div className={`${styles.navLinks} ${isMobileMenuOpen ? styles.showMenu : ''}`}>
                <a href="#" className={styles.navLink}>Startup</a>
                <a href="#" className={styles.navLink}>Mentor</a>
                <a href="#" className={styles.navLink}>Facility</a>
                <a href="#" className={styles.navLink}>Office</a>
                <a href="#" className={styles.navLink}>Finance & Funding</a>
                <a href="#" className={styles.navLink}>Event</a>
                <a href="#" className={styles.navLink}>Learning & Development</a>
                <a href="#" className={styles.navLink}>Report & Analytics</a>
            </div>

            {/* Right Side Icons */}
            <div className={styles.iconContainer}>
                <i className="bi bi-bell"></i>        {/* Notification Icon */}
                <i className="bi bi-chat-right-text"></i> {/* Feedback Icon */}
                <i className="bi bi-person-circle"></i>  {/* Profile Icon */}
            </div>
        </nav>
    );
};

export default NavbarSection;
