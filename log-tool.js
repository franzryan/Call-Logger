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
  attachBothLogs += attachTexts.value + "\n" + attachTextsSecond.value + "\n";
  navigator.clipboard.writeText(attachBothLogs)
}

  // call log section

  // chat-log-session


  //array for the contents of button and their id's
  const btnObject = [ 
    {id: 'verify', content: 'Verify Clicked'},
    {id: 'product-model', content: 'product Clicked'},
    {id: 'oem-dev', content: 'oem Clicked'},
    {id: 'end-support', content: 'EOIS Clicked'},
    {id: 'ssu-log', content: 'SSU Clicked'},
    {id: 'probing-questions', content: 'Probing Questions Clicked'},
    {id: 'lmi-offer', content: 'Lmi Offer CLicked'},
    {id: 'lmi-privacy', content: 'Lmi Privacy Clicked'},
    {id: 'afk1', content: 'Afk 1 Clicked'},
    {id: 'afk2', content: 'afk 2 Clicked'},
    {id: 'issue-resolved', content: 'Issue-Resolved Clicked'},
    {id: 'embargoed-country', content: 'Embargoed Clicked'},
    {id: 'no-information1', content: 'No Information 1 Clicked'},
    {id: 'no-information2', content: 'No Information 2 Clicked'},
    {id: 'tech-warranty', content: 'Tech to Warranty Clicked'},
    {id: 'rma-wait-time', content: 'RMA wait time CLicked'},
    {id: 'escalation-notes', content: 'Escalation-Notes CLicked'},
    {id: 'psat-notes', content: 'Psat Notes Clicked'},
  ];

  // copy to clipboard function with for in 
  // loops to iterate the array above
  function copyBtns(clickedBtn) {
    let btnContent = ""; //sets the results variable
    let btnId = clickedBtn.id; //get the id of clicked button
    for(identity in btnObject) { //for in loop of array
/*condition if clicked buttons's matches the content 
of array property's id */
      if (btnId == btnObject[identity].id) 
    //get the content key of the matched id
      btnContent += btnObject[identity].content
      //clipboard api with the results variable 
      navigator.clipboard.writeText(btnContent)
    }
  }