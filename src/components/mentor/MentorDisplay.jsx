import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css"; // Required for icons
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
  const getInitials = (name) => name.split(' ').map(part => part[0]).join('').toUpperCase();

  const DetailItem = ({ icon, label, value, isLink = false, url = "", isLinkedIn = false }) => (
    <div className={styles.detailItem}>
      <i className={`bi bi-${icon} ${styles.detailIcon} ${isLinkedIn ? styles.linkedinIcon : ''}`} />
      <div>
        <span className={isLinkedIn ? styles.linkedinLabel : styles.detailLabel}>
          {label}:
        </span>
        {isLink ? (
          <a href={url} className={styles.detailValue}>{value}</a>
        ) : (
          <span className={styles.detailValue}>{value}</span>
        )}
      </div>
    </div>
  );

  const TimelineItem = ({ title, position, period }) => (
    <div className={styles.timelineItem}>
      <div className={styles.timelineMarker}></div>
      <div className={styles.timelineContent}>
        <h6>{title}</h6>
        <p className={styles.position}>{position}</p>
        <p className={styles.timelineDate}>{period}</p>
      </div>
    </div>
  );

  const PressItem = ({ publication, title }) => (
    <div className={styles.pressItem}>
      <div className={styles.pressIcon}><i className="bi bi-newspaper" /></div>
      <div className={styles.pressContent}>
        <h6>{publication}</h6>
        <p>{title}</p>
      </div>
    </div>
  );

  const AchievementItem = ({ icon, text }) => (
    <div className={styles.achievementItem}>
      <i className={`bi bi-${icon} ${styles.trophyIcon}`} />
      <div>{text}</div>
    </div>
  );

  return (
    <div className={styles.appContainer} >
      {/* Header */}
      <div className={styles.headIcon}>
        <div className={styles.iconContainer}>
          <div className={styles.iconImgPlaceholder}>{getInitials(profileData.name)}</div>
          <p className={styles.iconText}>Mentor Profile</p>
        </div>
        <div className={styles.icons}>
          <i className={`bi bi-bell-fill ${styles.headerIcon}`} />
          <i className={`bi bi-envelope-fill ${styles.headerIcon}`} />
          <i className={`bi bi-person-fill ${styles.headerIcon}`} />
        </div>
      </div>

      <hr className={styles.divider} />

      {/* Main Content */}
      <div className={styles.contentContainer}>
        {/* Profile Card */}
        <div className={styles.profileCard}>
          <div className={styles.profileSection}>
            <div className={styles.profileImageContainer}>
              <div className={styles.profileImagePlaceholder}>
                {getInitials(profileData.name)}
              </div>
            </div>
            <h4 className={styles.profileName}>{profileData.name}</h4>
            <p className={styles.profileTitle}>{profileData.title}</p>
          </div>

          <div className={styles.detailsSection}>
            <DetailItem icon="calendar2-date" label="DOB" value={profileData.personalInfo.dob} />
            <DetailItem icon="envelope-fill" label="Email" value={profileData.personalInfo.email} />
            <DetailItem icon="gender-ambiguous" label="Gender" value={profileData.personalInfo.gender} />
            <DetailItem icon="linkedin" label="LinkedIn" value="View" isLinkedIn />
            <DetailItem icon="telephone-fill" label="Phone" value={profileData.personalInfo.phone} />
            <DetailItem icon="geo-alt-fill" label="Location" value={profileData.personalInfo.location} />
          </div>
        </div>

        {/* Company Card */}
        <div className={styles.companyCard}>
          <div className={styles.companyHeader}>
            <span className={styles.founderBadge}>Founder ID: {profileData.companyInfo.founderID}</span>
            <h4 className={styles.companyName}>{profileData.companyInfo.name}</h4>
          </div>
          
          <div className={styles.companyDetails}>
            <DetailItem icon="person-badge-fill" label="Designation" value={profileData.companyInfo.designation} />
            <DetailItem 
              icon="globe" 
              label="Website" 
              value={profileData.companyInfo.website} 
              isLink 
              url={profileData.companyInfo.websiteUrl} 
            />
            <DetailItem icon="calendar2-check-fill" label="Work" value={profileData.companyInfo.workYear} />
            <DetailItem icon="building" label="Industry" value={profileData.companyInfo.industry} />
          </div>
        </div>
          
        {/* Experience & Skills */}
        <div className={styles.timelineSkillsCard}>
          <div className={styles.timelineSection}>
            <h5 className={styles.sectionTitle}>Experience & Education</h5>
            <div className={styles.timeline}>
              {profileData.timelineItems.map((item, i) => (
                <TimelineItem key={i} {...item} />
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
              <AchievementItem key={i} {...achievement} />
            ))}
          </div>
        </div>

        {/* Press Mentions */}
        <div className={styles.pressCard}>
          <h5 className={styles.sectionTitle}>Press Mentions</h5>
          <div className={styles.pressContainer}>
            {profileData.pressMentions.map((item, i) => (
              <PressItem key={i} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorDisplay;