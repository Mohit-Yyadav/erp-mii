import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import styles from "../../assets/css/startup/ProfileCard.module.css";

const MentorDisplay = ({ 
  profileData = {
    name: "Micheal Chen",
    title: "Software Engineer",
    personalInfo: {
      dob: "15 March 1990",
      email: "micheal@techcorp.com",
      gender: "Male",
      phone: "+1 (555) 123-4567",
      location: "San Francisco, CA"
    },
    companyInfo: {
      name: "Tech Corp",
      founderID: "F12345",
      designation: "Software Engineer",
      website: "www.techcorp.com",
      websiteUrl: "http://www.techcorp.com",
      workYear: "2025",
      industry: "Artificial Intelligence"
    },
    timelineItems: [
      { title: "Google", position: "Senior Product Manager", period: "2020 - 2024" },
      { title: "Stanford University", position: "MS in Computer Science", period: "2018 - 2020" }
    ],
    skills: ["AI/ML", "Product Management", "Leadership", "Strategy", "Innovation"],
    achievements: [
      { icon: "trophy-fill", text: "Forbes 30 Under 30 - Technology" },
      { icon: "award-fill", text: "Tech Innovator of the Year 2024" }
    ],
    pressMentions: [
      { publication: "TechCrunch", title: "AI Startup Raises $10M Series A" },
      { publication: "Forbes", title: "Rising Stars in Tech 2025" }
    ]
  }
}) => {
  // Get initials from name (only helper function we need)
  const initials = profileData.name.split(' ').map(part => part[0]).join('').toUpperCase();

  return (
    <div className={styles.appContainer}>
      {/* Header with icons */}
      <div className={styles.headIcon}>
        <div className={styles.iconContainer}>
          <div className={styles.iconImgPlaceholder}>{initials}</div>
          <p className={styles.iconText}>Mentor Profile</p>
        </div>
        <div className={styles.icons}>
          <i className={`bi bi-bell-fill ${styles.headerIcon}`} />
          <i className={`bi bi-envelope-fill ${styles.headerIcon}`} />
          <i className={`bi bi-person-fill ${styles.headerIcon}`} />
        </div>
      </div>

      <hr className={styles.divider} />

      {/* Main Content Area */}
      <div className={styles.contentContainer}>
        {/* Profile Section */}
        <div className={styles.profileCard}>
          <div className={styles.profileSection}>
            <div className={styles.profileImagePlaceholder}>{initials}</div>
            <h4 className={styles.profileName}>{profileData.name}</h4>
            <p className={styles.profileTitle}>{profileData.title}</p>
          </div>

          <div className={styles.detailsSection}>
            <div className={styles.detailItem}>
              <i className={`bi bi-calendar2-date ${styles.detailIcon}`} />
              <div>
                <span className={styles.detailLabel}>DOB:</span>
                <span className={styles.detailValue}>{profileData.personalInfo.dob}</span>
              </div>
            </div>
            
            <div className={styles.detailItem}>
              <i className={`bi bi-envelope-fill ${styles.detailIcon}`} />
              <div>
                <span className={styles.detailLabel}>Email:</span>
                <span className={styles.detailValue}>{profileData.personalInfo.email}</span>
              </div>
            </div>
            
            <div className={styles.detailItem}>
              <i className={`bi bi-gender-ambiguous ${styles.detailIcon}`} />
              <div>
                <span className={styles.detailLabel}>Gender:</span>
                <span className={styles.detailValue}>{profileData.personalInfo.gender}</span>
              </div>
            </div>
            
            <div className={styles.detailItem}>
              <i className={`bi bi-linkedin ${styles.detailIcon} ${styles.linkedinIcon}`} />
              <div>
                <span className={styles.linkedinLabel}>LinkedIn:</span>
                <span className={styles.detailValue}>View</span>
              </div>
            </div>
            
            <div className={styles.detailItem}>
              <i className={`bi bi-telephone-fill ${styles.detailIcon}`} />
              <div>
                <span className={styles.detailLabel}>Phone:</span>
                <span className={styles.detailValue}>{profileData.personalInfo.phone}</span>
              </div>
            </div>
            
            <div className={styles.detailItem}>
              <i className={`bi bi-geo-alt-fill ${styles.detailIcon}`} />
              <div>
                <span className={styles.detailLabel}>Location:</span>
                <span className={styles.detailValue}>{profileData.personalInfo.location}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Company Section */}
        <div className={styles.companyCard}>
          <div className={styles.companyHeader}>
            <span className={styles.founderBadge}>Founder ID: {profileData.companyInfo.founderID}</span>
            <h4 className={styles.companyName}>{profileData.companyInfo.name}</h4>
          </div>
          
          <div className={styles.companyDetails}>
            <div className={styles.detailItem}>
              <i className={`bi bi-person-badge-fill ${styles.detailIcon}`} />
              <div>
                <span className={styles.detailLabel}>Designation:</span>
                <span className={styles.detailValue}>{profileData.companyInfo.designation}</span>
              </div>
            </div>
            
            <div className={styles.detailItem}>
              <i className={`bi bi-globe ${styles.detailIcon}`} />
              <div>
                <span className={styles.detailLabel}>Website:</span>
                <a href={profileData.companyInfo.websiteUrl} className={styles.detailValue}>
                  {profileData.companyInfo.website}
                </a>
              </div>
            </div>
            
            <div className={styles.detailItem}>
              <i className={`bi bi-calendar2-check-fill ${styles.detailIcon}`} />
              <div>
                <span className={styles.detailLabel}>Work:</span>
                <span className={styles.detailValue}>{profileData.companyInfo.workYear}</span>
              </div>
            </div>
            
            <div className={styles.detailItem}>
              <i className={`bi bi-building ${styles.detailIcon}`} />
              <div>
                <span className={styles.detailLabel}>Industry:</span>
                <span className={styles.detailValue}>{profileData.companyInfo.industry}</span>
              </div>
            </div>
          </div>
        </div>
          
        {/* Experience & Skills Section */}
        <div className={styles.timelineSkillsCard}>
          <div className={styles.timelineSection}>
            <h5 className={styles.sectionTitle}>Experience & Education</h5>
            <div className={styles.timeline}>
              {profileData.timelineItems.map((item, i) => (
                <div key={i} className={styles.timelineItem}>
                  <div className={styles.timelineMarker}></div>
                  <div className={styles.timelineContent}>
                    <h6>{item.title}</h6>
                    <p className={styles.position}>{item.position}</p>
                    <p className={styles.timelineDate}>{item.period}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.skillsSection}>
            <h5 className={styles.sectionTitle}>Skills & Expertise</h5>
            <div className={styles.skillsContainer}>
              {profileData.skills.map((skill, i) => (
                <span key={i} className={styles.skillBadge}>{skill}</span>
              ))}
            </div>

            <h5 className={styles.sectionTitle}>Notable Achievements</h5>
            {profileData.achievements.map((achievement, i) => (
              <div key={i} className={styles.achievementItem}>
                <i className={`bi bi-${achievement.icon} ${styles.trophyIcon}`} />
                <div>{achievement.text}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Press Mentions Section */}
        <div className={styles.pressCard}>
          <h5 className={styles.sectionTitle}>Press Mentions</h5>
          <div className={styles.pressContainer}>
            {profileData.pressMentions.map((item, i) => (
              <div key={i} className={styles.pressItem}>
                <div className={styles.pressIcon}><i className="bi bi-newspaper" /></div>
                <div className={styles.pressContent}>
                  <h6>{item.publication}</h6>
                  <p>{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorDisplay;