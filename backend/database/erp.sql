-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 05, 2025 at 08:27 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `erp`
--

-- --------------------------------------------------------

--
-- Table structure for table `employee`
--

CREATE TABLE `employee` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `picture` varchar(255) NOT NULL,
  `dob` date NOT NULL,
  `gender` varchar(255) NOT NULL,
  `contact` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `curr_add` varchar(255) NOT NULL,
  `per_add` varchar(255) NOT NULL,
  `emp_id` varchar(255) NOT NULL,
  `department` varchar(255) NOT NULL,
  `designation` varchar(255) NOT NULL,
  `date_joing` varchar(255) NOT NULL,
  `emp_type` varchar(255) NOT NULL,
  `work_location` varchar(255) NOT NULL,
  `shift_time` varchar(255) NOT NULL,
  `ctc` varchar(255) NOT NULL,
  `bank_name` varchar(255) NOT NULL,
  `acc_no` varchar(255) NOT NULL,
  `ifsc` varchar(255) NOT NULL,
  `pf_no` varchar(255) NOT NULL,
  `pan_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `employee`
--

INSERT INTO `employee` (`id`, `name`, `picture`, `dob`, `gender`, `contact`, `email`, `curr_add`, `per_add`, `emp_id`, `department`, `designation`, `date_joing`, `emp_type`, `work_location`, `shift_time`, `ctc`, `bank_name`, `acc_no`, `ifsc`, `pf_no`, `pan_id`) VALUES
(3, 'John Doe', 'hello.jpg', '1990-05-15', 'Male', '+91-9876543210', 'johndoe@example.com', '123, ABC Street, Mumbai, India', '456, XYZ Colony, Delhi, India', 'EMP12345', 'Software Development', 'Senior Developer', '2022-06-01', 'Full-Time', 'Mumbai Office', '09:00 AM - 06:00 PM', '1200000', 'HDFC Bank', '123456789012', 'HDFC0001234', 'PF123456', 0),
(4, 'fff', '1742498739818.jpeg', '0000-00-00', 'fff', 'dd', 'dd@gmail.com', 'dd', 'dd', 'ddd', 'dd', 'ddd', 'ff', 'ff', 'ff', 'ff', 'ff', 'ff', 'ff', 'ff', 'fff', 0),
(5, 'fff', '1742498897597.png', '0000-00-00', 'fff', 'dd', 'dd@gmail.com', 'dd', 'dd', 'ddd', 'dd', 'ddd', 'ff', 'ff', 'ff', 'ff', 'ff', 'ff', 'ff', 'ff', 'fff', 0),
(6, 'fff', '1742810095867.jpeg', '0000-00-00', 'fff', 'dd', 'dd@gmail.com', 'dd', 'dd', 'ddd', 'dd', 'ddd', 'ff', 'ff', 'ff', 'ff', 'ff', 'ff', 'ff', 'ff', 'fff', 0),
(7, 'fff', '1742811111734.jpeg', '0000-00-00', 'fff', 'dd', 'dd@gmail.com', 'dd', 'dd', 'ddd', 'dd', 'ddd', 'ff', 'ff', 'ff', 'ff', 'ff', 'ff', 'ff', 'ff', 'fff', 0);

-- --------------------------------------------------------

--
-- Table structure for table `meetingschedule`
--

CREATE TABLE `meetingschedule` (
  `id` int(11) NOT NULL,
  `title` varchar(400) NOT NULL,
  `purpose` longtext NOT NULL,
  `dateAndTime` datetime NOT NULL,
  `location` varchar(255) NOT NULL,
  `attend` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `meetingschedule`
--

INSERT INTO `meetingschedule` (`id`, `title`, `purpose`, `dateAndTime`, `location`, `attend`) VALUES
(1, 'Investor Meeting', 'Investment Discussion', '2025-04-05 10:00:00', 'Zoom', 'John Doe'),
(2, 'Investor Meeting', 'Investment Discussion', '2025-04-05 10:00:00', 'Zoom', 'John Doe'),
(3, 'Investor Meeting', 'Investment Discussion', '2025-04-05 10:00:00', 'Zoom', 'John Doe'),
(4, 'Investor Meeting', 'Investment Discussion', '2025-04-05 10:00:00', 'Zoom', 'John Doe'),
(5, 'Investor Meeting', 'Investment Discussion', '2025-04-05 10:00:00', 'Zoom', 'John Doe'),
(6, 'Investor Meeting', 'Investment Discussion', '2025-04-05 10:00:00', 'Zoom', 'John Doe');

-- --------------------------------------------------------

--
-- Table structure for table `mentor_profile_form`
--

CREATE TABLE `mentor_profile_form` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `dob` date NOT NULL,
  `contact` int(255) NOT NULL,
  `linked_in` varchar(255) NOT NULL,
  `permanent_add` text NOT NULL,
  `img` varchar(255) NOT NULL,
  `gender` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `job_title` varchar(255) NOT NULL,
  `edu_qual` varchar(255) NOT NULL,
  `company` varchar(255) NOT NULL,
  `field` varchar(255) NOT NULL,
  `topics` varchar(255) NOT NULL,
  `per_website` varchar(255) NOT NULL,
  `availability` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `mentor_profile_form`
--

INSERT INTO `mentor_profile_form` (`id`, `name`, `dob`, `contact`, `linked_in`, `permanent_add`, `img`, `gender`, `email`, `job_title`, `edu_qual`, `company`, `field`, `topics`, `per_website`, `availability`) VALUES
(3, 'John Doe', '1990-05-15', 1234567890, 'https://linkedin.com/in/johndoe', '123 Main St, NY, USA', '1743490964727.png', 'Male', 'johndoe@example.com', 'Software Engineer', 'B.Tech Computer Science', 'ABC Tech', 'Web Development', 'React, Node.js, MongoDB', 'https://johndoe.dev', 'Full-time');

-- --------------------------------------------------------

--
-- Table structure for table `metric_tab`
--

CREATE TABLE `metric_tab` (
  `id` int(11) NOT NULL,
  `milestone` varchar(255) NOT NULL,
  `metric` varchar(255) NOT NULL,
  `target_val` varchar(255) NOT NULL,
  `current_val` varchar(255) NOT NULL,
  `date` varchar(255) NOT NULL,
  `trend` varchar(255) NOT NULL,
  `notes` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `metric_tab`
--

INSERT INTO `metric_tab` (`id`, `milestone`, `metric`, `target_val`, `current_val`, `date`, `trend`, `notes`) VALUES
(2, 'Project Phase 1', 'Tasks Completed', '100', '75', '2025-04-05', 'upward', 'Team is progressing well, final review pending'),
(3, 'Project Phase 1', 'Tasks Completed', '100', '75', '2025-04-05', 'upward', 'Team is progressing well, final review pending'),
(4, 'Project Phase 1', 'Tasks Completed', '100', '75', '2025-04-05', 'upward', 'Team is progressing well, final review pending');

-- --------------------------------------------------------

--
-- Table structure for table `metric_tracking`
--

CREATE TABLE `metric_tracking` (
  `id` int(11) NOT NULL,
  `milestone` varchar(255) NOT NULL,
  `metric` varchar(255) NOT NULL,
  `targetValue` varchar(255) NOT NULL,
  `currentValue` varchar(255) NOT NULL,
  `date` date NOT NULL,
  `trend` varchar(255) NOT NULL,
  `note` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `metric_tracking`
--

INSERT INTO `metric_tracking` (`id`, `milestone`, `metric`, `targetValue`, `currentValue`, `date`, `trend`, `note`) VALUES
(2, 'Launch Beta Version1', 'User Signups1', '10001', '4501', '2025-04-03', 'upwar2d', 'Steady growth2 seen in last week'),
(3, 'Launch Beta Version', 'User Signups', '1000', '450', '2025-04-05', 'upward', 'Steady growth seen in last week');

-- --------------------------------------------------------

--
-- Table structure for table `milestone_track`
--

CREATE TABLE `milestone_track` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `startDate` date NOT NULL,
  `endDate` date NOT NULL,
  `status` varchar(255) NOT NULL,
  `competition` varchar(255) NOT NULL,
  `priority` varchar(255) NOT NULL,
  `responsible` varchar(255) NOT NULL,
  `comments` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `milestone_track`
--

INSERT INTO `milestone_track` (`id`, `name`, `startDate`, `endDate`, `status`, `competition`, `priority`, `responsible`, `comments`) VALUES
(2, 'nishant', '0000-00-00', '0000-00-00', 'priority', 'my sen', 'targerts', 'my on data protected', 'hello'),
(3, 'nishant', '2025-04-03', '2025-04-03', 'priority', 'my sen', 'targerts', 'my on data protected', 'hello');

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
  `session_id` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `expires` int(11) UNSIGNED NOT NULL,
  `data` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `startup`
--

CREATE TABLE `startup` (
  `id` int(11) NOT NULL,
  `personal_name` varchar(255) NOT NULL,
  `student_id` varchar(255) NOT NULL,
  `email_id` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `dept` varchar(255) NOT NULL,
  `year` year(4) NOT NULL,
  `startup_name` varchar(255) NOT NULL,
  `industry` varchar(255) NOT NULL,
  `description` longtext NOT NULL,
  `problem_soln` longtext NOT NULL,
  `stage` varchar(255) NOT NULL,
  `lwebsite` varchar(255) NOT NULL,
  `fun_required` varchar(255) NOT NULL,
  `invesment` varchar(255) NOT NULL,
  `revenue` longtext NOT NULL,
  `analysis` varchar(255) NOT NULL,
  `office_space` varchar(255) NOT NULL,
  `mentorship` varchar(255) NOT NULL,
  `networking` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `startup_profile`
--

CREATE TABLE `startup_profile` (
  `name` varchar(255) NOT NULL,
  `dob` date NOT NULL,
  `contact` int(255) NOT NULL,
  `linked_in` varchar(255) NOT NULL,
  `img` varchar(255) NOT NULL,
  `gender` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `permanent_add` text NOT NULL,
  `founder_ID` varchar(255) NOT NULL,
  `desig` varchar(255) NOT NULL,
  `comp_website` varchar(255) NOT NULL,
  `comp_name` varchar(255) NOT NULL,
  `comp_establish_date` date NOT NULL,
  `industry_type` varchar(255) NOT NULL,
  `prev_work_experience` varchar(255) NOT NULL,
  `edu_qual` varchar(255) NOT NULL,
  `notable_achive` varchar(255) NOT NULL,
  `media` varchar(255) NOT NULL,
  `skills` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `task_creation`
--

CREATE TABLE `task_creation` (
  `id` int(11) NOT NULL,
  `milestone` varchar(255) NOT NULL,
  `task` varchar(255) NOT NULL,
  `dueDate` date NOT NULL,
  `status` varchar(255) NOT NULL,
  `assigned` varchar(255) NOT NULL,
  `priority` varchar(255) NOT NULL,
  `comments` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `employee`
--
ALTER TABLE `employee`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `meetingschedule`
--
ALTER TABLE `meetingschedule`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `mentor_profile_form`
--
ALTER TABLE `mentor_profile_form`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `metric_tab`
--
ALTER TABLE `metric_tab`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `metric_tracking`
--
ALTER TABLE `metric_tracking`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `milestone_track`
--
ALTER TABLE `milestone_track`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`session_id`);

--
-- Indexes for table `startup`
--
ALTER TABLE `startup`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `startup_profile`
--
ALTER TABLE `startup_profile`
  ADD PRIMARY KEY (`founder_ID`);

--
-- Indexes for table `task_creation`
--
ALTER TABLE `task_creation`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `employee`
--
ALTER TABLE `employee`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `meetingschedule`
--
ALTER TABLE `meetingschedule`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `mentor_profile_form`
--
ALTER TABLE `mentor_profile_form`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `metric_tab`
--
ALTER TABLE `metric_tab`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `metric_tracking`
--
ALTER TABLE `metric_tracking`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `milestone_track`
--
ALTER TABLE `milestone_track`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `startup`
--
ALTER TABLE `startup`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `task_creation`
--
ALTER TABLE `task_creation`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
