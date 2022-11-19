const Intern = require('../lib/Intern');


describe('Intern', () => {
    describe("Initialization", () => {
        it("should return an object containing a name property when called with the 'new' keyword", ()=>{
            const intern = new Intern();

            expect("name" in intern).toEqual(true);
        });
        it("should return an object containing the id property when called with the 'new' Keyword", () =>{
            const intern = new Intern();
            expect("id" in intern).toEqual(true);
        });
        it("should return an object containing the email property when called with the 'new' Keyword", () =>{
            const intern = new Intern();
            expect("email" in intern).toEqual(true);
        });
        it("should return an object containing the school property when called with the 'new' keyword",()=>{
            const intern = new Intern()
            expect("school" in intern).toEqual(true);
        });
    });
    describe("getName", ()=>{
        it("should return the name entered in the constructor when initialized", ()=>{
            const name = "Fred";
            const id = 55;
            const email = "genericEmail@email.com";
            const school = "MySchool"
            const intern = new Intern(name,id,email,school);

            expect(intern.getName()).toEqual(name);
        });
    });
    describe("getId", ()=>{
        it("should return the id entered in the constructor when initialized", ()=>{
            const name = "Fred";
            const id = 55;
            const email = "genericEmail@email.com";
            const school = "MySchool"
            const intern = new Intern(name,id,email,school);

            expect(intern.getId()).toEqual(id);
        });
    });
    describe("getEmail", ()=>{
        it("should return the email entered in the constructor when initialized", ()=>{
            const name = "Fred";
            const id = 55;
            const email = "genericEmail@email.com";
            const school = "MySchool"
            const intern = new Intern(name,id,email,school);

            expect(intern.getEmail()).toEqual(email);
        });
    });
    describe("getSchooll", ()=>{
        it("should return the school id entered in the constructor when initialized", ()=>{
            const name = "Fred";
            const id = 55;
            const email = "genericEmail@email.com";
            const school = "MySchool"
            const intern = new Intern(name,id,email,school);

            expect(intern.getSchool()).toEqual(school);
        });
    });
    describe("getRole", ()=>{
        it("should return the role associated with the class", ()=>{
            const name = "Fred";
            const id = 55;
            const email = "genericEmail@email.com";
            const school = "MySchool"
            const intern = new Intern(name,id,email,school);

            expect(intern.getRole()).toEqual("Intern");
        });
    });
});