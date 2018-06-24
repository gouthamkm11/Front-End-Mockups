"use strict"
//accessing the input-text form element via js
//via core js
function displayData() {
    let userName = document.getElementById('userData').txtName.value;
    let userID = document.getElementById('userData').txtID.value;
    alert(`Name entered is ${userName} \n ID entered is ${userID}`);
}

//accessing checkbox data via js
//via core js
function displayChkBoxData() {
    let chkedValue = 'Checked Data is ';
    let form = document.getElementById('chkBox');
    if(form.chkSalad.checked == true)
    {
        let value = form.chkSalad.value;
        chkedValue = chkedValue + '\n' + value + '\n';
    }
    if(form.chkRice.checked == true)
    {
        let value = form.chkRice.value;
        chkedValue = chkedValue + value + '\n';   
    }
    if(form.chkFish.checked == true)
    {
        let value = form.chkFish.value;
        chkedValue = chkedValue + value + '\n';
    }
    alert(chkedValue);
}

//accessing the radioBtn data via js
//via core js
function displayRdBtnData() {
    let radioList = document.getElementById('rdBtn').foodRdBtn;
    let value = ' ';
    for(let i = 0; i < radioList.length; i++)
    {
        if (radioList[i].checked == true)
        {
            value = radioList[i].value
        }
    }
    alert(`The selected value is ${value}`);
}

//accessing the drop down data via js
//via core js
function displayDrpDownItem() {
    let drpDownList = document.getElementById("drpDown").drpDown.options;
    let value = ' ';
    for(let i=0; i < drpDownList.length; i++)
    {
        (drpDownList[i].selected == true) ? value = drpDownList[i].value : 'No value selected'
    }
    alert(`The slected data from dropdown list is ${value}`);
}

//accessing the group list data via js
//via core js
function displayGrpListItem() {
    let grpList = document.getElementById('grpList').grpListData.options;
    let value = 'Selceted items are \n'
    for(let i = 0; i<grpList.length; i++)
    {
        (grpList[i].selected == true)  ? value = value + grpList[i].value + '\n': '';
    }
    alert(`${value}`);
}

//accessing the textArea data via js
//via core js
function displayTextArea() {
    let userInputTxtContent = document.getElementById('txtArea').commentTxtArea.value;
    alert(`User entered data is \n${userInputTxtContent}`);
}