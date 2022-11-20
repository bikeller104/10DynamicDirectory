const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const fs = require('fs');



const inquirer = require('inquirer');

const employeeTypes = ["Engineer", "Manager", "Intern"];

const baseQuestions = [
    {
        name:'name',
        type: 'input',
        message: 'What is the Employees name',
    },
    {
        name:'id',
        type: 'input',
        message: 'What is the Employees id',
    },
    {
        name:'email',
        type: 'input',
        message: 'What is the Employees email',
    },
    {
        name:'role',
        type: 'list',
        message: 'What is the Employees role',
        choices: employeeTypes,
    },
    
]

const continueQuestion = [
    {
        name: "continue",
        type: 'list',
        message: 'What would you like to do?',
        choices: ['Add another employee', 'quit'],
    }
]

const specificQuestion = {
    [employeeTypes[0]]: {
            name:'data',
            type: 'input',
            message: 'What is the Employees github username',
    },
    [employeeTypes[1]]: {
        name: 'data',
        type: 'input',
        message: 'What is the Employees office number'
    },
    [employeeTypes[2]]: {
        name: 'data',
        type: 'input',
        message: 'What school does the employee attend',
    }
}

const dataName = {
    [employeeTypes[0]]: "github username",
    [employeeTypes[1]]: "Office number",
    [employeeTypes[2]]: "School",
}

function getUserInput(prevInputs)
{
    inquirer.prompt(baseQuestions)
    .then((baseResponses)=> {
        inquirer.prompt(specificQuestion[baseResponses.role])
        .then((roleResponses)=>{
            const employee = createRole(
                baseResponses.role,
                baseResponses.name, 
                baseResponses.id, 
                baseResponses.email,
                roleResponses.data
                )
            prevInputs.push(employee);

            inquirer.prompt(continueQuestion)
            .then((response) =>{
                if(response.continue === "quit") 
                {
                    //fillout http
                    writeHtmlDocument(prevInputs);
                    return;
                }
                getUserInput(prevInputs);
            });
        });
    });
}

function createRole(roleName, name, id, email, specialdata)
{
    switch(roleName)
    {
        case employeeTypes[0]:
            return new Engineer(name,id,email,specialdata);
        case employeeTypes[1]:
            return new Manager(name,id,email,specialdata);
        default:
            return new Intern(name,id,email,specialdata);
    }
}

function writeHtmlDocument(employeeList)
{
    let htmlCards = employeeList.map((employee) => employeeToHtml(...employee.getData())).join(``);
    let html = 
    `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../lib/css/style.css">
    <title>Employee Directory</title>
</head>
<body>
    <header class="header">
        <h1>My Team</h1>
    </header>
    <main class="gridContainer">
        <div id="sidebarLeft"></div>
        <!--this container is the flex box container in the grid-->
        <div id="centerContent">

        ${htmlCards}

        </div>
        <div id="sidebarRight"></div>
    </main>
    
</body>
</html>`;

console.log(html);

let fileLocation = './dist/index.html';
fs.writeFile(fileLocation, html, (err) => { console.log(err?err:`html writen to ${fileLocation} `)});

}

function employeeToHtml(name, id, email, dataName, data, role)
{
    return `
<div class="employee-container">
    <div class="employee-header">
        <h3 class="card-title">${name}</h3>
        <h4 class="card-subtitle">${role}</h4>
    </div>
    <main class="employee-content">
        <p>id: ${id}</p>
        <p>email: ${email}</p>
        <p>${dataName}: ${data}</p>
    </main>
</div>
    `;
}



const employees = [];
getUserInput(employees);

