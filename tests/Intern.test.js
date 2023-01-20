const Employee = require("../lib/Employee.js");
const Intern = require("../lib/Intern.js");


describe("Intern", () => {
    describe("Initialization", () => {
        it("should create an object with a name, id, email, school, again name, id, email, school and role as Intern if provided valid arguments", () => {
            const intern = new Intern("john", "1", "john@test.com", "university of toronto");
            expect(intern.name).toEqual("John");
            expect(intern.id).toEqual("1");
            expect(intern.email).toEqual("john@test.com");
            expect(intern.school).toEqual("University Of Toronto");
            expect(intern.getName()).toEqual("John");
            expect(intern.getId()).toEqual("1");
            expect(intern.getEmail()).toEqual("john@test.com");
            expect(intern.getSchool()).toEqual("University Of Toronto");
            expect(intern.getRole()).toEqual("Intern");
        });

    });

});