// Call Log Section
const bodyElement = document.querySelector('body');
// bodyElement.addEventListener('load', chatSelected);
// bodyElement.addEventListener('load', nameIt);


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
    inputsAttached += firstLabels[i].textContent + ": " + firstInputs[i].value + "\n";}
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
    + '\n' + "https://www.intel.com/content/www/us/en/download/18377/intel-system-support-utility-for-windows.html"
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
    {id: 'other-lang', content: 'Why PSAT is rated as Dissatisfied' 
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
  let chatText = Array.from(document.getElementsByClassName("input-class-chat"))
  function chatSelected() {
    if (chatSelector[0].checked && chatSelector[1].checked) {
      chatDivContainer[0].style.display = "inline";
      chatDivContainer[0].style.gridRow = "1/2";
      chatDivContainer[1].style.display = "inline";
      chatDivContainer[1].style.gridRow = "2/3";
      chatText[0].style.height = "80%";
      chatText[1].style.height = "80%";
    }
    else if (chatSelector[0].checked && !chatSelector[1].checked) {
      chatDivContainer[1].style.display = "none";
      chatDivContainer[0].style.display = "inline";
      chatDivContainer[0].style.gridRow = "1/3";
      chatText[0].style.height = "80%";
    }
    else if (!chatSelector[0].checked && chatSelector[1].checked) {
      chatDivContainer[0].style.display = "none";
      chatDivContainer[1].style.display = "inline";
      chatDivContainer[1].style.gridRow = "1/3";
      chatText[1].style.height = "80%";
    }
    else if (!chatSelector[0].checked && !chatSelector[1].checked) {
      chatDivContainer[0].style.display = "none";
      chatDivContainer[1].style.display = "none";
      chatText.style.height = "";
    };
  };

//email-web

  const tabSelector = Array.from(document.getElementsByClassName("add-textarea"))
  const textSelector =  Array.from(document.getElementsByClassName("text-area-email-stack"))
  let divContainer = document.getElementById("text-area-div")
  let textContainer = document.getElementById("textarea-div")
  let lastBtn = document.getElementById("add-button")
  let delBtn = document.querySelector("#delete-me").addEventListener("click", deleteMe)

  //naming of btn
  tabSelector.forEach((tab) => {
    let indexTab = tabSelector.indexOf(tab);
    let lastIndex = tabSelector.length - 1; //get the last element array
    tab.textContent = indexTab + 1;
    tabSelector[lastIndex].textContent = "+"; //give name to last element
    tab.addEventListener("click", selectMe);
    })

//display text & add content with + btn
function selectMe(){
  //get only targeted/clicked element
  let selected = event.target
  //run a for loop with tabselector
  for(let tab of tabSelector) {
    let indexTab = tabSelector.indexOf(selected) //store index of clicked element
    tab.classList.remove("active")
    //skips + button in iteration & add text and button elements + run active class list for buttons
    if(selected.textContent === "+" && tabSelector.length !== 10) {
      //addElements add button and textarea
      addElements()
      function addElements() {
        let createBtn = document.createElement("button");
        divContainer.append(createBtn);
        tabSelector.push(createBtn);
        createBtn.classList.add("add-textarea");
        createBtn.textContent = "+";
        selected.textContent = tabSelector.length -1;
        createBtn.addEventListener("click", selectMe);
        let createTxt = document.createElement("div");
        textContainer.append(createTxt);
        textSelector.push(createTxt);
        createTxt.setAttribute("contenteditable", "")
        createTxt.classList.add("text-area-email-stack")
      }
      //else will handle text display per tab
    } else {
      selected.classList.add("active")
      //run a for loop for textSelector to access the elements
  for(let text of textSelector) {
    let indexText = textSelector.indexOf(text) //get the index only of text
    //display text if index of button and text matches
    if (indexTab === indexText){
        text.style.display = "inline"
        text.classList.add("activeText")
    }
    //otherwise set display to none
    else {
        text.style.display = "none"
        text.classList.remove("activeText")
    }
      }
  }
  }
}
//delete function
function deleteMe(){
  for(let tab of tabSelector){
    if(tab.classList.contains("active")){
      let indexOfTab = tabSelector.indexOf(tab)
      tabSelector.splice(indexOfTab, 1)
      tab.remove()
      console.log(tab)
      for(let text of textSelector){
        let indexOfText = textSelector.indexOf(text)
        if(indexOfTab == indexOfText){
        textSelector.splice(indexOfText, 1)
        text.remove()
        console.log(text)
      }
      }
    }
  }
  //update the textcontent of btns
  tabSelector.forEach((tab) => {
    let indexTab = tabSelector.indexOf(tab);
    let lastIndex = tabSelector.length - 1; //get the last element array
    tab.textContent = indexTab + 1;
    tabSelector[lastIndex].textContent = "+"; //give name to last element
  })
}

let hyperLinkBtn = document.getElementById("hyperlink").addEventListener("click", function() {
  document.getElementById('hyperlink-div').style.display='inline-block'
  console.log("hyperlink clicked")
  let selection = document.getSelection().getRangeAt(0);

  let selectedText = selection.toString();
  let urlInput = document.getElementById("url")
  document.querySelector("#save").addEventListener("click", createLink)
  function createLink() {
    // Get the currently selected text on the webpage as a string
      // Create a new <a> (link) element
      let linkElement = document.createElement("a");
  
      // Set the href attribute of the link element to the desired URL
      linkElement.href = urlInput.value
  
      // Set the text content of the link element to the selected text
      linkElement.textContent = selectedText;
  
      // Get the range of the currently selected text and delete its contents
      // let range = selection.getRangeAt(0);
      selection.deleteContents()
  
      // Insert the link element containing the selected text at the selected range
      selection.insertNode(linkElement);
      document.getElementById('hyperlink-div').style.display = "none"
      selection = ""
      selectedText = ""
      // urlInput = ""
      linkElement = ""
    }
})

function genericTs() {
  let addTextArea = Array.from(document.getElementsByClassName("text-area-email-stack"));
  addTextArea.forEach((textarea) => {
    if (textarea.classList.contains("activeText")) {
      console.log("hello")
      let introduction = 
        ["Greetings from Intel Customer Support. We appreciate the opportunity to assist you. It has come to our attention that you're currently encountering [ISSUE] with your [DEVICE]. We truly understand how such technical challenges can impact your experience. Please rest assured that our team is dedicated to providing you with the necessary expertise and support to tackle this issue head-on. Your satisfaction is our priority, and we're committed to ensuring that your [DEVICE] performs seamlessly." + "<br>" + "<br>" + "If you could kindly share more details about the issue you're facing, we'll be able to tailor our assistance to your specific situation. Our goal is to get your [DEVICE] back to its optimal state and have you back on track as soon as possible.",
        "Greetings from Intel Customer Support. We're here to lend a helping hand as you navigate the [ISSUE] with your [DEVICE]. We understand the frustration such challenges can bring, and we're committed to resolving this for you. Our team of experts is ready to offer tailored solutions to ensure your [DEVICE] functions seamlessly once again." + "<br>" + "<br>" + "Please share more details about the issue so we can address it effectively and get you back to optimal performance.",
        "Greetings from Intel Customer Support. We're here to provide the support you need regarding the [ISSUE] on your [DEVICE]. We understand the importance of a smooth experience and are dedicated to getting things back on track for you. Our team is ready to offer expert guidance and solutions to resolve this matter promptly." + "<br>" + "<br>" + "Please share more details about the issue so we can assist you effectively.",
        "Greetings from Intel Customer Support. We recognize that you're currently facing [ISSUE] with your [DEVICE]. We're here to provide the necessary assistance to overcome this challenge and restore your [DEVICE] to its best performance." + "<br>" + "<br>" + " Our dedicated team is eager to work with you, so please share additional information about the issue. This will enable us to offer precise solutions and get you back to a seamless experience.",
        "Greetings from Intel Customer Support. Your [DEVICE] facing [ISSUE] is our priority concern. We understand how important it is to have it functioning optimally, and we're here to assist you every step of the way. Our team is well-prepared to provide you with expert guidance and solutions." + "<br>" + "<br>" + "Please share more details about the issue, so we can tailor our assistance to your specific needs."]
        let randomIntro = Math.floor(Math.random() * introduction.length);
        let selectedIntroduction = introduction[randomIntro];
      let genericTroubleshoot = 
       "<br>" + "<br>" + "Can you describe the issue more to us?" 
      + "<br>" + "If we have the same device, what are the steps we need to take to recreate the problem?" 
      + "<br>" + "Was this working before?" 
      + "<br>" + "Have you made any changes like software, driver, recent installations, or hardware upgrades that resulted into this issue?" 
      + "<br>" + "Have you performed any troubleshooting steps as an attempt to fix the problem?" 
      + "<br>" + "Is this a newly installed system?" 
      + "<br>" + "Is the problem caused by a physical damage?" 
      + "<br>" + "What is the use of your device? (Web browsing, Gaming, Acts as a Server, Kiosk, etc." 
      + "<br>" + "<br>" + "For us to have a peak on your system's configuration, please download Intel® System Support Utility for Windows* software. When the download is complete, launch SSU.exe." 
      + "<br>" + "https://www.intel.com/content/www/us/en/download/18377/intel-system-support-utility-for-windows.html" 
      + "<br>" + "Scan: " 
      + "<br>" + "Check the box Everything." 
      + "<br>" + "Click Scan." 
      + "<br>" + "Review: When finished scanning," 
      + "<br>" + "click Next." 
      + "<br>" + "Click Save." 
      + "<br>" + "Send the file"
      + "<br>" + "<br>"
      const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            const date = new Date()
            date.setDate(date.getDate() + 2);
            if (date.getDay() === 0 || date.getDay() === 6) {
              date.setDate(date.getDate() + 2);
            }
            const m = months[date.getMonth()]
            const D = date.getDate()
            const d = days[date.getDay()]
              let nextDate = m + " " + D + ", " + d
      let nextSentence = 
      ["Would it be acceptable if we reach out to you again on " + nextDate + " if we haven't heard back from you by then?",
      "Is it alright if we send you a reminder on " + nextDate + " in the event that we haven't gotten a reply from you?",
      "If we haven't received a response from you by " + nextDate + ", would you mind if we sent you a follow-up message?",
      "Should we plan to send you a follow-up on " + nextDate + " if we don't receive your response before then?",
      "Could we schedule a follow-up communication for " + nextDate + " in case we do not obtain a response from you in the meantime?"]
      let randomNext = Math.floor(Math.random() * nextSentence.length);
      let selectedSentence = nextSentence[randomNext];
      let signiture = "<br>" + "<br>" + "Best regards," + "<br>" + "<br>" + "Francis Ryan P." + "<br>" + "Intel Customer Support Technician"
      let genericResponse = selectedIntroduction + genericTroubleshoot + selectedSentence + signiture
      textarea.innerHTML = genericResponse
    }
  })
}

  function signiture(){
    let addTextArea = Array.from(document.getElementsByClassName("text-area-email-stack"));
    addTextArea.forEach((textarea) => {
      if (textarea.classList.contains("activeText")) {
        let mySig = "<br>" + "Best regards," + "<br>" + "<br>" + "Francis Ryan P." + "<br>" + "Intel Customer Support Technician"
        let currentText = textarea.innerHTML + mySig
        textarea.innerHTML = currentText
      }
    })
    }

    function next(){
      let addTextArea = Array.from(document.getElementsByClassName("text-area-email-stack"));
      addTextArea.forEach((textarea) => {
        if (textarea.classList.contains("activeText")) {
          const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
          const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                const date = new Date()
                date.setDate(date.getDate() + 2);
                if (date.getDay() === 0 || date.getDay() === 6) {
                  date.setDate(date.getDate() + 2);
                }
                const m = months[date.getMonth()]
                const D = date.getDate()
                const d = days[date.getDay()]
                  let nextDate = m + " " + D + ", " + d
          let nextSentence = 
      ["Would it be acceptable if we reach out to you again on " + nextDate + " if we haven't heard back from you by then?",
      "Is it alright if we send you a reminder on " + nextDate + " in the event that we haven't gotten a reply from you?",
      "If we haven't received a response from you by " + nextDate + ", would you mind if we sent you a follow-up message?",
      "Should we plan to send you a follow-up on " + nextDate + " if we don't receive your response before then?",
      "Could we schedule a follow-up communication for " + nextDate + " in case we do not obtain a response from you in the meantime?"]
      let randomNext = Math.floor(Math.random() * nextSentence.length);
      let selectedSentence = nextSentence[randomNext];
      let currentText = textarea.innerHTML + "<br>" + "<br>" + selectedSentence
        textarea.innerHTML = currentText
        
        }
      })
    }