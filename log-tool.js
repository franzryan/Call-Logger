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
  // Change the size of chat divs and textarea
  let chatDivContainer = Array.from(document.getElementsByClassName("chat-div-container"))
  let chatSelector = Array.from(document.getElementsByClassName("chat-selector"))
  function chatSelected() {
    if (chatSelector[0].checked && chatSelector[1].checked) {
      chatDivContainer[0].style.display = "inline";
      chatDivContainer[0].style.gridRow = "1/2";
      chatDivContainer[1].style.display = "inline";
      chatDivContainer[1].style.gridRow = "2/3";
    }
    else if (chatSelector[0].checked && !chatSelector[1].checked) {
      chatDivContainer[1].style.display = "none";
      chatDivContainer[0].style.display = "inline";
      chatDivContainer[0].style.gridRow = "1/3";
    }
    else if (!chatSelector[0].checked && chatSelector[1].checked) {
      chatDivContainer[0].style.display = "none";
      chatDivContainer[1].style.display = "inline";
      chatDivContainer[1].style.gridRow = "1/3";
    }
    else if (!chatSelector[0].checked && !chatSelector[1].checked) {
      chatDivContainer[0].style.display = "none";
      chatDivContainer[1].style.display = "none";
    };
  };

//email-web

  const tabSelector = Array.from(document.getElementsByClassName("add-textarea"))
  const textSelector =  Array.from(document.getElementsByClassName("text-area-email-stack"))
  let divContainer = document.getElementById("text-area-div")
  let textContainer = document.getElementById("textarea-div")
  let lastBtn = document.getElementById("add-button")

  for(let tab of tabSelector){
    tab.addEventListener("click", selectText)
  }

  function selectText(event) {
    for(let tab of tabSelector){
      if(tab.textContent == "+") {
        continue
      } else {
      console.log(tabSelector.indexOf(tab))
      tab.classList.remove("active")
      console.log("class remove")
    }
  }
    let clickedTab = event.target
    let tabIndex = tabSelector.indexOf(clickedTab)
    for(let text of textSelector){
      text.style.display = "none"
      text.setAttribute("disabled", "disabled")
      let textIndex = textSelector.indexOf(text)
      if(tabIndex === textIndex){
        text.removeAttribute("disabled", "disabled")
        text.style.display = "inline"
        clickedTab.classList.add("active")
        console.log("class added")
        continue
      }
      else if(clickedTab.textContent === "+") {
        let addBtn = document.createElement("button")
        divContainer.append(addBtn)
        addBtn.classList.add("add-textarea")
        tabSelector.push(addBtn)
        addBtn.textContent = "+"
        console.log(tabSelector)
        clickedTab.textContent = tabSelector.length -1

        addBtn.addEventListener("click", selectText);
// due to event propagation. a new event listner is added
// since the first event listener only listens to the old buttons

        let addText = document.createElement("textarea")
        textContainer.append(addText)
        addText.classList.add("text-area-email-stack")
        textSelector.push(addText)
        addText.textContent = textSelector.length
        console.log(textSelector[-1])
      }
      }
    }