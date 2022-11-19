const Employee = require('../lib/Employee');

describe('Employee', () => {
    describe("Initialization", () => {
        it("should return an object containing a name property when called with the 'new' keyword", ()=>{
            const employee = new Employee();

            expect("name" in employee).toEqual(true);
        });
        it("should return an object containing the id property when called with the 'new' Keyword", () =>{
            const employee = new Employee();
            expect("id" in employee).toEqual(true);
        });
        it("should return an object containing the email property when called with the 'new' Keyword", () =>{
            const employee = new Employee();
            expect("email" in employee).toEqual(true);
        });
    });
    describe("getName", ()=>{
        it("should return the name entered in the constructor when initialized", ()=>{
            const name = "Fred";
            const id = 55;
            const email = "genericEmail@email.com";
            const employee = new Employee(name,id,email);

            expect(employee.getName()).toEqual(name);
        });
    });
    describe("getId", ()=>{
        it("should return the id entered in the constructor when initialized", ()=>{
            const name = "Fred";
            const id = 55;
            const email = "genericEmail@email.com";
            const employee = new Employee(name,id,email);

            expect(employee.getId()).toEqual(id);
        });
    });
    describe("getEmail", ()=>{
        it("should return the name, id, and email entered in the constructor when initialized", ()=>{
            const name = "Fred";
            const id = 55;
            const email = "genericEmail@email.com";
            const employee = new Employee(name,id,email);

            expect(employee.getEmail()).toEqual(email);
        });
    });
    describe("getRole", ()=>{
        it("should return the role associated with the class", ()=>{
            const name = "Fred";
            const id = 55;
            const email = "genericEmail@email.com";
            const employee = new Employee(name,id,email);

            expect(employee.getRole()).toEqual("Employee");
        });
    });
});