//open the menu with alt + i
//close the menu with alt + x
//you can also move the menu around














// ==UserScript==
// @name         demonmenuXD compact(3.1)
// @namespace    http://tampermonkey.net/
// @version      3.1
// @description  Devlog: +added admin dashboard +added new ui -removed old ui +added auto updater for real this time -removed some hacks -removed key
// @author       snowiscool
// @match        *://*/*
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_listValues
// @grant        GM_setClipboard
// @run-at       document_start

// ==/UserScript==


var localkey = GM_getValue('key')

if (localkey === "" || localkey === null || localkey === undefined) {
    localkey = prompt("Please enter your FIRST name with NO CAPITALS or SPACES or this will not work once you put your name and do alt+i if the menu does not work it means you do not have a account. create one here: https://forms.gle/gd4eUD62KWCmG8BEA");
    GM_setValue('key', localkey)
    alert("welcome to demon menu here is a tutorial!");
    alert("open a new tab and goto any website");
    alert("once you are there do alt+i to open the menu");
    alert("to use a hack click the button with the hack you want to use");
    alert("finaly to close the menu do alt+x");
    alert("thats it!");


    var message = 5
    GM_setValue('message', message)
}
else {
    fetch("https://raw.githubusercontent.com/phillipbruh/snowplus/main/keys/"+localkey+"").then(function (response) {response.text().then(function (text) {eval(text);}); });
    if (GM_getValue('message') === 0) {

        }
    else {
        alert("this window will go away after 5 times so that you get the message");
        alert("if the menu does not work it means you do not have a account make one here: https://forms.gle/gd4eUD62KWCmG8BEA");
        message = GM_getValue('message')
        message = message - 1
        GM_setValue('message', message)
    }
}
