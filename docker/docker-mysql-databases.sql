-- create databases
CREATE DATABASE IF NOT EXISTS `iron_source_rating_dev`;

-- create root user and grant rights
-- CREATE USER IF NOT EXISTS 'root'@'%' IDENTIFIED BY 'admin';
GRANT ALL ON *.* TO 'root'@'%';