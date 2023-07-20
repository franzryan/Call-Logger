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
let attachTextsSecond = document.getElementById("call-log-textarea2");
let lastLabel = document.getElementById("last-call-label");
let lastInput = document.getElementById("last-call-input");

function attachLogs() {
  let inputsAttached = "";
for (i = 0; i < firstInputs.length; i++) {
  if (firstInputs[i].value === "") {
    continue;}
  else if (firstInputs[i].type === "radio") {
    if (firstInputs[i].checked) {
      inputsAttached += firstInputs[i].name + ": " + firstInputs[i].value + "\n";
    }}
  else {
    inputsAttached += firstLabels[i].textContent + ": "
    + firstInputs[i].value + "\n";}
  }
  if (lastInput.value === "") {
    includeLastInput = false;
  } else {
    inputsAttached += lastLabel.textContent + ":\n" + lastInput.value;
  }
attachTexts.value = inputsAttached;
};

function copyLogs() {
  let attachBothLogs = "";
  attachBothLogs += attachTexts.value + attachTextsSecond.value + "\n";
  navigator.clipboard.writeText(attachBothLogs)
 
}


  // call log section
