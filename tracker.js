const inquirer = require('inquirer');


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
            name: "",
            choices: [
                "Add department",
                "Add employee",
                "Add role",
                "Remove employee",
                "Add role",
                "Remove employee",
                "Update employee role",
                "View all departments",
                "View all employees",
                "View all employee by department",
                "View all roles",
            ]
        }
    ])

}