var minBPM = 10;
var maxBPM = 400;
function getRandomInt (minBPM, maxBPM) {
    return Math.floor(Math.random() * (maxBPM - minBPM + 1)) + minBPM;
}

document.getElementById("randomBPM").innerHTML = getRandomInt;
document.getElementById("minBPM").innerHTML = minBPM;
document.getElementById("maxBPM").innerHTML = maxBPM;
