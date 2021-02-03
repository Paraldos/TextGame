/* variables */
let navBox = document.getElementsByClassName("navBox");
let gameBox = document.querySelector(".gameBox");
let btn = [];
let player = {};

/* scenen */
let scenes = {
  start: [
    { h1: "Start Page" },
    { btn: "Gehe zur Scene: Test_01", changeScene: "Test_01" },
    { btn: "Beedroom", changeScene: "Bedroom" },
  ],
  /////////////
  Test_01: [
    { h1: "Test Page" },
    { btn: "Gehe zur START PAGE", changeScene: "start" },
    { txt: "Ein Textfeld! Ist das nicht aufregend?" },
    { txt: "<b>bold</b>, <i>italic</i>, <u>underline</u>" },
    { btn: "Gehe zur Scene: Test_02", changeScene: "Test_02" },
    { img: "Background_cave.png" },
  ],
  /////////////
  Test_02: [
    { txt: "Scene: Test_02" },
    { btn: "Gehe zurück zu Test_01", changeScene: "Test_01" },
  ],
  /* ==================================== */
  Bedroom: [
    { txt: "You are in your bedroom." },
    { btn: "Strip and get in bed", changeScene: "Bed" },
  ],
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
    let newImg = document.createElement("img");
    newImg.src = `./assets/${sceneElement.img}`;
    newImg.classList.add("img");
    newDiv.appendChild(newImg);
  }
  gameBox.appendChild(newDiv);
}

function clickBtn(sceneElement) {
  if (sceneElement.changeScene) fillGameBox(scenes[sceneElement.changeScene]);
}

fillGameBox(scenes.start);
