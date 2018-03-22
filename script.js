function getBPM() {
    var maxBPM = 200;
    var minBPM = 30;    
    document.getElementById("randomBPM").innerHTML = Math.floor(Math.random() * (maxBPM - minBPM + 1)) + minBPM;
}

window.onload = function() {
    getBPM();
}
