const Employee = require("../lib/Employee.js");


describe("Employee", () => {
    describe("Initialization", () => {
        it("should create an object with a name, id, email, again name, id, email, and role as Employee if provided valid arguments", () => {
            const employee = new Employee("john", "1", "john@test.com");
            expect(employee.name).toEqual("John");
            expect(employee.id).toEqual("1");
            expect(employee.email).toEqual("john@test.com");
            expect(employee.getName()).toEqual("John");
            expect(employee.getId()).toEqual("1");
            expect(employee.getEmail()).toEqual("john@test.com");
            expect(employee.getRole()).toEqual("Employee");
        });

    });

});
