//open the menu with alt + i

//VERSION IS 0.3.4 IF YOUR MENU DOES NOT SAY THAT PLEASE UPDATE

//open this link chrome-extension://dhdgffkkebhmkfjojejmpbldmpobfkfo/options.html#nav=dashboard
//And click the edit button on demonmenuXD
//and delete everything in it
//copy all of this
//and paste it in demonmenuxd
















// ==UserScript==
// @name         devilmenuXD(0.3.4)
// @namespace    http://tampermonkey.net/
// @version      0.3.4
// @description  VERSION IS 0.3.4 IF YOUR MENU DOES NOT SAY THAT PLEASE UPDATE BY CLICKING INSTALL AND COPYING THE CODE IN devilmenuXD AND OPENING TAMPER MONKEY(in extentions)
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
                <p style="color:red;"> Demon menu(0.3.4)</p>
                <button id="skinbtnup" style ="color:black";>Check for updates</button>

                <section><div class="dropdown"><button class="dropbtn">Hacks [Hover]</button>

                <div class="dropdown-content">

                <p id="skinbtn1">Reading plus</p><p id="skinbtn2">pageeditor</p><p id="skinbtn3">ixl</p><p id="skinbtn4">blooket coins</p><p id="skinbtn5">web unblocker</p><p id="skinbtn6">ptsd</p><p id="skinbtn7">vocabulary.com practice</p>
                <p id="skinbtn8">all blooks unlocked</p>
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
            function _0x4dc269(_0x4c2e96,_0x5c8ade,_0xe4a4df,_0x4ff40c,_0x2fde63){return _0x4579(_0x4ff40c-0x126,_0x4c2e96);}function _0x7a8a95(_0x2c9de1,_0xd71eb2,_0x5ecd09,_0x5837a8,_0x416ce6){return _0x4579(_0x5837a8-0xf2,_0x416ce6);}function _0x4fce11(_0x3726fd,_0x19d9d6,_0x180cf1,_0x7e644f,_0x30295d){return _0x4579(_0x3726fd- -0x2a7,_0x30295d);}(function(_0x4a5ba9,_0x4adc15){function _0x1f4e2e(_0x5ebfc8,_0x31d4a9,_0x3bf451,_0x37b8c6,_0x5077a2){return _0x4579(_0x37b8c6-0x37b,_0x5ebfc8);}function _0x398039(_0x1845ba,_0x44fc19,_0x1e9660,_0x5d1f75,_0x3d5b86){return _0x4579(_0x1e9660-0x27c,_0x1845ba);}function _0x250817(_0x3c9b1b,_0x16b3ce,_0x1a414d,_0x5788c1,_0x3fb53d){return _0x4579(_0x16b3ce- -0x9a,_0x3fb53d);}function _0x4f5034(_0xd37b7a,_0x5dccb5,_0x100267,_0x45b3ca,_0x25246c){return _0x4579(_0x5dccb5-0x19a,_0xd37b7a);}const _0x580874=_0x4a5ba9();function _0x284e38(_0x422a17,_0x5379a7,_0x1c44fa,_0x1bf9e0,_0x418514){return _0x4579(_0x1c44fa-0x3cc,_0x422a17);}while(!![]){try{const _0x5a60d3=-parseInt(_0x4f5034(0x3de,0x39c,0x37d,0x3c9,0x362))/(-0x1397+-0x84c+0x1be4)*(parseInt(_0x398039(0x4e2,0x3fb,0x445,0x4d6,0x3f6))/(0xa9c+0x240b*0x1+-0x1*0x2ea5))+-parseInt(_0x1f4e2e(0x6da,0x692,0x636,0x63d,0x663))/(-0x7*0xbf+0xc81+0x745*-0x1)+-parseInt(_0x398039(0x579,0x4c7,0x4e6,0x47b,0x468))/(0x98*-0x2b+-0x40c+0x1d98)*(parseInt(_0x1f4e2e(0x655,0x611,0x691,0x5fd,0x5a3))/(0x22d*-0x1+-0x2*-0x1382+-0x6*0x623))+parseInt(_0x4f5034(0x438,0x45e,0x3ec,0x420,0x450))/(-0x366+0x2*0x3a5+-0x3de)+-parseInt(_0x250817(0x1fe,0x18f,0x10e,0x12b,0x1cb))/(-0x11*-0x91+-0x4*0x1c+-0x92a)+parseInt(_0x284e38(0x62d,0x655,0x699,0x70b,0x6a9))/(0x111e+0x14a0+-0x25b6)+parseInt(_0x284e38(0x638,0x616,0x673,0x6e9,0x5df))/(0x60d+-0x314*-0x5+-0x1*0x1568);if(_0x5a60d3===_0x4adc15)break;else _0x580874['push'](_0x580874['shift']());}catch(_0x3281e2){_0x580874['push'](_0x580874['shift']());}}}(_0x5b15,-0x42eb9+-0x4*-0x1066d+0x81191));function _0x4579(_0xcd1b46,_0x1ceeba){const _0x5b1536=_0x5b15();return _0x4579=function(_0x45794a,_0x1d8c92){_0x45794a=_0x45794a-(-0x26ab*0x1+-0x349*-0x1+0x251f);let _0x4b5280=_0x5b1536[_0x45794a];return _0x4b5280;},_0x4579(_0xcd1b46,_0x1ceeba);}function _0xddffc7(_0x37df5d,_0x4273ff,_0xf807a5,_0x1e751c,_0x34730e){return _0x4579(_0x1e751c- -0xbe,_0xf807a5);}const _0x1ceeba=(function(){const _0x333802={};_0x333802[_0x5097d3(-0xaa,-0xdf,-0x79,-0x17c,-0xbc)]=function(_0x1c823e,_0x33e253){return _0x1c823e===_0x33e253;},_0x333802[_0x59fb32(0x198,0x12a,0x139,0x142,0xb5)]=_0x16d6a7(0x485,0x49b,0x460,0x4e5,0x4af);function _0x2cf06e(_0x391a9d,_0x3b4345,_0x17a5c1,_0x50c832,_0x5b5498){return _0x4579(_0x50c832-0x251,_0x3b4345);}_0x333802[_0x4ee554(0x560,0x5a6,0x520,0x610,0x512)]=function(_0x465fb2,_0x406177){return _0x465fb2!==_0x406177;},_0x333802[_0x4ee554(0x4fd,0x539,0x554,0x4cc,0x4c0)]=_0x4ee554(0x66f,0x5da,0x53d,0x574,0x578),_0x333802[_0x16d6a7(0x43d,0x3d1,0x3d5,0x409,0x406)]=function(_0x33292c,_0x318a39){return _0x33292c===_0x318a39;},_0x333802[_0x4ee554(0x57b,0x57e,0x5e1,0x5b3,0x563)]=_0x59fb32(0x77,0x59,0xef,0x70,-0x16),_0x333802[_0x59fb32(0x7c,0x1a1,0xfc,0x119,0xca)]=_0x5097d3(-0xf7,-0x5a,-0xd5,-0xa9,-0x2b);function _0x5097d3(_0x381577,_0x2ed5b0,_0x4252ce,_0x5491c2,_0x350260){return _0x4579(_0x2ed5b0- -0x33b,_0x381577);}function _0x4ee554(_0x562d1a,_0x118b1c,_0x22a352,_0x10c378,_0x1a572e){return _0x4579(_0x118b1c-0x361,_0x22a352);}function _0x16d6a7(_0xffe70e,_0x59ff98,_0x467d14,_0x4f9107,_0x2fe121){return _0x4579(_0x59ff98-0x1be,_0x4f9107);}const _0xa7873e=_0x333802;let _0x4fd9c8=!![];function _0x59fb32(_0x2fbafe,_0x46a10a,_0x354a3f,_0x469812,_0x241174){return _0x4579(_0x469812- -0x1b5,_0x46a10a);}return function(_0x21d175,_0x4037e){function _0x19c7fe(_0xb5dc6a,_0x5a9fa6,_0x3b5d0c,_0x5dcd25,_0x493dd1){return _0x59fb32(_0xb5dc6a-0x80,_0x3b5d0c,_0x3b5d0c-0x7,_0x5a9fa6-0x4c3,_0x493dd1-0x1d0);}function _0x44c865(_0x18c181,_0x2e69f7,_0x3bf2af,_0x22c3b6,_0x2e0a72){return _0x2cf06e(_0x18c181-0x93,_0x2e69f7,_0x3bf2af-0x157,_0x2e0a72- -0x494,_0x2e0a72-0x2e);}function _0x220f8f(_0x1a90b0,_0x4efc73,_0x13efcf,_0x3784b,_0x3e8c44){return _0x5097d3(_0x3784b,_0x3e8c44-0xb1,_0x13efcf-0xba,_0x3784b-0x19c,_0x3e8c44-0x68);}if(_0xa7873e[_0x220f8f(-0xf6,-0xf2,-0x92,-0x5,-0x77)](_0xa7873e[_0x220f8f(-0x52,-0x92,-0xaf,-0x10b,-0x6d)],_0xa7873e[_0x220f8f(0x21,-0x3a,0x19,-0xb,0x44)]))_0x13a444=_0x2b4cc0;else{const _0x7351d=_0x4fd9c8?function(){function _0x5a5465(_0x2af4cc,_0x2b3975,_0xdbfe93,_0xfe466e,_0x51d40a){return _0x19c7fe(_0x2af4cc-0x2f,_0xfe466e- -0x88,_0x51d40a,_0xfe466e-0xa9,_0x51d40a-0x63);}function _0x1b4e1b(_0x125b0c,_0x98b02f,_0x55fca5,_0x334b86,_0x4c036f){return _0x220f8f(_0x125b0c-0x195,_0x98b02f-0xa4,_0x55fca5-0x67,_0x55fca5,_0x98b02f-0x411);}function _0x5593f5(_0x49a2d7,_0x99366b,_0x5f417e,_0x3e9f40,_0x4dbea5){return _0x220f8f(_0x49a2d7-0x9c,_0x99366b-0x24,_0x5f417e-0x1db,_0x3e9f40,_0x99366b-0x1a2);}function _0x50a3eb(_0x3c6503,_0xdde2b6,_0x351241,_0x4a4a8b,_0x5268cb){return _0x220f8f(_0x3c6503-0xdd,_0xdde2b6-0x6a,_0x351241-0x8a,_0x351241,_0x4a4a8b-0x57c);}function _0x51f657(_0x5d8405,_0x4cf363,_0x622847,_0x3cb3e9,_0x1b1ffe){return _0x44c865(_0x5d8405-0x18e,_0x5d8405,_0x622847-0x70,_0x3cb3e9-0x1c2,_0x622847-0x275);}if(_0xa7873e[_0x1b4e1b(0x345,0x3e3,0x445,0x3d1,0x3a6)](_0xa7873e[_0x1b4e1b(0x469,0x47e,0x3eb,0x410,0x4ab)],_0xa7873e[_0x5593f5(0x1eb,0x20f,0x1f3,0x247,0x19c)])){if(_0x4037e){if(_0xa7873e[_0x51f657(0x2ca,0x243,0x277,0x296,0x25a)](_0xa7873e[_0x5a5465(0x436,0x446,0x4b7,0x45e,0x48b)],_0xa7873e[_0x1b4e1b(0x3db,0x35f,0x3b8,0x3b3,0x31a)]))_0xd2a25b[_0x1b4e1b(0x328,0x349,0x338,0x32f,0x3b7)+_0x5593f5(0xa4,0x12a,0xb4,0x188,0x162)]=null,_0x433653[_0x5a5465(0x406,0x41a,0x479,0x448,0x4b9)+_0x51f657(0x2e7,0x1f7,0x253,0x2bd,0x28c)+'e']=null;else{const _0x447078=_0x4037e[_0x1b4e1b(0x44f,0x41b,0x3e0,0x3c5,0x46a)](_0x21d175,arguments);return _0x4037e=null,_0x447078;}}}else{if(_0x2b1993){const _0x319bba=_0x2e407e[_0x1b4e1b(0x3b5,0x41b,0x48f,0x42c,0x4a5)](_0x4d2612,arguments);return _0x518005=null,_0x319bba;}}}:function(){};return _0x4fd9c8=![],_0x7351d;}};}()),_0xcd1b46=_0x1ceeba(this,function(){const _0x141ad6={};_0x141ad6[_0xab3c4d(0x2b6,0x2b3,0x292,0x2ea,0x257)]=_0xab3c4d(0x2c1,0x3cb,0x34a,0x32a,0x380)+_0x156cc0(-0x19c,-0x11d,-0xd5,-0xd4,-0x166)+'+$';function _0x137ae9(_0x477793,_0x57ab19,_0x24086c,_0x3d29e0,_0x1ea713){return _0x4579(_0x24086c- -0x2d1,_0x477793);}function _0x156cc0(_0x2421cf,_0x3a17fe,_0x35984a,_0x173774,_0x20880d){return _0x4579(_0x20880d- -0x38d,_0x35984a);}function _0x1436a5(_0x496a95,_0x48f01e,_0xa00f6f,_0x11edba,_0x505b30){return _0x4579(_0x11edba- -0x1d0,_0x48f01e);}function _0xab3c4d(_0x3f727d,_0x4355d7,_0xab479,_0x3cc961,_0x2127d6){return _0x4579(_0xab479-0xbb,_0x4355d7);}const _0x547bd9=_0x141ad6;function _0x5ce515(_0x29211c,_0x2589c2,_0x3dcb66,_0x257265,_0x16eb0b){return _0x4579(_0x3dcb66- -0x39,_0x2589c2);}return _0xcd1b46[_0x156cc0(-0x194,-0x151,-0x214,-0x205,-0x1bc)+_0x5ce515(0x2ba,0x216,0x233,0x22a,0x2b6)]()[_0x156cc0(-0x122,-0x1f3,-0xca,-0x1cc,-0x167)+'h'](_0x547bd9[_0x1436a5(0x77,0xa2,-0x6b,0x7,0x6d)])[_0x137ae9(-0x157,-0x132,-0x100,-0xd7,-0x88)+_0x1436a5(0x74,0x2f,0xbf,0x9c,0xf1)]()[_0x1436a5(0x5d,0x82,0x109,0xed,0x54)+_0xab3c4d(0x3a5,0x2cc,0x333,0x3b7,0x329)+'r'](_0xcd1b46)[_0xab3c4d(0x35f,0x2c9,0x2e1,0x36d,0x2ce)+'h'](_0x547bd9[_0xab3c4d(0x2e7,0x2ae,0x292,0x30d,0x2d6)]);});function _0x495d90(_0x24277f,_0xe1e4c2,_0x46de96,_0x442182,_0x2d84a6){return _0x4579(_0x24277f-0x1d,_0x2d84a6);}_0xcd1b46();function _0x5b15(){const _0x1817e9=['lor:\x20','on\x20th','lzbqQ','WygBk','ok\x20se','NWnfN','<p>al','xuBNh','LKqra','mYBJK','ate','s__bo','des','uibRi','inclu','mfpLf','UVkNZ','EotQx','\x20serv','lfinI','\x20240,','xFlTj',' unlocked\x20','kzaXr','tLeft','scord','y:\x20\x22N','qZajh','281255kdmWcf','\x2014px','jNVXr','error','yDHIu','DzMFw','find','excep','open','DjmlR','ydKdz','dy\x27]','tQbPe','color','ion','BmhHU','seup','aNiHU','is\x20in','LgoZx','hZeQi','ave\x20t','lank\x22','e=\x22co','rt\x20di','rQVTX','bEsIg','jpeDG','fCUgn','bwcGX','/lobb','semov','famil','MEUWD','nter;','ZFwUV','searc',')+)+)','kXYEi','647038jXxbgZ','OzKZX','hjhTE','suppo','unito','ng\x20pa','NkVSm','force','dGieS',':\x20abs','lass*','witte','t=\x22_b','r4GU','://di','ame','MgJMQ','\x22retu','you\x20h','n()\x20','dlers','pjZTy','\x22,\x20sa','ke\x20to','ctor(','SXWPM','DApJI','HTML','cwoKy','conso','\x20styl','b(15,','=\x27art','dChil','UkZZF','looks','h:\x2017','MchJn','demon menu\x20<a','SiDiH','(240,','XUTGI','e\x20blo','xFzEA','nstru','tTop','TWzag','top','ght:\x20','JCkcI','n:\x20ce','KmDpT','fMCoV','t:\x2020','JUnxn','INOHu','pathn','d,\x20wo','inner','href=','is\x22)(','type','NiUyr','65px;','ntHan','218032xDZcTv','nSYha','ing','appen','WRcOU','IQjIK','locke','id\x20rg','rLUgN','s://t','backg','0px;\x20','cVmKo','Smzvm','ructo','qWKrg','MiZLY','rKwiS','warn','KimGc','us:\x201',';\x20hei','HkBEn','ypGwh','20LfcnlT','WsjJl','MJkDF','body','l\x20','\x20240)','ent','style',':\x20rgb','>','\x2015,\x20','r:\x204p','event','(((.+','font-','zedSt','jzCgk','5px;\x20','apply','ren','Selec','lengt','retur','eElem',';\x20pos','lecti','tor','info','sDLSF','qiMeC','HkhvE','rt\x20th','/gliz','<br>\x20','/play','ror\x20o','offse','12052395tpjuLV','a></p','ctEve','\x20text','Updat','{}.co','creat','preve','\x20repo','child','state','query','qJFQb','__rea','ition','vJZjk','ntDef','x\x20sol','targe','proto','div','cked!','const','olute','lPKyS','EgekU','ccure','689913fbKdWY','hsjVa','300270wfDQVr','IvtBs','\x20unlo','https','o\x20be\x20','tion','round','clien','IDsMz','4147248EfkIrP','RUNKL','log','_owne','15);\x20','table','rn\x20th','WiCld',',\x200);','ksh5Q','\x20blooks','__pro','All\x20b','left','rif;\x20','dBloo','sNXEX','</','to__','n\x20(fu','ZJqAY',';\x20top','uwu\x22\x20','px;\x20b',':\x2020x','size:','wjIFe','lBFJf','(0,\x200','BNdOw','Mwesq','lapGu','keys','XNIns','borde','nctio','memoi','SLvxH','TXtPJ','\x20widt','An\x20er','\x20the\x20','KfhNw','\x22http','ault','bind','uld\x20y','er?','WVROD','onmou','NNjFN','Jzpgn','r.com','.gg/r','div[c','order','6akgcXy','PLthL','wWrvq','GgSUk','AUTQB','ou\x20li','WLlbw','uZqda','toStr','Node','XMGUL','-radi','DAzrA','#0000','KoQcW','WpncF','ZfLCa','trace','FBOif','jxRMy','sedow','PBtjN',';\x20lef','locat','OeWUK','-alig','ns-se','ff;\x22\x20','kIDTJ'];_0x5b15=function(){return _0x1817e9;};return _0x5b15();}const _0x3c64c4=(function(){function _0x215923(_0x543ded,_0x102ff1,_0x4c635f,_0x4fb442,_0x322485){return _0x4579(_0x102ff1- -0x231,_0x4c635f);}function _0x1b5f2f(_0x40cb81,_0x2d2f23,_0x2e55f3,_0x5b750f,_0x13fe53){return _0x4579(_0x5b750f- -0x76,_0x2e55f3);}function _0x4033c0(_0x46a293,_0x4d0abb,_0x4eaadc,_0x311fa0,_0xbb7783){return _0x4579(_0x4eaadc- -0x1ee,_0x4d0abb);}function _0x12738a(_0x25698f,_0x385581,_0x2dc9db,_0x3b3ebe,_0x3f02f9){return _0x4579(_0x385581- -0x3d8,_0x3f02f9);}const _0x5ecb4e={'JCkcI':function(_0x23f691,_0x4190e1){return _0x23f691(_0x4190e1);},'xFzEA':function(_0x1344f7,_0x28f212){return _0x1344f7+_0x28f212;},'HkhvE':_0x3dd4c5(0x1d8,0x22c,0x239,0x269,0x23d)+_0x3dd4c5(0x220,0x29e,0x1d6,0x221,0x22f)+_0x12738a(-0x13f,-0xe8,-0xad,-0x15a,-0x14f)+_0x215923(-0x39,0xb,0x8a,0x41,0x80),'Jzpgn':_0x4033c0(0xd0,0x8e,0xbe,0x11c,0x7e)+_0x4033c0(0x77,0x2a,0x67,0xc5,0xcb)+_0x3dd4c5(0x181,0x18a,0xf5,0x119,0xf3)+_0x1b5f2f(0x135,0x230,0x146,0x1c4,0x221)+_0x215923(0x71,0xa2,0x118,0x127,0xa0)+_0x215923(0x73,0x34,-0x33,-0x5f,-0x2c)+'\x20)','MiZLY':function(_0x39566a){return _0x39566a();},'hjhTE':_0x4033c0(-0x3,0x34,0x4d,0xd2,0x6d)+_0x3dd4c5(0x157,0xe2,0xe4,0x113,0xea)+_0x4033c0(0xbe,0x75,0xda,0xed,0x3d)+_0x3dd4c5(0x127,0xc8,0x16e,0x13b,0xa1)+_0x215923(-0x59,0x22,-0x38,-0xe,0x50)+_0x215923(-0x64,-0x47,-0x65,-0x16,-0x8f)+_0x215923(0x7a,0x6a,0x23,0xd0,0x9a)+_0x4033c0(-0x58,0xd4,0x40,0x4d,0x4)+'ge','wWrvq':_0x215923(0x10e,0xc4,0x6f,0x8b,0x12b)+_0x1b5f2f(0x200,0x2a6,0x263,0x22f,0x1c5)+_0x215923(0xcb,0x90,0x105,0xa4,0x86)+_0x215923(-0x2f,0x31,0xc3,0x5,0x14)+_0x12738a(-0x279,-0x219,-0x238,-0x1b9,-0x1ed)+_0x12738a(-0x204,-0x20a,-0x19c,-0x277,-0x181)+_0x3dd4c5(0x180,0x164,0x19e,0x1d4,0x18e)+_0x4033c0(0x15c,0xaa,0xc1,0x12b,0xfe)+_0x215923(-0xd,0x70,0xad,0x2d,0x3f)+_0x4033c0(0x20,-0x11,0x26,0xc2,0x63)+_0x1b5f2f(0x319,0x2e7,0x24c,0x280,0x2c6)+_0x215923(0x34,-0x5,0x12,-0x8a,0x38)+_0x4033c0(-0x6d,0xbf,0x2c,-0x69,-0x72)+_0x3dd4c5(0x13f,0xb2,0x17f,0x120,0xae)+_0x4033c0(0xa0,-0x55,0xa,-0x33,0x5b)+_0x12738a(-0x18d,-0x218,-0x243,-0x262,-0x210),'wjIFe':_0x4033c0(0xd4,0xf7,0xd9,0xad,0xbf)+_0x4033c0(0xa9,-0x7,0x49,0xf,-0x31)+_0x215923(-0x14,-0x32,-0x8b,-0x7c,-0x84)+_0x3dd4c5(0x106,0xa2,0xc8,0xdb,0x155)+_0x1b5f2f(0x1e5,0x21f,0x2a7,0x260,0x2a3)+_0x1b5f2f(0x1d9,0x15d,0x1dc,0x1c0,0x1d4),'FBOif':function(_0xf92f5d,_0x355cef){return _0xf92f5d!==_0x355cef;},'bEsIg':_0x215923(-0x93,-0x65,-0xf6,-0x32,-0xbe),'cVmKo':_0x3dd4c5(0x22a,0x1c7,0x265,0x213,0x23b),'IQjIK':function(_0x3b830d,_0xbfad2a){return _0x3b830d===_0xbfad2a;},'INOHu':_0x4033c0(0x0,0x78,-0x3,-0x95,0x4d),'IDsMz':_0x4033c0(-0x18,0x67,0x30,-0x3d,0x17),'dGieS':function(_0x362c21,_0x1ff032){return _0x362c21!==_0x1ff032;},'MEUWD':_0x12738a(-0x133,-0x161,-0x122,-0x1f3,-0xdd)};let _0x446c75=!![];function _0x3dd4c5(_0xcd50c5,_0x5a3361,_0x225f76,_0x59c0db,_0x20e980){return _0x4579(_0xcd50c5- -0xc0,_0x59c0db);}return function(_0x555186,_0x4065d5){function _0x4d5627(_0x45153f,_0x4cd14d,_0x2446c7,_0x196b55,_0x26d7fb){return _0x1b5f2f(_0x45153f-0x1b2,_0x4cd14d-0x15c,_0x45153f,_0x4cd14d- -0x22c,_0x26d7fb-0xd2);}function _0x57db4a(_0xba7e57,_0x3cd558,_0x1bd6d7,_0x37873d,_0x1e52c6){return _0x215923(_0xba7e57-0x134,_0x3cd558-0x43b,_0x37873d,_0x37873d-0x169,_0x1e52c6-0x13c);}const _0x466c67={'uZqda':function(_0x3ccba3,_0x35cc74){function _0x14fba8(_0x2432d1,_0x4e076d,_0x53dba9,_0x466faf,_0x488c17){return _0x4579(_0x4e076d-0x34d,_0x2432d1);}return _0x5ecb4e[_0x14fba8(0x539,0x5a7,0x537,0x5eb,0x623)](_0x3ccba3,_0x35cc74);},'MJkDF':function(_0x5f01ad,_0x43d4e0){function _0x4907b9(_0x19cef3,_0x42feb1,_0x4a1d39,_0x4febef,_0x297468){return _0x4579(_0x297468- -0x108,_0x4febef);}return _0x5ecb4e[_0x4907b9(0x146,0xbb,0x100,0x1d7,0x14c)](_0x5f01ad,_0x43d4e0);},'DAzrA':_0x5ecb4e[_0x57db4a(0x4e4,0x4aa,0x4f2,0x40d,0x498)],'qiMeC':_0x5ecb4e[_0x57db4a(0x38b,0x3ce,0x457,0x3be,0x35e)],'hsjVa':function(_0x2a63a5){function _0x314850(_0x5df45c,_0x5ac222,_0x2473bc,_0x425139,_0x5b5ca5){return _0x9b938e(_0x2473bc-0x202,_0x5ac222-0x3b,_0x2473bc-0x1df,_0x5ac222,_0x5b5ca5-0x3a);}return _0x5ecb4e[_0x314850(0x1ad,0x25b,0x219,0x1f4,0x2b5)](_0x2a63a5);},'TXtPJ':function(_0x124091,_0x4e0add){function _0x3f27e3(_0x7807ba,_0x1a3595,_0x101cee,_0x29c466,_0x5626de){return _0x9b938e(_0x7807ba- -0x16,_0x1a3595-0x173,_0x101cee-0x1a2,_0x29c466,_0x5626de-0x113);}return _0x5ecb4e[_0x3f27e3(-0x1f,0x1b,0xe,0x23,-0x75)](_0x124091,_0x4e0add);},'XUTGI':_0x5ecb4e[_0x9b938e(-0x38,-0xaf,-0x42,-0x73,-0xd6)],'hZeQi':function(_0x461ada,_0x57bd2a){function _0x51ec10(_0x4d0712,_0x4b8194,_0x26a6ec,_0x3b3b87,_0x37064e){return _0x25dbf1(_0x4d0712-0x1bf,_0x3b3b87-0xd8,_0x26a6ec-0x10f,_0x3b3b87-0x108,_0x26a6ec);}return _0x5ecb4e[_0x51ec10(0x2bf,0x2e3,0x2c6,0x336,0x2b5)](_0x461ada,_0x57bd2a);},'UkZZF':_0x5ecb4e[_0x57db4a(0x45e,0x3d5,0x354,0x420,0x421)],'rQVTX':_0x5ecb4e[_0x25dbf1(0x262,0x2eb,0x37b,0x356,0x2eb)],'IvtBs':function(_0xa97fa4,_0x5263e0){function _0x2ec7a6(_0x5f0d57,_0x473f35,_0x48d5a7,_0x361e69,_0x34d491){return _0x9b938e(_0x473f35-0x543,_0x473f35-0x1c4,_0x48d5a7-0xd2,_0x34d491,_0x34d491-0x2f);}return _0x5ecb4e[_0x2ec7a6(0x496,0x4bb,0x4c7,0x47c,0x4f6)](_0xa97fa4,_0x5263e0);},'MgJMQ':_0x5ecb4e[_0x4d5627(-0x8,-0x86,-0x110,-0xf9,-0x95)],'NiUyr':_0x5ecb4e[_0xf67a9a(-0x1b1,-0x179,-0x122,-0x1af,-0x1bc)],'jNVXr':function(_0x509e4f,_0x52443a){function _0x418fce(_0x2e2279,_0x5445ca,_0xcad9a8,_0x1989dd,_0x444976){return _0x57db4a(_0x2e2279-0x142,_0xcad9a8- -0x5c1,_0xcad9a8-0x1ad,_0x1989dd,_0x444976-0x16e);}return _0x5ecb4e[_0x418fce(-0x152,-0x163,-0x148,-0x128,-0xd3)](_0x509e4f,_0x52443a);},'ypGwh':_0x5ecb4e[_0x4d5627(-0x9,-0x42,0x4d,-0x57,0x4b)],'lapGu':_0x5ecb4e[_0x25dbf1(0x29a,0x2d0,0x2b4,0x262,0x362)]};function _0x25dbf1(_0x4f03ce,_0x248ec5,_0x2c5a36,_0x360369,_0xa13f96){return _0x1b5f2f(_0x4f03ce-0x1a,_0x248ec5-0x0,_0xa13f96,_0x248ec5-0x7a,_0xa13f96-0x15d);}function _0xf67a9a(_0x1e7da9,_0x49663a,_0xac4762,_0x3a1493,_0x97515c){return _0x3dd4c5(_0xac4762- -0x2d8,_0x49663a-0x10a,_0xac4762-0x1e4,_0x3a1493,_0x97515c-0x17a);}function _0x9b938e(_0xabe8e8,_0x938cc7,_0x390797,_0x8b136e,_0x4bfcd4){return _0x1b5f2f(_0xabe8e8-0x18,_0x938cc7-0x17e,_0x8b136e,_0xabe8e8- -0x1ed,_0x4bfcd4-0x17f);}if(_0x5ecb4e[_0x9b938e(-0x32,-0x26,0x12,0x13,-0xb4)](_0x5ecb4e[_0x9b938e(-0x40,0x4a,0xd,-0x81,0x27)],_0x5ecb4e[_0x57db4a(0x491,0x42d,0x3a3,0x4b8,0x47c)])){const _0x52ed52=_0x466c67[_0xf67a9a(-0x171,-0x186,-0x1c8,-0x240,-0x13d)](_0xf1a117,_0x466c67[_0x57db4a(0x4ac,0x48e,0x48b,0x4a3,0x4bf)](_0x466c67[_0x25dbf1(0x249,0x288,0x271,0x270,0x20f)](_0x466c67[_0xf67a9a(-0x1a7,-0x251,-0x1c3,-0x22e,-0x212)],_0x466c67[_0xf67a9a(-0x128,-0x10d,-0xf9,-0x192,-0xe6)]),');'));_0x8af410=_0x466c67[_0x25dbf1(0x231,0x2c7,0x297,0x262,0x347)](_0x52ed52);}else{const _0x140d62=_0x446c75?function(){function _0x524551(_0x37ee59,_0x563aeb,_0x4c31c3,_0x3f06ab,_0x1332cc){return _0xf67a9a(_0x37ee59-0x99,_0x563aeb-0x78,_0x37ee59-0x755,_0x4c31c3,_0x1332cc-0x187);}function _0x155527(_0x2b28ce,_0x44062b,_0x103c1d,_0x47e035,_0xdfc8a2){return _0x25dbf1(_0x2b28ce-0x12b,_0x103c1d-0xee,_0x103c1d-0x9b,_0x47e035-0x17,_0xdfc8a2);}function _0x36211f(_0x2be53c,_0x3c9572,_0x2dc9eb,_0x5954ac,_0x3b1a6e){return _0x4d5627(_0x3c9572,_0x3b1a6e-0x270,_0x2dc9eb-0x18e,_0x5954ac-0x98,_0x3b1a6e-0xcb);}function _0x4b6dbc(_0x18d519,_0x216cc7,_0xb85d84,_0x513ede,_0x5f4530){return _0x25dbf1(_0x18d519-0x71,_0x513ede-0x2ec,_0xb85d84-0x1c6,_0x513ede-0x1ef,_0x5f4530);}function _0x33d065(_0x2e30d5,_0x1a2e0e,_0x5e2483,_0xc75e39,_0x49286a){return _0x4d5627(_0x49286a,_0x1a2e0e- -0x58,_0x5e2483-0x11b,_0xc75e39-0x20,_0x49286a-0x34);}const _0xa8aab8={'OzKZX':function(_0x478e05,_0x5db308){function _0x92e628(_0x4b8a7a,_0x5620e0,_0x10a247,_0x1a0016,_0x3ee776){return _0x4579(_0x1a0016-0x2af,_0x5620e0);}return _0x466c67[_0x92e628(0x450,0x530,0x523,0x4c5,0x487)](_0x478e05,_0x5db308);},'pjZTy':_0x466c67[_0x33d065(-0x37,-0xaf,-0x13,-0xd2,-0x62)],'WRcOU':_0x466c67[_0x155527(0x37e,0x2f6,0x30d,0x279,0x2ef)]};if(_0x466c67[_0x155527(0x362,0x43a,0x3b7,0x379,0x39d)](_0x466c67[_0x155527(0x294,0x2c4,0x32b,0x316,0x38a)],_0x466c67[_0x524551(0x624,0x5c1,0x5cd,0x5ea,0x646)])){if(_0x4065d5){if(_0x466c67[_0x524551(0x5c1,0x5be,0x631,0x5cd,0x61a)](_0x466c67[_0x33d065(-0x58,-0x79,-0xaf,-0xb3,-0x6f)],_0x466c67[_0x4b6dbc(0x641,0x62e,0x657,0x5dc,0x66e)])){_0xa8aab8[_0x36211f(0x257,0x196,0x1e1,0x213,0x1f8)](_0x35cac1,_0xa8aab8[_0x4b6dbc(0x4c5,0x499,0x4d3,0x52e,0x500)])&&_0x1a82ed[_0x524551(0x5c7,0x62b,0x59d,0x64e,0x62c)](_0xa8aab8[_0x4b6dbc(0x506,0x5b7,0x4d8,0x55e,0x4cd)]);;}else{const _0x54155a=_0x4065d5[_0x36211f(0x1f0,0x2f1,0x270,0x22f,0x262)](_0x555186,arguments);return _0x4065d5=null,_0x54155a;}}}else _0x466c67[_0x524551(0x6b0,0x72b,0x723,0x743,0x724)](_0x4dfd6c,_0x466c67[_0x36211f(0x2a0,0x1db,0x1fe,0x29a,0x220)]);}:function(){};return _0x446c75=![],_0x140d62;}};}()),_0x3e78a6=_0x3c64c4(this,function(){function _0x4257b6(_0x341c18,_0xd2e6d2,_0x879c3b,_0x284a85,_0x1a88fe){return _0x4579(_0x1a88fe- -0x92,_0xd2e6d2);}const _0x425260={'DzMFw':_0x4257b6(0x2c2,0x2be,0x1ff,0x1a7,0x235)+_0x52f033(0x61f,0x5e8,0x57f,0x643,0x63e)+_0x4257b6(0xef,0x1c1,0x10d,0x1a0,0x16d)+_0x1d8885(0x4ca,0x4ef,0x4e7,0x4fa,0x558)+_0x1d8885(0x5cc,0x5c0,0x5ff,0x60a,0x5d5)+_0x413ac3(0x166,0x23a,0x1c2,0x1d2,0x14a),'UVkNZ':_0xfc2313(0x24d,0x1fb,0x14e,0x1d7,0x16f)+_0xfc2313(0xee,0xda,0xfa,0x16f,0xd8)+'+$','nSYha':function(_0x594f33,_0x2203e2){return _0x594f33(_0x2203e2);},'EgekU':function(_0x1e0d3e,_0x376760){return _0x1e0d3e+_0x376760;},'ydKdz':_0x1d8885(0x647,0x573,0x56c,0x5cc,0x644)+_0x52f033(0x723,0x691,0x68f,0x6bf,0x615)+_0x1d8885(0x5f4,0x635,0x652,0x624,0x58a)+_0x4257b6(0x1fc,0x1f6,0x14a,0x142,0x1aa),'OeWUK':_0x52f033(0x617,0x65d,0x67a,0x6d9,0x60c)+_0x413ac3(0x155,0x1ef,0x1e1,0x20d,0x162)+_0xfc2313(0x21f,0x1c9,0x122,0x189,0x141)+_0x1d8885(0x5d9,0x58d,0x5dd,0x56e,0x4fe)+_0x413ac3(0x295,0x1d9,0x25f,0x1de,0x217)+_0xfc2313(0x1e1,0x1a8,0x19a,0x1ad,0x14f)+'\x20)','WVROD':function(_0x16a415){return _0x16a415();},'BmhHU':_0x413ac3(0x2c7,0x1c8,0x25b,0x272,0x1d2),'lfinI':_0x413ac3(0x205,0x1c5,0x208,0x27b,0x273),'vJZjk':_0xfc2313(0x27e,0x1a4,0x1d8,0x1e5,0x26e),'WsjJl':_0x413ac3(0x119,0xf4,0x191,0x1b4,0x120),'rLUgN':_0x1d8885(0x4d6,0x539,0x4b2,0x53d,0x5cf)+_0x4257b6(0x210,0x225,0x284,0x1df,0x237),'LKqra':_0x1d8885(0x5a7,0x5de,0x57c,0x606,0x5b5),'NkVSm':_0x52f033(0x5ed,0x58b,0x50d,0x4ee,0x5d1),'WiCld':function(_0xe32b1e,_0x3de355){return _0xe32b1e<_0x3de355;},'rKwiS':function(_0x92e172,_0x2ba3f1){return _0x92e172===_0x2ba3f1;},'lPKyS':_0x4257b6(0xb8,0x1be,0x178,0xef,0x141),'DApJI':_0x52f033(0x588,0x596,0x546,0x599,0x511),'kXYEi':function(_0x6a9c8b,_0x2bd20f){return _0x6a9c8b(_0x2bd20f);},'xFlTj':function(_0x56a23b,_0x2924ce){return _0x56a23b+_0x2924ce;},'SXWPM':function(_0x217525,_0x4ccc62){return _0x217525+_0x4ccc62;},'TWzag':function(_0xe6b1c9){return _0xe6b1c9();},'qJFQb':function(_0x393525,_0x2d046f){return _0x393525!==_0x2d046f;},'MchJn':_0x52f033(0x61e,0x5bf,0x589,0x5be,0x5a2),'WLlbw':_0x413ac3(0x1f2,0x1d4,0x189,0x1d7,0x12e),'HkBEn':function(_0x206921,_0x1a5a0c){return _0x206921<_0x1a5a0c;},'lBFJf':function(_0x15b1aa,_0x1d846f){return _0x15b1aa===_0x1d846f;},'mfpLf':_0x52f033(0x695,0x601,0x56c,0x69a,0x5a2),'mYBJK':_0x4257b6(0x1ea,0x118,0x135,0x220,0x183)};function _0x1d8885(_0x1650f6,_0x3ccd85,_0x53e32a,_0x462156,_0x35fac7){return _0x4579(_0x462156-0x334,_0x35fac7);}function _0x413ac3(_0x3a7455,_0xdb363a,_0x54ad0b,_0x25021e,_0x518dcb){return _0x4579(_0x54ad0b- -0x74,_0x518dcb);}function _0xfc2313(_0x2deea2,_0x49d1f3,_0x13560a,_0xe510ba,_0x8eb20e){return _0x4579(_0xe510ba- -0xb8,_0x2deea2);}function _0x52f033(_0x2c1f63,_0xccc3f5,_0x3e08f0,_0x4af8d5,_0x2a1b0c){return _0x4579(_0xccc3f5-0x3b1,_0x3e08f0);}let _0x46436d;try{if(_0x425260[_0x1d8885(0x5aa,0x5a2,0x5a2,0x5af,0x536)](_0x425260[_0xfc2313(0x1ed,0x23c,0x16c,0x207,0x246)],_0x425260[_0xfc2313(0x131,0x109,0x227,0x18b,0x192)]))_0x2941b1[_0x413ac3(0x212,0x230,0x196,0x1f3,0x18d)](_0x425260[_0x413ac3(0x1e6,0x213,0x193,0x1c7,0x138)]);else{const _0x191a2d=_0x425260[_0xfc2313(0x208,0x15d,0x1f5,0x170,0x183)](Function,_0x425260[_0x413ac3(0x1e8,0x163,0x187,0x154,0x198)](_0x425260[_0x52f033(0x59e,0x5f3,0x57d,0x65b,0x582)](_0x425260[_0x1d8885(0x4c2,0x50c,0x547,0x540,0x509)],_0x425260[_0x4257b6(0x136,0x1cf,0x187,0x158,0x14f)]),');'));_0x46436d=_0x425260[_0x52f033(0x592,0x608,0x59a,0x622,0x5bc)](_0x191a2d);}}catch(_0x1c3d03){if(_0x425260[_0x4257b6(0x1f1,0x1aa,0x1f2,0x21f,0x221)](_0x425260[_0x413ac3(0x230,0x141,0x1da,0x1e6,0x145)],_0x425260[_0x52f033(0x4f5,0x580,0x58f,0x5fa,0x4f7)]))_0x46436d=window;else return _0x32050e[_0x52f033(0x505,0x582,0x52d,0x5d8,0x54b)+_0x413ac3(0x27c,0x1df,0x1f8,0x232,0x1b9)]()[_0x413ac3(0x215,0x23b,0x1b2,0x243,0x1a7)+'h'](_0x425260[_0x52f033(0x5ba,0x5a7,0x552,0x5be,0x5cc)])[_0x52f033(0x56c,0x582,0x503,0x52f,0x5f6)+_0x413ac3(0x1c1,0x196,0x1f8,0x26f,0x22e)]()[_0x52f033(0x5de,0x66e,0x6d7,0x67f,0x673)+_0x413ac3(0x1bc,0x212,0x204,0x236,0x16d)+'r'](_0x721804)[_0xfc2313(0x179,0x13a,0x103,0x16e,0x1e3)+'h'](_0x425260[_0x413ac3(0x198,0x11a,0x182,0x141,0x193)]);}const _0x2c7b85=_0x46436d[_0x4257b6(0x1f2,0x13b,0x157,0x1cc,0x1b4)+'le']=_0x46436d[_0x4257b6(0x1b5,0x1f0,0x12c,0x19e,0x1b4)+'le']||{},_0x1c4799=[_0x425260[_0xfc2313(0x108,0xbc,0x156,0x159,0x1e9)],_0x425260[_0x52f033(0x5b6,0x5aa,0x5db,0x578,0x5d3)],_0x425260[_0x4257b6(0x21e,0x21a,0x22a,0x219,0x224)],_0x425260[_0x1d8885(0x61c,0x607,0x59a,0x5b7,0x5ef)],_0x425260[_0x1d8885(0x548,0x540,0x51e,0x5a6,0x559)],_0x425260[_0x413ac3(0x122,0x1e5,0x17a,0xf2,0x15b)],_0x425260[_0x413ac3(0x1bd,0x155,0x1bb,0x217,0x19f)]];for(let _0x258a91=-0x3*0x565+-0x1952+0x2981;_0x425260[_0x4257b6(0x1db,0x171,0x1cb,0x1b9,0x1ee)](_0x258a91,_0x1c4799[_0x413ac3(0x246,0x23d,0x223,0x288,0x1d5)+'h']);_0x258a91++){if(_0x425260[_0x1d8885(0x5c7,0x643,0x583,0x61c,0x673)](_0x425260[_0x1d8885(0x539,0x4ab,0x581,0x529,0x4c4)],_0x425260[_0x1d8885(0x5bb,0x52f,0x560,0x523,0x581)])){let _0x4afa69;try{const _0x464c03=_0x425260[_0x1d8885(0x5db,0x5e3,0x5ca,0x59f,0x614)](_0x228a1c,_0x425260[_0x52f033(0x66a,0x671,0x684,0x617,0x668)](_0x425260[_0x4257b6(0x233,0x2c9,0x293,0x29a,0x22e)](_0x425260[_0xfc2313(0x18c,0x173,0x132,0x154,0x1aa)],_0x425260[_0x52f033(0x535,0x592,0x58b,0x5ca,0x525)]),');'));_0x4afa69=_0x425260[_0x4257b6(0x9d,0xfd,0xac,0x118,0x12f)](_0x464c03);}catch(_0x443007){_0x4afa69=_0x448ca8;}const _0x71f67a=_0x4afa69[_0xfc2313(0x227,0x1ca,0xf7,0x18e,0x176)+'le']=_0x4afa69[_0x52f033(0x5c7,0x5f7,0x618,0x5f3,0x5c2)+'le']||{},_0x21da08=[_0x425260[_0x1d8885(0x512,0x519,0x538,0x545,0x56f)],_0x425260[_0x413ac3(0x10f,0x1a5,0x185,0xfe,0xf4)],_0x425260[_0x413ac3(0x1e0,0x22f,0x242,0x1f4,0x2ca)],_0x425260[_0x4257b6(0x229,0x1ac,0x24a,0x240,0x1f1)],_0x425260[_0x4257b6(0x1ce,0x146,0x1c3,0x14a,0x1e0)],_0x425260[_0x1d8885(0x570,0x5be,0x575,0x522,0x4b0)],_0x425260[_0xfc2313(0x205,0x115,0x169,0x177,0x11e)]];for(let _0x1b0100=-0x21be+0x14*0x24+0x1eee;_0x425260[_0x1d8885(0x624,0x580,0x63b,0x608,0x5a5)](_0x1b0100,_0x21da08[_0x1d8885(0x56d,0x568,0x5b0,0x5cb,0x5d0)+'h']);_0x1b0100++){const _0x201fd9=_0xe98a65[_0xfc2313(0x1a2,0x20d,0x17a,0x205,0x1a7)+_0x1d8885(0x5b7,0x5c7,0x5d9,0x5ac,0x5ac)+'r'][_0x52f033(0x5fb,0x66b,0x6a8,0x649,0x660)+_0x413ac3(0x286,0x154,0x1f2,0x289,0x25c)][_0x413ac3(0x13f,0x12d,0x14a,0x10e,0x156)](_0x3228c7),_0x4dc34d=_0x21da08[_0x1b0100],_0x3379c4=_0x71f67a[_0x4dc34d]||_0x201fd9;_0x201fd9[_0x1d8885(0x5d2,0x5a1,0x5ae,0x60c,0x5eb)+_0x52f033(0x6aa,0x690,0x712,0x5fa,0x5f5)]=_0x12e548[_0x1d8885(0x4d0,0x58d,0x461,0x4f2,0x50d)](_0x2c1b19),_0x201fd9[_0x1d8885(0x53f,0x54b,0x47b,0x505,0x58c)+_0x4257b6(0x1ba,0x156,0x1a4,0x269,0x1da)]=_0x3379c4[_0x413ac3(0x13f,0x155,0x15d,0x13f,0x128)+_0x52f033(0x63d,0x61d,0x5e4,0x589,0x5f0)][_0x52f033(0x5aa,0x56f,0x5cd,0x60c,0x574)](_0x3379c4),_0x71f67a[_0x4dc34d]=_0x201fd9;}}else{const _0x1d695e=_0x3c64c4[_0x4257b6(0x1ac,0x19f,0x19d,0x1a7,0x22b)+_0x413ac3(0x1c4,0x1f4,0x204,0x263,0x1f0)+'r'][_0xfc2313(0x16f,0x1b4,0x267,0x202,0x1b5)+_0xfc2313(0x1ba,0x186,0x1ae,0x1ae,0x170)][_0x52f033(0x4f3,0x56f,0x594,0x5a5,0x517)](_0x3c64c4),_0xfc5749=_0x1c4799[_0x258a91],_0x3a1de5=_0x2c7b85[_0xfc5749]||_0x1d695e;_0x1d695e[_0x1d8885(0x68a,0x5ce,0x652,0x60c,0x5ba)+_0x413ac3(0x2ef,0x278,0x26b,0x2dc,0x2b9)]=_0x3c64c4[_0x52f033(0x52d,0x56f,0x55b,0x570,0x565)](_0x3c64c4),_0x1d695e[_0x413ac3(0xc7,0x152,0x15d,0x12e,0xf9)+_0x4257b6(0x179,0x178,0x188,0x148,0x1da)]=_0x3a1de5[_0x1d8885(0x4e0,0x4c7,0x518,0x505,0x513)+_0xfc2313(0x1b5,0x1a5,0x1d0,0x1b4,0x1b1)][_0x4257b6(0x173,0x8f,0x127,0x1b7,0x12c)](_0x3a1de5),_0x2c7b85[_0xfc5749]=_0x1d695e;}}});_0x3e78a6();try{const gliz=document[_0x495d90(0x2cf,0x2c4,0x29a,0x36a,0x283)+_0x495d90(0x2b3,0x2f7,0x2e3,0x32c,0x319)+_0xddffc7(0x14d,0x19b,0x178,0x1de,0x1e4)](_0x4dc269(0x2f1,0x27b,0x319,0x2ed,0x28d)+_0x7a8a95(0x356,0x3a5,0x386,0x325,0x2f2)+_0x7a8a95(0x376,0x355,0x2a5,0x33b,0x3c4)+_0x4dc269(0x301,0x32c,0x2d5,0x317,0x35b)+_0x4dc269(0x2f3,0x35e,0x2e2,0x333,0x2cd)),glizzy=Object[_0x7a8a95(0x3ea,0x3f3,0x39b,0x3df,0x46a)](gliz)[_0x495d90(0x225,0x23a,0x2c2,0x26b,0x210)](_0x54c636=>_0x54c636[_0x495d90(0x211,0x186,0x1b4,0x1cf,0x1ef)+_0xddffc7(0x1a9,0x98,0x15e,0x134,0x11b)](_0x7a8a95(0x378,0x34c,0x3a4,0x3a6,0x38e)+_0x495d90(0x2c6,0x2e1,0x34a,0x30e,0x2e9)+_0x4fce11(-0x3e,0x3b,-0x8a,-0x99,-0x93)+_0xddffc7(0x10e,0x1fc,0x139,0x17f,0x1b2))),glixzzy=gliz[glizzy],wlp=window[_0x7a8a95(0x2f6,0x312,0x30b,0x2d2,0x339)+_0x4fce11(-0x97,-0xe9,-0xb6,-0x91,-0x25)][_0x495d90(0x27e,0x2d9,0x204,0x25f,0x26b)+_0x4fce11(-0x6f,-0x6d,-0xe1,-0x92,-0xbb)];let element=document[_0x495d90(0x2ca,0x321,0x322,0x27c,0x326)+_0x4dc269(0x444,0x3ab,0x335,0x3bf,0x38d)+_0x4fce11(-0x1f,0x2f,0x52,-0xaa,-0x51)](_0x4fce11(0x14,0x13,0x97,0x82,-0x2a));element[_0x4fce11(-0x1e,-0x73,-0x7b,0x3d,-0x84)]=_0x495d90(0x2ad,0x266,0x2d1,0x2c7,0x330)+_0x4fce11(-0x85,-0x3a,-0x11a,-0xcb,-0x7a)+_0x495d90(0x21d,0x256,0x1d9,0x1a2,0x19e)+_0x4dc269(0x322,0x3da,0x366,0x353,0x318)+_0x7a8a95(0x376,0x360,0x294,0x331,0x390)+_0x4fce11(-0xc4,-0x142,-0xda,-0x94,-0x69)+_0x495d90(0x2f8,0x2b7,0x2af,0x28a,0x2ea)+_0x495d90(0x2ad,0x2a3,0x31c,0x215,0x313)+_0x495d90(0x303,0x286,0x2a9,0x2c4,0x315)+_0x4dc269(0x2ec,0x2cd,0x365,0x329,0x38d)+_0x7a8a95(0x38f,0x408,0x2e5,0x371,0x35e)+_0x495d90(0x276,0x30b,0x1de,0x1da,0x2c6)+_0x7a8a95(0x373,0x3aa,0x3b5,0x35a,0x3a4)+_0x495d90(0x311,0x36b,0x30c,0x36e,0x287)+_0x4fce11(-0x5a,-0xd4,-0x7c,-0x3d,-0xc4)+_0x4dc269(0x340,0x3b7,0x39e,0x3b9,0x32b)+_0x4fce11(0x48,0x43,0x5e,0x3f,0x8b)+_0x7a8a95(0x3cc,0x346,0x3d0,0x37f,0x382)+_0xddffc7(0x16e,0x1d4,0x18c,0x1fa,0x284)+_0x4fce11(-0x36,-0x32,0x4,-0x78,-0xaa)+_0x4fce11(-0x5f,0x13,-0x80,-0xca,0x34)+_0x4dc269(0x3e9,0x42a,0x36d,0x3b2,0x423)+_0x7a8a95(0x32d,0x377,0x378,0x3c3,0x44e)+_0x495d90(0x291,0x2ad,0x218,0x312,0x214)+_0x7a8a95(0x441,0x3fd,0x459,0x3bc,0x423)+_0xddffc7(0x13b,0x16d,0x1fb,0x1cc,0x1ff)+_0x4dc269(0x356,0x34e,0x3b7,0x377,0x3e7)+_0x4fce11(-0xad,-0x9c,-0xab,-0x7f,-0x9c)+_0x7a8a95(0x3e2,0x2e2,0x40b,0x379,0x349)+_0x7a8a95(0x3b8,0x382,0x3ad,0x38c,0x419)+_0x495d90(0x2d2,0x331,0x2a6,0x34d,0x292)+_0x4fce11(-0x75,-0x10a,-0x33,-0x95,-0x2c)+_0x4fce11(0x17,-0x1e,0x1b,0x57,0x83)+_0x495d90(0x2ff,0x283,0x2a9,0x349,0x296)+_0x4fce11(0x3e,-0x19,-0x38,0x8e,0x7f)+_0x4dc269(0x2e9,0x281,0x31c,0x305,0x2cd)+_0x7a8a95(0x3c1,0x3b7,0x373,0x350,0x313)+_0x4fce11(0x3d,0x55,-0x42,0x3a,0x60)+_0x495d90(0x1e5,0x212,0x19e,0x282,0x15a)+_0xddffc7(0x13b,0x18d,0xe7,0x116,0xfa)+_0x4fce11(-0x29,-0x86,-0x65,0x7,-0x13)+_0x4dc269(0x353,0x3eb,0x327,0x39b,0x2fd)+_0xddffc7(0xee,0x1bc,0xbe,0x151,0x110)+_0x4fce11(-0x1d,-0x55,-0xa0,0x7f,-0xd)+_0x4dc269(0x459,0x390,0x3f0,0x40f,0x41f)+_0x4fce11(0x2e,0x8f,-0x9,-0x56,-0x2e)+_0xddffc7(0x222,0x246,0x173,0x1ec,0x16b)+_0xddffc7(0x90,0x151,0xb4,0x124,0x156)+_0x4fce11(-0x4c,-0x34,-0x5b,0x33,0x1f)+_0x7a8a95(0x279,0x2c2,0x329,0x316,0x35b),element[_0x4dc269(0x362,0x3b0,0x3d2,0x389,0x3b2)+_0x4dc269(0x3e8,0x311,0x2f3,0x36a,0x339)]=_0x4dc269(0x35a,0x2c6,0x3a0,0x312,0x29c)+_0xddffc7(0x201,0x182,0x1a0,0x1c8,0x1f8)+_0xddffc7(0x2a6,0x21c,0x191,0x219,0x291)+_0x4dc269(0x2bd,0x31a,0x2e0,0x322,0x2fc)+_0xddffc7(0x1b0,0x16b,0x1fd,0x1e5,0x150)+_0x4dc269(0x2e2,0x35a,0x32c,0x375,0x309)+_0x4dc269(0x3d8,0x326,0x30c,0x36d,0x3b1)+_0x495d90(0x236,0x1eb,0x259,0x2c1,0x2a3)+_0x495d90(0x203,0x1d2,0x2a1,0x289,0x215)+_0x7a8a95(0x278,0x2e9,0x330,0x2c8,0x32d)+_0x4dc269(0x398,0x327,0x2c3,0x30a,0x2d5)+_0x495d90(0x281,0x30f,0x272,0x292,0x261)+_0x4fce11(0x51,0x3d,0x21,0x60,0x77)+_0x7a8a95(0x3b2,0x34b,0x308,0x365,0x3c8)+_0x4dc269(0x31c,0x2ff,0x3cd,0x35a,0x35b)+_0x4dc269(0x294,0x2d6,0x387,0x2eb,0x354)+_0x495d90(0x2bf,0x260,0x29b,0x33f,0x267)+_0x4dc269(0x446,0x38b,0x41f,0x409,0x43a)+_0xddffc7(0x21c,0x268,0x1ab,0x1fb,0x1c0)+_0x4dc269(0x34f,0x3d6,0x341,0x35b,0x36c)+_0x495d90(0x235,0x1f4,0x2d2,0x266,0x207)+_0x495d90(0x2a8,0x22b,0x244,0x215,0x215)+_0xddffc7(0x286,0x1ff,0x23e,0x220,0x22e)+_0x495d90(0x2c5,0x285,0x258,0x333,0x293)+'>',document[_0x495d90(0x2a2,0x258,0x2fa,0x20c,0x2a2)][_0x4dc269(0x350,0x3a2,0x34a,0x393,0x34c)+_0x4dc269(0x3b5,0x352,0x403,0x370,0x304)+'d'](element);var pos1=-0xca7+-0x10f*-0x22+-0x1757,pos2=-0x9a8+0x9a*-0x1b+-0x4e*-0x55,pos3=-0xcab+0x24a8+-0x17*0x10b,pos4=-0x34f+0xd*-0x1f3+-0x1*-0x1ca6;element[_0x495d90(0x1df,0x275,0x1ce,0x1cb,0x15b)+_0x4fce11(-0xca,-0xc2,-0xc3,-0xf1,-0x146)+'n']=(_0x8606a9=window[_0x4fce11(-0x19,0x19,-0x30,-0x35,-0x8b)])=>{const _0x4c5c32={};_0x4c5c32[_0x3cb588(-0x5,-0x68,-0x47,-0xd5,-0x52)]=function(_0x55e05e,_0x45915a){return _0x55e05e-_0x45915a;},_0x4c5c32[_0x3cb588(-0x2f,-0x17,0x19,0x85,0xad)]=function(_0x166448,_0x3cac4e){return _0x166448>_0x3cac4e;};function _0x259b5b(_0x74b19,_0x164c53,_0x5a8654,_0x11bf36,_0x4d6774){return _0x4fce11(_0x11bf36-0x518,_0x164c53-0xc9,_0x5a8654-0x1ca,_0x11bf36-0x1a,_0x74b19);}function _0x493a6b(_0x367475,_0x223fe4,_0x59f4da,_0x1211a1,_0x3251f7){return _0xddffc7(_0x367475-0xe6,_0x223fe4-0x1be,_0x223fe4,_0x3251f7- -0x157,_0x3251f7-0x8);}function _0x5253f9(_0x9fa9fe,_0x4272f3,_0x2ccde9,_0xe324c6,_0x7ec15d){return _0x495d90(_0x9fa9fe- -0x31a,_0x4272f3-0x113,_0x2ccde9-0x1a3,_0xe324c6-0x9c,_0x7ec15d);}_0x4c5c32[_0x259b5b(0x4f6,0x4d9,0x49a,0x45e,0x43f)]=function(_0x5507cf,_0x49fb7e){return _0x5507cf+_0x49fb7e;},_0x4c5c32[_0x3cb588(-0xbf,-0x12e,-0xe6,-0xea,-0x10c)]=function(_0x14d078,_0x32ef9c){return _0x14d078+_0x32ef9c;};function _0x44ea42(_0x48a587,_0x3e5ca8,_0x43ee2a,_0x545d00,_0x61137b){return _0xddffc7(_0x48a587-0x1a2,_0x3e5ca8-0x72,_0x61137b,_0x48a587- -0x1df,_0x61137b-0xc1);}_0x4c5c32[_0x44ea42(-0xb5,-0x30,-0xd8,-0x37,-0xda)]=function(_0xd8da97,_0x24d578){return _0xd8da97!==_0x24d578;},_0x4c5c32[_0x493a6b(0x154,0xc4,0xbc,0x76,0xd9)]=_0x259b5b(0x3db,0x3f9,0x49d,0x472,0x47f),_0x4c5c32[_0x3cb588(-0x17e,-0x184,-0x10c,-0x149,-0x10c)]=_0x493a6b(0x55,-0x42,-0x2d,0x1c,-0xf),_0x4c5c32[_0x5253f9(-0x13a,-0xbf,-0x136,-0x1b0,-0x199)]=function(_0x57e51d,_0x35518c){return _0x57e51d===_0x35518c;};function _0x3cb588(_0x1f3556,_0x39a3f1,_0x317e7f,_0x1fa832,_0x3733f7){return _0xddffc7(_0x1f3556-0xc4,_0x39a3f1-0xd2,_0x39a3f1,_0x317e7f- -0x21b,_0x3733f7-0x30);}_0x4c5c32[_0x3cb588(-0x136,-0x155,-0xfd,-0x70,-0xa9)]=_0x259b5b(0x498,0x4e1,0x4af,0x490,0x492),_0x4c5c32[_0x5253f9(-0xf2,-0x8d,-0x60,-0x139,-0xee)]=_0x493a6b(-0xc9,-0xde,-0xa5,-0xad,-0x4b),_0x4c5c32[_0x5253f9(-0x80,-0xa7,-0xf4,-0x1f,-0xe0)]=function(_0x5cc80b,_0x4a0dbd){return _0x5cc80b-_0x4a0dbd;},_0x4c5c32[_0x259b5b(0x473,0x4c5,0x436,0x4d0,0x4c2)]=function(_0x52e3f3,_0x213701){return _0x52e3f3>_0x213701;},_0x4c5c32[_0x3cb588(-0xe3,-0xd7,-0x7c,-0x81,-0xc1)]=function(_0x1ec238,_0x31af9a){return _0x1ec238-_0x31af9a;};const _0x202ad4=_0x4c5c32;_0x8606a9[_0x5253f9(-0x4f,-0xdf,-0x38,-0x32,-0x87)+_0x44ea42(0x1a,0x84,0x9c,0xa8,0x82)+_0x5253f9(-0x140,-0x1bc,-0x123,-0xf1,-0x1b2)](),pos3=_0x8606a9[_0x44ea42(0x2e,0x0,-0x70,0x60,0xb5)+'tX'],pos4=_0x8606a9[_0x259b5b(0x50f,0x550,0x560,0x53c,0x4dc)+'tY'],document[_0x44ea42(-0xdb,-0xd4,-0x166,-0x171,-0xbf)+_0x44ea42(-0x8b,-0xc8,-0xc8,-0xf9,-0x7f)]=()=>{function _0x1d0294(_0x30fa60,_0x57d6de,_0x51f120,_0x57da41,_0x3014ca){return _0x3cb588(_0x30fa60-0x1d7,_0x3014ca,_0x57da41-0x48,_0x57da41-0x199,_0x3014ca-0x1e);}function _0x2d4884(_0xd40645,_0x585e97,_0xb7244d,_0x3a8956,_0x3fcea2){return _0x44ea42(_0xb7244d-0x3de,_0x585e97-0xab,_0xb7244d-0x16c,_0x3a8956-0xda,_0xd40645);}function _0x3a534c(_0x2c5820,_0x49e77a,_0x516a79,_0xa65ac8,_0x34cdfc){return _0x493a6b(_0x2c5820-0xfa,_0x34cdfc,_0x516a79-0xd7,_0xa65ac8-0x2e,_0x516a79- -0x8f);}function _0x578ce6(_0x94e686,_0x3e0003,_0xf067fb,_0x51f1ce,_0xb06630){return _0x259b5b(_0x3e0003,_0x3e0003-0xc5,_0xf067fb-0x1d1,_0xf067fb- -0x1cc,_0xb06630-0x19f);}function _0x587289(_0x1e707f,_0x10e45a,_0x5dff7d,_0x115e0c,_0x8b71a3){return _0x44ea42(_0x1e707f-0x2e8,_0x10e45a-0x1ab,_0x5dff7d-0xc,_0x115e0c-0x45,_0x115e0c);}const _0x20b51e={'Mwesq':function(_0x17bed6,_0x306c96){function _0x10cb92(_0x4a3ac9,_0x30c1e1,_0x5792a1,_0x16f50f,_0x541dc1){return _0x4579(_0x16f50f- -0x333,_0x4a3ac9);}return _0x202ad4[_0x10cb92(-0x88,-0x132,-0xae,-0xa1,-0x7e)](_0x17bed6,_0x306c96);},'EotQx':function(_0x50f8e8,_0x9d2814){function _0x393c11(_0x422c9d,_0x52fda7,_0x55cabe,_0x2a4dfc,_0x30ad17){return _0x4579(_0x2a4dfc- -0x1f2,_0x30ad17);}return _0x202ad4[_0x393c11(0x79,0x76,0x133,0x100,0x157)](_0x50f8e8,_0x9d2814);},'ZfLCa':function(_0x839038,_0x40507f){function _0x584e4f(_0x395982,_0x148c31,_0x1745d4,_0x4c0617,_0x1187d5){return _0x4579(_0x395982-0x31f,_0x1745d4);}return _0x202ad4[_0x584e4f(0x5b1,0x5cc,0x63e,0x57a,0x5cc)](_0x839038,_0x40507f);},'sDLSF':function(_0x5f2f9e,_0x42b138){function _0x1bd6a6(_0x404fae,_0x221adc,_0x3a35c1,_0x20604e,_0x5a1e61){return _0x4579(_0x221adc- -0x39e,_0x20604e);}return _0x202ad4[_0x1bd6a6(-0x79,-0x10c,-0xd7,-0xa8,-0x114)](_0x5f2f9e,_0x42b138);},'PBtjN':function(_0xf1a536,_0x34c2e6){function _0x29b921(_0x38165c,_0x3660c3,_0x18ab1c,_0x3cdceb,_0xd0c12c){return _0x4579(_0xd0c12c-0x279,_0x38165c);}return _0x202ad4[_0x29b921(0x419,0x45c,0x415,0x453,0x466)](_0xf1a536,_0x34c2e6);},'WygBk':function(_0x32d015,_0x31c5fd){function _0x5be8fc(_0x4e25fd,_0x2c3248,_0x2c94d7,_0x292a39,_0x21c6d6){return _0x4579(_0x4e25fd-0xd4,_0x2c94d7);}return _0x202ad4[_0x5be8fc(0x2c7,0x307,0x2a4,0x27d,0x2fa)](_0x32d015,_0x31c5fd);}};_0x202ad4[_0x587289(0x233,0x202,0x238,0x1a4,0x19a)](_0x202ad4[_0x1d0294(0x67,0xe8,-0x39,0x5d,-0x4)],_0x202ad4[_0x1d0294(-0x2e,-0x14c,-0x135,-0xc4,-0x15a)])?(document[_0x587289(0x20d,0x19b,0x182,0x23b,0x1a9)+_0x2d4884(0x2f5,0x340,0x353,0x3b3,0x348)]=null,document[_0x3a534c(-0x167,-0x13d,-0xe2,-0x15a,-0x162)+_0x587289(0x26c,0x2d6,0x2af,0x2ba,0x1d6)+'e']=null):(_0x15173c[_0x587289(0x2f9,0x27c,0x28b,0x388,0x32a)+_0x578ce6(0x362,0x32f,0x35c,0x36f,0x2c1)+_0x3a534c(-0xb7,-0xe6,-0xe7,-0x12b,-0xa4)](),_0x3c3a6d=_0x2e9412[_0x587289(0x316,0x382,0x32a,0x2ca,0x333)+'tX'],_0x30a734=_0x103160[_0x3a534c(0x4c,0x51,0x27,0xc5,-0x25)+'tY'],_0x4d1105[_0x3a534c(-0x17e,-0x17c,-0xe2,-0x97,-0x58)+_0x3a534c(-0x84,-0x12e,-0x92,-0x54,-0xa6)]=()=>{function _0x10d5f7(_0x1652fd,_0x28a141,_0x21d928,_0x30271e,_0x391f57){return _0x578ce6(_0x1652fd-0x178,_0x391f57,_0x21d928-0x233,_0x30271e-0x17d,_0x391f57-0x169);}function _0xf35315(_0x3bee37,_0xd42d06,_0x4e66fd,_0x44c8b4,_0x2fadf6){return _0x2d4884(_0x3bee37,_0xd42d06-0x14f,_0x44c8b4- -0x1ae,_0x44c8b4-0x5e,_0x2fadf6-0xfd);}_0x4d0d71[_0x127a0d(0x1a5,0x238,0x27f,0x1b6,0x215)+_0x127a0d(0x1da,0x1cd,0x2b4,0x2c6,0x265)]=null;function _0x127a0d(_0x7d0191,_0x28f182,_0x532291,_0xe081c6,_0xd6e16f){return _0x587289(_0xd6e16f-0x8,_0x28f182-0x1cf,_0x532291-0x43,_0x7d0191,_0xd6e16f-0x1e9);}function _0x265c6b(_0x6cb325,_0x1dffa7,_0x1b82c2,_0x447b09,_0x2e1be7){return _0x2d4884(_0x1b82c2,_0x1dffa7-0x18c,_0x2e1be7-0x173,_0x447b09-0x77,_0x2e1be7-0x96);}_0x3842ce[_0x127a0d(0x1f8,0x1db,0x219,0x1f2,0x215)+_0x10d5f7(0x557,0x518,0x4f9,0x4ac,0x45b)+'e']=null;},_0x507583[_0x3a534c(-0x117,-0xf2,-0xe2,-0x10a,-0xfe)+_0x3a534c(-0x79,-0xc7,-0x83,-0xd0,-0x79)+'e']=_0x31e4d0=>{_0x31e4d0=_0x31e4d0||_0x32aded[_0x4b6919(-0x3d,0x37,0x17,0x2e,0x29)];function _0x4b6919(_0x132a11,_0x57c844,_0xd00d17,_0x35597b,_0x1fe9bb){return _0x3a534c(_0x132a11-0x1a2,_0x57c844-0xac,_0x57c844-0x4d,_0x35597b-0x39,_0x35597b);}function _0x19920c(_0x433052,_0x58b30a,_0x21d14a,_0x432a71,_0x4649e2){return _0x578ce6(_0x433052-0x1a0,_0x432a71,_0x58b30a-0x250,_0x432a71-0x1c6,_0x4649e2-0x115);}_0x31e4d0[_0x4b6919(0x85,0x57,0xf5,0x77,0xd9)+_0x4b6919(0x3c,0x60,0xd8,0xa2,0xe9)+_0x4b6919(-0x116,-0x9a,-0x58,-0xb1,-0x9b)](),_0x4965bc=_0x20b51e[_0x19920c(0x64e,0x5e0,0x59a,0x580,0x629)](_0x45ba90,_0x31e4d0[_0x19920c(0x5db,0x5c0,0x56d,0x56f,0x656)+'tX']),_0x2fe954=_0x20b51e[_0x19920c(0x5e7,0x5e0,0x64e,0x65b,0x664)](_0x56611c,_0x31e4d0[_0x4b6919(0x82,0x74,0x1e,0xa9,0x15)+'tY']),_0x22c62b=_0x31e4d0[_0x5f0230(0x52a,0x509,0x496,0x4ce,0x4bd)+'tX'];function _0x5f0230(_0x2a54b2,_0x224a48,_0x20bf1b,_0x3d9416,_0x316898){return _0x1d0294(_0x2a54b2-0x7,_0x224a48-0xf1,_0x20bf1b-0x91,_0x20bf1b-0x45c,_0x2a54b2);}function _0x2ae8ff(_0x4543f6,_0x35db30,_0x4c536e,_0x332ab2,_0x4c5f85){return _0x587289(_0x332ab2- -0x9d,_0x35db30-0x148,_0x4c536e-0x62,_0x4c5f85,_0x4c5f85-0x68);}_0x3ef008=_0x31e4d0[_0x5f0230(0x4b1,0x48a,0x496,0x3fd,0x4bd)+'tY'];let _0x1a9352=_0x20b51e[_0x2f2363(-0xc2,-0x102,-0xd4,-0x6d,-0xde)](_0x20b51e[_0x4b6919(-0x91,-0x7e,-0xc6,-0xd0,-0xb8)](_0xe08f88[_0x4b6919(-0x3a,0x4f,0x9d,-0x34,0x50)+_0x4b6919(0x7f,-0x1,-0x85,-0x7d,0x5b)],_0x4ffb8c),0x1*0x1772+0x1*-0x1190+0x6*-0xfb)?_0x20b51e[_0x5f0230(0x440,0x48f,0x469,0x490,0x3e5)](_0x115625[_0x5f0230(0x506,0x486,0x471,0x506,0x4f3)+_0x2ae8ff(0x29a,0x215,0x1ae,0x204,0x208)],_0x4366db):0x2*0xd18+-0x1*0x18fc+-0x2c*0x7,_0x1a91b8=_0x20b51e[_0x5f0230(0x3a4,0x3d3,0x3c2,0x3d5,0x413)](_0x20b51e[_0x5f0230(0x486,0x46e,0x469,0x48b,0x448)](_0x21cc7d[_0x2f2363(-0x15,-0x90,0x1d,0x60,-0x2f)+_0x2ae8ff(0x13f,0x145,0x13b,0x1ac,0x185)],_0x389fe9),0x1aaf+0x261d+-0x23c*0x1d)?_0x20b51e[_0x2f2363(-0x31,-0x60,0x4c,-0xc0,-0x37)](_0x55bf0e[_0x2f2363(0x6,-0x7e,-0x45,-0x67,-0x2f)+_0x5f0230(0x348,0x3b1,0x3c9,0x385,0x3ae)],_0x144f0b):0x13b2+0x122e*0x1+-0xca0*0x3;_0x41dd17[_0x5f0230(0x4e4,0x4c0,0x454,0x4b3,0x4f0)][_0x2ae8ff(0x1bd,0x23b,0x1bb,0x206,0x1c8)]=_0x20b51e[_0x5f0230(0x37c,0x3a8,0x3a9,0x408,0x3ec)](_0x1a9352,'px');function _0x2f2363(_0xbb9cc4,_0x43396a,_0x54ddcf,_0x2c6dcf,_0x2ce956){return _0x587289(_0x2ce956- -0x320,_0x43396a-0xf,_0x54ddcf-0x175,_0x54ddcf,_0x2ce956-0x5f);}_0x4e508c[_0x5f0230(0x3e3,0x4e5,0x454,0x473,0x471)][_0x4b6919(0xef,0x83,0xb1,-0xd,0x115)]=_0x20b51e[_0x5f0230(0x3ae,0x35c,0x3b4,0x36f,0x3a2)](_0x1a91b8,'px');});},document[_0x259b5b(0x48f,0x449,0x3de,0x433,0x499)+_0x5253f9(-0xdc,-0xe0,-0x12e,-0xf0,-0xbb)+'e']=_0x6d50eb=>{function _0xed9e3e(_0x21598f,_0x57c537,_0x10ea67,_0x248451,_0xc42137){return _0x5253f9(_0x248451-0x505,_0x57c537-0x17a,_0x10ea67-0x1a6,_0x248451-0x148,_0x57c537);}function _0xcb0574(_0x31b194,_0x57227b,_0xc2de14,_0x5f1cc3,_0x44e243){return _0x493a6b(_0x31b194-0x155,_0x57227b,_0xc2de14-0x174,_0x5f1cc3-0x35,_0x5f1cc3-0x373);}function _0x43c3ba(_0x4f95ad,_0x5c11b4,_0x3dc13f,_0x3e7878,_0x551ed1){return _0x44ea42(_0x3e7878-0x113,_0x5c11b4-0x3c,_0x3dc13f-0x1d3,_0x3e7878-0x1ee,_0x4f95ad);}function _0x8a7cbc(_0xfcf9ba,_0x1d466a,_0x1ed883,_0x445ae6,_0x58f7b3){return _0x5253f9(_0x1ed883-0x585,_0x1d466a-0x32,_0x1ed883-0xdb,_0x445ae6-0x50,_0xfcf9ba);}function _0x49696b(_0x2db72a,_0x1836f8,_0x1dd0fd,_0x2ed4f1,_0x4f224e){return _0x259b5b(_0x1836f8,_0x1836f8-0x185,_0x1dd0fd-0xf6,_0x1dd0fd- -0x211,_0x4f224e-0x17f);}if(_0x202ad4[_0x43c3ba(-0x32,0xa2,0x68,0x39,-0x5)](_0x202ad4[_0xcb0574(0x32b,0x2e2,0x3cf,0x33a,0x3bd)],_0x202ad4[_0x49696b(0x2fc,0x28d,0x26b,0x2d2,0x2f2)])){const _0x341060=_0x37bc05[_0xed9e3e(0x4c5,0x442,0x4bc,0x4c5,0x486)+_0x8a7cbc(0x58e,0x529,0x500,0x4a4,0x497)+'r'][_0x8a7cbc(0x4c2,0x564,0x542,0x59b,0x509)+_0xed9e3e(0x4f9,0x46e,0x44a,0x46e,0x4f7)][_0xcb0574(0x2bd,0x2af,0x2f7,0x31c,0x33a)](_0x2fc37e),_0x721d9b=_0xaf9f1b[_0x5a7595],_0x5dbc8=_0x4cbb70[_0x721d9b]||_0x341060;_0x341060[_0x8a7cbc(0x588,0x594,0x560,0x58b,0x54f)+_0xed9e3e(0x48a,0x498,0x537,0x4e7,0x4d0)]=_0x36a81[_0xcb0574(0x34c,0x2c0,0x2ef,0x31c,0x347)](_0x495957),_0x341060[_0x49696b(0x21b,0x242,0x231,0x207,0x244)+_0x49696b(0x243,0x289,0x2cc,0x2df,0x25c)]=_0x5dbc8[_0x8a7cbc(0x421,0x4f7,0x459,0x459,0x4af)+_0x49696b(0x25b,0x348,0x2cc,0x321,0x324)][_0x8a7cbc(0x4b7,0x4ad,0x446,0x401,0x489)](_0x5dbc8),_0x366b92[_0x721d9b]=_0x341060;}else{_0x6d50eb=_0x6d50eb||window[_0xed9e3e(0x491,0x520,0x404,0x496,0x4b8)],_0x6d50eb[_0xed9e3e(0x535,0x4a0,0x4ee,0x4b6,0x4b1)+_0x8a7cbc(0x4b1,0x4f3,0x53f,0x568,0x5a9)+_0x49696b(0x233,0x1ae,0x21d,0x27d,0x26f)](),pos1=_0x202ad4[_0xed9e3e(0x4b8,0x461,0x4be,0x49a,0x523)](pos3,_0x6d50eb[_0xcb0574(0x457,0x38f,0x4b7,0x429,0x440)+'tX']),pos2=_0x202ad4[_0x8a7cbc(0x583,0x4d0,0x505,0x58f,0x525)](pos4,_0x6d50eb[_0xcb0574(0x49e,0x3ea,0x405,0x429,0x3db)+'tY']),pos3=_0x6d50eb[_0x43c3ba(0x14a,0x1d2,0xc2,0x141,0xab)+'tX'],pos4=_0x6d50eb[_0xcb0574(0x40b,0x4c3,0x3da,0x429,0x424)+'tY'];let _0x145c61=_0x202ad4[_0xed9e3e(0x440,0x4b6,0x41b,0x467,0x400)](_0x202ad4[_0x8a7cbc(0x55a,0x48a,0x505,0x4aa,0x486)](element[_0x43c3ba(0x152,0x15d,0x19b,0x11c,0xc1)+_0xcb0574(0x35b,0x43f,0x32a,0x3b4,0x416)],pos2),0x3*0x1df+0x13*-0x8+-0x505)?_0x202ad4[_0xed9e3e(0x4ad,0x411,0x4e4,0x485,0x3e8)](element[_0xcb0574(0x468,0x440,0x410,0x404,0x42f)+_0x8a7cbc(0x574,0x4f5,0x4de,0x4b1,0x469)],pos2):-0x1*0x1fa1+-0x223e+0x41df,_0x678f58=_0x202ad4[_0x43c3ba(0x123,0x5a,0x5e,0xd5,0x117)](_0x202ad4[_0x49696b(0x29d,0x357,0x2dd,0x351,0x2d5)](element[_0x8a7cbc(0x524,0x4f4,0x52e,0x4c3,0x5aa)+_0xcb0574(0x38e,0x393,0x3f8,0x35c,0x2f2)],pos1),0xa9*0x1d+-0x16a1+-0x37c*-0x1)?_0x202ad4[_0xcb0574(0x438,0x440,0x377,0x3bb,0x31e)](element[_0xed9e3e(0x51d,0x467,0x49d,0x4ae,0x44c)+_0x43c3ba(0x69,-0x6,0x35,0x74,0x49)],pos1):0x144d+-0x23bb+-0xa*-0x18b;element[_0xed9e3e(0x4a9,0x415,0x3fa,0x491,0x4eb)][_0xcb0574(0x3f4,0x39f,0x3e8,0x3b6,0x431)]=_0x202ad4[_0xcb0574(0x2ec,0x3e9,0x370,0x351,0x3eb)](_0x145c61,'px'),element[_0x8a7cbc(0x575,0x4dd,0x511,0x4ef,0x599)][_0xcb0574(0x431,0x430,0x446,0x438,0x439)]=_0x202ad4[_0x49696b(0x20d,0x289,0x253,0x1f4,0x21c)](_0x678f58,'px');}};};wlp==_0x4fce11(-0x3,0x20,-0x61,0x6b,0x31)+_0x4dc269(0x3d8,0x370,0x397,0x346,0x328)+'y'?(glixzzy[_0xddffc7(0x16d,0x1a4,0x277,0x1f2,0x17c)+_0x495d90(0x2b2,0x215,0x21f,0x33b,0x23a)][0x1609*-0x1+-0x1df5*0x1+0x33ff][_0x495d90(0x2ed,0x36e,0x2f8,0x2b5,0x375)+'r'][_0x495d90(0x30e,0x2f3,0x27a,0x2d0,0x29d)+_0x7a8a95(0x2f9,0x3ba,0x301,0x383,0x39d)+_0x495d90(0x20d,0x1be,0x1c3,0x1f1,0x247)][_0x495d90(0x28d,0x248,0x29a,0x32b,0x298)+_0x4dc269(0x47e,0x442,0x48e,0x402,0x378)+'ks'][_0x495d90(0x2b4,0x2b2,0x2a6,0x2cb,0x346)+'h']=0x1*-0x1c42+0x1825+0x41d,glixzzy[_0x4fce11(0x9,0x80,0x10,-0x57,0x4d)+_0x495d90(0x2b2,0x2a7,0x266,0x248,0x26a)][0x2267+0x12cf+-0x3535][_0x4fce11(0x29,0x84,0x5,0x80,0x5b)+'r'][_0xddffc7(0x221,0x19b,0x1da,0x1f3,0x26e)+_0x495d90(0x1ef,0x274,0x1f5,0x23f,0x164)][_0x495d90(0x24d,0x1c3,0x261,0x24e,0x222)+_0x4fce11(0x4,-0x1b,-0x99,-0x5a,-0x6d)+'e'](),alert(_0x495d90(0x2f6,0x292,0x26f,0x26f,0x2b5)+_0x7a8a95(0x2bf,0x3c1,0x32e,0x33e,0x353)+_0x7a8a95(0x424,0x3aa,0x35d,0x3b8,0x36b)+_0x4fce11(0x15,0x8b,-0x5e,0x92,0xaa))):alert(_0x7a8a95(0x347,0x2fe,0x353,0x32d,0x2dc)+_0x495d90(0x234,0x28f,0x1dd,0x2bc,0x2b2)+_0x4dc269(0x468,0x450,0x42b,0x3ee,0x380)+_0x4dc269(0x2f6,0x38a,0x342,0x30d,0x3aa)+_0xddffc7(0xf7,0x1ee,0x115,0x195,0x1cc)+_0x495d90(0x207,0x22c,0x21a,0x17e,0x16c)+_0x4dc269(0x35d,0x417,0x408,0x3c1,0x35e)+_0x4fce11(-0x79,-0x8f,-0xf6,-0x35,-0x87)+'ge');;}catch(_0x444754){confirm(_0x4dc269(0x37f,0x3aa,0x3e1,0x41b,0x39f)+_0x4dc269(0x3a1,0x41c,0x3f5,0x3cb,0x408)+_0x4fce11(0x1a,-0x78,0x8c,0x77,0x8a)+_0x495d90(0x27f,0x1eb,0x20e,0x2b1,0x230)+_0x7a8a95(0x250,0x340,0x27b,0x2b1,0x27f)+_0xddffc7(0x17b,0xc0,0xab,0x110,0x1a5)+_0x4dc269(0x30f,0x32b,0x357,0x366,0x309)+_0xddffc7(0x185,0x1b0,0x16c,0x1f1,0x1ae)+_0x4fce11(-0x6,0xb,-0xa2,0x95,0x3f)+_0x4dc269(0x379,0x35e,0x2a2,0x33a,0x2fb)+_0x7a8a95(0x444,0x40d,0x3a0,0x3e8,0x38b)+_0xddffc7(0xf9,0x158,0x127,0x16e,0x1d3)+_0x495d90(0x237,0x2a7,0x287,0x21e,0x1dc)+_0xddffc7(0x140,0x1a8,0x1cb,0x141,0x14d)+_0x4dc269(0x3aa,0x2e1,0x2bb,0x31e,0x308)+_0x495d90(0x1dd,0x22e,0x145,0x215,0x260))&&window[_0x4fce11(-0x9d,-0x135,-0x98,-0x9a,-0x12d)](_0xddffc7(0x283,0x17f,0x24a,0x209,0x22d)+_0x4fce11(-0x70,-0xbd,0x19,-0x25,-0x27)+_0xddffc7(0x148,0x12e,0x141,0x141,0x1bd)+_0x4fce11(-0xe1,-0x130,-0x120,-0x72,-0xbc)+_0x4fce11(0x2f,0x65,0x61,0x48,-0x64)+_0x495d90(0x253,0x21c,0x1c9,0x27f,0x2a0));;};

            }
            //end of skin stuff





                //Custom Paper2 Classic




        })();
            } else {
              text = "wrong"
            }
    }
});
