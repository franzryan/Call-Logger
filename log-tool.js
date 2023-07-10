
//toggles between IPA and NON-IPA 
let displayIPA = document.getElementById("call-two-ipa-id");
let displayMEM = document.getElementById("call-two-non-ipa-id");
let ipaRadio = document.getElementById("ipa-radio");
let memRadio = document.getElementById("mem-radio");

function turnDisplayIpa() {
    displayIPA.style.display = "";
    displayMEM.style.display = "none";
};
function turnDisplayMem() {
    displayIPA.style.display = "none";
    displayMEM.style.display = "block";
}
ipaRadio.addEventListener("focus", turnDisplayIpa);
memRadio.addEventListener("focus", turnDisplayMem);