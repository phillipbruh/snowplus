// ==UserScript==
// @name         hisdsad
// @namespace    http://tampermonkey.net/
// @version      2.3
// @description  VERSION IS 2.3 IF YOUR MENU DOES NOT SAY THAT PLEASE UPDATE BY CLICKING INSTALL AND COPYING THE CODE IN devilmenuXD AND OPENING TAMPER MONKEY(in extentions)
// @author       snowiscool
// @match        *://*/*
// @updateUrl    https://gist.githubusercontent.com/phillipbruh/251f81cee091d2c47e6134db0fa1a15a/raw/f41b95454ca23766f93888ed59f407a7ee246703/devil
// @downloadUrl  https://gist.githubusercontent.com/phillipbruh/251f81cee091d2c47e6134db0fa1a15a/raw/f41b95454ca23766f93888ed59f407a7ee246703/devil
// @license      if you use this without paying or are not invited by me then you will be breaking a federal law as this is copyrighted
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_setClipboard
// @run-at       document_start
// ==/UserScript==

if (document.URL.includes("https://www.blooket.com/play?fl")) {
    px = prompt("what is the game code");
    sn = prompt("what should the bot names be");
    alert("you have to wait for it to say enter name then do ctrl+v and click enter repeat this process");
    GM_setValue ('clip', sn);
    GM_setClipboard(GM_getValue('clip'));
    GM_setValue ('foo', px);
    window.open("https://www.blooket.com/play?id="+px);
}

if (document.URL.includes("https://www.blooket.com/play?id="+GM_getValue('foo'))) {
    document.addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
            setTimeout(function() {
                var tg = GM_getValue('clip');
                tg = tg + Math.floor(Math.random() * 100);
                GM_setClipboard(tg);
                window.open("https://www.blooket.com/play?id="+GM_getValue('foo'));

            }, 650);

        }})}
