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

  let attachInputs = document.getElementsByClassName("call-inputs");
  let attachHere = document.getElementById("call-log-textarea");
  let inputLabels = document.getElementsByClassName("input-label");
  
  function attachLogs(inputLabels, attachInputs) {
    let inputTexts = attachHere.value; // Initialize with current textarea value
    for (let i = 0; i < inputLabel.length && i < attachInputs.length; i++) {
      if (attachInputs[i].type === "radio" && !attachInputs[i].checked) {
        continue; // Skip radio buttons that are not selected
      }
      inputTexts += inputLabel[i].innerHTML + attachInputs[i].value + "\n";
    }
  
    attachHere.value = inputTexts; //
  }


  // call log section