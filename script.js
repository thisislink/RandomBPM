var minBPM = 10;
var maxBPM = 400;
function getRandomInt (minBPM, maxBPM) {
    return Math.floor(Math.random() * (maxBPM - minBPM + 1)) + minBPM;
}

document.body.innerHTML = getRandomInt(minBPM, maxBPM);
