import React from 'react';
import StatsSection from "./StatsSection"
import ChartAndFundings from "./ChartAndFundings"
import CalendarAndIncubation from "./CalendarAndIncubation"
import styles from "../../assets/css/startup_admin/MainContent.module.css"

const MainContent = () => {
  return (
    <div className={styles["container-fluid"]}>
     
      <div className={styles["row"]}>
       
    <main className={`${styles.main} col-md-9 col-lg-8 px-md-4`}>
      <div className={styles["d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-0.5 pb-2 mb-3"]}></div>
      <StatsSection />
      <ChartAndFundings />
      <CalendarAndIncubation />
    </main>
    </div>
    </div>
  )
}

export default MainContent

