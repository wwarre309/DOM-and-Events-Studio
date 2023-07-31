// Write your JavaScript code here.
// Remember to pay attention to page loading!
function init () {
    const takeoff = document.getElementById("takeoff");
    const landing = document.getElementById("landing");
    const missionAbort = document.getElementById("missionAbort");
    const flightStatus = document.getElementById("flightStatus");
    const shuttleBackground = document.getElementById("shuttleBackground");
    const spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
    // const up = document.getElementById("up");
    // const down = document.getElementById("down");
    // const left = document.getElementById("left");
    // const right = document.getElementById("right");
    // const rocket = document.getElementById("rocket");
    // const increasing = spaceShuttleHeight + 10000;
    // const decreasing = spaceShuttleHeight - 10000;
    let imgObj = document.getElementById('rocket');
    imgObj.style.position = 'absolute';
    imgObj.style.left = '0px';
    imgObj.style.bottom = '0px';
    

    takeoff.addEventListener('click', event => {
        window.confirm('Confirm that the shuttle is ready for takeoff.');
    });

    takeoff.addEventListener('click', event => {
        flightStatus.innerHTML = "Shuttle in flight";
        shuttleBackground.style.backgroundColor = 'blue';
        spaceShuttleHeight.innerHTML = 10000;
    });

    landing.addEventListener('click', event => {
        window.alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerHTML = "The shuttle has landed";
        shuttleBackground.style.backgroundColor = 'green';
        spaceShuttleHeight.innerHTML = 0;
    });

    missionAbort.addEventListener('click', event => {
        window.confirm('Confirm that you want to abort the mission');
        flightStatus.innerHTML = "Mission aborted";
        shuttleBackground.style.backgroundColor = 'green';
        spaceShuttleHeight.innerHTML = 0;

    });

    // EDITS 

    document.getElementById('up').addEventListener('click', event =>{
        positionStart -=10
        alt +=400
        document.getElementById('rocket').style.top = positionStart + 'px'
        document.getElementById('spaceShuttleHeight').innerHTML = alt;
    });
        document.getElementById('down').addEventListener('click', event =>{
        positionStart += 10
        alt -= 400
        document.getElementById('rocket').style.top = positionStart + 'px'
        document.getElementById('spaceShuttleHeight').innerHTML = alt;
    });
        document.getElementById('left').addEventListener('click', event =>{
        positionStart -= 10
        document.getElementById('rocket').style.left = positionStart + 'px'
    });
        document.getElementById('right').addEventListener('click', event =>{
        positionStart += 10
        document.getElementById('rocket').style.left = positionStart + 'px'
    });
}

window.addEventListener("load", init);




// HOW TO MAKE THEM MOVE

