/* variables */
let navBox = document.getElementsByClassName("navBox");
let gameBox = document.querySelector(".gameBox");
let btn = [];
let player = {};

/* ===============
scenen 
=============== */
let scenes = {
  start: [
    { h1: "Start Page" },
    { btn: "Go to TEST PAGE", changeScene: "Test_01" },
    { btn: "Go to WIKI", changeScene: "wiki" },
    { btn: "Go to HUB", changeScene: "hub" },
  ],
  Test_01: [
    { h1: "Test Page" },
    { btn: "Go to START PAGE", changeScene: "start" },
    { txt: "Ein Textfeld! Ist das nicht aufregend?" },
    { txt: "<b>bold</b>, <i>italic</i>, <u>underline</u>" },
    { btn: "Gehe zur Scene: Test_02", changeScene: "Test_02" },
    { img: "Background_cave.png" },
  ],
  Test_02: [
    { txt: "Scene: Test_02" },
    { btn: "Gehe zurück zu Test_01", changeScene: "Test_01" },
  ],
  /* wiki */
  wiki: [
    { h1: "Wiki" },
    { btn: "The World", changeScene: "theWorld" },
    { btn: "Back to STARTPAGE", changeScene: "start" },
  ],
  theWorld: [
    { h1: "The World" },
    {
      txt:
        "Humanity answered all the big questions and has transcandet into a intergalactic, post scarcity society.",
    },
    {
      txt:
        "Hundreds of world haven been colonized, people stay young forever, AI and robots have replaced human labor, money has been abolished and war has been eradicated.",
    },
    {
      txt:
        "Every person can live in luxurious live and do whatever they like, without any worries or responsibilities.",
    },
    { btn: "Back to WIKI", changeScene: "wiki" },
    { btn: "Back to STARTPAGE", changeScene: "start" },
  ],
  /* hub */
  hub: [{ h1: "HUB" }, { btn: "Back to STARTPAGE", changeScene: "start" }],
};

/* event listener: keydown*/ {
  document.addEventListener("keydown", (event) => {
    if (!btn[event.key]) return;
    clickBtn(btn[event.key]);
  });
}

function fillGameBox(scene) {
  if (!scene) return;
  btn = [[]];
  while (gameBox.children.length > 0) gameBox.lastChild.remove();
  scene.forEach((sceneElement) => createHTMLElements(sceneElement));
  window.scrollTo(0, 0);
}

function createHTMLElements(sceneElement) {
  let newDiv = document.createElement("div");
  if (sceneElement.h1) {
    newDiv.classList.add("h1");
    newDiv.innerHTML = sceneElement.h1;
  }
  if (sceneElement.txt) {
    newDiv.classList.add("txt");
    newDiv.innerHTML = sceneElement.txt;
  }
  if (sceneElement.btn) {
    newDiv.classList.add("btn");
    newDiv.innerHTML = btn.length + ".) " + sceneElement.btn;
    newDiv.addEventListener("click", () => clickBtn(sceneElement));
    btn.push(sceneElement);
  }
  if (sceneElement.img) {
    newDiv.classList.add("img");
    let newImg = document.createElement("img");
    newImg.src = `./assets/${sceneElement.img}`;
    newDiv.appendChild(newImg);
  }
  gameBox.appendChild(newDiv);
}

function clickBtn(sceneElement) {
  if (sceneElement.changeScene) fillGameBox(scenes[sceneElement.changeScene]);
}

fillGameBox(scenes.start);
