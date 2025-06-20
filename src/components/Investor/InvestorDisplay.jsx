import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../../assets/css/investor/InvestorDisplay.module.css";

const InvestorDisplay = () => {
  return (
    <div className={styles.profileContainer}>
      {/* Profile Header */}
      <div className={styles.card}>
        <div className={styles.profileHeader}>
          <div className={styles.row}>
            <div className={styles.colAuto}>
              <img
                src="images/profilePhoto.png"
                alt="Sarah Anderson"
                className={styles.profileImg}
              />
            </div>
            <div className={styles.col}>
              <div className={styles.headerContent}>
                <div>
                  <h1 className={styles.name}>Sarah Anderson</h1>
                  <p className={styles.title}>
                    Founder & CEO at TechVision Solutions
                  </p>

                  <div className={styles.contactInfo}>
                    {/* Date of Birth */}
                    <div className={styles.contactItem}>
                      <i className="far fa-calendar"></i>
                      <span>Born: March 15, 1988</span>
                    </div>

                    {/* Email */}
                    <div className={styles.contactItem}>
                      <i className="fas fa-envelope"></i>
                      <a href="mailto:sarah@techvision.com">
                        sarah@techvision.com
                      </a>
                    </div>

                    {/* Phone */}
                    <div className={styles.contactItem}>
                      <i className="fas fa-phone"></i>
                      <span>+1 (555) 123-4567</span>
                    </div>

                    {/* Location */}
                    <div className={styles.contactItem}>
                      <i className="fas fa-map-marker-alt"></i>
                      <span>San Francisco, CA</span>
                    </div>

                    {/* LinkedIn */}
                    <div className={styles.contactItem}>
                      <i className="fa-brands fa-linkedin"></i>
                      <a href="#">linkedin.com/in/sarahanderson</a>
                    </div>
                  </div>
                </div>
                <button className={styles.contactBtn}>
                  <i className={"fas fa-envelope"}></i> Contact
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Professional Information */}
      <div className={styles.card}>
        <div className={styles.cardBody}>
          <div
            className={`${styles.dFlex} ${styles.justifyContentBetween} ${styles.alignItemsCenter} ${styles.mb3} ${styles.dFlexJustifyContentBetweenAlignItemsCenter}`}
          >
            <h2 className={`${styles.fs5} ${styles.fwBold}`}>
              Professional Information
            </h2>
            <span className={styles.founderId}>Founder ID: FD78392</span>
          </div>
          <div className={`${styles.row} ${styles.alignItemsCenter}`}>
            <div className={`${styles.colMd6} ${styles.dFlex}`}>
              <div className={styles.pressIcon}>
                <i className={`fas fa-building ${styles.textMuted}`}></i>
              </div>
              <div>
                <h3 className={`${styles.fs6} ${styles.fwBold} ${styles.mb1}`}>
                  TechVision Solutions
                </h3>
                <p
                  className={`${styles.textSmall} ${styles.textMuted} ${styles.mb0}`}
                >
                  AI & Machine Learning Solutions
                </p>
              </div>
            </div>
            <div className={styles.colMd6}>
              <div className={styles.mb2}>
                <i
                  className={`fas fa-industry ${styles.me2} ${styles.textMuted}`}
                ></i>
                <span className={styles.textSmall}>Industry: Technology</span>
              </div>

              <div className={styles.mb2}>
                <i
                  className={`fas fa-map-marker-alt ${styles.me2} ${styles.textMuted}`}
                ></i>
                <span className={styles.textSmall}>
                  HQ: 123 Tech Street, San Francisco, CA
                </span>
              </div>
            </div>
          </div>
          <div className={styles.mt3}>
            <div className={styles.mb2}>
              <i
                className={`far fa-calendar ${styles.me2} ${styles.textMuted}`}
              ></i>
              <span className={styles.textSmall}>Est. 2020</span>
            </div>
            <div>
              <i
                className={`fas fa-globe ${styles.me2} ${styles.textMuted}`}
              ></i>
              <a
                href="http://www.techvision.com"
                className={`${styles.textSmall} ${styles.textPrimary} ${styles.textDecorationNone}`}
              >
                www.techvision.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Salary & Payroll Details */}
      <div className={styles.card}>
        <div className={styles.cardBody}>
          {/* Card Title */}
          <div
            className={`${styles.cardTitle} ${styles.dFlex} ${styles.alignItemsCenter}`}
          >
            <i className={`fas fa-money-bill-wave ${styles.me2}`}></i>
            Salary & Payroll Details
          </div>

          {/* Information Rows */}
          <div className={`${styles.row} ${styles.rowBg}`}>
            {/* Investment Range */}
            <div className={styles.colMd6}>
              <div className={`${styles.dFlex} ${styles.infoRow}`}>
                <div className={styles.iconContainer}>
                  <i className="fas fa-chart-line"></i>
                </div>
                <div>
                  <div className={styles.infoLabel}>Investment Range</div>
                  <div className={styles.infoValue}>$120,000</div>
                </div>
              </div>
            </div>

            {/* Investment Stage */}
            <div className={styles.colMd6}>
              <div className={`${styles.dFlex} ${styles.infoRow}`}>
                <div className={styles.iconContainer}>
                  <i className="fas fa-layer-group"></i>
                </div>
                <div>
                  <div className={styles.infoLabel}>Investment Stage</div>
                  <div className={styles.infoValue}>Series A</div>
                </div>
              </div>
            </div>

            {/* Company Name */}
            <div className={styles.colMd6}>
              <div className={`${styles.dFlex} ${styles.infoRow}`}>
                <div className={styles.iconContainer}>
                  <i className="fas fa-building"></i>
                </div>
                <div>
                  <div className={styles.infoLabel}>Company Name</div>
                  <div className={styles.infoValue}>Tech Vision</div>
                </div>
              </div>
            </div>

            {/* Investment Sector */}
            <div className={styles.colMd6}>
              <div className={`${styles.dFlex} ${styles.infoRow}`}>
                <div className={styles.iconContainer}>
                  <i className="fas fa-industry"></i>
                </div>
                <div>
                  <div className={styles.infoLabel}>Investment Sector</div>
                  <div className={styles.infoValue}>Technology</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestorDisplay;
