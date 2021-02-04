/* variables */
let navBox = document.getElementsByClassName("navBox");
let gameBox = document.querySelector(".gameBox");
let btn = [];
let keys = {
  test_key_01: false,
  egg_02a: false,
  egg_02b: false,
};
let player = {};

/* ===============
scenen 
=============== */
let scenes = {
  start: [
    { h1: "Start Page" },
    { btn: "Go to TEST PAGE", changeScene: "test_01" },
    { btn: "Go to WIKI", changeScene: "wiki" },
    { btn: "Story: Eggs", changeScene: "egg_01" },
  ],
  test_01: [
    { h1: "Test Page" },
    { btn: "Go to START PAGE", changeScene: "start" },
    { txt: "Ein Textfeld! Ist das nicht aufregend?" },
    { btn: "test button: change scene", changeScene: "test_02" },
    { txt: "<b>bold</b>, <i>italic</i>, <u>underline</u>" },

    {
      txt: "This text shows when 'test_key_01' is TRUE",
      showIfKeyIsTrue: "test_key_01",
    },
    {
      txt: "This text shows when 'test_key_01' is FALSE",
      showIfKeyIsFalse: "test_key_01",
    },
    { btn: "Set 'test_key_01' to true", changeScene: "test_03a" },
    { btn: 'Set "test_key_01" to false', changeScene: "test_03b" },

    { img: "test_01.jpg" },
    { img: "test_02.jpg" },
  ],
  test_02: [
    { txt: "Test: change scene" },
    { btn: "Go to TEST PAGE", changeScene: "test_01" },
  ],
  test_03a: [
    {
      txt: '"test_key_01" is now TRUE',
      setKeyToTrue: "test_key_01",
    },
    { btn: "Go to TEST PAGE", changeScene: "test_01" },
  ],
  test_03b: [
    {
      txt: '"test_key_01" is now FALSE',
      setKeyToFalse: "test_key_01",
    },
    { btn: "Go to TEST PAGE", changeScene: "test_01" },
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
  /* story: eggs */
  egg_01: [
    { h1: "Story: Eggs" },
    {
      txt:
        "You slowly come to your senses and immediately know something is wrong. You are bound and gagged, lying on the cold floor of a transport shuttle, and you feel hazy and tired. Have you been druged? What had happend? You can't remember!",
    },
    { btn: "Examine yourself.", changeScene: "egg_02a" },
    { btn: "Examine your surroundings.", changeScene: "egg_02b" },
  ],
  egg_02a: [
    {
      txt:
        "You take a deep breath, calm down and take a moment to examine yourself.",
      setKeyToTrue: "egg_02a",
    },
    {
      txt:
        "Nearly all your body is covered in grey latex. Only your face, breasts and crotch are exempt. Your legs are fitted into black, knee-high balletboots and your arms into shoulder length, black, latex gloves. A tight, black underbust corset and a tight posture collar sits snug around your throat.",
    },
    {
      txt:
        "As you try to sit up, you notice your arms are cuffed behind your back and your legs are chained together. A big, red ballgag forces your mouth painfully wide and makes intelligible speak impossible.",
    },
    { btn: "Examine your surroundings.", changeScene: "egg_02b" },
    {
      btn: "Struggle to get free.",
      showIfKeyIsTrue: "egg_02a",
      showIfKeyIsTrue: "egg_02b",
      changeScene: "egg_03",
    },
  ],
  egg_02b: [
    {
      txt:
        "You are in the cargo bay of some sort of old transport shuttle. The room is only a couple of meters wide and long, and mostly empty. The metal floor looks old and dirty and the walls are covered with scratches and rings to mount cargo. A big crane is mounted to the ceiling and waiting to lift stuff in an out through a big loading gate to your left side. The only other exit is a much small metal door and probably leads to the cockpit.",
      setKeyToTrue: "egg_02b",
    },
    {
      txt:
        "You can feel a soft humming from the engines, so you guess you are probably moving, but there are no windows, so you cannot be sure. But you can hear a muffled, male voice through the door.",
    },
    { txt: "“…found a nest…”" },
    { txt: "“…good bait…”" },
    { txt: "“…Yea! A real fucktoy…”" },
    { txt: "“…might take a few days…”" },
    { btn: "Examine yourself.", changeScene: "egg_02a" },
    {
      btn: "Struggle to get free.",
      showIfKeyIsTrue: "egg_02a",
      showIfKeyIsTrue: "egg_02b",
      changeScene: "egg_03",
    },
  ],
  egg_03: [
    {
      txt:
        "You moan and grunt, while you try to get free, but your bondage hold’s tight. After a few minutes you are totally exhausted and sweaty, but still bound and helpless.",
    },
    {
      txt:
        " You give yourself a moment to breath, but before you can try again, the cockpit door slides open. A big, scarry looking man steps towards you. He looks like he is in his 40s and his face is covered with a wild looking, brown beard. He wears an old looking environment suit and has tools and survival equipment hanging from his belt.",
    },
    {
      txt:
        "“You are awake. Good.” He slowly walks to you and starts to fit you into a tight harness of leather straps. You try to fight it, but bound and helpless as you are, you are not match for the man. After he is done, he connects your harness to the cargo crane and pushes a button, to lift you from the floor.  ",
    },
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
  window.scrollTo(0, 0);
}

function createHTMLElements(sceneElement) {
  let newDiv = document.createElement("div");
  if (keys[sceneElement.showIfKeyIsTrue] == false) return;
  if (keys[sceneElement.showIfKeyIsFalse] == true) return;

  if (sceneElement.setKeyToTrue) keys[sceneElement.setKeyToTrue] = true;
  if (sceneElement.setKeyToFalse) keys[sceneElement.setKeyToFalse] = false;
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
