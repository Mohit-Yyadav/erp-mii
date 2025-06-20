// import React from "react";
import { Container, Table } from "react-bootstrap";
import styles from "../../assets/css/facilityTable/FacilityTable.module.css";

const FacilityTable = () => {
  const facilities = [
    { name: "Desk", startDate: "January 1, 2024", endDate: "January 1, 2025", status: "Active" },
    { name: "Room", startDate: "January 15, 2024", endDate: "January 1, 2025", status: "Expired" },
    { name: "Office", startDate: "February 1, 2024", endDate: "January 1, 2025", status: "Active" },
    { name: "Desk", startDate: "February 15, 2024", endDate: "January 1, 2025", status: "Expired" },
  ];

  return (
    <Container className="d-flex justify-content-center">
      <div className={styles.tableTableContainer}>
        <div className={styles.tableTitleSection}>
          <i className="bi bi-file-text"></i> MII Facility
        </div>

        <div className={styles.tableTableSection}>
          <Table responsive bordered className={styles.tableFacilityTable}>
            <thead>
              <tr>
                <th>Facility</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {facilities.map((facility, index) => (
                <tr key={`${facility.name}-${index}`}>
                  <td>{facility.name}</td>
                  <td>
                    <i className={`bi bi-calendar ${styles.tableBiCalendar}`}></i>{" "}
                    {facility.startDate}
                  </td>
                  <td>
                    <i className={`bi bi-calendar ${styles.tableBiCalendar}`}></i>{" "}
                    {facility.endDate}
                  </td>
                  <td>
                    <span
                      className={`${styles.tableStatusBadge} ${
                        styles[facility.status.toLowerCase()]
                      }`}
                    >
                      {facility.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </Container>
  );
};

export default FacilityTable;
