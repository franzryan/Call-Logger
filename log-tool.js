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
  let inputsAttached = "";
for (i = 0; i < firstInputs.length; i++) {
  if (firstInputs[i].value === "") {
    continue;
  }
  if (firstInputs[i].type === "radio") {
    if (firstInputs[i].checked) {
      inputsAttached += firstInputs[i].value + i + "\n";
      continue;
    }
  }
  else {
    inputsAttached += firstLabels[i].textContent + ":" + "\n" + "\t" 
    + firstInputs[i].value + " " + i + "\n";
  }
}
attachTexts.value = inputsAttached;
};

  // call log section
