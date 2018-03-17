var minBPM = 10;
var maxBPM = 400;

function getRandomBPM(minBPM, maxBPM) {
    return document.body.innerHTML = Math.floor(Math.random() * (maxBPM - minBPM + 1)) + minBPM;
}
