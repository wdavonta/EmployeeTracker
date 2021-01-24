const inquirer = require('inquirer');
const mysql = require('mysql2');
const prompts = require('prompts');




// Create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    // Your MySQL username
    user: 'root',
    // Your MySQL password
    password: 'Bereal21!',
    database: 'employeetrackerDB'
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
                "Update employee role?",
                "Exit"           
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
                updateEmployeeRole();
                break;
            case "Exit":
                connection.end();
                break;
            }
    })

}
// https://www.w3schools.com/nodejs/nodejs_mysql_select.asp//
// View all Departments,all Roles ,

function viewAllDepartments () {
    connection.query ('SELECT * FROM departments', function (err,res) {
    if (err) throw err;
    console.table(res);
    startPrompt(); 
 

    })
}

function viewAllRoles() {
    connection.query ('SELECT * FROM role', function (err,res) {
    if (err) throw err; 
    console.table(res);
    startPrompt();   

    })
}


function viewAllEmployees() {
    connection.query ('SELECT * FROM employee', function (err,res) {
    if (err) throw err; 
    console.table(res);
    startPrompt();
    })  
}

function addDepartment() {
    
    inquirer.prompt ([
        {
            type:'text',
            name:'department',
            message: 'What department would you like to add?'
        }
    ]).then(function(answer) {
        connection.query('INSERT INTO departments (name) VALUES (?)',
        [answer.department], function(err,res) {
            if (err) throw err; 
            console.table(res);
            startPrompt();
    
        })
    })
}
      
// Add Employee, Role //

function addEmployee() {
    

    inquirer.prompt([
    {
        type: 'text',
        name: 'firstname',
        message: 'What is the employee first name?'

    },
    {
        type: 'text',
        name: 'lastname',
        message: 'What is the employee last name?'
    },
    {
        type: 'text',
        name: 'roleid',
        message: 'What is the role id for employee?'
    },
    {
        type: 'text',
        name: 'managerid',
        message: 'What is the employee manager id number?'
    }
    
]).then(function(answer) {
    connection.query('INSERT INTO employee (first_name, last_name, role_id, manager_ID) VALUES (?,?,?,?)',
    [answer.firstname, answer.lastname, answer.roleid, answer.managerid], function(err,res) {
        if (err) throw err; 
        console.table(res);
        startPrompt();

        });
    })

}

function addRole() {
    

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
            name:'Departmentid',
            message: 'What is the department id?'
        }
    ]).then(function(answer) {
        connection.query('INSERT INTO role (title, salary, department_id) VALUES (?,?,?)',
        [answer.role, answer.salary, answer.Departmentid], function(err,res) {
            if (err) throw err; 
            console.table(res);
            startPrompt();
    
        })
    });
}


// Update Employee//   
//https://www.w3schools.com/nodejs/nodejs_mysql_update.asp//

function updateEmployeeRole() {
       

    inquirer.prompt ([
        {
            type:'text',
            name:'updateemployee',
            message: 'What employee would you like to update?(By ID) '
        },
        {
            type:'text',
            name:'updaterole',
            message: 'What role would you like to change them to?'
            
        }
    ]).then(function(answer) {
        connection.query('UPDATE employee SET role_id=? WHERE id= ?',
        [answer.updateemployee, answer.updaterole], function(err,res) {
            if (err) throw err; 
            console.table(res);
            startPrompt();
    
        })
    })
}

