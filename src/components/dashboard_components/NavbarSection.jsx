import React, { useState } from 'react';
import styles from '../../assets/css/startup_admin/NavbarSection.module.css';

const NavbarSection = ({ toggleMobileMenu, isMobileMenuOpen }) => {
    return (
      <nav className={styles.navbar} style={{ position: 'fixed', width: '100%', top: 0, zIndex: 1050 }}>
        <div className={styles.navbarBrand}>MII FOUNDATION</div>
  
        {/* Kebab Menu */}
        <div className={styles.kebabMenu} onClick={toggleMobileMenu}>
          <i className="bi bi-three-dots-vertical"></i>
        </div>
  
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
  
        <div className={styles.iconContainer}>
          <i className="bi bi-bell"></i>
          <i className="bi bi-chat-right-text"></i>
          <i className="bi bi-person-circle"></i>
        </div>
      </nav>
    );
  };
  
 
export default NavbarSection;
