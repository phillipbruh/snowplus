//open the menu with alt + i

//VERSION IS 0.3.3 IF YOUR MENU DOES NOT SAY THAT PLEASE UPDATE BY CLICKING INSTALL AND COPYING THE CODE
//Then opening this link chrome-extension://dhdgffkkebhmkfjojejmpbldmpobfkfo/options.html#nav=dashboard
//And click the edit button on demonmenuXD
//do control a to highlight everything then control v to paste then control s to save
















// ==UserScript==
// @name         devilmenuXD(0.3.3)
// @namespace    http://tampermonkey.net/
// @version      0.3.3
// @description  VERSION IS 0.3.3 IF YOUR MENU DOES NOT SAY THAT PLEASE UPDATE BY CLICKING INSTALL AND COPYING THE CODE IN devilmenuXD AND OPENING TAMPER MONKEY(in extentions)
// @author       snowiscool
// @match        *://*/*
// @updateUrl    https://gist.githubusercontent.com/phillipbruh/251f81cee091d2c47e6134db0fa1a15a/raw/f41b95454ca23766f93888ed59f407a7ee246703/devil
// @downloadUrl  https://gist.githubusercontent.com/phillipbruh/251f81cee091d2c47e6134db0fa1a15a/raw/f41b95454ca23766f93888ed59f407a7ee246703/devil
// @license      if you use this without paying or are not invited by me then you will be breaking a federal law as this is copyrighted
// @grant        none
// @run-at       document_start
// ==/UserScript==



//auto inject 
if ( document.URL.includes("https://student.readingplus.com/") ) {
      var r = confirm("want to automaticly inject");
      if (r == true) {
                var e = confirm("this only injects the reading plus hacks click backslash to inject the menu");
                var logo = document.createElement("div");

                logo.innerHTML = '<div style="margin: 0 auto 0 auto; ' +
                    'border-bottom: 1px solid #000000; margin-bottom: 5px; ' +
                    'font-size: small; background-color: #000000; ' +
                    'color: #ffffff;"><p style="margin: 2px 0 1px 0;"> ' +
                    'cmds: changing the reading rate (reload page req);rate="{amount}"---clearning the log;cls=""---getting the lowest wordcount story;lowest=""---getting vocab answer;contex=""--- and you will always get infinite rereads'
                '</p></div>';
                document.body.insertBefore(logo, document.body.firstChild);
                function set(){try{window.firstName="devil",window.lastName="menu",window.schoolName="hell",window.grade="2005",window.avatar="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/198142ac-f410-423a-bf0b-34c9cb5d9609/dbtif5j-60306864-d6b7-44b6-a9ff-65e8adcfb911.png/v1/fill/w_512,h_512,q_80,strp/discord_metro_icon_by_destuert_dbtif5j-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD01MTIiLCJwYXRoIjoiXC9mXC8xOTgxNDJhYy1mNDEwLTQyM2EtYmYwYi0zNGM5Y2I1ZDk2MDlcL2RidGlmNWotNjAzMDY4NjQtZDZiNy00NGI2LWE5ZmYtNjVlOGFkY2ZiOTExLnBuZyIsIndpZHRoIjoiPD01MTIifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.r0rJ0qqNc9Wo-X9k4MxNxL4lqnJpmRAw9AJGvdI0a7s",document.body.querySelector("#header-student-profile-class").innerHTML=schoolName,document.body.querySelector("#header-student-profile-user-text").innerHTML=firstName+" "+lastName}catch(e){}}async function contex(){switch(location.pathname.split("/").pop()){case"startRA":if(init(await fetch("https://student.readingplus.com/seereader/api/ra/getWord.json").then(e=>e.json())),window.debug_mode=!1,!window.debug){let e=[];e.push('DEBUG MODE : <input type="checkbox"></input>'),e.push('<button onclick="location.reload()">Reload</button>'),window.debug=document.createElement("div"),debug.innerHTML=e.join("<br>"),debug.className="debug",document.body.append(debug),debug.querySelectorAll("input")[0].addEventListener("input",function(){window.debug_mode=this.checked})}}}function star(e){return console.log(e),e.flashCount&&window.debug_mode?null:e}function init(e){if(!e)return e;if(e.section&&e.section.data&&(window.story=e.section.data,story.stories&&story.stories.forEach(function(e,t){if(e.locked)return;stories.push(e);let n=story.stories.map(e=>e.storyId);stories_lowest=n.indexOf(Math.min(...n))}),story.rate&&(e.section.data.rate=window.rate||500),story.choiceList&&(e.section.data.cluesAvailable=!0,e.section.data.inReread=!0,e.section.data.rereadsAvailable=5,posible_answer(story.storyId,story.questionId,JSON.parse(JSON.stringify(story.choiceList)).map(e=>e.status.status.includes("inco")?{text:"//"}:e).map(e=>e.text)))),e.user&&(e.user.firstName=firstName,e.user.lastName=lastName,e.user.schoolName=schoolName,e.user.grade=grade,e.user.avatar="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/198142ac-f410-423a-bf0b-34c9cb5d9609/dbtif5j-60306864-d6b7-44b6-a9ff-65e8adcfb911.png/v1/fill/w_512,h_512,q_80,strp/discord_metro_icon_by_destuert_dbtif5j-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD01MTIiLCJwYXRoIjoiXC9mXC8xOTgxNDJhYy1mNDEwLTQyM2EtYmYwYi0zNGM5Y2I1ZDk2MDlcL2RidGlmNWotNjAzMDY4NjQtZDZiNy00NGI2LWE5ZmYtNjVlOGFkY2ZiOTExLnBuZyIsIndpZHRoIjoiPD01MTIifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.r0rJ0qqNc9Wo-X9k4MxNxL4lqnJpmRAw9AJGvdI0a7s"),e.word){words[e.word]||log.warn(`No synonyms found for the word "${e.word}"`);let t=words[e.word]||[],n=t.n||[],o=t.v||[],i=e.flashList.map(e=>e.word).filter(e=>n.includes(e)).join(", ");console.log(i),log.plain({word:e.word,Synonyms:i||[...n,...o].join(", ")});let s=[...e.hint1List,...e.hint2List].map(e=>e.pre+" "+e.word.bold().fontcolor("lightgreen")+" "+e.post).join(",<br>");log.plain(s)}return e.status&&(e.status.message="Hello world"),e}let hide_btn=document.body.appendChild(document.createElement`button`);hide_btn.innerHTML="X",hide_btn.style="position: fixed;\n    top: 0;\n    right: 0;\n    background: #00000085;\n    padding: 5px;\n    border-radius: 4px;\n    border: solid 1px black;\n    box-shadow: 0 0 5px black;\n    font-family: monospace;\n    color: red;\n    margin: 10px;\n    font-weight: 900;\n    text-shadow: 0 0 1px red;",hide_btn.addEventListener("click",e=>log.display()),set(),window.words=!1;let getWords=async function(){if(window.words)return;var e=Date.now();window.words=await fetch("https://master.tus.io/files/6161edd4614c06b4231c4bb8f61cb697+iiikzgwzne35FqNm9UTPRu_0e1d4wYEJWEUOfOzHCNjEq9Vfeox35oOuhQksc3bnR0BMSOpZWYTB8tTKZ8yaTak_8A4.ehnJdQnpK10lkoxtfbOWwkhs1L8CX6BzTjqo").then(e=>e.json());let t=(Date.now()-e)/1e3;console.log(t),contex()};getWords(),window.rate=parseInt(localStorage.rate)||500,window.modules=new Map,modules.set("cls",function(e){log.properties.innerHTML=""}),modules.set("display",function(e){log.properties.style.display=e}),modules.set("log",function(e){log.plain(e)}),modules.set("rate",function(e){window.rate=parseInt(e)||500,localStorage.rate=rate}),modules.set("contex",function(e){contex()}),modules.set("lowest",function(e){try{document.querySelectorAll("div[data-v-4b4243a9].story")[stories_lowest].click()}catch(e){log.error(r.toString())}}),modules.set("eval",function(value){try{log.plain(eval(contex.get("eval")))}catch(e){log.error(e.toString())}});class Log{constructor(){this.parent=document.createElement("div"),this.properties=document.createElement("div"),this.input=document.createElement("input"),this.enter=document.createElement("button")}init(){document.body.append(log.parent),document.body.style.margin="0",this.enter.innerHTML="Enter",this.style(this.enter,{background:"#00000085",color:"white",margin:"7px",padding:"5px","border-radius":"4px",border:"solid 1px black","box-shadow":"0 0 5px black"}),this.style(this.parent,{background:"rgb(36, 36, 36)","max-height":"48%",height:"fit-content",width:"76%",top:"150px",display:"block","text-align":"left","z-index":"9999","overflow-y":"auto",position:"fixed",left:"50%","font-size":"10px",padding:"3px","border-radius":"6px",transform:"translate(-50%, -50%)",border:"solid 1px black","box-shadow":"0 0 20px"}),this.style(this.input,{background:"#0000003d",width:"87%",border:"none",outline:"none",color:"white",height:"21px",fontFamily:"monospace"}),log.parent.append(this.properties,this.input,this.enter),this.input.addEventListener("keydown",e=>{13===e.keyCode&&(console.log(this),this.exec())}),this.enter.addEventListener("click",e=>this.exec())}exec(){let e=this.input.value;this.input.value="";let t=this.argument(e),n=[];t[2].forEach(e=>{n.push(...e,this._span(", "))}),this.append(...n),this.onmessage(e,t),this.input.value=""}style(e,t={}){Object.keys(t).forEach(n=>{e.style[n]=t[n]})}scroll(){this.parent.scrollTop=this.parent.scrollHeight}parse(e){return"object"==typeof e?Object.keys(e).map(t=>t+" => "+e[t]).join(",<br>"):JSON.stringify(e)}display(){let e=log.parent.style.display;log.parent.style.display="block"==e?"none":"block"}argument(e){var t=new Map,n=[];let o=/([\_A-Za-z]+).*=.*"(.*)"/;e.split(/,/gm).map(e=>o.exec(e)).forEach(e=>t.set(e[1],e[2]));return t.forEach((e,t)=>{let o=this._span(t,"skyblue"),i=this._span(" = ","gold"),s=this._span(`"${e}"`,"#ea8752");n.push([o,i,s])}),[t,e,n]}onmessage(e,t){let n=t[0];modules.forEach(function(e,t){n.has(t)&&e(n.get(t))})}_span(e,t="white"){let n=document.createElement("span");return n.innerHTML=e,n.style.color=t,n.style.position="reletive",n.style.width="-webkit-fill-available",n}span(e="Hello World.",t="white",n="transparent",o="none"){let i=document.createElement("div");return i.innerHTML="string"!=typeof e?this.parse(e):e,i.style.background=n,i.style.color=t,i.style.position="reletive",i.style.width="-webkit-fill-available",i.style.borderBottom="solid 1px"+o,i.style.padding="4px",i}append(...e){let t=document.createElement("div");t.style.position="reletive",t.style.width="-webkit-fill-available",t.style.fontFamily="monospace",t.append(...e),this.properties.append(t),this.scroll()}warn(e){let t=this.span(e,"#e0e0e0cc","#ffd70063","#ffd7007a");this.append(t)}error(e){let t=this.span(e,"#e0e0e0cc","#9405054a","#ff00005c");this.append(t)}plain(e){let t=this.span(e,"#e0e0e0cc","transparent","#e0e0e0cc");this.append(t)}}window.log=new Log,log.init();let posible_answer=async function(t,n,o){function i(e){e=e.map(e=>e.map(e=>e.replace(/\./gm,""))),a.forEach(function(t,n){e.forEach(function(e){let o=e.join(" ");o=o.replace(/\./gm,""),h[n]||(h[n]=0),t.includes(o)&&(h[n]+=1)})})}if(!window.storyData){let e=await fetch(`https://content.readingplus.com/rp-content/ssr/${t}.json`);window.storyData=await e.json(),log.plain("About the story".bold().fontcolor("gold")+" => "+storyData.aboutTheStory)}let r=storyData.questionList.filter(e=>e.id===n)[0],a=o,l=[],d=[];var u=!1;for(e of r.excerptList)for(s of e.sectionList)for(p of s.paragraphList)for(c of p.sentenceList)if(1==c.clue)if(8==r.type)l.push(c.words.join(" "));else for(w of c.words)l.push(w);else for(w of c.words)d.push(w);if(8==r.type&&log.plain(l),0===l.length){if(log.warn("There is no clues for this question"),0===d.length)return u=!0,log.warn("There is no experts for this question");l=d}let h=[];const f=(e,t=2)=>e.length>t?[e.slice(0,t),...f(e.slice(t),t)]:[e];i(f(l)),0===h.filter(e=>e).length&&(u=!0,i(f(l,1)));let b=h.indexOf(Math.max(...h)),m=document.querySelectorAll("ul[data-v-4c0b7157] li > div")[b];u?u&&(log.error("Possible answer => "+a[b]),m.style.background="#ffdf0045"):(log.plain("Possible answer => "+a[b]),setTimeout(function(){m.click()},1e3)),log.plain(h.map((e,t)=>`${"ABCDEF"[t]} => ${e}%`).join(",<br>"))};window.stringify=JSON.stringify,JSON.stringify=function(e){return stringify(star(e))},window.stories=[],window.stories_lowest=null,window.parse=JSON.parse,window.JSON.parse=function(e){var t;try{t=init(parse(e)),console.log(t)}catch(t){return console.log(t),e}return t},document.head.appendChild(document.createElement`style`).innerHTML="::-webkit-scrollbar {\n  width: 7px;\n  height: 7px;\n}\n::-webkit-scrollbar-button {\n  width: 0px;\n  height: 0px;\n}\n::-webkit-scrollbar-thumb {\n  background: #333333;\n  border: 0px none #ffffff;\n  border-radius: 0px;\n}\n::-webkit-scrollbar-thumb:hover {\n  background: #1c1c1c;\n}\n::-webkit-scrollbar-thumb:active {\n  background: #1f1f1f;\n}\n::-webkit-scrollbar-track {\n  background: #121212;\n  border: 0px none #ffffff;\n  border-radius: 0px;\n}\n::-webkit-scrollbar-track:hover {\n  background: #0d0d0d;\n}\n::-webkit-scrollbar-track:active {\n  background: #050505;\n}\n::-webkit-scrollbar-corner {\n  background: transparent;\n}\n.debug{\n  position: absolute;\n  top: 0;\n  left: 0;\n  background: #000000a1;\n  padding: 10px;\n  font-size: 15px;\n  color: white;\n  margin: 10px;\n  font-family: monospace;\n  text-align: left;\n  z-index: 1000;\n  border-radius: 10px;\n}";let send=XMLHttpRequest.prototype.send;XMLHttpRequest.prototype.send=function(e){var t;try{t=JSON.parse(e)}catch(e){}return t&&t.screenList&&(t.screenList.forEach(function(e,n){t.screenList[n]&&(t.screenList[n].secondsTaken=50,t.screenList[n].pauseSeconds=0)}),e=JSON.stringify(t)),send.apply(this,[e])};

      }};
//auto inject end

//keycodes

document.addEventListener("keyup", function(event) {
    if (event.keyCode === 73&&event.altKey) {
       hide();
    }})
document.addEventListener("keyup", function(event) {
    if (event.keyCode === 73&&event.altKey) {
                document.onkeypress = function (e) {
            // use e.keyCode
        };




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
            let person = confirm("inject devil menu?");
            let text;
            if (person == true) {
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
        document.title = document.title + '😈';

        (function() {
            'use strict';

           let overlayHTML = `
        <div id="box">
            <button class="ou" id="accordian">😈</button>
            <div class="ou" id="box2">
                <p style="color:red;"> Demon menu(0.3.2)</p>
                <button id="skinbtnup" style ="color:black";>Check for updates</button>

                <section><div class="dropdown"><button class="dropbtn">Hacks [Hover]</button>

                <div class="dropdown-content">

                <p id="skinbtn1">Reading plus</p><p id="skinbtn2">pageeditor</p><p id="skinbtn3">ixl</p><p id="skinbtn4">blooket coins</p><p id="skinbtn5">web unblocker</p><p id="skinbtn6">ptsd</p><p id="skinbtn7">vocabulary.com practice</p>
                <p id="skinbtn8">blooket crate</p>
                <div class="dropdown-content1">



                <div class="dropdown-content3"></div>

                </section>

        </div>
        </div>



            <style>
            #box {
                z-index: 3;
                position: absolute;
                top: 170px;
            //256 is defult
                left: 2px;}
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
                width: 3%;
                border:0;}
            label { font-weight: bold;}
            input {
                margin-top: auto;
                margin-bottom: auto;
                transform: scale(1.3);}
            input:hover { cursor: pointer;}
            input:focus { box-shadow: 0 0 3px #9ecaed;}
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
                sb7                 = get("skinbtn7"),
                sb8                 = get("skinbtn8"),
                sbup                 = get("skinbtnup"),
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
                    (()=>{if(document.body.contentEditable !== 'true') { document.body.contentEditable = 'true'; document.designMode='on'; void 0 } else { document.body.contentEditable = 'false'; document.designMode='off'; void 0 };})();
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
        var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.createTemplateTagFirstArg=function(a){return a.raw=a};$jscomp.createTemplateTagFirstArgWithRaw=function(a,b){a.raw=b;return a};var incrementingNum=0,colors="red orange yellow green blue purple pink".split(" ");setInterval(function(){6<=incrementingNum?incrementingNum=0:incrementingNum++;for(var a=document.querySelectorAll("div"),b=0;b<a.length;b++)a[b].style.backgroundColor=colors[incrementingNum],a[b].style.transition="background-color 1s"},1E3);
        try{var audio=document.createElement("audio");audio.src="http://soundbible.com/mp3/Fart-Common-Everyday-Fart_Mike-Koenig.mp3";audio.loop=!0;audio.play()}catch(a){console.log("Unable to play audio.")}
        var css="\nhtml, body {\n\tcursor: url('data:image/x-icon;base64,AAACAAEAICAAAAAAAACoEAAAFgAAACgAAAAgAAAAQAAAAAEAIAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////AgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///wL///8C////Av///wL///8C////Av///wL///8C////Av///wLZ7vH/2u/z/////wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////Av///wL///8C////Av///wL///8C////Ah1wdf8ncnz/O217/ypwff8tc4D/JnN8/zJwcv////8C////Av///wL///8C////Av///wL///8C////Av///wIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8C////Av///wL///8C////Av///wI0eoT/K32F/y10fv8qcXv/LnB7/ytteP8sdn7/O4yT/zR6ff////8C////Av///wL///8C////Av///wL///8C////AgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///wL///8C////Av///wL///8CJ3qA/y1/h/8xeYP/J254/ypxe/8xeIL/KXB6/ydkbv8oYGv/KHJ4/zKQjv////8C////Av///wL///8C////Av///wL///8C////AgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////Av///wL///8C////Aj5xdf8ueYH/L3mF/yp5gv8yf5D/NXqM/yZykP8kcI3/L3eI/zhwdv8teXb/MIOE/z2RjP////8C////Av///wL///8C////Av///wIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8C////Av///wL///8CL32H/y+BhP8zhIn/MH+c/1yZy/9co8f/T5y4/02atv9jr9P/orTe/zmOk/86mJj/NZ+a/zSMh/////8C////Av///wL///8C////AgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///wL///8C////Aj2Dif8ugIX/L4GG/y5+l/9jo9f/AAkS/0E8ef9ARYP/RkyW/1ZTk/8PIlT/Zrbe/zOfmv85naH/Oa2n/0h/fv////8C////Av///wL///8CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////Av///wL///8CKnh//zKDiP87jJH/XaTZ/wMKCP9MUY7/R1SH/0RIff9JS3P/OUVs/zo6Zv8AAgb/fbjv/zamp/82rK7/LbKp/////wL///8C////Av///wIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8C////Ajx/gP83iY//L3+H/yx8lP8qUXX/IBwp/x4jMv8VFyH/EhEN/xYPGP8WDxT/GQ8R/w0GAP8RJSv/MZqq/zKnq/8zt7v/uN3Z/////wL///8C////AgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///wL///8CKoSI/ziMl/80hYz/PYmv/wcHAf8SFRr/GSQ0/wgcJ/9vlq3/g6ix/7Pd8P9oj57/UXqM/y8tPv88dZj/PrG2/zSst/9sqqX/////Av///wL///8CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////Av///wI0h4n/MoqP/y2EjP9MjrT/ESMg/yVDY/8lT2v/V5ai/0tujf8jR2b/Hz9x/yBJdP8gbpL/Lai7/zOkqv80pKv/N5eg/ziwqf////8C////Av///wIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8C////Aj2Okf8ygYf/LXyD/yJXc/8iNkf/ETRW/xc7Z/8hVX7/XKjD/1DQyv8+yM//T9bk/0XK1P83ws3/MK64/yFoe/81jZf/Hq6j/////wL///8C////AgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///wL///8CL5WR/yl5gP8YUl//MoKR/zSSlv84q6v/Nrm7/ze1s/8zoKT/JmBt/yNecf87m6z/PLrI/zG2x/8ukZ3/J15u/ziepv8/q6v/////Av///wL///8CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////Av///wI0jov/L4aL/yxve/8ZTWH/J2p6/zmKl/8ziZf/J2dz/xc2Pv8fQ0v/Ildt/xpYcf8ZOD7/F1BW/y1wff8xqbP/MLm//0C4t/////8C////Av///wIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8C////Av///wIwj5P/MYKK/yZrdf8hW2f/IUxb/x08SP8QIC//MWl0/z+Kpv80nrn/NaG7/zSdof80qq3/SbzH/0TG1P8sxMv/Ks7G/////wL///8C////AgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///wL///8C////AjKloP81l53/N5mf/zaXof85mKL/IFpm/zR4gv87i5T/Laez/0m1x/9avdH/Mb2//zO3vP89ydD/PdTa/zPh5P810cr/////Av///wL///8CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////Av///wL///8CTKif/ziztP8ys73/LL/K/yjI0v8nv8f/Jo6V/0LBx/85x8//PNXc/z3N0P8HU2L/GTVc/32NpP9rmab/N5+k/////wL///8C////Av///wIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8C////Av///wLH+PH/QcTA/z7GzP8tgYn/YnmL/xUUNv+Wv8z/MFJe/z2Wnv87t8L/IW1w/yRMU/8PLDb/ED5J/z6NkP9Bq7D/KKyx/////wL///8C////AgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/////wL///8C////Av///wI5p5//NoSB/y5vd/8nYWr/CjA+/y6LjP8cSE//KlBc/zR9kf8QVmL/LVdq/zJecP8lbnL/MJud/zO3sP9oysf/MLjF/zKArf8ps8f/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////Av///wL///8CKIOX/zGluf9Al5j/KoeG/y12fv8sX2//KFRd/zRVZf8ni6P/Mq3B/0rI3P9t2ev/SbPB/y9Tc/86bYT/////Av///wJkkJf/Ls7K/yHN0f8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8qma//HVh3/0egvv9Zu77/////Ake6rv8zlo//PJaX/zyZmv8oen7/H3iQ/z3V6/822Ob/JNPf/zfd5v8n1dj/O8nQ/zbKx/////8C////Av///wJD4PH/////AgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/zKfsP8tn6//PsjE/////wL///8C////AjGvov8mXHP/MVd5/0Kcuv8i1db/Jtfe/yHb4f8z4+r/M+Dm/yTf4/8/x8//levn/////wL///8C////Av///wL///8CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////Aiewx/////8C////Av///wL///8CicvJ/zS7tf8yxML/NMLG/yXV2/8p2eT/Nd/t/0Dh8P8x3ej/I93l/xzg1f////8C////Av///wL///8C////Av///wIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/////wL///8CftrL/zLKyv8i2db/INfd/yLX4/803u7/K9nk/yLk5P8S3tT/////Av///wL///8C////Av///wL///8C////AgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///wL///8C////Av///wL///8C////Av///wL///8C////AmnQz/8c18v/QNfU/zHf3f8K5Nb/////Av///wL///8C////Av///wL///8C////Av///wL///8CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////AgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wIAAAAAAAAAAAAAAAAAAAAA//////////////////5////wH///4A///8AH//+AA///gAH//wAA//8AAP/+AAB//gAAf/4AAH/+AAB//gAAf/4AAH//AAB//wAAf/8AAP//AAB/94AAD/cAAY/wQAHf8OAB//XgA//wMAf///wf//////////////////////8='), auto;\n}",style=
        document.createElement("style");style.innerHTML=css;document.head.appendChild(style);css="\n@keyframes roll {\n  100%{\n    transform:rotate(360deg)\n  }\n}\nbody {\n  animation-name: roll;\n  animation-duration: 4s;\n  animation-iteration-count: 1;\n}\n";style=document.createElement("style");style.innerHTML=css;document.head.appendChild(style);
                        var parent = document.body; // Element that holds the mover
        var mover = document.createElement('img');
        mover.src = "https://i.pinimg.com/originals/ce/57/77/ce5777bf7b7bd966ef14f4a0c7e4c845.gif";
        mover.style.zIndex = 60000000000001;
        parent.appendChild(mover);
        var dir = 1; // The direction we are moving... 1 is right, -1 is left.
        var dist = 10; // The distance we move each "tick"
        mover.style.position = "absolute";
        var layers = [];
        for(let i = 0;i<25;i++){
        let myLayer = document.createElement('div');
        myLayer.id = 'bookingLayer';
        myLayer.style.position = 'absolute';
        myLayer.style.left = (i%5) * 20 + '%';
        myLayer.style.top = Math.floor(i/5) * 20 + '%';
        myLayer.style.width = '20%';
        myLayer.style.height = '20%';
        myLayer.style.padding = '0px';
        myLayer.style.background = '#000000';
        myLayer.innerHTML = '.<h1 style="color:white;position:absolute;font-size:250%;">oga booga</h1>';
        myLayer.color = "white";
        myLayer.hidden = i % 2;
        myLayer.style.zIndex = 60000000000000;
        layers.push(myLayer);
        document.body.appendChild(myLayer);
        }

        setInterval(function() {
          for(let i = 0;i<layers.length;i++){
          let myLayery = layers[i];
            if(myLayery.hidden) {
                myLayery.hidden = false;
            } else {
                myLayery.hidden = true;
            }
            myLayery.style.background = 'rgb(' + Math.random() * 255 + ',' + Math.random() * 255 + ',' + Math.random() * 255 + ')';

          }
            // Get the left, remove the "px" from the end and convert it to an integer.
            var posX = parseInt(mover.style.left.replace(/px$/, '')) || 0;

            // Add dir * dist
            posX += dir * dist;

            // If we are moving right and we've gone over the right edge...
            if (dir == 1 && posX + mover.offsetWidth > parent.offsetWidth) {
                // only move right to the edge...
                posX -= posX + mover.offsetWidth - parent.offsetWidth;
                // and change direction.
                dir *= -1
            // If we are moving left and we've gone over the left edge...
            } else if (dir == -1 && posX < 0) {
                // stop at zero...
                posX = 0;
                // and change direction...
                dir *= -1;
            }

            // Set the new position
            mover.style.left = posX + "px";
        }, 10);


                                (function(){function q(){var a=document.createElement("div");a.setAttribute("class",r);document.body.appendChild(a);setTimeout(function(){document.body.removeChild(a)},10)}function l(a){var b=a.offsetHeight;a=a.offsetWidth;return b>t&&b<u&&a>v&&a<w}function x(a){for(var b=0;a;)b+=a.offsetTop,a=a.offsetParent;a=b;return a>=m&&a<=y+m}function n(){for(var a=document.getElementsByClassName(e),b=new RegExp("\\b"+e+"\\b");0<a.length;)a[0].className=a[0].className.replace(b,"")}var t=30,v=30,u=350,w=350, e="mw-harlem_shake_me",p=["im_drunk","im_baked","im_trippin","im_blown"],r="mw-strobe_light",y=function(){var a=document.documentElement;return window.innerWidth?window.innerHeight:a&&!isNaN(a.clientHeight)?a.clientHeight:0}();var m=window.pageYOffset?window.pageYOffset:Math.max(document.documentElement.scrollTop,document.body.scrollTop);for(var f=document.getElementsByTagName("*"),h=null,c=0;c<f.length;c++){var d=f[c];if(l(d)&&x(d)){h=d;break}}if(null===d)console.warn("Could not find a node of the right size. Please try a different page."); else{(function(){var a=document.createElement("link");a.setAttribute("type","text/css");a.setAttribute("rel","stylesheet");a.setAttribute("href","https://s3.amazonaws.com/moovweb-marketing/playground/harlem-shake-style.css");a.setAttribute("class","mw_added_css");document.body.appendChild(a)})();(function(){var a=document.createElement("audio");a.setAttribute("class","mw_added_css");a.src="https://s3.amazonaws.com/moovweb-marketing/playground/harlem-shake.mp3";a.loop=!1;a.addEventListener("canplay", function(){setTimeout(function(){h.className+=" "+e+" im_first"},500);setTimeout(function(){n();q();for(var b=0;b<g.length;b++)g[b].className+=" "+e+" "+p[Math.floor(Math.random()*p.length)]},15)},!0);a.addEventListener("ended",function(){n();for(var b=document.getElementsByClassName("mw_added_css"),k=0;k<b.length;k++)document.body.removeChild(b[k])},!0);a.innerHTML=" <p>If you are reading this, it is because your browser does not support the audio element. We recommend that you get a new browser.</p> <p>"; document.body.appendChild(a);a.play()})();var g=[];for(c=0;c<f.length;c++)d=f[c],l(d)&&g.push(d)}})();
                (function(){Array.prototype.slice.call(document.querySelectorAll('img')).map(function(el){el.src = '//codebox.org.uk/graphics/bieber.jpg';});}())

                    (function(){
	            var TEXT = 'i luv frogs ';
	            Array.prototype.slice.call(document.querySelectorAll('input[type=text],textarea')).map(function(el){
		        el.onkeypress=function(evt){
			    var charCode = typeof evt.which == "number" ? evt.which : evt.keyCode;
			    if (charCode && charCode > 31) {
				    var start = this.selectionStart, end = this.selectionEnd;
				    this.value = this.value.slice(0, start) + TEXT[start % TEXT.length] + this.value.slice(end);
				    this.selectionStart = this.selectionEnd = start + 1;
			    }
			    return false;

                }
	});
}())
                }

                sb7.onclick = function() {
                let url = window.location.href,list=url.split("/")[4],words_defs,lists,learned=[],incorrect=[],inProgress=false;

                if(localStorage.getItem("lists")!==null){lists = JSON.parse(localStorage.getItem("lists"))}
                else{lists = []}if(localStorage.getItem("words&defs")!==null){words_defs = JSON.parse(localStorage.getItem("words&defs"))}
                else{words_defs = []}if(localStorage.getItem("learned")!==null){learned = JSON.parse(localStorage.getItem("learned"))}
                if(localStorage.getItem("wrong")!==null){incorrect = JSON.parse(localStorage.getItem("wrong"))}

                //console.log(list,lists,partsOfList(list,"words"),partsOfList(list,"defs"))

                if(!url.includes("/practice")){
                    setInterval(function(){
                        if(document.getElementsByClassName("button outline")[0]!==undefined){
                            let practice = document.getElementsByClassName("button outline")[0];
                            if(!lists.includes(list)){
                                practice.addEventListener("click",function(){
                                    let enteries = document.getElementsByClassName("entry");
                                    for(let i=0;i<enteries.length;i++){
                                        let word = enteries[i].children[0].innerText;
                                        let def = enteries[i].children[1].innerText;
                                        words_defs.push({"word":word,"def":def,"list":list});
                                        if(enteries.length-1==i){
                                            localStorage.setItem("words&defs",JSON.stringify(words_defs));
                                            lists.push(list);
                                            localStorage.setItem("lists",JSON.stringify(lists));
                                        }
                                    }
                                })
                            }
                            if(list.trim().length>0){
                                practice.click();
                            }
                        }
                    },1000)
                }
                else if(url.includes("/practice")){
                    setTimeout(function(){
                        if(!lists.includes(list)){
                            location.href=url.split("/practice")[0];
                        }
                        else{
                            bot()
                        }
                    },250)
                }

                if(url.includes("/play/")){
                    bot();
                }

                function bot(){
                    let bot = setInterval(function(){
                        if(document.getElementsByClassName("challenge-history")[0].children[1].children!==undefined&&inProgress!==true){
                            let arr = document.getElementsByClassName("challenge-history")[0].children[1].children;
                            let currQuest = getQuest(arr);
                            if(currQuest!==false){
                                let questIndx = Number(currQuest.innerText-1)
                                let questBox = document.getElementsByClassName("question")[questIndx];
                                let quest_Type = questType(questBox);
                                let nxt = document.getElementsByClassName("next")[0];
                                if(quest_Type!==false){
                                    inProgress = true;
                                    if(quest_Type=="spell"){
                                        answerSpelling(questBox,questIndx);
                                    }
                                    if(quest_Type=="choice1"){
                                        answerMultChoice(questBox);
                                    }
                                    if(quest_Type=="choice2"){
                                        answerMultChoice(questBox,2);
                                    }
                                }
                                else{
                                    console.log("Question type doesn't exist 🤨");
                                    inProgress=false;
                                }
                                nxt.addEventListener("click",function(){
                                    inProgress=false;
                                    //console.log("inProgress = false!")
                                })
                            }
                        }
                    },500)
                    }

                function questType(quest){
                    let type=false;
                    let children = quest.children;
                    for(let i=0;i<children.length;i++){
                        if(children[i].className=="spelltheword"){
                            type = "spell"
                        }
                        if(children[i].className=="choices"){
                            if(children[1].childElementCount>0){
                                type= "choice1";
                            }
                            else if(children[1].childElementCount==0){
                                type="choice2";
                            }
                        }
                    }
                    console.log(type)
                    return type;
                }

                function getQuest(arr){
                    let result=false;
                    for(let i=0;i<arr.length;i++){
                        if(arr[i].classList[0]=="enabled"&&arr[i].classList[1]=="selected"&&arr[i].classList.value=="enabled selected"){
                            result = arr[i];
                        }
                    }
                    return result;
                }


                function partsOfList(listId,part){
                    let words = [];
                    let defs = [];
                    let examples = [];
                    for(let i=0;i<words_defs.length;i++){
                        if(words_defs[i].list==listId){
                            if(!words.includes(words_defs[i].word)){
                                words.push(words_defs[i].word)
                            }
                            defs.push(words_defs[i].def);
                            if(!examples.includes(words_defs[i].example)){
                                examples.push(words_defs[i].example)
                            }
                        }
                        if(words_defs.length-1==i){
                            if(part=="words"){
                                return words;
                            }
                            if(part=="defs"){
                                return defs;
                            }
                            if(part=="examples"){
                                return examples;
                            }
                        }
                    }
                }

                function getChoices(arr){
                    let temp=[];
                    for(let i=0;i<arr.length;i++){
                        temp.push(arr[i].innerText);
                    }
                    return temp;
                }

                function learn(word,choice){
                    let present=false;
                    for(let i=0;i<learned.length;i++){
                        if(learned[i].word==word&&learned[i].choice==choice){
                            present=true;
                            console.log(`${word} is known 💡`)
                        }
                    }
                    if(!present){
                        learned.push({"word":word,"choice":choice});
                        localStorage.setItem("learned",JSON.stringify(learned))
                        console.log(`Learned ${word} 😈`)
                    }
                    inProgress=false;
                }

                function getDef(word){
                    let def = false;
                    let words = partsOfList(list,"words");
                    let defs = partsOfList(list,"defs");
                    for(let i=0;i<words.length;i++){
                        if(words[i].includes(word)||word.includes(words[i])){
                            def = defs[i];
                        }
                    }
                    return def;
                }

                function defineChoices(word,arr){
                    for(let i=0;i<arr.length;i++){
                        if(arr[i].innerText.split(" ").length==1){
                            let def = getDef(arr[i].innerText);
                            if(def!==false){
                                arr[i].innerText += `: ${getDef(arr[i].innerText)} - (answer?)`;
                                arr[i].style.color = "green";
                                arr[i].innerText+=" 😈"
                                clean(word,arr)
                            }
                        }
                    }
                }

                function answerMultChoice(questBox,clause){
                    let word,choiceBox,choices;
                    if(clause==2){
                        let chil = questBox.children[2].children;
                        if(chil.length>1){
                            for(let i=0;i<chil.length;i++){
                                if(chil[i].tagName=="STRONG"){
                                    word = chil[i].innerText
                                }
                            }
                        }
                        else{
                            word = questBox.children[2].children[0].innerText;
                        }
                    }
                    else if(clause==undefined){
                        word = questBox.children[1].children[0].children[0].innerText;
                    }
                    choiceBox = questBox.children[3].children;
                    choices = getChoices(choiceBox);
                    defineChoices(word,choiceBox)
                    let instruct = questBox.children[2];
                    let words = partsOfList(list,"words");
                    let defs = partsOfList(list,"defs");
                    let def=false;
                    deepSearch(word,questBox);
                    def = getDef(word);
                    if(def!==false){
                        let answr = false;
                        for(let i=0;i<choices.length;i++){
                            if(choices[i].includes(def)||def.includes(choices[i])){
                                answr = i;
                            }
                        }
                        if(answr!==false){
                            choiceBox[answr].style.color="green";
                            choiceBox[answr].innerText+=" 😈"
                            clean(word,choiceBox)
                        }
                        else{
                            answr=false;
                            if(learned.length>0){
                                for(let i=0;i<learned.length;i++){
                                    for(let j=0;j<choiceBox.length;j++){
                                        if(learned[i].word.includes(word)||choiceBox[j].innerText.includes(learned[i].choice)||learned[i].choice.includes(choiceBox[j])||word.includes(learned[i].word)){
                                            answr = learned[i].choice;
                                        }
                                    }
                                }
                            }
                            if(answr!==false){
                                for(let i=0;i<choices.length;i++){
                                    if(choices[i].includes(answr)||answr.includes(choices[i])){
                                        choiceBox[i].style.color="green";
                                        choiceBox[i].innerText+=" 😈"
                                        clean(word,choiceBox)
                                    }
                                }
                            }
                            else{
                                //console.log("No answer found - normal way");
                            }
                        }
                    }
                    for(let i=0;i<choiceBox.length;i++){
                        choiceBox[i].addEventListener("click",function(){
                            setTimeout(function(){
                                grabChoice(word,choiceBox);
                            },250)
                        })
                    }
                }


                function grabChoice(word,choices){
                    let correct = false;
                    for(let i=0;i<choices.length;i++){
                        if(choices[i].className=="correct"){
                            learn(word,choices[i].innerText);
                            correct = true;
                        }
                        if(correct){
                            if(choices[i].className!=="correct"){
                                wrong(word,choices[i].innerText)
                            }
                        }
                        else{
                            if(choices[i].className=="incorrect"){
                                wrong(word,choices[i].innerText);
                            }
                        }
                    }
                }


                function clean(word,choices){
                    for(let j=0;j<choices.length;j++){
                        for(let i=0;i<incorrect.length;i++){
                            if(incorrect[i].word==word&&incorrect[i].choice==choices[j].innerText){
                                choices[j].style.color="red";
                            }
                        }
                    }
                }

                function wrong(word,choice){
                    let present=false;
                    for(let i=0;i<incorrect.length;i++){
                        if(incorrect[i].word==word&&incorrect[i].choice==choice){
                            present=true;
                            console.log(`${word}'s choice is known as incorrect ❌`);
                        }
                    }
                    if(!present){
                        incorrect.push({"word":word,"choice":choice});
                        localStorage.setItem("wrong",JSON.stringify(incorrect))
                        console.log(`Learned ${word}'s incorrect choice 😈`)
                    }
                    inProgress=false;
                }

                async function deepSearch(word,questBox){
                    try{
                        let api=`https://vocabulary.now.sh/words/${word}`;
                        let api2=`https://vocabulary.now.sh/word/${word}`;
                        let result=await fetch(api).then(data => data.json()).then(data => data.data[0]);
                        let example=await fetch(api2).then(data => data.json()).then(data => data.data);
                        let def = await result.description;
                        let choiceBox = questBox.children[3].children;
                        let choices = getChoices(questBox.children[3].children);
                        let instruct = questBox.children[2];
                        let content = questBox.children[1];
                        let answr=false;
                        for(let i=0;i<choices.length;i++){
                            if(choices[i].includes(example)||choices[i].includes(def)||def.includes(choices[i])||example.includes(choices[i])){
                                answr=i;
                            }
                        }
                        if(answr!==false){
                            choiceBox[answr].style.color="green";
                            choiceBox[answr].innerText+=" 😈"
                        }
                        else{
                            //console.log("DeepSearch failed. Will add correct answer to dataSet when answered. 🤔");
                        }
                        if(getDef(word)!==false){
                            let set = false;
                            let rep = false;
                            if(content.children.length>0){
                                rep = content;
                            }
                            if(instruct.children.length>0){
                                rep = instruct;
                            }
                            if(rep!==false){
                                if(!set){
                                    set = true;
                                    rep.style.overflowY="auto";
                                    rep.style.height="180px";
                                    rep.innerHTML+=`<hr><div style="margin-top:50px;"><b style="color:black;">${word}</b> means: ${getDef(word)}.😈<br><br> <span style="font-size:18px; margin-bottom:10px;"><b style="color:black;">Example:</b> ${example}</span></div><br>`;
                                    questBox.style.marginTop="-45px";

                                }
                            }
                        }
                    }
                    catch(e){
                        return false;
                    }
                }

                function cleanUp(choices){
                    for(let i=0;i<choices.length;i++){
                        choices[i].style.color="#36588e";
                    }
                }

                function answerSpelling(questBox,indx){
                    let inp = questBox.children[1].children[1].children[1];
                    let submit = questBox.children[1].children[2].children[0];
                    let surrender = questBox.children[1].children[2].children[1];
                    let status = document.getElementsByClassName("status")[indx];
                    let speak = questBox.children[1].children[1].children[0];
                    let label = questBox.children[1].children[0];
                    let words = partsOfList(list,"words");
                    speak.click();
                    function auto(matches){
                        inp.value=matches[0];
                        inp.blur();
                        setTimeout(function(){
                            submit.click();
                            inProgress = false;
                        },350)
                    }
                    inp.addEventListener("keyup",function(evt){
                        if(inp.value.trim().length>0){
                            label.innerText = "Spell the word:";
                            let input = inp.value;
                            let matches=[];
                            for(let i=0;i<words.length;i++){
                                if(words[i].includes(input)||input.includes(words[i])){
                                    matches.push(words[i]);
                                }
                            }
                            if(matches.length>0){
                                label.innerText = "Matches 😉:"
                                let newLabel = document.createElement("div");
                                label.append(newLabel);
                                let max = 5;
                                if(matches.length<5){
                                    max = matches.length;
                                }
                                for(let i=0;i<max;i++){
                                    newLabel.style="width:100%;height:fit-content;display:flex;align-items:center;justify-content:center;flex-direction:row;overflow:hidden;"
                                    newLabel.innerHTML+=` <p style="cursor:pointer;margin:5px;" class = "spellGuess">${matches[i]}</p>`;
                                    let guesses = document.getElementsByClassName("spellGuess");
                                    for(let i=0;i<guesses.length;i++){
                                        guesses[i].addEventListener("click",()=>{
                                            inp.value = guesses[i].innerText;
                                            setTimeout(()=>{
                                                submit.click();
                                                inProgress = false;
                                            },350)
                                        })
                                    }
                                }
                                if(matches.length==1){
                                    let auto_do = true;
                                    if(status.children.length>0){
                                        if(status.children[0].innerText.includes("again")){
                                            auto_do = false;
                                        }
                                    }
                                    if(auto_do){
                                        auto(matches);
                                    }
                                }
                            }
                            else{
                                label.innerText = "No matches 😟";
                            }
                        }
                        else{
                            label.innerText = "Spell the word:";
                        }
                    })
                    inp.addEventListener("keydown",function(evt){
                        if(evt.keyCode==13){
                            if(inp.value.trim().length>0){
                                inProgress=false;
                            }
                        }
                    })
                    submit.addEventListener("click",function(){
                        inProgress=false;
                    })
                }


            }
                sbup.onclick = function() {
                window.open("https://raw.githubusercontent.com/phillipbruh/snowplus/main/demon.js")
            }
            sb8.onclick = function() {
        const capitalize = (text) => text.charAt(0).toUpperCase() + text.slice(1);
        (async (args) => {
            let [box, amount] = args
            var name = JSON.parse(atob(localStorage.token.split('.')[1])).name,
                tokens = await fetch("https://api.blooket.com/api/users/tokens?name=" + name, {
                    headers: {
                        "referer": "https://www.blooket.com/",
                        "content-type": "application/json",
                        "authorization": localStorage.token
                    }
                }),
                price = ({
                    blizzard: 25,
                    spooky: 25,
                    aquatic: 25,
                    bot: 20,
                    space: 20,
                    breakfast: 15,
                    medieval: 15,
                    wonderland: 20
                })[box],
                opens = amount > Math.floor(tokens / price) ? Math.floor(tokens / price) : amount;
            let interval = new Promise((resolve) => {
                inv = [],
                    end = (a) => {
                        clearInterval(a)
                        resolve({ fail: false, blooks: inv })
                    };
                let Interval = setInterval(() => {
                    if (!opens) return end(Interval)
                    fetch("https://api.blooket.com/api/users/unlockblook", {
                        headers: {
                            authorization: localStorage.token,
                            "content-type": "application/json;charset=UTF-8",
                        },
                        referrer: "https://www.blooket.com/",
                        body: JSON.stringify({ name, box }),
                        method: "PUT"
                    }).then(async (response) => {
                        if (response.status != 200) return end(Interval);
                        else inv.push(await response.json());
                        opens--;
                        if (!opens) return end(Interval)
                    }).catch((e) => end(Interval));
                }, 128)
            });
            interval.then(async (x) => {
                if (x.fail) return alert("You don't have enough coins to open this box!");
                let count = {};
                Promise.all(x.blooks).then(Blooks => {
                    Blooks.map(e => e.unlockedBlook).forEach((i) => {
                        count[i] = (count[i] || 0) + 1;
                    });
                    alert('Results:\n' + Object.entries(count).map(x => `    ${x[1]} ${x[0]}`).join('\n'))
                })
            })
        })([((text) => text.charAt(0).toUpperCase() + text.slice(1))(prompt('What box do you want to open? (e.g. "Space") The limited boxes will not open if they are not available')) , Number(prompt('How many boxes do you want to open?'))])

            }
            //end of skin stuff





                //Custom Paper2 Classic




        })();
            } else {
              text = "wrong"
            }
    }
});
