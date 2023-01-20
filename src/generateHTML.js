const generateHTML = (team) => {
    const generateManager = (manager) => {
        return `
        <div class="container">
        <div class="employee">${manager.getName()}</div>
        <div class="role"><img src="./assets/icons/man.png"> Manager</div>
        <div class="info">
            <div class="id">ID: ${manager.getId()}</div>
            <div class="email">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></div>
            <div class="office_number">Office Number: ${manager.getOfficeNumber()}</div>

        </div>
    </div>
        `;
    };

    const generateEngineer = (engineer) => {
        return `
        <div class="container">
        <div class="employee">${engineer.getName()}</div>
        <div class="role"><img src="./assets/icons/software-engineer.png"> Engineer</div>
        <div class="info">
            <div class="id">ID: ${engineer.getId()}</div>
            <div class="email">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></div>
            <div class="github">GitHub: <a href="https://github.com/${engineer.getGitHub()}">${engineer.getGitHub()}</a></div>

        </div>
    </div>
        `;
    };

    const generateIntern = (intern) => {
        return `
        <div class="container">
        <div class="employee">${intern.getName()}</div>
        <div class="role"><img src="./assets/icons/internship.png"> Intern</div>
        <div class="info">
            <div class="id">ID: ${intern.getId()}</div>
            <div class="email">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></div>
            <div class="school">School: ${intern.getSchool()}</div>

        </div>
    </div>
        `;
    };

    //create the "team" string
    const html = [];

    html.push(team.filter((employee) => employee.getRole() === "Manager").map((manager) => generateManager(manager)));
    html.push(team.filter((employee) => employee.getRole() === "Engineer").map((engineer) => generateEngineer(engineer)));
    html.push(team.filter((employee) => employee.getRole() === "Intern").map((intern) => generateIntern(intern)));
    return html.join("");



};

module.exports = (team) => {
    return `
        <!DOCTYPE html>
<html>

<head>
    <title>Team Members Profile Generator</title>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
        h1 {
            text-align: center;
            color: rgb(255, 255, 255);
            background-color: rgb(0, 9, 69);
            padding: 20px;
            box-shadow: 5px 5px 10px rgb(48, 48, 48);
        }

        main {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 20px;
            flex-direction: row;
        }

        .employee,
        .role {
            position: relative;
            font-size: 1.3rem;
            text-align: center;
            color: rgb(0, 0, 0);
            background-color: rgb(165, 199, 244);
            width: 292px;
            padding: 4px;
        }
        .role img {
            height: 1rem;
        }

        .container {
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
            width: 300px;
            justify-content: center;
            align-items: center;
            background-color: rgb(210, 210, 210);
            box-shadow: 5px 5px 10px rgb(48, 48, 48);
        }

        .id, .email, .github, .office_number, .school {
            text-align: center;
            justify-content: center;
            padding: 10px;
            border-top:rgb(175, 175, 175) 2px solid;
            width: 280px;
        }
    </style>

</head>

<body>
    <header>
        <h1>My Team</h1>
    </header>
    <main>
    ${generateHTML(team)}
    </main>



</body>
        
        
        `;
};