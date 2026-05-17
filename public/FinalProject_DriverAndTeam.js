async function loadUpDriver() {

    const userpickedName = document.getElementById('driverName');
    let currentUserpickedName = userpickedName.value;
    const currentUserpickedNameReplaced = currentUserpickedName.replaceAll(" ", "+");
    console.log(currentUserpickedNameReplaced);

    const pickedDriverResults= await fetch(`https://f1api.dev/api/drivers/search?q=${currentUserpickedNameReplaced}`).then(
        (result) => result.json());
    console.log('Drivers:', pickedDriverResults);

    const driverTable = document.getElementById('driverTable');

    pickedDriverResults[`drivers`].forEach((driver) => {
        const tableRow = document.createElement('tr');
        const driverInfo = document.createElement('td');

        driverInfo.innerHTML = `<a href="${driver[`url`]}"> ${driver[`name`]} ${driver[`surname`]}</a>
        <h3> Nationality: ${driver[`nationality`]} </h3>
        <h3> Birthday: ${driver[`birthday`]} </h3>`;

        tableRow.appendChild(driverInfo);

        driverTable.append(tableRow);
    });
}

async function loadUpTeam() {

    const userpickedTeamName = document.getElementById('teamName');
    let currentUserpickedTeamName = userpickedTeamName.value;
    const currentUserpickedTeamNameReplaced = currentUserpickedTeamName.replaceAll(" ", "+");
    console.log(currentUserpickedTeamNameReplaced);

    const pickedTeamResults= await fetch(`https://f1api.dev/api/teams/search?q=${currentUserpickedTeamNameReplaced}`).then(
        (result) => result.json());
    console.log('Team:', pickedTeamResults);

    const teamTable = document.getElementById('teamTable');

    pickedTeamResults[`teams`].forEach((team) => {
        const tableRow = document.createElement('tr');
        const teamInfo = document.createElement('td');

        teamInfo.innerHTML = `<a href="${team[`url`]}"> ${team[`teamName`]}</a>
        <h3> Nationality: ${team[`teamNationality`]} </h3>`;

        tableRow.appendChild(teamInfo);

        teamTable.append(tableRow);
    });
}