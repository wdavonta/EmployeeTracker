const inquirer = require('inquirer');
const mysql = require('mysql2');


// Create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    // Your MySQL username
    user: 'root',
    // Your MySQL password
    password: 'Bereal21!',
    database: ''
  });

  connection.connect(err => {
    if (err) throw err;
    console.log('connected as id ' + connection.threadId);
    startPrompt();
  });
  


function startPrompt() {
    inquirer.prompt ([
        {

            typer: "list",
            message: "What would you like to do?",
            name: "choices",
            choices: [
                "View all departments?",
                "View all roles?",
                "View all employees?",
                "Add a department?",
                "Add an employee?",
                "Add a role?",
                "Update employee role?"           
            ]
        }
    ]).then(function(response) {
        switch (response.choices) {
            case "View all departments?":
                viewAllDepartments();
                break;
            case "View all roles?":
                viewAllRoles();
                break;
            case "View all employees?":
                viewAllEmployees();
                break;
            case "Add a department?":
                addDepartment();
                break;
            case "Add an employee?":
                addEmployee();
                break;
            case "Add a role?":
                addRole();
                break;
            case "Update employee role?":
                updateRole();
                break;
            }
    })

}
