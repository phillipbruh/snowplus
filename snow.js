// ==UserScript==
// @name         hi
// @namespace    http://tampermonkey.net/
// @version      0.3.3
// @match        https://www.blooket.com/*
// @grant        none
// @run-at       document_start
// ==/UserScript==
//start
if (document.URL.includes("https://www.blooket.com/play?fl")) {
    px = prompt("what is the game code");
    window.open("https://www.blooket.com/play?id="+px);
}

while (true) {
    if (document.URL.includes("https://www.blooket.com/play/lobby")){
        window.close()
        window.open("https://www.blooket.com/play?id="+px);
    }
}
