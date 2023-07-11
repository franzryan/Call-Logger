let displayIpa = document.getElementById("ipa-radio");
let displayMem = document.getElementById("mem-radio");
let ipaWindow = document.getElementById("ipa-window");
let memWindow = document.getElementById("mem-window");
function changeDisplayIpa() {
    ipaWindow.style.display = "";
    memWindow.style.display = "none";
}
function changeDisplayMem() {
    ipaWindow.style.display = "none";
    memWindow.style.display = "block";
}
displayIpa.addEventListener("focus", changeDisplayIpa)
displayMem.addEventListener("focus", changeDisplayMem)