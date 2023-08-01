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
    {id: 'verify', content: 'Before we proceed, please confirm if the following is correct'
    + ' and fill in any missing items if applicable. Please note'
    + ' that phone number is optional, if you’d like to be contacted'
    + ' via phone in future follow-ups please let us know.'
    + '\n' + 'Name: '
    + '\n' + 'Email: '
    + '\n' + 'Country: '
    + '\n' + 'Phone (Optional): '},
    {id: 'empathy-statement', content: ''},
    {id: 'oem-dev', content: 'Before we proceed, please note that this is an OEM device, we will try to assist you with general' 
    + ' troubleshooting steps even if it’s something not traditionally covered in our support. However, if the issue still persists,' 
    + ' you will have to contact the Original Equipment Manufacturer of your device. Your device manufacturer may have altered features,' 
    + ' incorporated customizations, or made other changes to some components for better compatibility with your system.'},
    {id: 'end-support', content: 'Thank you for waiting. I have checked this Intel product and' 
    + ' please be advised that this Intel product is already in our'
    + ' End of Interactive Support. We no longer provide'
    + ' interactive support for this product via telephone, e-mail, or'
    + ' chat. Please be informed that technical support will'
    + ' continue to be available via the web and please visit our'
    + ' support site for further technical support. Please refer to'
    + ' this community link for discontinued products.'
    + ' https://community.intel.com/t5/tag/Discontinued%20Products/tg-p/tag-id/919?profile.language=en'},
    {id: 'ssu-log', content: 'Please download Intel® System Support Utility for Windows* software. When the download is complete, launch SSU.exe.'
    + '\n' + 'Scan: Check the box Everything.'
    + '\n' + 'Click Scan.'
    + '\n' + 'Review: When finished scanning, click Next.'
    + '\n' + 'Click Save.' 
    + '\n' + 'Send the file'},
    {id: 'probing-questions', content: 'For us to know more of the issue, we will be asking a series of questions. We may have additional questions depending on your answers.' 
    + '\n' + 'What is the product model of your device?' 
    + '\n' + 'When did you encounter this problem?'
    + '\n' +'Is this a newly integrated system?'
    + '\n' +'Any hardware or software changes before the issue?'
    + '\n' +'Was this working before?'
    + '\n' +'Is any troubleshooting done to attempt to resolve the issue?'},
    {id: 'lmi-offer', content: 'Based on the details you have provided, it seems that we need to check this issue further.' 
    + ' I suggest you take advantage of doing a remote session on your computer for faster resolution.'
    +' Do you have access to a wired connection via (LAN cable) or Wifi that can be connected to your device so you can avail of this offering?'},
    {id: 'lmi-privacy', content: 'To help protect your privacy, please close any web pages, documents, or applications that are not essential to resolve your support issue.' 
    + ' When they are closed, please let me know in order to start the remote session.' 
    + ' Just so you know, the remote session will be recorded for quality assurance purposes.'},
    {id: 'afk1', content: 'I have not heard from you for the last 2 minutes. Would you'
    + ' like me to keep this chat session open for you?'},
    {id: 'afk2', content: 'Since I have not heard from you for 4 minutes, we will close'
    + ' this chat session to assist other customers. Please do not'
    + ' hesitate to click on the chat button again if you need'
    + ' further assistance. Thank you.'},
    {id: 'issue-resolved', content: 'As the issue has been resolved, we will proceed to close the'
    + ' case. You may receive an invitation to take a survey in a '
    + 'few days. We value your feedback and look forward to '
    + 'hearing about your support experience. Thank you for '
    + 'contacting Intel Customer Support. Have a nice day!'},
    {id: 'embargoed-country', content: 'As part of Intel’s global export compliance program, we '
    + 'perform a review of our customers and business partners '+ 'to ensure that Intel can remain in compliance with applicable law..'
    + '\n' + 'During our review, we found information indicating that '+ 'you or your company is on a country or region where '
    + 'Intel does not support business activities (a.k.a. '
    + 'embargoed countries/regions), or may be on a list of '
    + 'sanctioned or prohibited parties. As a result, we are '
    + 'unable to move forward with this business engagement or request.'},
    {id: 'no-information1', content: 'Please be aware that we need to get your complete name as '+ 'part of Global Export Regulations. Intel must screen '
    + 'organizations, entities and persons with whom Intel is '
    + 'conducting, engaging, intending to engage on a trade or '
    + 'financial transaction. For this reason, this information is '
    + 'required to proceed with your support request.'},
    {id: 'no-information2', content: 'I Understand that providing us with your information may '
    + 'be uncomfortable to you. You can always submit a '
    + 'support request via Intel Communities</a> or seek '
    + 'assistance with your Place of Purchase so they can open a '
    + 'support ticket to us with their business information instead.'
    + '\n' + 'https://community.intel.com/'},
    {id: 'tech-warranty', content: 'Company Name: '+ '\n' +
    'Contact Person: '+ '\n' +
    'Email Address: '+ '\n' +
    'Phone Number: '+ '\n' +
    'Complete Shipping Address: '+ '\n' +
    'Model: '+ '\n' +
    'SA Number/FPO Number: '+ '\n' +
    'SN/ATPO Number: '+ '\n' +
    'Date of purchase: '+ '\n' +
    'Fault Description: '+ '\n' +
    'Is there any sign of physical damage? '+ '\n' +
    'Next Steps'},
    {id: 'rma-wait-time', content: 'Please be advised that we are forwarding your case to our '
    + 'warranty team, and they will be in touch with you within 1-'
    + '2 business days. We appreciate your cooperation and '
    + 'patience during this process. Thank you.'},
    {id: 'escalation-notes', content: 'Summary of the issue:'
    + '\n' + '\n' +
    'Error message - snaps/screenshot:'
    + '\n' + '\n' +
    'Troubleshooting steps:'
    + '\n' + '\n' +
    'Other relevant snaps of the system:'
    + '\n' + '\n' +
    'Log files:'
    + '\n' + '\n' +
    'System configuration:'
    + '\n' + '\n' +
    'Agent Research:'
    + '\n' + '\n' +
    'Help needed:'
    + '\n'},
    {id: 'psat-notes', content: 'Why PSAT is rated as Dissatisfied' 
    + '\n' +'Steps taken so far'
    + '\n' +'Recommended steps found in database'},
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
  let delBtn = document.querySelector("#delete-me").addEventListener("click", deleteMe)

  for(let tab of tabSelector){
    tab.addEventListener("click", selectText)
  }

  function selectText(event) {
    for(let tab of tabSelector){
      if(tab.textContent == "+") {
        continue
      } else {
      tab.classList.remove("active")
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
        continue
      }
      else if(clickedTab.textContent === "+") {
        let addBtn = document.createElement("button")
        divContainer.append(addBtn)
        addBtn.classList.add("add-textarea")
        tabSelector.push(addBtn)
        addBtn.textContent = "+"
        clickedTab.textContent = tabSelector.length -1

        addBtn.addEventListener("click", selectText);
// due to event propagation. a new event listner is added
// since the first event listener only listens to the old buttons

        let addText = document.createElement("textarea")
        textContainer.append(addText)
        addText.classList.add("text-area-email-stack")
        textSelector.push(addText)
        addText.textContent = textSelector.length
        if(tabSelector.length == 10){
          addBtn.style.display = "none"
        }
        else if (tabSelector.length < 10) {
          addBtn.style.display = "inline"
        }
      }
      }
    }
    function deleteMe(){
      tabSelector.forEach((tab) => {
        if(tab.classList == "add-textarea"){
          console.log(tab.classList)
          console.log("active found")
        }
        else {
          console.log(tab.classList)
          console.log("active not found")
        }
      })
    }
