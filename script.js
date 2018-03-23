function getBPM() {
    var maxBPM = 200;
    var minBPM = 30;    
    document.getElementById("randomBPM").innerHTML = Math.floor(Math.random() * (maxBPM - minBPM + 1)) + minBPM;
}

function getTimeSignature() {
    var timeSignatures = ['4/4', '3/4', '6/8'];   
    document.getElementById("randomTimeSignature").innerHTML = timeSignatures[Math.floor(Math.random() * timeSignatures.length)];
}

function getKeySignature() {
    var keySignatures = ['C', 'C#', 'Db', 'D', 'Eb', 'E', 'F', 'F#', 'G', 'G#', 'Ab', 'A', 'Bb', 'B'];   
    document.getElementById("randomKeySignature").innerHTML = keySignatures[Math.floor(Math.random() * keySignatures.length)];
}

window.onload = function() {
    getBPM();
    getTimeSignature();
    getKeySignature();
}
