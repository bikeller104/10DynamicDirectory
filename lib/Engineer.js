const Employee = require('./Employee');

class Engineer extends Employee{
    constructor(name, id, email, github)
    {
        super(name,id,email)
        this.github = github;
        this.role = 'Engineer';
    }
    getRole = () => this.role;
    getGithub =() => this.github;

    getData = () => [this.name, this.id, this.email, 'GitHub', this.github, this.role];
}

module.exports = Engineer;
