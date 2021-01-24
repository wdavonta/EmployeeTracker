INSERT INTO departments (name)
VALUES 
('Sales'),
('Engineering'),
('Finance'),
('Legal');






INSERT INTO role (title, salary, department_id)
VALUES
('Sales Lead', 30000, 1),
('Salesperson', 25000, 1),
('Lead Engineer', 50000, 2),
('Software Engineer', 40000, 2),
('Accountant', 100000, 3),
('Legal Team Lead', 90000, 3),
('Lawyer', 150000, 4);




INSERT INTO employee (first_name, last_name, role_id, manager_ID)
VALUES
('Michael','Pinto', 1, null),
('Kendra', 'Timot', 2, null),
('Joyce', 'Carter', 3, null),
('Tomeshia', 'Williamson', 4, 2),
('Shay', 'Lowe', 5, 1),
('Anthony', 'Lewis', 6, 3);