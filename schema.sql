DROP DATABASE IF EXISTS employeetrackerDB;
CREATE DATABASE employeetrackerDB;
USE employeetrackerDB;


CREATE TABLE departments (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL

);


CREATE TABLE role (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INT NOT NULL,
    CONSTRAINT fk_department FOREIGN KEY(department_id) references department (id)



);



CREATE TABLE employee (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    CONSTRAINT fk_role FOREIGN KEY (role_name) references role(name),
    CONSTRAINT fk_manager FOREIGN KEY (manager_id) references employee(id)



);