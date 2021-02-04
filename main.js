/* variables */
let navBox = document.getElementsByClassName("navBox");
let gameBox = document.querySelector(".gameBox");
let btn = [];
let currentScene = "";
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
      key_hideIfFalse: "test_key_01",
    },
    {
      txt: "This text shows when 'test_key_01' is FALSE",
      key_hideIfTrue: "test_key_01",
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
      key_setToTrue: "test_key_01",
    },
    { btn: "Go to TEST PAGE", changeScene: "test_01" },
  ],
  test_03b: [
    {
      txt: '"test_key_01" is now FALSE',
      key_setToFalse: "test_key_01",
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
      key_setToTrue: "egg_02a",
    },
    {
      txt:
        "Nearly all your body is covered in grey latex. The only exceptions are your face, breasts, and crotch. Your legs are fitted into black, knee-high balletboots and your arms into shoulder length, black, latex gloves. A tight, black underbust corset and a tight posture collar sits snug around your throat.",
    },
    {
      txt:
        "As you try to sit up, you notice your arms are cuffed behind your back and your legs are chained together. A big, red ballgag forces your mouth painfully wide and makes intelligible speak impossible.",
    },
    {
      btn: "Examine your surroundings.",
      key_hideIfTrue: "egg_02b",
      changeScene: "egg_02b",
    },
    {
      btn: "Struggle to get free.",
      key_hideIfFalse: "egg_02b",
      changeScene: "egg_03",
    },
  ],
  egg_02b: [
    {
      txt:
        "You are in the cargo bay of some sort of old transport shuttle. The room is only a couple of meters wide and long, and mostly empty. The metal floor looks old and dirty and the walls are covered with scratches and rings to mount cargo. A big crane is mounted to the ceiling and waiting to lift stuff in an out through a big loading gate to your left side. The only other exit is a much small metal door and probably leads to the cockpit.",
      key_setToTrue: "egg_02b",
    },
    {
      txt:
        "You can feel a soft humming from the engines, so you guess you are probably moving, but there are no windows, so you cannot be sure. But you can hear a muffled, male voice through the door.",
    },
    { txt: "“…found a nest…”" },
    { txt: "“…good bait…”" },
    { txt: "“…Yea! A real prime fucktoy…”" },
    { txt: "“…might take a few days…”" },
    {
      btn: "Examine yourself.",
      changeScene: "egg_02a",
      key_hideIfTrue: "egg_02a",
    },
    {
      btn: "Struggle to get free.",
      key_hideIfFalse: "egg_02a",
      changeScene: "egg_03",
    },
  ],
  egg_03: [
    {
      txt:
        "You moan and grunt, while you try to get free, but your bondage hold’s tight. After only a few minutes you are totally exhausted and sweaty, but still bound and helpless.",
    },
    {
      txt:
        " You give yourself a moment to breath, but before you can try again, the cockpit door slides open. A big, scarry looking man steps towards you. He looks like he is in his 40s and his face is covered with a wild looking, brown beard. He wears an old looking environment suit and has tools and survival equipment hanging from his belt.",
    },
    {
      txt:
        "He stops for a moment and grumbles, “you are awake? Good.” Then he slowly walks towards you, takes what looks like a harness mad of leather belts and kneels to strap you into it.",
    },
    {
      btn: "More Bondage?! NO! Try to fight him!",
      changeScene: "egg_04a",
    },
    {
      btn: "Hold still. You don't wan't him to get angry.",
      changeScene: "egg_04b",
    },
  ],
  egg_04a: [
    {
      txt:
        "You struggle and squirm as best as you can, but even without the bondage, you would be no match for the big, strong man. After only a few moments he has enough from your antics. He turns you on your belly and pins you down with one knee on your back.",
    },
    {
      txt:
        "You still try to wiggle free as you suddenly feel a hard slap on the ass. Then another, and another, and another. He spanks you hard and without mercy until you are reduced to a sobbing mess. Your ass is pulsing from pain and burning like fire.",
    },
    {
      txt:
        "After he is done he gives you a second to breave, before he growls: “Now Missy. Wanna more or can I now finish my work?”",
    },
    { btn: "Struggle", changeScene: "egg_04aa" },
    {
      btn: "Hold still and let hem wrapp you into the harness.",
      changeScene: "egg_05",
    },
  ],
  egg_04aa: [
    {
      txt_random: [
        "You will not let him win! You fight your tears back, tack a few breaths, shift your weight, and try to roll on your back and away from this monster.",
        "Not just yet! Just as you feel he gives you a bit slack you start to squirm like crazy. There is no way you will just give in to this!",
        "Your poor ass feel terrible, but you refuse to give up. With all what is left inside of you, you buckle up and try to make him fall off you.",
      ],
    },
    {
      txt_random: [
        "But the man just pins you down again. Then he gives you another brutal spanking. You cannot fight it. After only few seconds you are sobbing and crying again, as with ever slap another flash of pain jolt through your body.",
        "The man loses his balance only for a short second, grunts angry and rewards your resistance with another barrage of painful slap to your ass. After only seconds you can no longer fight but have to plea unintelligible through your gag for mercy.",
        "The man just snorts amused and gives you a couple of extra hard slaps on the ass. You can only scream in pain, no longer able to resist.",
      ],
    },
    {
      txt:
        "After he is done he gives you a second to breave, before he growls: “Now Missy. Wanna more or can I now finish my work?”",
    },
    { btn: "Struggle", changeScene: "egg_04aa" },
    {
      btn: "Hold still and let hem wrapp you into the harness.",
      changeScene: "egg_05",
    },
  ],
  egg_04b: [
    {
      txt:
        "You hold still as the intimidating man is wrapping you into a tight leather harness. He does not react to much and works fast. Only after he is done he uses the moment to knead your tits with a regretful expression on his face.",
    },
    {
      txt:
        "“Good girl.” His voice sounds rough and hard. “You are obedient. I like that. What a waist to use you as bait.”",
    },
    {
      btn: "Lean into his hands and moan",
      changeScene: "egg_04ba",
    },
    { btn: "Hold still", changeScene: "egg_05" },
  ],
  egg_04ba: [
    {
      txt:
        "The man grins and massages your tits for a little while longer. His rough hands squeez your soft flesh and you feel your nipples get erect. A soft moan escapes your gagged mouth as you enjoy the moment.",
    },
    {
      txt:
        "But after a few seconds he just stops and shakes his head with a grin. “Nice try, slut. But you are not the first whore who tried to fuck it’s way out of this.”",
    },
    {
      btn: "Moan seductive",
      changeScene: "egg_05",
    },
    {
      btn: "Groan anoyed.",
      changeScene: "egg_05",
    },
  ],
  egg_05: [
    {
      txt:
        "After the man is done your bondage is absolute. You are like a mummy, woven into a cocoon of leather straps. Your legs pinned together and your arms to your body. There is no chance you would ever be able to free yourself.",
    },
    {
      txt:
        "“Okay Missy. I found a cave that looks inhabited.” While he speaks, he takes an aerosol can and starts to spray you from top to bottom. “The pheromones will attract the Dianoga. Just move a little around, it will find you eventually.”",
    },
    {
      txt:
        "He gets back up, fastens your harness to the crane and lifts you up, until you dangle slightly above the ground. With an evil grin he pinches your nipple. “I will come back in a few days. So, you will have some quality time with your new lover. Have fun.”",
    },
    {
      txt:
        "Then he pushes a button on a wall terminal and the loading gate, on the side of the shuttle, slides open. Wind forces grey dust into the small vehicle and you can see that you are hovering 20 to 30 meters above a wasteland of grey and black rock.",
    },
    { btn: "Next", changeScene: "egg_06" },
  ],
};

/* event listener: keydown*/ {
  document.addEventListener("keydown", (event) => {
    if (!btn[event.key]) return;
    clickBtn(btn[event.key]);
  });
}

function fillGameBox(scene) {
  console.log(currentScene);
  if (!scene) return;
  btn = [[]];
  while (gameBox.children.length > 0) gameBox.lastChild.remove();
  scene.forEach((sceneElement) => createHTMLElements(sceneElement));
  window.scrollTo(0, 0);
}

function createHTMLElements(sceneElement) {
  let newDiv = document.createElement("div");
  if (keys[sceneElement.key_hideIfFalse] == false) return;
  if (keys[sceneElement.key_hideIfTrue] == true) return;

  if (sceneElement.key_setToTrue) keys[sceneElement.key_setToTrue] = true;
  if (sceneElement.key_setToFalse) keys[sceneElement.key_setToFalse] = false;

  if (sceneElement.h1) {
    newDiv.classList.add("h1");
    newDiv.innerHTML = sceneElement.h1;
  }
  if (sceneElement.txt) {
    newDiv.classList.add("txt");
    newDiv.innerHTML = sceneElement.txt;
  }
  if (sceneElement.txt_random) {
    newDiv.classList.add("txt");
    newDiv.innerHTML =
      sceneElement.txt_random[
        Math.floor(Math.random() * sceneElement.txt_random.length)
      ];
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
  if (sceneElement.changeScene) {
    currentScene = sceneElement.changeScene;
    fillGameBox(scenes[sceneElement.changeScene]);
  }
}

fillGameBox(scenes.start);
