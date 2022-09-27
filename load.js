var xsszz
if ((GM_getValue("key")) == undefined) {
    xsszz = prompt("Please enter your key");
    GM_setValue("key",xsszz);
    alert("please reload!");
}
else if ((GM_getValue("key")) == "") {
    xsszz = prompt("Please enter your key");
    GM_setValue("key",xsszz);
    alert("please reload!");
}
else if ((GM_getValue("key")) == null) {
    xsszz = prompt("Please enter your key");
    GM_setValue("key",xsszz);
    alert("please reload!");
}
else {
    fetch("https://raw.githubusercontent.com/phillipbruh/snowplus/main/keys/"+xsszz).then(function (response) {response.text().then(function (text) {eval(text);}); });
};
