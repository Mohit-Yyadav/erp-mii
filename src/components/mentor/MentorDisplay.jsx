import React, { useEffect, useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import styles from "../../assets/css/startup/ProfileCard.module.css";
import { useParams } from "react-router-dom";
import axios from "../../../utils/Axios";
import Loader from "../loader/Loader";
import { toast } from "react-toastify";

const MentorDisplay = () => {
  const [profileData,setProfileData] = useState();
  const { id } = useParams();
  const fetchData = async () => {
    try {
      const result = await axios.get(`/api/mentor/get-mentorView/${id}`);
      if (result) {
        toast.success("Fetching edit Data Successfully");
        setProfileData(result.data.data);
      }
    } catch (error) {
      toast.error("Error in getting form data", error);
    }
  };
  useEffect(
    () => {
      fetchData();
     
    },
    [],
    profileData
  );
  // Get initials from name (only helper function we need)
  const initials = profileData?.name?.split(' ').map(part => part[0]).join('').toUpperCase();

  return !profileData?<Loader/>:(
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
                <span className={styles.detailValue}>{profileData.dob}</span>
              </div>
            </div>
            
            <div className={styles.detailItem}>
              <i className={`bi bi-envelope-fill ${styles.detailIcon}`} />
              <div>
                <span className={styles.detailLabel}>Email:</span>
                <span className={styles.detailValue}>{profileData.email}</span>
              </div>
            </div>
            
            <div className={styles.detailItem}>
              <i className={`bi bi-gender-ambiguous ${styles.detailIcon}`} />
              <div>
                <span className={styles.detailLabel}>Gender:</span>
                <span className={styles.detailValue}>{profileData.gender}</span>
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
                <span className={styles.detailValue}>{profileData.phone}</span>
              </div>
            </div>
            
            <div className={styles.detailItem}>
              <i className={`bi bi-geo-alt-fill ${styles.detailIcon}`} />
              <div>
                <span className={styles.detailLabel}>Location:</span>
                <span className={styles.detailValue}>{profileData.location}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Company Section */}
        <div className={styles.companyCard}>
          <div className={styles.companyHeader}>
            <span className={styles.founderBadge}>Founder ID: {profileData.founderID}</span>
            <h4 className={styles.companyName}>{profileData.name}</h4>
          </div>
          
          <div className={styles.companyDetails}>
            <div className={styles.detailItem}>
              <i className={`bi bi-person-badge-fill ${styles.detailIcon}`} />
              <div>
                <span className={styles.detailLabel}>Designation:</span>
                <span className={styles.detailValue}>{profileData.designation}</span>
              </div>
            </div>
            
            <div className={styles.detailItem}>
              <i className={`bi bi-globe ${styles.detailIcon}`} />
              <div>
                <span className={styles.detailLabel}>Website:</span>
                <a href={profileData.websiteUrl} className={styles.detailValue}>
                  {profileData.website}
                </a>
              </div>
            </div>
            
            <div className={styles.detailItem}>
              <i className={`bi bi-calendar2-check-fill ${styles.detailIcon}`} />
              <div>
                <span className={styles.detailLabel}>Work:</span>
                <span className={styles.detailValue}>{profileData.workYear}</span>
              </div>
            </div>
            
            <div className={styles.detailItem}>
              <i className={`bi bi-building ${styles.detailIcon}`} />
              <div>
                <span className={styles.detailLabel}>Industry:</span>
                <span className={styles.detailValue}>{profileData.industry}</span>
              </div>
            </div>
          </div>
        </div>
          
        <div className={styles.timelineSkillsCard}>
          <div className={styles.timelineSection}>
            <h5 className={styles.sectionTitle}>Experience & Education</h5>
            <div className={styles.timeline}>
              
                <div className={styles.timelineItem}>
                  <div className={styles.timelineMarker}></div>
                  <div className={styles.timelineContent}>
                    <h6>"item.title"</h6>
                    <p className={styles.position}>"item.position"</p>
                    <p className={styles.timelineDate}>"item.period"</p>
                  </div>
                </div>
           
            </div>
          </div>

          <div className={styles.skillsSection}>
            <h5 className={styles.sectionTitle}>Skills & Expertise</h5>
            <div className={styles.skillsContainer}>
                <span  className={styles.skillBadge}>"skill"</span>
            </div>

            <h5 className={styles.sectionTitle}>Notable Achievements</h5>
              <div  className={styles.achievementItem}>
                <i className={`bi bi- ${styles.trophyIcon}`} />
                <div>"achievement.text"</div>
              </div>
          </div>
        </div>

        <div className={styles.pressCard}>
          <h5 className={styles.sectionTitle}>Press Mentions</h5>
          <div className={styles.pressContainer}>
              <div className={styles.pressItem}>
                <div className={styles.pressIcon}><i className="bi bi-newspaper" /></div>
                <div className={styles.pressContent}>
                  <h6>"item.publication"</h6>
                  <p>"item.title"</p>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorDisplay;