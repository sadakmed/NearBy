-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Feb 17, 2019 at 01:02 PM
-- Server version: 5.7.25-0ubuntu0.18.04.2
-- PHP Version: 7.2.15-0ubuntu0.18.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `Nearby`
--

DELIMITER $$
--
-- Functions
--
CREATE DEFINER=`akura`@`localhost` FUNCTION `calcDistance` (`lat` FLOAT, `lng` FLOAT, `pnt_lat` FLOAT, `pnt_lng` FLOAT) RETURNS FLOAT BEGIN

Declare dist float;
SET dist =
  6371 * acos (
  cos ( radians(pnt_lat) )
  * cos( radians( lat ) )
  * cos( radians( lng ) - radians(pnt_lng) )
  + sin ( radians(pnt_lat) )
  * sin( radians( lat ) )
);

RETURN dist;

END$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `preferredShops`
--

CREATE TABLE `preferredShops` (
  `Id` int(11) NOT NULL,
  `IdShop` int(11) NOT NULL,
  `IdUser` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `preferredShops`
--

INSERT INTO `preferredShops` (`Id`, `IdShop`, `IdUser`) VALUES
(1, 1, 1),
(2, 3, 1);

-- --------------------------------------------------------

--
-- Table structure for table `shops`
--

CREATE TABLE `shops` (
  `Id` int(10) NOT NULL,
  `ShopName` varchar(15) NOT NULL,
  `Latitude` float NOT NULL,
  `Longitude` float NOT NULL,
  `ImgUrl` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `shops`
--

INSERT INTO `shops` (`Id`, `ShopName`, `Latitude`, `Longitude`, `ImgUrl`) VALUES
(1, 'shop1', 32.4901, -6.68839, 'https://media-cdn.tripadvisor.com/media/photo-s/0b/4c/df/7f/shops-outside-the-temple.jpg'),
(2, 'The Body Shop', 32.4908, -6.68039, 'http://mallxplorer.com/wp-content/uploads/2017/06/The-Body-Shop-Cosmetics-store-Dubai-Festival-City-Dubai-UAE.jpg'),
(3, 'Coles', 32.5009, -6.68039, 'https://www.retailbiz.com.au/wp-content/uploads/2017/12/popup-store_1000x450.jpg'),
(4, 'CupCakes', 32.4909, -6.69039, 'https://c1.staticflickr.com/5/4149/5152890620_6739c7f030_b.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `Id` int(10) NOT NULL,
  `Email` varchar(50) NOT NULL,
  `Pwd` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`Id`, `Email`, `Pwd`) VALUES
(1, 'jhon@gmail.com', '202cb962ac59075b964b07152d234b70'),
(2, 'doe@gmail.com', '202cb962ac59075b964b07152d234b70'),
(6, 'root@gmail.com', '63a9f0ea7bb98050796b649e85481845');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `preferredShops`
--
ALTER TABLE `preferredShops`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `FKIdShop` (`IdShop`),
  ADD KEY `FKIdUser` (`IdUser`);

--
-- Indexes for table `shops`
--
ALTER TABLE `shops`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`Id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `preferredShops`
--
ALTER TABLE `preferredShops`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `shops`
--
ALTER TABLE `shops`
  MODIFY `Id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `Id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `preferredShops`
--
ALTER TABLE `preferredShops`
  ADD CONSTRAINT `FKIdShop` FOREIGN KEY (`IdShop`) REFERENCES `shops` (`Id`),
  ADD CONSTRAINT `FKIdUser` FOREIGN KEY (`IdUser`) REFERENCES `users` (`Id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
