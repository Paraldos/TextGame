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
    {
      btn: 'Ponygirl (from Lost "In Laminate" / just for test)',
      changeScene: "lil_Ponygirl_01",
    },
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
  /* lil ponygirl */
  lil_Ponygirl_01: [
    {
      txt:
        "Months later, the crack of the whip pulls your eyes open suddenly. The command is made apparent, even if it goes unspoken. To your left and behind the sound of chains and straining straps announce your team rousing, and you join with them. From your kneeling position of rest you return to your feet, a difficult maneuver given your bondage but you’re well practiced by now.",
    },
    {
      txt:
        "Your uniform is red and black laminate, the harness locked across your body the former, boots and armbinder the latter. A garter belt at your waist nevertheless exposes your womanhood, ponies were kept in such a manner as per regulations, but it does at least hook to the stockings that emerge from your boots. Those are your most undoubtedly Torean feature, the knee high pieces of equipment adding a full foot to your height. Steel hooves nailed to the bottom of each ensured your footing, but it was the recurved blade that ran from them up to where your foot actually began that gave you the lengthy, loping gallop required of a ponyslave. Such boots defined you in fact, the Ministry of Improvements having not only adapted you to wearing them, but having done so in a way that made standing flat-footed difficult. Pure endurance training had provided the rest.",
    },
    {
      txt:
        "Yet such thoughts are far from your mind as you wait in trembling anticipation, beneath the appalling heat of rural Aekora. Amongst the lichen fields near the Badlands there was little shade, and your assigned handlers generally kept you from it as a matter of principle. Your skin is well tanned as a result, amply on display to allow your sweat to run freely.",
    },
    {
      btn: "You bite down on your bit nervously.",
      changeScene: "lil_Ponygirl_02",
    },
  ],
  lil_Ponygirl_02: [
    {
      txt:
        "As always, your bit gives you comfort. Laminate-padded steel, it is secured firmly between your teeth by the head harness you wear. Decorative feathers arise from your temples, red colored to match your uniform, while blinders to each side conspire with the posture collar at your throat to ensure you cannot look anywhere but forward. It kept you, forced you, to focus only on marching once the command came.",
    },
    {
      txt:
        "It does not come yet, however. Voices behind you talk casually, your handlers for the day discussing their plans. You merely try to ignore the bit of sweat that runs down your brow, a welcome gust of wind proving so very cool as it tousles your hair. Like the others the sides of your head have been shaved, leaving a mane that ended in a ponytail and red bow at your mid-back.",
    },
    {
      txt:
        "A bit further down, on your left buttock, was your brand. The Ministry of Truants’ symbol, the same all in their stable shared, encircling your new name. Or more precisely, number. 5-6, for Precinct 5, Ponyslave 6. The same marker is on your garter belt, above your cunt, and stamped on the exterior of each of your blinders.",
    },
    {
      btn:
        "Your harness shifts slightly, as behind you the cart you’re affixed to is boarded. You take a deep breath.",
      changeScene: "lil_ponygirl_03",
    },
  ],
  lil_ponygirl_03: [
    {
      txt:
        "The heavy piercing at your septum marks your inhalation, filling your lungs in expectation of-- there! To your left a sharp crack sounds suddenly, followed by an excited moan. That would be your team Lead being whipped, the heavy laminate expertly slipped up between her legs to snap smartly just above her cunt. The command to march!",
    },
    {
      txt:
        "Behind you the team’s Wheelers, the stronger of your quartet begin to step forward as you and your Lead do as well. Leaning into your harness, you trust it to keep you upright as you dig your hooves into the ground for traction. Getting started was always the hardest after all, but with one lurching step comes another, then another, each growing easier.",
    },
    { btn: "Bring your knees up high!", changeScene: "lil_ponygirl_04a" },
    { btn: "Focus on getting to speed!", changeScene: "lil_ponygirl_04b" },
  ],
  lil_ponygirl_04a: [
    {
      txt:
        "Knowing what your handlers expected, as soon as you feel the cart moving you shift into a high step, bringing your hooved boot up until your thigh is parallel with the ground. It is far from the most efficient means of marching, but form mattered as much as function on Torei, and you would have undoubtedly been whipped had you done differently.",
    },
    {
      txt:
        "Your boots extend your every step, amplifying the power of your stride, but the cart behind remains heavy—even for your team of four. As Second your job is to merely pay attention to the First at your left, while passing commands to the Wheeler behind you. All of this could be, and was utterly expected to occur without a spoken word. Your bit prevented speech of course, but even your handlers need not speak. Their whip could do the talking.",
    },
    {
      txt:
        "And talk it does. The road you march along is paved, but roughly, and occasionally the driver behind notices an upcoming pothole as readily as you do. Steering takes the form of another lash of the Whip to your Lead. One upon her left flank meant to turn right, while the opposite was expected if it landed upon the left. Just how far she was to turn was wholly her responsibility.",
    },
    {
      txt:
        "As if to test you, a sharp snap sounds to your side, your Lead's left flank.",
    },
    {
      btn: "Follow her in turning right.",
      changeScene: "lil_ponygirl_05a",
    },
    {
      btn: "Follow her in turning left.",
      changeScene: "lil_ponygirl_05b",
    },
  ],
  lil_ponygirl_04b: [
    {
      txt:
        "You may have sought to reach speed before taking proper form, but your driver demanded differently, as evidenced by the sharp crack—and the pain that arcs across your rear. A correction, not a command, one you endeavor to follow by shifting into a high step immediately, bringing your hooved boot up until your thigh is parallel with the ground. It is far from the most efficient means of marching, but form mattered as much as function on Torei.",
    },
    {
      txt:
        "Your boots extend your every step, amplifying the power of your stride, but the cart behind remains heavy—even for your team of four. As Second your job is to merely pay attention to the First at your left, while passing commands to the Wheeler behind you. All of this could be, and was utterly expected to occur without a spoken word. Your bit prevented speech of course, but even your handlers need not speak. Their whip could do the talking.",
    },
    {
      txt:
        "And talk it does. The road you march along is paved, but roughly, and occasionally the driver behind notices an upcoming pothole as readily as you do. Steering takes the form of another lash of the Whip to your Lead. One upon her left flank meant to turn right, while the opposite was expected if it landed upon the left. Just how far she was to turn was wholly her responsibility.",
    },
    {
      txt:
        "As if to test you, a sharp snap sounds to your side, your Lead’s left flank.",
    },
    {
      btn: "Follow her in turning right.",
      changeScene: "lil_ponygirl_05a",
    },
    {
      btn: "Follow her in turning left.",
      changeScene: "lil_ponygirl_05b",
    },
  ],
  lil_ponygirl_05a: [
    {
      txt:
        "If whipped on her left, your Lead would shy to her right, turning that direction. You follow suit, leading to a smooth redirection that the two girls behind follow readily. The maneuver ensures you avoid a portion of the road that sunk into the ground, but you are not awarded for your work. Following commands and marching are expected of you, nothing more. You’re a beast of burden now, denied even speech. Your handlers only rarely interacted with you directly when on patrol.",
    },
    {
      txt:
        "“How long do you figure, Sir?” Comes a voice from behind, one of the two female officers to which you had been assigned today. Her superior, a male, clearly takes a moment to consider.",
    },
    {
      txt:
        "“Well, we’re about 64 miles out from the station. 5-3,” your Lead, “and her team always set a good pace. Do the math… and we’re looking at a good eight, maybe nine hour run. That’s if we push them, perhaps only give them a singular watering break. Even so, they will be well lathered by the end.”",
    },
    {
      txt:
        'His voice turns more directly in your direction. “Any complaints?" It could have been cruel, but its not. Officer Karsis was strict, unyielding even. But he cared for the ponygirl teams.',
    },
    {
      txt:
        "Still, an eight hour march, in full tack and harness, with the sun beating down on you? Surely you have something to say to that.",
    },
    {
      btn: "Complain!",
      changeScene: "lil_ponygirl_06a",
    },
    {
      btn: "Moan!",
      changeScene: "lil_ponygirl_06b",
    },
    {
      btn: "Remain silent.!",
      changeScene: "lil_ponygirl_06c",
    },
    { btn: "Back to STARTPAGE", changeScene: "start" },
  ],
  lil_ponygirl_05b: [
    {
      txt:
        "You turn right, but unfortunately come hip to hip with your Lead, turning in the opposite direction. She snorts in complaint just as the expected lash lands upon your buttocks, a corrective whipping for having made the mistake. The sting lingers as you hurriedly change course to your left, an awkward redirection that the two girls behind eventually follow. The maneuver ensures you avoid a portion of the road that sunk into the ground, but you are not awarded for your work. Following commands and marching are expected of you, nothing more. You’re a beast of burden now, denied even speech. Your handlers only rarely interacted with you directly when on patrol.",
    },
    {
      txt:
        "“How long do you figure, Sir?” Comes a voice from behind, one of the two female officers to which you had been assigned today. Her superior, a male, clearly takes a moment to consider.",
    },
    {
      txt:
        "“Well, we’re about 64 miles out from the station. 5-3,” your Lead, “and her team always set a good pace. Do the math… and we’re looking at a good eight, maybe nine hour run. That’s if we push them, perhaps only give them a singular watering break. Even so, they will be well lathered by the end.”",
    },
    {
      txt:
        'His voice turns more directly in your direction. “Any complaints?" It could have been cruel, but its not. Officer Karsis was strict, unyielding even. But he cared for the ponygirl teams.',
    },
    {
      txt:
        "Still, an eight hour march, in full tack and harness, with the sun beating down on you? Surely you have something to say to that.",
    },
    {
      btn: "Complain!",
      changeScene: "lil_ponygirl_06a",
    },
    {
      btn: "Moan!",
      changeScene: "lil_ponygirl_06b",
    },
    {
      btn: "Remain silent.!",
      changeScene: "lil_ponygirl_06c",
    },
    { btn: "Back to STARTPAGE", changeScene: "start" },
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
