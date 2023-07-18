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
let lastRadio = document.getElementsByClassName("last-radio-line");

function attachLogs() {
  let inputsAttached = "";
for (i = 0; i < firstInputs.length; i++) {
  if (firstInputs[i].value === "") {
    continue;
  }
  else if (firstInputs[i].type === "radio" && !firstInputs[i].checked) {
    continue;
  }
  inputsAttached += firstLabels[i].textContent + i + ":" + "\n" + "\t" + firstInputs[i].value + "\n";
}
attachTexts.value = inputsAttached;
};
  // call log section

  // let inputsRadioAttached = "";
  // for (i = 0; i < callRadioBtn.length; i++) {
  //   if (!callRadioBtn.checked) {
  //     continue;
  //     }
  //     inputsRadioAttached += labelRadioBtn[i].textContent + callRadioBtn[i].value;
  // }
  // attachTexts.value = inputsRadioAttached;