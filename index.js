const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');


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



const employees = [];
getUserInput(employees);

