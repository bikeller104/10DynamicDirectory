const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school)
    {
        super(name, id, email);
        this.school = school;
        this.role = 'Intern';
    }
    getRole = () => this.role;
    getSchool = () => this.school;

    getData = () => [this.name, this.id, this.email, 'school', this.school, this.role];
}

module.exports = Intern;