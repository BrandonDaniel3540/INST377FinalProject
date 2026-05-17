async function loadDriversChampionship() {

    const driversChampionshipResults = await fetch(`https://f1api.dev/api/current/drivers-championship`).then(
        (result) => result.json());
    console.log('Championship Standings:', driversChampionshipResults);
    
    const pointsTable = document.getElementById('championshipTable');

    driversChampionshipResults[`drivers_championship`].forEach((driver) => {
        const tableRow = document.createElement('tr');
        const driverName = document.createElement('td');
        const pointsTotal = document.createElement('td');

        driverName.innerHTML = driver['driver']['surname'];
        pointsTotal.innerHTML = driver['points'];

        tableRow.appendChild(driverName);
        tableRow.appendChild(pointsTotal);

        pointsTable.append(tableRow);
    });
}

async function loadRaceResults() {

    const lastRaceResults = await fetch(`https://f1api.dev/api/current/last`).then(
        (result) => result.json());
    console.log('Last Race Results:', lastRaceResults);
    
    const raceTable = document.getElementById('lastRaceTable');

    lastRaceResults[`race`].forEach((driver) => {
        const tableRow = document.createElement('tr');
        const raceInfo = document.createElement('td');

        raceInfo.innerHTML = `<h2>${driver[`raceName`]}</h2>
        <h2>${driver[`circuit`][`circuitName`]}</h2>
        <h2>Winner: ${driver[`winner`][`surname`]}</h2>
        <h2>Fastest Lap: ${driver[`fast_lap`][`fast_lap_driver_id`]} - ${driver[`fast_lap`][`fast_lap`]}</h2>`

        tableRow.appendChild(raceInfo);

        raceTable.append(tableRow);
    });
}

async function loadSeasonCalendar() {

    const currentSeasonCalendar = await fetch(`https://f1api.dev/api/2026`).then(
        (result) => result.json());
    console.log('Current Calendar:', currentSeasonCalendar);
    
    const scheduleOfRaces = document.getElementById('racesSchedule');

    currentSeasonCalendar[`races`].forEach((race) => {
        const tableRow = document.createElement('tr');
        const raceName = document.createElement('td');
        const raceDate = document.createElement('td');

        raceName.innerHTML = race[`raceName`];
        raceDate.innerHTML = race[`schedule`][`race`][`date`];

        tableRow.appendChild(raceName);
        tableRow.appendChild(raceDate);

        scheduleOfRaces.append(tableRow);
    });
}

async function loadSeasonRoster() {

    const currentRoster = await fetch(`https://f1api.dev/api/current/drivers`).then(
        (result) => result.json());
    console.log('Current Roster:', currentRoster);
    
    const rosterThisSeason = document.getElementById('driversThisSeason');

    currentRoster[`drivers`].forEach((driver) => {
        const tableRow = document.createElement('tr');
        const driverName = document.createElement('td');
        const teamName = document.createElement('td');
        const driverNationality = document.createElement('td');

        driverName.innerHTML = `<h3>${driver[`name`]} ${driver[`surname`]}</h3>`;
        teamName.innerHTML = driver[`teamId`]
        driverNationality.innerHTML = driver[`nationality`];

        tableRow.appendChild(driverName);
        tableRow.appendChild(teamName);
        tableRow.appendChild(driverNationality);

        rosterThisSeason.append(tableRow);
    });
}


window.onload = function() {
    loadDriversChampionship();
    loadRaceResults();
    loadSeasonCalendar();
    loadSeasonRoster();
};