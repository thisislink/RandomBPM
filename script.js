var minBPM = 10;
var maxBPM = 400;
function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

document.getElementById("randomBPM").innerHTML = getRandomInt;
document.getElementById("minBPM").innerHTML = minBPM;
document.getElementById("maxBPM").innerHTML = maxBPM;
