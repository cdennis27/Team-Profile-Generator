//package modules


const inquirer = require("inquirer");
const fs = require('fs');
const generateHTML = require("./src/generateHTML.js");

//class modules

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/intern");

//array of all employees information
const newStaffMemberData = [];


const questionsManager = async () => {
    console.log("Please provide the Team Manager information first!");
    const answers = await inquirer

        .prompt([
            {
                type: "input",
                message: "What is the Team Manager's name?",
                name: "name",
                validate: (input) => {
                    if (input === "") {
                        return "Please enter a name"
                    } else {

                        return true;
                    }
                }

            },
            {
                type: "input",
                message: "What is the Team Manager's ID?",
                name: "id",
                validate: (input) => {

                    if (/\d/.test(input)) {
                        return true;
                    } else {
                        return "Please enter a number";
                    }
                }
            },
            {
                type: "input",
                message: "What is the Team Manager's email?",
                name: "email",
                validate: function (email) {

                    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
                        return true;
                    } else {
                        return "Please enter a valid email";
                    }
                }
            },
            {
                type: "input",
                message: "What is the Team Manager's office number?",
                name: "officeNumber",
                validate: (input) => {

                    if (/\d/.test(input)) {
                        return true;
                    } else {
                        return "Please enter a number";
                    }
                }
            }
        ])

    const newManager = new Manager(
        answers.name, answers.id, answers.email, answers.officeNumber
    );
    //push the only manager to the array
    newStaffMemberData.push(newManager);

};

const questionsOthers = async () => {

    const answers = await inquirer
        .prompt([
            {
                type: "list",
                message: "Would you like to add more people to this Team?",
                name: "addMember",
                choices: ["Add Engineer", "Add Intern", "Create Team"],
            }
        ])

    if (answers.addMember === "Add Engineer") {
        const answers = await inquirer
            .prompt([
                {
                    type: "input",
                    message: "What is this Team's member name?",
                    name: "name",
                    validate: (input) => {
                        if (input === "") {
                            return "Please enter a name";
                        } else {
                            return true;
                        }
                    }
                },
                {
                    type: "input",
                    message: "What is this Team's member ID?",
                    name: "id",
                    validate: (input) => {

                        if (/\d/.test(input)) {
                            return true;
                        } else {
                            return "Please enter a number";
                        }
                    }
                },
                {
                    type: "input",
                    message: "What is this Team's member email?",
                    name: "email",
                    validate: function (email) {

                        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
                            return true;
                        } else {
                            return ("Please enter a valid email");
                        }
                    }
                },
                {
                    type: "input",
                    message: "What is this Team's member Git Hub User?",
                    name: "gitHub",
                    validate: (input) => {
                        if (input === "") {
                            return "Please enter a GitHub user name";
                        } else {
                            return true;
                        }
                    }
                }
            ])

        const newEngineer = new Engineer(
            answers.name, answers.id, answers.email, answers.gitHub
        );
        //push the next engineer to the array
        newStaffMemberData.push(newEngineer);

        return questionsOthers();
    }

    if (answers.addMember === "Add Intern") {
        const answers = await inquirer
            .prompt([
                {
                    type: "input",
                    message: "What is this Team's member name?",
                    name: "name",
                    validate: (input) => {
                        if (input === "") {
                            return "Please enter a name";
                        } else {
                            return true;
                        }
                    }
                },
                {
                    type: "input",
                    message: "What is this Team's member ID?",
                    name: "id",
                    validate: (input) => {

                        if (/\d/.test(input)) {
                            return true;
                        } else {
                            return "Please enter a number";
                        }
                    }
                },
                {
                    type: "input",
                    message: "What is this Team's member email?",
                    name: "email",
                    validate: function (email) {

                        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
                            return true;
                        } else {
                            return "Please enter a valid email";
                        }
                    }


                },
                {
                    type: "input",
                    message: "What is this Team's member School name?",
                    name: "school",
                    validate: (input) => {
                        if (input === "") {
                            return "Please enter School name";
                        } else {
                            return true;
                        }
                    }
                }
            ])

        const newIntern = new Intern(
            answers.name, answers.id, answers.email, answers.school
        );
        //push the next intern to the array
        newStaffMemberData.push(newIntern);

        return questionsOthers();
    }

    if (answers.addMember === "Create Team") {

        return console.log(newStaffMemberData);
    }
};

function createHTML() {
    console.log("New Team:", newStaffMemberData)
    fs.writeFileSync("./dist/index.html", generateHTML(newStaffMemberData), "utf-8");
};
async function startProgram() {
    await questionsManager();

    await questionsOthers();
    //console.log(newStaffMemberData);
    createHTML();
    console.log("Your Team has been created, please check the dist folder for file: 'index.html'.");
};

startProgram();
