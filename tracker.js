const inquirer = require('inquirer');
const mysql = require('mysql');



// Create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    // Your MySQL username
    user: 'root',
    // Your MySQL password
    password: 'Bereal21!',
    database: 'employeedb'
  });

  connection.connect(err => {
    if (err) throw err;
    console.log('connected as id ' + connection.threadId);
    startPrompt();
  });
  


function startPrompt() {
    inquirer.prompt ([
        {

            type: "list",
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

    // https://www.w3schools.com/js/js_switch.asp//
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
// https://www.w3schools.com/nodejs/nodejs_mysql_select.asp//
// View all Departments,all Roles ,

function viewAllDepartments () {
    connection.query ('SELECT department.name', function (err,res) {
    if (err) throw err;
    console.log(res);
 

    })
}

function viewAllRoles() {
    connection.query ('SELECT role.title, role.salary, role.department_id', function (err,res) {
    if (err) throw err; 
    console.log(res);   

    })
}


function viewAllEmployees() {
    connection.query ('SELECT employee.first_name, employee.last_name, role.title, role.salary, department.name', function (err,res) {
    if (err) throw err; 
    console.log(res);
    })  
}

function addDepartment() {
    
    inquirer.prompt ([
        {
            type:'text',
            name:'department',
            message: 'What department would you like to add?'
        }
    ])   
// Add Employee, Role //

function addEmployee() {
    

    inquirer.prompt([
    {
        type: 'text',
        name: 'name',
        message: 'What is the employee first name?'

    },
    {
        type: 'text',
        name: 'name',
        message: 'What is the employee last name?'
    }
])

function addRole() {
    connection.query ('SELECT * FROM department', function (err,res) {
    if (err) throw err;

    inquirer.prompt ([
        {
            type:'text',
            name:'role',
            message: 'What role would you like to add?'
        },
        {
            type: 'text',
            name:'salary',
            message: 'What is the role salary?'
        },
        {
            type:'text',
            name:'Department id',
            message: 'What is the department id?'
        }
    ])

// Update Employee//    
function updateEmployee() {
    connection.query ('SELECT employee.firstname', function (err,res) {
    if (err) throw err;    

    inquirer.prompt ([
        {
            type:'text',
            name:'update employee',
            message: 'What employee would you like to update?'
        },
        {
            type:'text',
            name:'update role',
            message: 'What role would you like to change it to?'
        }
    ])
}