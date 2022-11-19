const Employee = require('./Employee');

class Engineer extends Employee{
    constructor(name, id, email, gihub)
    {
        super(name,id,email)
        this.github = github;
    }
    getRole = () => 'Engineer';
    gitGithub =() => this.github;
}
