-- Database Schema
CREATE DATABASE burgers_db;
USE burgers_db;

-- Create tables and fields
CREATE TABLE burgers
(
id INT AUTO_INCREMENT NOT NULL,
burger_name VARCHAR(255) NOT NULL,
devoured BOOLEAN NOT NULL DEFAULT 0,
date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
PRIMARY KEY (id)
);
