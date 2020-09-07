CREATE SCHEMA `StreamDB` ;
CREATE TABLE `StreamDB`.`stream` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(45) NULL,
  `description` VARCHAR(45) NULL,
  `user_id` VARCHAR(45) NULL,
  PRIMARY KEY (`id`));