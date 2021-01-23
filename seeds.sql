INSERT INTO department (name)
VALUES 
('Sales'),
('Engineering'),
('Finance'),
('Legal');






INSERT INTO role (title, salary, role_id)
VALUES
('Sales Lead, 30000, 1'),
('Salesperson, 25000, 2'),
('Lead Engineer, 50000, 3'),
('Software Engineer, 40000, 4'),
('Accountant, 100000, 5'),
('Legal Team, 90000, 6'),
('Lawyer, 150000, 7');




INSERT INTO employee (first_name, last_name, role_name, manager)
VALUES
('Michael','Pinto', 'Lawyer', null),
('Kendra', 'Timot', 'Accountant, Johnathan Smit'),
('Joyce', 'Carter', 'Software Engineer, null'),
('Tomeshia', 'Williamson', 'Lead Engineer, Martha Smith'),
('Shay', 'Lowe', 'Sales Lead, Mike Scott'),
('Anthony', 'Lewis', 'Salesperson', 'Andrew Wood'),