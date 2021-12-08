// ==UserScript==
// @name         snow
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  purple is cool
// @author       comrad dog
// @match        *://student.readingplus.com/seereader/api/sr/start*
// @match        *://student.readingplus.com/seereader/api/ra/startRA
// @match        https://quizizz.com/*
// @match        https://www.ixl.com/*
// @match        https://www.blooket.com/*
// @match        https://quizlet.com/*
// @match        https://www.vocabulary.com/*
// @grant        none
// @run-at       document_start
// ==/UserScript==



window.addEventListener('wheel', function(event)
{
 if (event.deltaY > 0)
 {
  if (window.paper2.configs.paper2_classic.maxScale > 0.5)
  {
  window.paper2.configs.paper2_classic.maxScale -= 0.5;
  }
 }
 else if (event.deltaY < 0)
 {
  if (window.paper2.configs.paper2_classic.maxScale < 4.5)
 {
  window.paper2.configs.paper2_classic.maxScale += 0.5;
 }
 }
});





    var txt = document.getElementById("ember3822");
    // Just to show button is pressed
    let person = prompt("Please enter your key");
    let text;
    if (person == "666") {
        var ROOT = document.querySelector("body > div");

    function getRoomHash() {
        const roomHash = ROOT.__vue__.$store.state.game.data.roomHash;

        return roomHash;
    }

    function getCurrentQuestionID() {
        const id = ROOT.__vue__.$store.state.game.questions.currentId;

        return id;
    }

    async function getGameData(roomHash) {
        const data = await (
            await fetch(`https://quizizz.com/_api/main/game/${roomHash}`)
        ).json();

        return data;
    }

    function getAnswer(answers) {
        const options = document.getElementsByClassName("options-grid")[0];

        // MULTI SELECT QUESTION | CHECKBOX
        if (Array.isArray(answers)) {
            for (const option of options.childNodes) {
                if (!answers.includes(option.__vue__._props.optionData.actualIndex)) {
                    option.children[0].children[0].style.opacity = "20%";
                }
            }
            return;
        }

        // MULTI CHOICE QUESTION
        if (typeof answers === "number") {
            for (const option of options.childNodes) {
                if (option.__vue__._props.optionData.actualIndex != answers) {
                    option.children[0].children[0].style.opacity = "20%";
                }
            }
            return;
        }
    }

    function getFillInTheBlank(options) {
        // FILL IN THE BLANK
        console.log("PICK ONE OF BELOW:");
        for (const option of options) {
            console.log(option.text);
        }
    }

    async function main() {
        const game = await getGameData(getRoomHash());
        const questions = await game.data.questions;

        for (const question of questions) {
            if (question._id == getCurrentQuestionID()) {
                if (question.structure.kind == "BLANK") {
                    getFillInTheBlank(question.structure.options);
                } else if (question.structure.settings.hasCorrectAnswer) {
                    getAnswer(question.structure.answer);
                } else {
                    console.log("POLL OR OPEN-ENDED QUESTION: UNABLE TO GET ANSWER");
                }
            }
        }
    }

    function start() {
        alert("KEEP THE CONSOLE OPEN");
        setInterval(main, 1000);
    }

    (function() {
        'use strict';

       let overlayHTML = `
    <div id="box">
        <button class="ou" id="accordian">dm</button>
        <div class="ou" id="box2">
            <p style="color:red;"> Demon Menu </p>

            <section><div class="dropdown"><button class="dropbtn">Games</button>
            <div class="dropdown-content"><p id="skinbtn1">Reading plus</p><p id="skinbtn2">Quizizz</p><p id="skinbtn3">IXL math</p>
            <p id="skinbtn4">Blooket coins</p><p id="skinbtn5">Website unblocker</p><p id="skinbtn6">Quizlet</p></section>
    </div>
    </div>

    <style>
    #box {
        z-index: 10;
        position: absolute;
        top: 170px;
    //256 is defult
        left: 7px;}
    #box2 {
        padding: 15px;
        margin-bottom: 5px;
        display: grid;}
    section {
        display: flex;
        justify-content: space-between;margin:5px;}
    .ou {
        background-color: #363c3d;
        letter-spacing: 2px;

        font-weight: bold;
        font-size: 15px;
        font-family: 'Open Sans', sans-serif;
        color:white;}
    p { text-align: center;border-bottom:1px solid white;}
    #ytlink { border:0;}
    #ytlink a{ color:lime;}
    #accordian {
        width: 100%;
        border:0;}
    label { font-weight: bold;}
    input {
        margin-top: auto;
        margin-bottom: auto;
        transform: scale(1.3);}
    input:hover { cursor: pointer;}
    input:focus { box-shadow: 0 0 10px #9ecaed;}
    input[type=checkbox] { transform: scale(2.2);outline=none;}
    input[type=radio] { border-top: auto;}
    input[type=color] { width: 50px;}

    .dropbtn {
      background-color: #242829;
      color: white;
      font-size: 16px;
      border: none;
      padding: 8px;
    }

    .dropdown {
      position: relative;
      display: inline-block;
    }

    .dropdown-content {
      display: none;
      position: absolute;
      background-color: #f1f1f1;
      min-width: 160px;
      box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
      z-index: 1;
      border: 5px solid #121414;
    }

    .dropdown-content1 {
      display: none;
      position: absolute;
      left: 170px;
      background-color: #f1f1f1;
      min-width: 160px;
      box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
      z-index: 1;
      border: 5px solid #121414;
    }

    .dropdown-content2 {
      display: none;
      position: absolute;
      left: 340px;
      background-color: #f1f1f1;
      min-width: 160px;
      box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
      z-index: 1;
      border: 5px solid #121414;
    }

    .dropdown-content3 {
      display: none;
      position: absolute;
      left: 510px;
      background-color: #f1f1f1;
      min-width: 160px;
      box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
      z-index: 1;
      border: 5px solid #121414;
    }

    .dropdown-content4 {
      display: none;
      position: absolute;
      left: 680px;
      background-color: #f1f1f1;
      min-width: 160px;
      box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
      z-index: 1;
      border: 5px solid #121414;
    }

    .dropdown-content p {
      color: white;
      padding: 12px 16px;
      text-decoration: none;
      display: block;
    }

    .dropdown-content1 p {
      color: white;
      padding: 12px 16px;
      text-decoration: none;
      display: block;
    }

    .dropdown-content2 p {
      color: white;
      padding: 12px 16px;
      text-decoration: none;
      display: block;
    }

    .dropdown-content3 p {
      color: white;
      padding: 12px 16px;
      text-decoration: none;
      display: block;
    }

    .dropdown-content4 p {
      color: white;
      padding: 12px 16px;
      text-decoration: none;
      display: block;
    }

    .custom-button p {
      color: white;
      padding: 12px 16px;
      text-decoration: none;
      display: block;
    }

    .dropdown-content p:hover {background-color: #121414;}

    .dropdown-content1 p:hover {background-color: #121414;}

    .dropdown-content2 p:hover {background-color: #121414;}

    .dropdown-content3 p:hover {background-color: #121414;}

    .dropdown-content4 p:hover {background-color: #121414;}

    .custom-button p:hover {background-color: #121414;}

    .dropdown:hover .dropdown-content {display: block; background-color: #242829;}

    .dropdown:hover .dropdown-content1 {display: block; background-color: #242829;}

    .dropdown:hover .dropdown-content2 {display: block; background-color: #242829;}

    .dropdown:hover .dropdown-content3 {display: block; background-color: #242829;}

    .dropdown:hover .dropdown-content4 {display: block; background-color: #242829;}

    .dropdown:hover .dropbtn {background-color: #121414;}
    </style>


    `
    //random functions
    function get(x)            { return document.getElementById(x); };



    // Setting up the html div
    let overlay             = document.createElement("div");
        overlay.innerHTML   = overlayHTML;
        document.body.appendChild(overlay);

    // Getting variables from div by id's
    let acc                 = get("accordian"),
        sb1                 = get("skinbtn1"),
        sb2                 = get("skinbtn2"),
        sb3                 = get("skinbtn3"),
        sb4                 = get("skinbtn4"),
        sb5                 = get("skinbtn5"),
        sb6                 = get("skinbtn6"),
        buttonplay          = get ("button play"),
        hackroyale           = get ("hackedRoyale"),
        testchange           = get ("testChange");

    //toggle function
        acc.onclick = function() {
        let panel = get("box2");
        if (panel.style.display == "none") panel.style.display = "grid";
        else { panel.style.display = "none"; }
    }
    //button functions

        //WARNING Skins 31-34 will cause crash. geralt=35

        //first menu


        sb1.onclick = function() {
        var logo = document.createElement("div");
          logo.innerHTML = '<div style="margin: 0 auto 0 auto; ' +
          'border-bottom: 1px solid #000000; margin-bottom: 5px; ' +
          'font-size: small; background-color: #000000; ' +
          'color: #ffffff;"><p style="margin: 2px 0 1px 0;"> ' +
          'cmds: changing the reading rate (reload page req);rate="{amount}"---clearning the log;cls=""---getting the lowest wordcount story;lowest=""---getting vocab answer;contex=""--- and you will always get infinite rereads'
          '</p></div>';
          document.body.insertBefore(logo, document.body.firstChild);
          function set(){try{window.firstName="Hello",window.lastName="World",window.schoolName="https://discord.gg/spp6aEF",window.grade="2005",window.avatar="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/198142ac-f410-423a-bf0b-34c9cb5d9609/dbtif5j-60306864-d6b7-44b6-a9ff-65e8adcfb911.png/v1/fill/w_512,h_512,q_80,strp/discord_metro_icon_by_destuert_dbtif5j-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD01MTIiLCJwYXRoIjoiXC9mXC8xOTgxNDJhYy1mNDEwLTQyM2EtYmYwYi0zNGM5Y2I1ZDk2MDlcL2RidGlmNWotNjAzMDY4NjQtZDZiNy00NGI2LWE5ZmYtNjVlOGFkY2ZiOTExLnBuZyIsIndpZHRoIjoiPD01MTIifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.r0rJ0qqNc9Wo-X9k4MxNxL4lqnJpmRAw9AJGvdI0a7s",document.body.querySelector("#header-student-profile-class").innerHTML=schoolName,document.body.querySelector("#header-student-profile-user-text").innerHTML=firstName+" "+lastName}catch(e){}}async function contex(){switch(location.pathname.split("/").pop()){case"startRA":if(init(await fetch("https://student.readingplus.com/seereader/api/ra/getWord.json").then(e=>e.json())),window.debug_mode=!1,!window.debug){let e=[];e.push('DEBUG MODE : <input type="checkbox"></input>'),e.push('<button onclick="location.reload()">Reload</button>'),window.debug=document.createElement("div"),debug.innerHTML=e.join("<br>"),debug.className="debug",document.body.append(debug),debug.querySelectorAll("input")[0].addEventListener("input",function(){window.debug_mode=this.checked})}}}function star(e){return console.log(e),e.flashCount&&window.debug_mode?null:e}function init(e){if(!e)return e;if(e.section&&e.section.data&&(window.story=e.section.data,story.stories&&story.stories.forEach(function(e,t){if(e.locked)return;stories.push(e);let n=story.stories.map(e=>e.storyId);stories_lowest=n.indexOf(Math.min(...n))}),story.rate&&(e.section.data.rate=window.rate||500),story.choiceList&&(e.section.data.cluesAvailable=!0,e.section.data.inReread=!0,e.section.data.rereadsAvailable=5,posible_answer(story.storyId,story.questionId,JSON.parse(JSON.stringify(story.choiceList)).map(e=>e.status.status.includes("inco")?{text:"//"}:e).map(e=>e.text)))),e.user&&(e.user.firstName=firstName,e.user.lastName=lastName,e.user.schoolName=schoolName,e.user.grade=grade,e.user.avatar="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/198142ac-f410-423a-bf0b-34c9cb5d9609/dbtif5j-60306864-d6b7-44b6-a9ff-65e8adcfb911.png/v1/fill/w_512,h_512,q_80,strp/discord_metro_icon_by_destuert_dbtif5j-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD01MTIiLCJwYXRoIjoiXC9mXC8xOTgxNDJhYy1mNDEwLTQyM2EtYmYwYi0zNGM5Y2I1ZDk2MDlcL2RidGlmNWotNjAzMDY4NjQtZDZiNy00NGI2LWE5ZmYtNjVlOGFkY2ZiOTExLnBuZyIsIndpZHRoIjoiPD01MTIifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.r0rJ0qqNc9Wo-X9k4MxNxL4lqnJpmRAw9AJGvdI0a7s"),e.word){words[e.word]||log.warn(`No synonyms found for the word "${e.word}"`);let t=words[e.word]||[],n=t.n||[],o=t.v||[],i=e.flashList.map(e=>e.word).filter(e=>n.includes(e)).join(", ");console.log(i),log.plain({word:e.word,Synonyms:i||[...n,...o].join(", ")});let s=[...e.hint1List,...e.hint2List].map(e=>e.pre+" "+e.word.bold().fontcolor("lightgreen")+" "+e.post).join(",<br>");log.plain(s)}return e.status&&(e.status.message="Hello world"),e}let hide_btn=document.body.appendChild(document.createElement`button`);hide_btn.innerHTML="X",hide_btn.style="position: fixed;\n    top: 0;\n    right: 0;\n    background: #00000085;\n    padding: 5px;\n    border-radius: 4px;\n    border: solid 1px black;\n    box-shadow: 0 0 5px black;\n    font-family: monospace;\n    color: red;\n    margin: 10px;\n    font-weight: 900;\n    text-shadow: 0 0 1px red;",hide_btn.addEventListener("click",e=>log.display()),set(),window.words=!1;let getWords=async function(){if(window.words)return;var e=Date.now();window.words=await fetch("https://master.tus.io/files/6161edd4614c06b4231c4bb8f61cb697+iiikzgwzne35FqNm9UTPRu_0e1d4wYEJWEUOfOzHCNjEq9Vfeox35oOuhQksc3bnR0BMSOpZWYTB8tTKZ8yaTak_8A4.ehnJdQnpK10lkoxtfbOWwkhs1L8CX6BzTjqo").then(e=>e.json());let t=(Date.now()-e)/1e3;console.log(t),contex()};getWords(),window.rate=parseInt(localStorage.rate)||500,window.modules=new Map,modules.set("cls",function(e){log.properties.innerHTML=""}),modules.set("display",function(e){log.properties.style.display=e}),modules.set("log",function(e){log.plain(e)}),modules.set("rate",function(e){window.rate=parseInt(e)||500,localStorage.rate=rate}),modules.set("contex",function(e){contex()}),modules.set("lowest",function(e){try{document.querySelectorAll("div[data-v-4b4243a9].story")[stories_lowest].click()}catch(e){log.error(r.toString())}}),modules.set("eval",function(value){try{log.plain(eval(contex.get("eval")))}catch(e){log.error(e.toString())}});class Log{constructor(){this.parent=document.createElement("div"),this.properties=document.createElement("div"),this.input=document.createElement("input"),this.enter=document.createElement("button")}init(){document.body.append(log.parent),document.body.style.margin="0",this.enter.innerHTML="Enter",this.style(this.enter,{background:"#00000085",color:"white",margin:"7px",padding:"5px","border-radius":"4px",border:"solid 1px black","box-shadow":"0 0 5px black"}),this.style(this.parent,{background:"rgb(36, 36, 36)","max-height":"48%",height:"fit-content",width:"76%",top:"150px",display:"block","text-align":"left","z-index":"9999","overflow-y":"auto",position:"fixed",left:"50%","font-size":"10px",padding:"3px","border-radius":"6px",transform:"translate(-50%, -50%)",border:"solid 1px black","box-shadow":"0 0 20px"}),this.style(this.input,{background:"#0000003d",width:"87%",border:"none",outline:"none",color:"white",height:"21px",fontFamily:"monospace"}),log.parent.append(this.properties,this.input,this.enter),this.input.addEventListener("keydown",e=>{13===e.keyCode&&(console.log(this),this.exec())}),this.enter.addEventListener("click",e=>this.exec())}exec(){let e=this.input.value;this.input.value="";let t=this.argument(e),n=[];t[2].forEach(e=>{n.push(...e,this._span(", "))}),this.append(...n),this.onmessage(e,t),this.input.value=""}style(e,t={}){Object.keys(t).forEach(n=>{e.style[n]=t[n]})}scroll(){this.parent.scrollTop=this.parent.scrollHeight}parse(e){return"object"==typeof e?Object.keys(e).map(t=>t+" => "+e[t]).join(",<br>"):JSON.stringify(e)}display(){let e=log.parent.style.display;log.parent.style.display="block"==e?"none":"block"}argument(e){var t=new Map,n=[];let o=/([\_A-Za-z]+).*=.*"(.*)"/;e.split(/,/gm).map(e=>o.exec(e)).forEach(e=>t.set(e[1],e[2]));return t.forEach((e,t)=>{let o=this._span(t,"skyblue"),i=this._span(" = ","gold"),s=this._span(`"${e}"`,"#ea8752");n.push([o,i,s])}),[t,e,n]}onmessage(e,t){let n=t[0];modules.forEach(function(e,t){n.has(t)&&e(n.get(t))})}_span(e,t="white"){let n=document.createElement("span");return n.innerHTML=e,n.style.color=t,n.style.position="reletive",n.style.width="-webkit-fill-available",n}span(e="Hello World.",t="white",n="transparent",o="none"){let i=document.createElement("div");return i.innerHTML="string"!=typeof e?this.parse(e):e,i.style.background=n,i.style.color=t,i.style.position="reletive",i.style.width="-webkit-fill-available",i.style.borderBottom="solid 1px"+o,i.style.padding="4px",i}append(...e){let t=document.createElement("div");t.style.position="reletive",t.style.width="-webkit-fill-available",t.style.fontFamily="monospace",t.append(...e),this.properties.append(t),this.scroll()}warn(e){let t=this.span(e,"#e0e0e0cc","#ffd70063","#ffd7007a");this.append(t)}error(e){let t=this.span(e,"#e0e0e0cc","#9405054a","#ff00005c");this.append(t)}plain(e){let t=this.span(e,"#e0e0e0cc","transparent","#e0e0e0cc");this.append(t)}}window.log=new Log,log.init();let posible_answer=async function(t,n,o){function i(e){e=e.map(e=>e.map(e=>e.replace(/\./gm,""))),a.forEach(function(t,n){e.forEach(function(e){let o=e.join(" ");o=o.replace(/\./gm,""),h[n]||(h[n]=0),t.includes(o)&&(h[n]+=1)})})}if(!window.storyData){let e=await fetch(`https://content.readingplus.com/rp-content/ssr/${t}.json`);window.storyData=await e.json(),log.plain("About the story".bold().fontcolor("gold")+" => "+storyData.aboutTheStory)}let r=storyData.questionList.filter(e=>e.id===n)[0],a=o,l=[],d=[];var u=!1;for(e of r.excerptList)for(s of e.sectionList)for(p of s.paragraphList)for(c of p.sentenceList)if(1==c.clue)if(8==r.type)l.push(c.words.join(" "));else for(w of c.words)l.push(w);else for(w of c.words)d.push(w);if(8==r.type&&log.plain(l),0===l.length){if(log.warn("There is no clues for this question"),0===d.length)return u=!0,log.warn("There is no experts for this question");l=d}let h=[];const f=(e,t=2)=>e.length>t?[e.slice(0,t),...f(e.slice(t),t)]:[e];i(f(l)),0===h.filter(e=>e).length&&(u=!0,i(f(l,1)));let b=h.indexOf(Math.max(...h)),m=document.querySelectorAll("ul[data-v-4c0b7157] li > div")[b];u?u&&(log.error("Possible answer => "+a[b]),m.style.background="#ffdf0045"):(log.plain("Possible answer => "+a[b]),setTimeout(function(){m.click()},1e3)),log.plain(h.map((e,t)=>`${"ABCDEF"[t]} => ${e}%`).join(",<br>"))};window.stringify=JSON.stringify,JSON.stringify=function(e){return stringify(star(e))},window.stories=[],window.stories_lowest=null,window.parse=JSON.parse,window.JSON.parse=function(e){var t;try{t=init(parse(e)),console.log(t)}catch(t){return console.log(t),e}return t},document.head.appendChild(document.createElement`style`).innerHTML="::-webkit-scrollbar {\n  width: 7px;\n  height: 7px;\n}\n::-webkit-scrollbar-button {\n  width: 0px;\n  height: 0px;\n}\n::-webkit-scrollbar-thumb {\n  background: #333333;\n  border: 0px none #ffffff;\n  border-radius: 0px;\n}\n::-webkit-scrollbar-thumb:hover {\n  background: #1c1c1c;\n}\n::-webkit-scrollbar-thumb:active {\n  background: #1f1f1f;\n}\n::-webkit-scrollbar-track {\n  background: #121212;\n  border: 0px none #ffffff;\n  border-radius: 0px;\n}\n::-webkit-scrollbar-track:hover {\n  background: #0d0d0d;\n}\n::-webkit-scrollbar-track:active {\n  background: #050505;\n}\n::-webkit-scrollbar-corner {\n  background: transparent;\n}\n.debug{\n  position: absolute;\n  top: 0;\n  left: 0;\n  background: #000000a1;\n  padding: 10px;\n  font-size: 15px;\n  color: white;\n  margin: 10px;\n  font-family: monospace;\n  text-align: left;\n  z-index: 1000;\n  border-radius: 10px;\n}";let send=XMLHttpRequest.prototype.send;XMLHttpRequest.prototype.send=function(e){var t;try{t=JSON.parse(e)}catch(e){}return t&&t.screenList&&(t.screenList.forEach(function(e,n){t.screenList[n]&&(t.screenList[n].secondsTaken=50,t.screenList[n].pauseSeconds=0)}),e=JSON.stringify(t)),send.apply(this,[e])};
    }
        sb2.onclick = function() {

    }
        sb3.onclick = function() {
        window.open("https://www.mathway.com")

    }
        sb4.onclick = function() {
        async function getName(authToken) {
            const response = await fetch('https://api.blooket.com/api/users/verify-token?token=JWT+' + authToken);
            const data = await response.json();

            return data.name
        };

        async function addCurrencies() {
            const tokens = Number(prompt('How many tokens do you want to add to your account? (you can only add up to 500 daily)'));
            const myToken = localStorage.token.split('JWT ')[1];

            if (tokens > 500) {
                alert('You can only add up to 500 tokens daily.')
            }

            const response = await fetch('https://api.blooket.com/api/users/add-rewards', {
                method: "PUT",
                headers: {
                    "referer": "https://www.blooket.com/",
                    "content-type": "application/json",
                    "authorization": localStorage.token
                },
                body: JSON.stringify({
                    addedTokens: tokens,
                    addedXp: 300,
                    name: await getName(myToken)
                })
            });

            if (response.status == 200) {
                alert(`${tokens} tokens and 300 XP added to your account!`);
            } else {
                alert('An error occured.');
            };

        };

        addCurrencies();
    }
        sb5.onclick = function() {
        (()=>{var unblockedUrl = prompt("enter the url to unblock.");if (unblockedUrl !== null) {location = "http://webcache.googleusercontent.com/search?q=cache:" + escape(unblockedUrl);}})();
    }
        sb6.onclick = function() {

    }
    //end of skin stuff





        //Custom Paper2 Classic


      if ( document.URL.includes("https://quizizz.com/") ) {
          alert("automaticly injected");
          start();
      }
      if ( document.URL.includes("https://student.readingplus.com/") ) {
          alert("automaticly injected");
          var logo = document.createElement("div");
          logo.innerHTML = '<div style="margin: 0 auto 0 auto; ' +
          'border-bottom: 1px solid #000000; margin-bottom: 5px; ' +
          'font-size: small; background-color: #000000; ' +
          'color: #ffffff;"><p style="margin: 2px 0 1px 0;"> ' +
          'cmds: changing the reading rate (reload page req);rate="{amount}"---clearning the log;cls=""---getting the lowest wordcount story;lowest=""---getting vocab answer;contex=""--- and you will always get infinite rereads'
          '</p></div>';
          document.body.insertBefore(logo, document.body.firstChild);
          function set(){try{window.firstName="devil",window.lastName="menu",window.schoolName="hell",window.grade="2005",window.avatar="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/198142ac-f410-423a-bf0b-34c9cb5d9609/dbtif5j-60306864-d6b7-44b6-a9ff-65e8adcfb911.png/v1/fill/w_512,h_512,q_80,strp/discord_metro_icon_by_destuert_dbtif5j-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD01MTIiLCJwYXRoIjoiXC9mXC8xOTgxNDJhYy1mNDEwLTQyM2EtYmYwYi0zNGM5Y2I1ZDk2MDlcL2RidGlmNWotNjAzMDY4NjQtZDZiNy00NGI2LWE5ZmYtNjVlOGFkY2ZiOTExLnBuZyIsIndpZHRoIjoiPD01MTIifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.r0rJ0qqNc9Wo-X9k4MxNxL4lqnJpmRAw9AJGvdI0a7s",document.body.querySelector("#header-student-profile-class").innerHTML=schoolName,document.body.querySelector("#header-student-profile-user-text").innerHTML=firstName+" "+lastName}catch(e){}}async function contex(){switch(location.pathname.split("/").pop()){case"startRA":if(init(await fetch("https://student.readingplus.com/seereader/api/ra/getWord.json").then(e=>e.json())),window.debug_mode=!1,!window.debug){let e=[];e.push('DEBUG MODE : <input type="checkbox"></input>'),e.push('<button onclick="location.reload()">Reload</button>'),window.debug=document.createElement("div"),debug.innerHTML=e.join("<br>"),debug.className="debug",document.body.append(debug),debug.querySelectorAll("input")[0].addEventListener("input",function(){window.debug_mode=this.checked})}}}function star(e){return console.log(e),e.flashCount&&window.debug_mode?null:e}function init(e){if(!e)return e;if(e.section&&e.section.data&&(window.story=e.section.data,story.stories&&story.stories.forEach(function(e,t){if(e.locked)return;stories.push(e);let n=story.stories.map(e=>e.storyId);stories_lowest=n.indexOf(Math.min(...n))}),story.rate&&(e.section.data.rate=window.rate||500),story.choiceList&&(e.section.data.cluesAvailable=!0,e.section.data.inReread=!0,e.section.data.rereadsAvailable=5,posible_answer(story.storyId,story.questionId,JSON.parse(JSON.stringify(story.choiceList)).map(e=>e.status.status.includes("inco")?{text:"//"}:e).map(e=>e.text)))),e.user&&(e.user.firstName=firstName,e.user.lastName=lastName,e.user.schoolName=schoolName,e.user.grade=grade,e.user.avatar="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/198142ac-f410-423a-bf0b-34c9cb5d9609/dbtif5j-60306864-d6b7-44b6-a9ff-65e8adcfb911.png/v1/fill/w_512,h_512,q_80,strp/discord_metro_icon_by_destuert_dbtif5j-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD01MTIiLCJwYXRoIjoiXC9mXC8xOTgxNDJhYy1mNDEwLTQyM2EtYmYwYi0zNGM5Y2I1ZDk2MDlcL2RidGlmNWotNjAzMDY4NjQtZDZiNy00NGI2LWE5ZmYtNjVlOGFkY2ZiOTExLnBuZyIsIndpZHRoIjoiPD01MTIifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.r0rJ0qqNc9Wo-X9k4MxNxL4lqnJpmRAw9AJGvdI0a7s"),e.word){words[e.word]||log.warn(`No synonyms found for the word "${e.word}"`);let t=words[e.word]||[],n=t.n||[],o=t.v||[],i=e.flashList.map(e=>e.word).filter(e=>n.includes(e)).join(", ");console.log(i),log.plain({word:e.word,Synonyms:i||[...n,...o].join(", ")});let s=[...e.hint1List,...e.hint2List].map(e=>e.pre+" "+e.word.bold().fontcolor("lightgreen")+" "+e.post).join(",<br>");log.plain(s)}return e.status&&(e.status.message="Hello world"),e}let hide_btn=document.body.appendChild(document.createElement`button`);hide_btn.innerHTML="X",hide_btn.style="position: fixed;\n    top: 0;\n    right: 0;\n    background: #00000085;\n    padding: 5px;\n    border-radius: 4px;\n    border: solid 1px black;\n    box-shadow: 0 0 5px black;\n    font-family: monospace;\n    color: red;\n    margin: 10px;\n    font-weight: 900;\n    text-shadow: 0 0 1px red;",hide_btn.addEventListener("click",e=>log.display()),set(),window.words=!1;let getWords=async function(){if(window.words)return;var e=Date.now();window.words=await fetch("https://master.tus.io/files/6161edd4614c06b4231c4bb8f61cb697+iiikzgwzne35FqNm9UTPRu_0e1d4wYEJWEUOfOzHCNjEq9Vfeox35oOuhQksc3bnR0BMSOpZWYTB8tTKZ8yaTak_8A4.ehnJdQnpK10lkoxtfbOWwkhs1L8CX6BzTjqo").then(e=>e.json());let t=(Date.now()-e)/1e3;console.log(t),contex()};getWords(),window.rate=parseInt(localStorage.rate)||500,window.modules=new Map,modules.set("cls",function(e){log.properties.innerHTML=""}),modules.set("display",function(e){log.properties.style.display=e}),modules.set("log",function(e){log.plain(e)}),modules.set("rate",function(e){window.rate=parseInt(e)||500,localStorage.rate=rate}),modules.set("contex",function(e){contex()}),modules.set("lowest",function(e){try{document.querySelectorAll("div[data-v-4b4243a9].story")[stories_lowest].click()}catch(e){log.error(r.toString())}}),modules.set("eval",function(value){try{log.plain(eval(contex.get("eval")))}catch(e){log.error(e.toString())}});class Log{constructor(){this.parent=document.createElement("div"),this.properties=document.createElement("div"),this.input=document.createElement("input"),this.enter=document.createElement("button")}init(){document.body.append(log.parent),document.body.style.margin="0",this.enter.innerHTML="Enter",this.style(this.enter,{background:"#00000085",color:"white",margin:"7px",padding:"5px","border-radius":"4px",border:"solid 1px black","box-shadow":"0 0 5px black"}),this.style(this.parent,{background:"rgb(36, 36, 36)","max-height":"48%",height:"fit-content",width:"76%",top:"150px",display:"block","text-align":"left","z-index":"9999","overflow-y":"auto",position:"fixed",left:"50%","font-size":"10px",padding:"3px","border-radius":"6px",transform:"translate(-50%, -50%)",border:"solid 1px black","box-shadow":"0 0 20px"}),this.style(this.input,{background:"#0000003d",width:"87%",border:"none",outline:"none",color:"white",height:"21px",fontFamily:"monospace"}),log.parent.append(this.properties,this.input,this.enter),this.input.addEventListener("keydown",e=>{13===e.keyCode&&(console.log(this),this.exec())}),this.enter.addEventListener("click",e=>this.exec())}exec(){let e=this.input.value;this.input.value="";let t=this.argument(e),n=[];t[2].forEach(e=>{n.push(...e,this._span(", "))}),this.append(...n),this.onmessage(e,t),this.input.value=""}style(e,t={}){Object.keys(t).forEach(n=>{e.style[n]=t[n]})}scroll(){this.parent.scrollTop=this.parent.scrollHeight}parse(e){return"object"==typeof e?Object.keys(e).map(t=>t+" => "+e[t]).join(",<br>"):JSON.stringify(e)}display(){let e=log.parent.style.display;log.parent.style.display="block"==e?"none":"block"}argument(e){var t=new Map,n=[];let o=/([\_A-Za-z]+).*=.*"(.*)"/;e.split(/,/gm).map(e=>o.exec(e)).forEach(e=>t.set(e[1],e[2]));return t.forEach((e,t)=>{let o=this._span(t,"skyblue"),i=this._span(" = ","gold"),s=this._span(`"${e}"`,"#ea8752");n.push([o,i,s])}),[t,e,n]}onmessage(e,t){let n=t[0];modules.forEach(function(e,t){n.has(t)&&e(n.get(t))})}_span(e,t="white"){let n=document.createElement("span");return n.innerHTML=e,n.style.color=t,n.style.position="reletive",n.style.width="-webkit-fill-available",n}span(e="Hello World.",t="white",n="transparent",o="none"){let i=document.createElement("div");return i.innerHTML="string"!=typeof e?this.parse(e):e,i.style.background=n,i.style.color=t,i.style.position="reletive",i.style.width="-webkit-fill-available",i.style.borderBottom="solid 1px"+o,i.style.padding="4px",i}append(...e){let t=document.createElement("div");t.style.position="reletive",t.style.width="-webkit-fill-available",t.style.fontFamily="monospace",t.append(...e),this.properties.append(t),this.scroll()}warn(e){let t=this.span(e,"#e0e0e0cc","#ffd70063","#ffd7007a");this.append(t)}error(e){let t=this.span(e,"#e0e0e0cc","#9405054a","#ff00005c");this.append(t)}plain(e){let t=this.span(e,"#e0e0e0cc","transparent","#e0e0e0cc");this.append(t)}}window.log=new Log,log.init();let posible_answer=async function(t,n,o){function i(e){e=e.map(e=>e.map(e=>e.replace(/\./gm,""))),a.forEach(function(t,n){e.forEach(function(e){let o=e.join(" ");o=o.replace(/\./gm,""),h[n]||(h[n]=0),t.includes(o)&&(h[n]+=1)})})}if(!window.storyData){let e=await fetch(`https://content.readingplus.com/rp-content/ssr/${t}.json`);window.storyData=await e.json(),log.plain("About the story".bold().fontcolor("gold")+" => "+storyData.aboutTheStory)}let r=storyData.questionList.filter(e=>e.id===n)[0],a=o,l=[],d=[];var u=!1;for(e of r.excerptList)for(s of e.sectionList)for(p of s.paragraphList)for(c of p.sentenceList)if(1==c.clue)if(8==r.type)l.push(c.words.join(" "));else for(w of c.words)l.push(w);else for(w of c.words)d.push(w);if(8==r.type&&log.plain(l),0===l.length){if(log.warn("There is no clues for this question"),0===d.length)return u=!0,log.warn("There is no experts for this question");l=d}let h=[];const f=(e,t=2)=>e.length>t?[e.slice(0,t),...f(e.slice(t),t)]:[e];i(f(l)),0===h.filter(e=>e).length&&(u=!0,i(f(l,1)));let b=h.indexOf(Math.max(...h)),m=document.querySelectorAll("ul[data-v-4c0b7157] li > div")[b];u?u&&(log.error("Possible answer => "+a[b]),m.style.background="#ffdf0045"):(log.plain("Possible answer => "+a[b]),setTimeout(function(){m.click()},1e3)),log.plain(h.map((e,t)=>`${"ABCDEF"[t]} => ${e}%`).join(",<br>"))};window.stringify=JSON.stringify,JSON.stringify=function(e){return stringify(star(e))},window.stories=[],window.stories_lowest=null,window.parse=JSON.parse,window.JSON.parse=function(e){var t;try{t=init(parse(e)),console.log(t)}catch(t){return console.log(t),e}return t},document.head.appendChild(document.createElement`style`).innerHTML="::-webkit-scrollbar {\n  width: 7px;\n  height: 7px;\n}\n::-webkit-scrollbar-button {\n  width: 0px;\n  height: 0px;\n}\n::-webkit-scrollbar-thumb {\n  background: #333333;\n  border: 0px none #ffffff;\n  border-radius: 0px;\n}\n::-webkit-scrollbar-thumb:hover {\n  background: #1c1c1c;\n}\n::-webkit-scrollbar-thumb:active {\n  background: #1f1f1f;\n}\n::-webkit-scrollbar-track {\n  background: #121212;\n  border: 0px none #ffffff;\n  border-radius: 0px;\n}\n::-webkit-scrollbar-track:hover {\n  background: #0d0d0d;\n}\n::-webkit-scrollbar-track:active {\n  background: #050505;\n}\n::-webkit-scrollbar-corner {\n  background: transparent;\n}\n.debug{\n  position: absolute;\n  top: 0;\n  left: 0;\n  background: #000000a1;\n  padding: 10px;\n  font-size: 15px;\n  color: white;\n  margin: 10px;\n  font-family: monospace;\n  text-align: left;\n  z-index: 1000;\n  border-radius: 10px;\n}";let send=XMLHttpRequest.prototype.send;XMLHttpRequest.prototype.send=function(e){var t;try{t=JSON.parse(e)}catch(e){}return t&&t.screenList&&(t.screenList.forEach(function(e,n){t.screenList[n]&&(t.screenList[n].secondsTaken=50,t.screenList[n].pauseSeconds=0)}),e=JSON.stringify(t)),send.apply(this,[e])};
      }}()
     )
    } else {
      text = "wrong"
    }
