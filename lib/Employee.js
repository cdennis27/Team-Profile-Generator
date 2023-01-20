
class Employee {
  constructor(name, id, email) {
    this.name = name.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());//capitalize every word;
    this.id = id;
    this.email = email;
  }
  
  getName() {
    return this.name
  }

  getId() {
    return this.id
  }

  getEmail() {
    return this.email
  }

  getRole() {
    return "Employee";
  }
  
};

module.exports = Employee;