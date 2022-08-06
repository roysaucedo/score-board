let homeScore = document.getElementById("score-home")
let awayScore = document.getElementById("score-away")

let twoHome = document.getElementById("2-home")
let threeHome = document.getElementById("3-home")

let twoAway = document.getElementById("2-away")
let threeAway = document.getElementById("3-away")

let startingHomeScore = 0;
let startingAwayScore = 0;



twoHome.addEventListener("click", function() {
    startingHomeScore = startingHomeScore + 2;
    updateHomeDisplay();
})

threeHome.addEventListener("click", function() {
    startingHomeScore = startingHomeScore + 3;
    updateHomeDisplay();
})

twoAway.addEventListener("click", function() {
    startingAwayScore = startingAwayScore + 2;
    updateAwayDisplay();
})

threeAway.addEventListener("click", function() {
    startingAwayScore = startingAwayScore + 3;
    updateAwayDisplay();
})



function updateHomeDisplay(){
    homeScore.innerHTML = startingHomeScore;
} 

function updateAwayDisplay(){
    awayScore.innerHTML = startingAwayScore;
} 
    