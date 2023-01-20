const Employee = require("../lib/Employee.js");
const Manager = require("../lib/Manager.js");


describe("Manager", () => {
    describe("Initialization", () => {
        it("should create an object with a name, id, email, office number, again name, id, email, office number and role as Manager if provided valid arguments", () => {
            const manager = new Manager("john", "1", "john@test.com", "10");
            expect(manager.name).toEqual("John");
            expect(manager.id).toEqual("1");
            expect(manager.email).toEqual("john@test.com");
            expect(manager.officeNumber).toEqual("10");
            expect(manager.getName()).toEqual("John");
            expect(manager.getId()).toEqual("1");
            expect(manager.getEmail()).toEqual("john@test.com");
            expect(manager.getOfficeNumber()).toEqual("10");
            expect(manager.getRole()).toEqual("Manager");
        });

    });

});