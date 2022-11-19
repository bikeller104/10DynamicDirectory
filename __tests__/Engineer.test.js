const Engineer = require('../lib/Engineer');


describe('Engineer', () => {
    describe("Initialization", () => {
        it("should return an object containing a name property when called with the 'new' keyword", ()=>{
            const engineer = new Engineer();

            expect("name" in engineer).toEqual(true);
        });
        it("should return an object containing the id property when called with the 'new' Keyword", () =>{
            const engineer = new Engineer();
            expect("id" in engineer).toEqual(true);
        });
        it("should return an object containing the email property when called with the 'new' Keyword", () =>{
            const engineer = new Engineer();
            expect("email" in engineer).toEqual(true);
        });
        it("should return an object containing the github property when called with the 'new' keyword",()=>{
            const engineer = new Engineer()
            expect("github" in engineer).toEqual(true);
        });
    });
    describe("getName", ()=>{
        it("should return the name entered in the constructor when initialized", ()=>{
            const name = "Fred";
            const id = 55;
            const email = "genericEmail@email.com";
            const github = "Fred55"
            const engineer = new Engineer(name,id,email,github);

            expect(engineer.getName()).toEqual(name);
        });
    });
    describe("getId", ()=>{
        it("should return the id entered in the constructor when initialized", ()=>{
            const name = "Fred";
            const id = 55;
            const email = "genericEmail@email.com";
            const github = "Fred55"
            const engineer = new Engineer(name,id,email,github);

            expect(engineer.getId()).toEqual(id);
        });
    });
    describe("getEmail", ()=>{
        it("should return the email entered in the constructor when initialized", ()=>{
            const name = "Fred";
            const id = 55;
            const email = "genericEmail@email.com";
            const github = "Fred55"
            const engineer = new Engineer(name,id,email,github);

            expect(engineer.getEmail()).toEqual(email);
        });
    });
    describe("getGithubl", ()=>{
        it("should return the github id entered in the constructor when initialized", ()=>{
            const name = "Fred";
            const id = 55;
            const email = "genericEmail@email.com";
            const github = "Fred55"
            const engineer = new Engineer(name,id,email,github);

            expect(engineer.getGithub()).toEqual(github);
        });
    });
    describe("getRole", ()=>{
        it("should return the role associated with the class", ()=>{
            const name = "Fred";
            const id = 55;
            const email = "genericEmail@email.com";
            const github = "Fred55"
            const engineer = new Engineer(name,id,email,github);

            expect(engineer.getRole()).toEqual("Engineer");
        });
    });
});