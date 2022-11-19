const Manager = require('../lib/Manager');


describe('Manager', () => {
    describe("Initialization", () => {
        it("should return an object containing a name property when called with the 'new' keyword", ()=>{
            const manager = new Manager();

            expect("name" in manager).toEqual(true);
        });
        it("should return an object containing the id property when called with the 'new' Keyword", () =>{
            const manager = new Manager();
            expect("id" in manager).toEqual(true);
        });
        it("should return an object containing the email property when called with the 'new' Keyword", () =>{
            const manager = new Manager();
            expect("email" in manager).toEqual(true);
        });
        it("should return an object containing the officeNumber property when called with the 'new' keyword",()=>{
            const manager = new Manager()
            expect("officeNumber" in manager).toEqual(true);
        });
    });
    describe("getName", ()=>{
        it("should return the name entered in the constructor when initialized", ()=>{
            const name = "Fred";
            const id = 55;
            const email = "genericEmail@email.com";
            const officeNumber = "G-83"
            const manager = new Manager(name,id,email,officeNumber);

            expect(manager.getName()).toEqual(name);
        });
    });
    describe("getId", ()=>{
        it("should return the id entered in the constructor when initialized", ()=>{
            const name = "Fred";
            const id = 55;
            const email = "genericEmail@email.com";
            const officeNumber = "G-83"
            const manager = new Manager(name,id,email,officeNumber);

            expect(manager.getId()).toEqual(id);
        });
    });
    describe("getEmail", ()=>{
        it("should return the email entered in the constructor when initialized", ()=>{
            const name = "Fred";
            const id = 55;
            const email = "genericEmail@email.com";
            const officeNumber = "G-83"
            const manager = new Manager(name,id,email,officeNumber);

            expect(manager.getEmail()).toEqual(email);
        });
    });
    describe("getOfficeNumber", ()=>{
        it("should return the officeNumber id entered in the constructor when initialized", ()=>{
            const name = "Fred";
            const id = 55;
            const email = "genericEmail@email.com";
            const officeNumber = "G-83"
            const manager = new Manager(name,id,email,officeNumber);

            expect(manager.getOfficeNumber()).toEqual(officeNumber);
        });
    });
    describe("getRole", ()=>{
        it("should return the role associated with the class", ()=>{
            const name = "Fred";
            const id = 55;
            const email = "genericEmail@email.com";
            const officeNumber = "G-83"
            const manager = new Manager(name,id,email,officeNumber);

            expect(manager.getRole()).toEqual("Manager");
        });
    });
});