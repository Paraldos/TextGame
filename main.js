/* variables */
let navBox = document.getElementsByClassName("navBox");
let gameBox = document.querySelector(".gameBox");
let btnNumber;
let player = {
  strength: 0,
  switch_01: true,
};

let scenes = {
  // ==================
  start: [
    { typ: "txt", txt: "Scene: Start" },
    { typ: "txt", txt: "Hier steht jede Menge Text! Ist das nicht aufregend?" },
    { typ: "btn", txt: "Gehe zur Scene: Test_01", changeScene: "Test_01" },
    { typ: "txt", txt: "Test Switch_01", switch: player.switch_01 },
    { typ: "btn", txt: "Gehe zur Scene: Test_02", changeScene: "Test_02" },
  ],
  // ==================
  Test_01: [
    { typ: "txt", txt: "Scene: Test_01" },
    { typ: "btn", txt: "Gehe zurück zur Scene: Start", changeScene: "start" },
  ],
  // ==================
  Test_02: [
    { typ: "txt", txt: "Scene: Test_02" },
    { typ: "btn", txt: "Gehe zurück zur Scene: Start", changeScene: "start" },
  ],
};

function fillGameBox(scene) {
  btnNumber = 1;
  while (gameBox.children.length > 0) gameBox.lastChild.remove();
  scene.forEach((sceneElement) => createHTMLElements(sceneElement));
}

function createHTMLElements(sceneElement) {
  if (sceneElement.switch == false) return;
  let newDiv = document.createElement("div");
  newDiv.classList.add(sceneElement.typ);
  if (sceneElement.typ == "txt") newDiv.innerText = sceneElement.txt;
  if (sceneElement.typ == "btn") {
    newDiv.innerText = btnNumber + ".) " + sceneElement.txt;
    btnNumber++;
    newDiv.addEventListener("click", () => clickBtn(sceneElement));
  }
  // append child
  gameBox.appendChild(newDiv);
}

function clickBtn(sceneElement) {
  if (sceneElement.changeScene) fillGameBox(scenes[sceneElement.changeScene]);
}

fillGameBox(scenes.start);
