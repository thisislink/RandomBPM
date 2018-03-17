var minBPM = 10;
var maxBPM = 400;

window.onload = function getRandomBPM(minBPM, maxBPM) {
    document.getElementById("randomBPM").innerHTML = Math.floor(Math.random() * (maxBPM - minBPM + 1)) + minBPM;
}
