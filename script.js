function getBPM() {
    var maxBPM = 400;
    var minBPM = 10;
    document.getElementById("randomBPM").innerHTML = Math.floor(Math.random() * (maxBPM - minBPM + 1)) + minBPM;
};

window.onload = getBPM();
