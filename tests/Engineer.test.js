const Employee = require("../lib/Employee.js");
const Engineer = require("../lib/Engineer.js");


describe("Engineer", () => {
    describe("Initialization", () => {
        it("should create an object with a name, id, email, GitHub user, again name, id, email, GitHub user and role as Engineer if provided valid arguments", () => {
            const engineer = new Engineer("john", "1", "john@test.com", "carlos100");
            expect(engineer.name).toEqual("John");
            expect(engineer.id).toEqual("1");
            expect(engineer.email).toEqual("john@test.com");
            expect(engineer.gitHub).toEqual("carlos100");
            expect(engineer.getName()).toEqual("John");
            expect(engineer.getId()).toEqual("1");
            expect(engineer.getEmail()).toEqual("john@test.com");
            expect(engineer.getGitHub()).toEqual("carlos100");
            expect(engineer.getRole()).toEqual("Engineer");
        });

    });

});