const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber)
    {
        super(name,id,email);
        this.officeNumber = officeNumber;
        this.role = 'Manager'
    }
    getRole =() => this.role;

    getOfficeNumber = () => this.officeNumber;

    getData = () => [this.name, this.id, this.email, 'office number', this.officeNumber, this.role];
    
}

module.exports = Manager;