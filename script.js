function getBPM() {
    var maxBPM = 200;
    var minBPM = 30;    
    var randomBPM = document.getElementById("randomBPM").innerHTML;
    randomBPM = Math.floor(Math.random() * (maxBPM - minBPM + 1)) + minBPM;
    randomBPM += " BPM";

window.onload = function() {
    getBPM();
}
