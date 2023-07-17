// Call Log Section

let displayIpa = document.getElementById("ipa-radio");
let displayMem = document.getElementById("mem-radio");
let ipaWindow = document.getElementById("ipa-window");
let memWindow = document.getElementById("mem-window");
displayIpa.addEventListener("focus", () => {
    ipaWindow.style.display = "";
    memWindow.style.display = "none";
  });
  
  displayMem.addEventListener("focus", () => {
    ipaWindow.style.display = "none";
    memWindow.style.display = "block";
  });

let firstLabels = document.getElementsByClassName("input-label1");
let firstInputs = document.getElementsByClassName("call-inputs1");
let attachTexts = document.getElementById("call-log-textarea1");

function attachLogs() {
  let firstInputsAttached = "";
for (i = 0; i < firstLabels.length; i++) {
  firstInputsAttached += firstLabels[i].textContent + ":" + "\n";
}
attachTexts.value = firstInputsAttached;
}
  // call log section