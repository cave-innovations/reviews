-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'Listings'
--
-- ---
DROP DATABASE IF EXISTS reviews;

CREATE DATABASE reviews;

USE reviews;

DROP TABLE IF EXISTS `listings`;

CREATE TABLE `listings` (
  `id` INTEGER AUTO_INCREMENT,
  `Host_FirstName` VARCHAR(100) ,
  `Host_LastName` VARCHAR(100) ,
  `Image_Url` VARCHAR(100),
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'Reviews'
--
-- ---

DROP TABLE IF EXISTS `reviews`;

CREATE TABLE `reviews` (
  `id` INTEGER AUTO_INCREMENT,
  `Traveler_FirstName` VARCHAR(100),
  `Traveler_LastName` VARCHAR(100),
  `Date` DATE,
  `Image_Url` VARCHAR(100),
  `Review` VARCHAR(500),
  `Rating_Accuracy` INTEGER,
  `Rating_Communication` INTEGER,
  `Rating_Cleanliness` INTEGER,
  `Rating_Location` INTEGER,
  `Rating_CheckIn` INTEGER,
  `Rating_Value` INTEGER,
  `Listing_Id` INTEGER,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'Responses'
--
-- ---

DROP TABLE IF EXISTS `responses`;

CREATE TABLE `responses` (
  `id` INTEGER AUTO_INCREMENT,
  `Date` DATE,
  `Response` VARCHAR(500),
  `Review_Id` INTEGER,
  PRIMARY KEY (`id`)
);

-- ---
-- Foreign Keys
-- ---

ALTER TABLE `reviews` ADD FOREIGN KEY (Listing_Id) REFERENCES `listings` (`id`);
ALTER TABLE `responses` ADD FOREIGN KEY (Review_Id) REFERENCES `reviews` (`id`);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `Listings` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Reviews` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Responses` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `Listings` (`id`,`Host`,`Image_Url`) VALUES
-- ('','','');
-- INSERT INTO `Reviews` (`id`,`Traveler`,`Date`,`Image_Url`,`Review`,`Rating_Accuracy`,`Rating_Communication`,`Rating_Cleanliness`,`Rating_Location`,`Rating_Check-in`,`Listing_Id`) VALUES
-- ('','','','','','','','','','','');
-- INSERT INTO `Responses` (`id`,`Date`,`Response`,`Review_Id`) VALUES
-- ('','','','');