/* variables */
let navBox = document.getElementsByClassName("navBox");
let gameBox = document.querySelector(".gameBox");
let btn = [];
let player = {};

/* scenen */
let scenes = {
  start: [
    { h1: "Start Page" },
    { btn: "Go to TEST PAGE", changeScene: "Test_01" },
    { btn: "The World", changeScene: "theWorld" },
  ],
  /////////////
  Test_01: [
    { h1: "Test Page" },
    { btn: "Go to START PAGE", changeScene: "start" },
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
  /* intro ==================================== */
  theWorld: [
    { h1: "The World" },
    {
      txt:
        "This story is set in a post scarcity sci-fi universe. Humanity has spread to dozens of new planets and answered all the big questions.",
    },
    {
      txt:
        "People stay young forever, AI and robots have replaced human labor, money has been abolished and war has been eradicated. Every person can live in luxurious decadence and do whatever they like, without any responsibilities.",
    },
    { btn: "Go to START PAGE", changeScene: "start" },
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
