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

function viewAllDepartments () {
    let query = 'SELECT * FROM DEPARTMENTS';
    connection.query (query, function (err,res) {
    if (err) throw err;

 

    })
}

function viewAllRoles() {
    let query = 'SELECT * FROM ROLES';
    connection.query (query, function (err,res) {
    if (err) throw err;    

    })
}


function viewAllEmployees() {
    let query = 'SELECT * FROM EMPLOYEE';
    connection.query (query, function (err,res) {
    if (err) throw err;   
}

function addDepartment() {
    
    inquirer.prompt ([
        {
            type:'text',
            name:'department',
            message: 'What department would you like to add?'
        }
    ])   


function addEmployee() {
    connection.query (, function (err,res) {
    if (err) throw err;

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
    connection.query (, function (err,res) {
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

    
function updateEmployee() {
    connection.query (, function (err,res) {
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