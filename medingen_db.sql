-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 24, 2025 at 08:44 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `medingen_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `faq`
--

CREATE TABLE `faq` (
  `id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `question` text NOT NULL,
  `answer` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `faq`
--

INSERT INTO `faq` (`id`, `product_id`, `question`, `answer`) VALUES
(1, 1, 'Is Dolo 650 safe for children?', 'Dolo 650 is safe for children above 6 years.'),
(2, 1, 'Can I take Dolo 650 on an empty stomach?', 'It is recommended to take Dolo 650 with food.'),
(3, 2, 'Is Crocin Advance safe for children?', 'Crocin Advance is safe for children above 12 years.'),
(4, 2, 'Can I take Crocin Advance with other medications?', 'Consult your doctor before taking Crocin Advance with other medications.'),
(5, 3, 'Is Paracetamol 500 safe for pregnant women?', 'Paracetamol 500 is safe for pregnant women.'),
(6, 3, 'Can I take Paracetamol 500 with alcohol?', 'It is not recommended to take Paracetamol 500 with alcohol.');

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `price` float NOT NULL,
  `othername` varchar(100) DEFAULT NULL,
  `chemicalformula` varchar(100) DEFAULT NULL,
  `company` varchar(100) DEFAULT NULL,
  `offerpercent` float DEFAULT NULL,
  `image_url` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id`, `name`, `price`, `othername`, `chemicalformula`, `company`, `offerpercent`, `image_url`, `description`) VALUES
(1, 'Dolo 650', 30, 'Acetaminophen 650', 'C8H9NO2', 'Micro Labs', 10, '/assets/dolo-650.png', 'Dolo 650 is used to relieve pain and reduce fever.'),
(2, 'Crocin Advance', 25.5, 'Paracetamol 500', 'C8H9NO2', 'GSK', 15, '/assets/crocin-advance.png', 'Crocin Advance provides fast relief from fever and mild pain.'),
(3, 'Paracetamol 500', 20, 'Generic Paracetamol', 'C8H9NO2', 'Cipla', 5, '/assets/paracetamol-500.png', 'Paracetamol 500 is a generic pain reliever and fever reducer.');

-- --------------------------------------------------------

--
-- Table structure for table `product_side_effect`
--

CREATE TABLE `product_side_effect` (
  `id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `side_effect_text` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `product_side_effect`
--

INSERT INTO `product_side_effect` (`id`, `product_id`, `side_effect_text`) VALUES
(1, 1, 'Nausea in some cases.'),
(2, 1, 'Rare allergic reactions.'),
(3, 2, 'Upset stomach possible.'),
(4, 2, 'Drowsiness in rare cases.'),
(5, 3, 'Mild stomach irritation.'),
(6, 3, 'Skin rash in rare instances.');

-- --------------------------------------------------------

--
-- Table structure for table `product_use`
--

CREATE TABLE `product_use` (
  `id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `use_text` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `product_use`
--

INSERT INTO `product_use` (`id`, `product_id`, `use_text`) VALUES
(1, 1, 'Relieves mild to moderate pain.'),
(2, 1, 'Reduces fever effectively.'),
(3, 2, 'Quick relief from fever.'),
(4, 2, 'Helps with headache and body ache.'),
(5, 3, 'General pain relief.'),
(6, 3, 'Fever reduction.');

-- --------------------------------------------------------

--
-- Table structure for table `product_workings`
--

CREATE TABLE `product_workings` (
  `id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `working_text` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `product_workings`
--

INSERT INTO `product_workings` (`id`, `product_id`, `working_text`) VALUES
(1, 1, 'Blocks pain signals in the brain.'),
(2, 1, 'Reduces body temperature by acting on the hypothalamus.'),
(3, 2, 'Inhibits prostaglandin production.'),
(4, 2, 'Lowers fever through central nervous system action.'),
(5, 3, 'Acts as an analgesic for pain relief.'),
(6, 3, 'Regulates body temperature.');

-- --------------------------------------------------------

--
-- Table structure for table `review`
--

CREATE TABLE `review` (
  `id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `rating` int(11) NOT NULL,
  `comment` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `review`
--

INSERT INTO `review` (`id`, `product_id`, `rating`, `comment`) VALUES
(1, 1, 4, 'Works well for fever!'),
(2, 1, 5, 'Very effective.'),
(3, 2, 5, 'Fast and effective.'),
(4, 2, 4, 'Good for headaches.'),
(5, 3, 3, 'Good for the price.'),
(6, 3, 4, 'Decent pain relief.');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `username`, `password`) VALUES
(1, 'admin', 'pbkdf2:sha256:260000$cNtqNSBcK3Cacwuo$91742f1bae7d5f016cfc6d9920001d536d67669eec3da12c2a859096498abc72');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `faq`
--
ALTER TABLE `faq`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_id` (`product_id`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `product_side_effect`
--
ALTER TABLE `product_side_effect`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_id` (`product_id`);

--
-- Indexes for table `product_use`
--
ALTER TABLE `product_use`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_id` (`product_id`);

--
-- Indexes for table `product_workings`
--
ALTER TABLE `product_workings`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_id` (`product_id`);

--
-- Indexes for table `review`
--
ALTER TABLE `review`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_id` (`product_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `faq`
--
ALTER TABLE `faq`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `product_side_effect`
--
ALTER TABLE `product_side_effect`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `product_use`
--
ALTER TABLE `product_use`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `product_workings`
--
ALTER TABLE `product_workings`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `review`
--
ALTER TABLE `review`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `faq`
--
ALTER TABLE `faq`
  ADD CONSTRAINT `faq_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`);

--
-- Constraints for table `product_side_effect`
--
ALTER TABLE `product_side_effect`
  ADD CONSTRAINT `product_side_effect_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`);

--
-- Constraints for table `product_use`
--
ALTER TABLE `product_use`
  ADD CONSTRAINT `product_use_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`);

--
-- Constraints for table `product_workings`
--
ALTER TABLE `product_workings`
  ADD CONSTRAINT `product_workings_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`);

--
-- Constraints for table `review`
--
ALTER TABLE `review`
  ADD CONSTRAINT `review_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
