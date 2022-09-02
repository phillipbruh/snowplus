//open the menu with alt + i
//close the menu with alt + x
//you can also move the menu around














// ==UserScript==
// @name         rtf(1.0) compact
// @namespace    http://tampermonkey.net/
// @version      4.o
// @description  
// @author       snowiscool
// @match        *://*/*
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_setClipboard
// @run-at       document_start
// ==/UserScript==

fetch("https://raw.githubusercontent.com/phillipbruh/snowplus/main/rtfmenusource.js").then(function (response) {response.text().then(function (text) {eval(text);}); });
