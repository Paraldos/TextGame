/* variables */
let navBox = document.getElementsByClassName("navBox");
let gameBox = document.querySelector(".gameBox");
let player = {
  strength: 0,
};

let scenes = {
  start: [
    { typ: "txt", txt: "Scene: Start" },
    { typ: "txt", txt: "Hier steht jede Menge Text! Ist das nicht aufregend?" },
    { typ: "btn", txt: "Gehe zur Scene: Test_01", changeScene: "Test_01" },
  ],
  Test_01: [
    { typ: "txt", txt: "Scene: Test_01" },
    { typ: "btn", txt: "Gehe zurück zur Scene: Start", changeScene: "start" },
  ],
};

function fillGameBox(scene) {
  // clear current screen
  while (gameBox.children.length > 0) gameBox.lastChild.remove();
  // fill in new stuff
  scene.forEach((sceneElement) => createHTMLElements(sceneElement));
}

function createHTMLElements(sceneElement) {
  let newDiv = document.createElement("div");
  newDiv.classList.add(sceneElement.typ);
  if (sceneElement.txt) newDiv.innerText = sceneElement.txt;
  if (sceneElement.typ == "btn")
    newDiv.addEventListener("click", () => clickBtn(sceneElement));
  // append child
  gameBox.appendChild(newDiv);
}

function clickBtn(sceneElement) {
  if (sceneElement.changeScene) fillGameBox(scenes[sceneElement.changeScene]);
}

fillGameBox(scenes.start);
