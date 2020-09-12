CREATE SCHEMA `StreamDB` ;
CREATE TABLE `StreamDB`.`stream` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(45) NULL,
  `description` VARCHAR(45) NULL,
  `user_id` VARCHAR(45) NULL,
  PRIMARY KEY (`id`));


ALTER TABLE `StreamDB`.`pictures` 
CHANGE COLUMN `album_id` `album_id` INT NULL DEFAULT NULL ,
ADD INDEX `album id_idx` (`album_id` ASC) VISIBLE;
;
ALTER TABLE `StreamDB`.`pictures` 
ADD CONSTRAINT `album id`
  FOREIGN KEY (`album_id`)
  REFERENCES `StreamDB`.`stream` (`id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;

