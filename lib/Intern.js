const Employee = require("./Employee.js");

class Intern extends Employee{
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());//capitalize every word
    }

    getRole() {
        return "Intern"
    }

    getSchool() {
        return this.school
    }  
};

module.exports = Intern;