function getBPM() {
    var maxBPM = 200;
    var minBPM = 30;    
    document.getElementById("randomBPM").innerHTML = Math.floor(Math.random() * (maxBPM - minBPM + 1)) + minBPM;
}

function getTimeSignature() {
    var timeSignatures = [ '4/4', '3/4', '6/8'];   
    var holdTime = document.getElementById("randomTimeSignatures").innerHTML;
    return holdTime = timeSignatures[Math.floor(Math.random() * timeSignatures.length)];
}


window.onload = function() {
    getBPM();
    getTimeSignature();
}
