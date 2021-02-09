/* variables */
let navBox = document.getElementsByClassName("navBox");
let gameBox = document.querySelector(".gameBox");
let returnBtn = document.querySelector(".return");
let homeBtn = document.querySelector(".home");

/* ==============================
variables
============================== */
let keys = {
  // ==============================
  scene: "startPage",
  btnCounter: [],
  // ==============================
  test01: 1,
  // ==============================
  examineYourself: false,
  examineSurroundings: false,
  gotSpanked: false,
  gotGroped: false,
  gropingCounter: 0,
  failedToUndress: false,
  scaredByPool: false,
  slimePoolCounter: 0,
  goBack: 0,
  breathOfAir: 0,
};
let keysHistory = [];

/* ==============================
scenen
============================== */
let content = {
  // ==============================
  startPage: [
    { h1: "Start Page" },
    { btn: "Go to TEST PAGE", changeScene: "test" },
    // { btn: "Go to WIKI", changeScene: "wiki" },
    { h1: "Story: The Xil" },
    { btn: "Dedication", changeScene: "dedication" },
    { btn: "Rude Awakening", changeScene: "xilStart" },
    { btn: "The Cave", changeScene: "theCave" },
    { btn: "Lost in the tunnels", changeScene: "exploreTunnel_01" },
    { btn: "The Xil", changeScene: "XilAttack" },
    { btn: "The Rescue", changeScene: "OrlopToTheRescue" },
  ],

  // ==============================
  test: [
    { h1: "Test Page" },
    {
      txt:
        "Normal Text, <b>bold</b>, <i>italic</i>, <u>underlined</u>, <gr>green</gr>, <re>red</re>",
    },
    { img: "test_01.jpg" },
    { img: "test_02.jpg" },

    /////////////////////////
    { btn: "Go to START PAGE", changeScene: "startPage" },
  ],

  // ==============================
  wiki: [
    { h1: "Wiki" },
    { btn: "The World", changeScene: "theWorld" },
    { btn: "Back to STARTPAGE", changeScene: "startPage" },
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
    { btn: "Back to STARTPAGE", changeScene: "startPage" },
  ],

  // ==============================
  dedication: [
    { h1: "Dedication" },
    {
      txt:
        "This game was inspired by a phenomenal RP I did with Harley / Daena. Sam and Skybound helped me a lot with correcting spelling and grammar errors. So, this project is dedicated to them – the phenomenal friends I have made online.",
    },
    {
      btn: "Back to STARTPAGE",
      changeScene: "startPage",
    },
  ],

  // ==============================
  xilStart: [
    { h1: "Chapter 1: Rude Awakening" },
    {
      txt:
        "You slowly come to your senses and immediately know something is wrong. You are bound and gagged, lying on the cold floor of a transport shuttle, and you feel hazy and tired. Have you been drugged? What had happened? You can't remember!",
    },
    { btn: "Examine yourself.", changeScene: "examineYourself" },
    { btn: "Examine your surroundings.", changeScene: "examineSurroundings" },
  ],

  examineYourself: [
    { setToTrue: "examineYourself" },
    {
      txt:
        "You take a deep breath, calm down and take a moment to examine yourself.",
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
      hide: "examineSurroundings",
      btn: "Examine your surroundings.",
      changeScene: "examineSurroundings",
    },
    {
      show: "examineSurroundings",
      btn: "Struggle to get free.",
      changeScene: "meetOrlop",
    },
  ],

  examineSurroundings: [
    { setToTrue: "examineSurroundings" },
    {
      txt:
        "You are in the cargo bay of some sort of old transport shuttle. The room is only a couple of meters wide and long, and mostly empty. The metal floor looks old and dirty, and the walls are covered with scratches and rings to mount cargo.",
    },
    {
      txt:
        "A big crane is mounted to the ceiling and waiting to lift cargo in and out through a big loading gate to your left side. The only other exit is a much smaller metal door, which probably leads to the cockpit.",
    },
    {
      txt:
        "You can feel a soft humming from the engines, so you guess you are probably moving, but there are no windows, so you cannot be sure. But you can hear a muffled, male voice through the door.",
    },
    { txt: "“…almost at the nest…”" },
    { txt: "“…good breeder…”" },
    { txt: "“…Yea! A real prime fucktoy…”" },
    { txt: "“…might take a few days…”" },
    {
      hide: "examineYourself",
      btn: "Examine yourself.",
      changeScene: "examineYourself",
    },
    {
      show: "examineYourself",
      btn: "Struggle to get free.",
      changeScene: "meetOrlop",
    },
  ],

  meetOrlop: [
    {
      txt:
        "You moan and grunt, while you try to get free, but your bondage holds tight. After only a few minutes, you are totally exhausted and sweaty, but still bound and helpless.",
    },
    {
      txt:
        "You give yourself a moment to breathe, but before you can try again, the cockpit door slides open. A big, scary-looking man steps towards you.",
    },
    {
      txt:
        "He looks like he is in his 40s and his face is covered with a wild-looking brown beard. He wears an old environment suit and has tools and survival equipment hanging from his belt. Something in the back of your mind recognizes him. You think his name is Orlop.",
    },
    {
      txt:
        "He stops for a moment and grumbles, “You're awake? Good.” Then he slowly walks towards you, takes what looks like a harness made of leather belts and kneels to strap you into it.",
    },
    {
      btn: "Try to fight him!",
      changeScene: "spanking",
    },
    {
      btn: "Give in. Better not make him angry.",
      changeScene: "Groping_01",
    },
  ],

  spanking: [
    {
      setToTrue: "gotSpanked",
    },
    {
      txt:
        "You struggle and squirm as best you can, but even without the bondage, you would be no match for this big, strong man. After only a few moments, he has enough of your antics. He turns you on your belly and pins you down with his knee on your back.",
    },
    {
      txt:
        "You still try to wiggle free as you suddenly feel a hard slap on the ass. Then another, and another, and another. He spanks you hard and without mercy until you are reduced to a sobbing mess. Your ass is pulsing from pain and burning like fire.",
    },
    {
      txt:
        "He gives you a second to catch your breath, before he growls: “Now Missy. Want more or can we finally move on?”",
    },
    { btn: "Struggle.", changeScene: "spanking02" },
    {
      btn: "Give up.",
      changeScene: "getHarnessed",
    },
  ],
  spanking02: [
    {
      txt_random: [
        "You will not let him win! You fight your tears back, take a few breaths, shift your weight, and try to roll onto your back and away from this monster.",
        "Not just yet! The moment you feel him give you a bit of slack, you start to squirm like crazy again. There is no way you will just give in to this!",
        "Your poor ass feels terrible, but you refuse to give up. With all that is left inside of you, you buckle up and try to make him fall off you.",
      ],
    },
    {
      txt_random: [
        "Orlop just pins you down again, then gives you another brutal spanking. You cannot fight it. After only few seconds, you are a sobbing mess again, as with every slap, another flash of pain jolts through your body.",
        "Orlop loses his balance only for a short second, grunts angrily, and rewards your resistance with another barrage of painful slaps to your ass. After only seconds, you can no longer fight but have to plea unintelligibly through your gag for mercy.",
        "Orlop just snorts, amused, and gives you a couple of extra-hard slaps on the ass. You can only scream in pain, no longer able to resist.",
      ],
    },
    {
      txt_random: [
        'After he is done, the annoyed man growls, "Had enough? Or would you like some more?"',
        "He stops, and you think it's over, but then he gives you another hard slap to throw you off balance. “Are you done now?”",
        "“Can we move on, or do you want some more?” Orlop sounds annoyed, and leans with more weight onto your back to drive his words home.",
        "He just shakes his head. “I have work to do. Stop wasting my time!",
        "“Just give up already. This temper tantrum will not change anything – except for you having a sore ass.”",
      ],
    },
    { btn: "Struggle.", changeScene: "spanking02" },
    {
      btn: "Give up.",
      changeScene: "getHarnessed",
    },
  ],

  Groping_01: [
    {
      setToTrue: "gotGroped",
    },
    {
      txt:
        "Instead of doing his work, Orlops rests the harness next to him and instead gropes your exposed tits. He gives a predatory smile, while he massages your soft flesh with his rough hands.",
    },
    {
      txt:
        "“What a waste.” He mumbles to himself, while he catches your nipples and gently pinches them.",
    },
    {
      btn: "Lean into his hands.",
      changeScene: "Groping_02",
    },
    { btn: "Turn away.", changeScene: "getHarnessed" },
  ],
  Groping_02: [
    {
      addOne: "gropingCounter",
    },
    {
      txt_random: [
        "You moan softly, and even lean into Orlop's hands. This feels way better than it should.",
        "You get red from shame but let Orlop fondle you without resistance. You really should not do this. Right?",
        "You feel the heat inside of you. How can you get aroused by this? Instead of thinking too much about it, you shiver and enjoy the moment.",
        "You lean into his big, strong hands. Maybe you can get him so horny that he unbinds you?",
        "You moan with lust and stretch your willing body towards Orlop's hands. Maybe you can seduce him into letting you go?",
      ],
    },
    {
      txt_random: [
        "Orlop grins and massages your tits for a little longer. “Good girl.”",
        "“You are a real slut, aren’t you? I like that.”",
        "“What a waste to use you as a breeder.”",
        "Orlop's rough hands squeeze your soft breasts hard and you can see the lust in his eyes.",
        "Suddenly you feel a jolt of pain. Orlop pinches both of your nipples hard and pulls them upwards.",
        `“Nice try, slut. But you are not the first whore who's tried to fuck her way out of this.”`,
      ],
    },
    {
      btn: "Fuck him!",
      changeScene: "sexWithOrlop",
      hideIfBelow: ["gropingCounter", 6],
    },
    {
      btn: "Lean into his hands.",
      changeScene: "Groping_02",
      hideAbove: ["gropingCounter", 5],
    },
    {
      btn: "Turn away.",
      changeScene: "getHarnessed",
    },
  ],
  sexWithOrlop: [
    { h1: "Sex with Orlop / Under Construction" },
    {
      btn: "Get Harnessed",
      changeScene: "getHarnessed",
    },
  ],

  getHarnessed: [
    {
      txt:
        "Finally, Orlop fits you into the tight leather harness. Dozens of small locks click shut. After he is done, your bondage is absolute. You are like a mummy, your legs pinned together and your arms to your body. There is no chance you would ever be able to free yourself from this tight cocoon of leather straps.",
    },
    {
      txt:
        "“Okay, missy. I found a cave that looks inhabited.” While he speaks, he takes an aerosol can and starts to spray you from top to bottom. “The pheromones will attract the Xil. Just move around a little - it will find you eventually.”",
    },
    {
      txt:
        "He gets back up, fastens your harness to the crane, and lifts you up until you dangle slightly above the ground. “I will come back in a few days. So, you will have some quality time with your new lover. Have fun, I guess.”",
    },
    {
      txt:
        "Without another word, he steps towards a terminal on the wall and pushes a button. With an angry hiss, the big loading gate of the shuttle slides open and wind blows into the vehicle.",
    },
    { btn: "Next", changeScene: "getLoweredDown" },
  ],
  getLoweredDown: [
    {
      txt:
        "The man pushes a lever, and you stop swinging around, somehow stabilized by the machine. You slowly get hoisted out of the shuttle and then lowered down. Wind blows hard against your defenseless body and you can see a grey and black wasteland about 20 to 30 meters below you.",
    },
    {
      txt:
        "Thanks to your collar, you are not able to look down. You are surprised as you pass ground level and descend even more, into a gaping cave opening. Big, intimidating walls of rock devour you until you are at least 20 meters below ground. Even without your bondage, you would never be able to climb these walls.",
    },
    {
      txt:
        "Finally your feet touch the ground, but you get lowered even farther until you lay on your stomach. You can only moan as your exposed breasts get squished against cold, wet rock. CLICK! CLICK! CLICK! CLICK! CLICK! Suddenly, dozens of tiny locks open up and you feel the pressure of your bondage lessen dramatically.",
    },
    {
      btn: "Try to get up.",
      changeScene: "theCave",
    },
  ],

  // ==============================
  theCave: [
    {
      h1: "Chapter 2: The Cave",
    },
    {
      txt:
        "You struggle a bit to get out of the leather harness, but soon you are free again. Even the cuffs on your arms and legs have opened. You immediately get the ballgag out of your mouth and start to stretch your sore muscles.",
    },
    {
      txt:
        "You feel like your entire body is aching from the stress of the bondage. After a while, you slowly get to your feet. The ballet boots restrict your movement noticeably, but if you are careful, you are able to walk reasonably well. Do you have experience in wearing this kind of boots? It feels familiar somehow...",
    },
    {
      show: "gotSpanked",
      txt:
        "Your ass still feels sore from the spanking. You gently rub your poor backside, and even that hurts a bit. The pain makes you growl in anger. You promise yourself to make the bastard pay!",
    },
    {
      show: "gotGroped",
      txt:
        "You move your hands to your breasts and cover them, a bit ashamed. It’s like you still can feel a echo of the man’s hand on them. Was it okay to let him overpower you so easy? Better not think too much about it.",
    },
    { btn: "Explore your Surrondings.", changeScene: "exploreCave" },
    {
      btn: "Get rid of this degrading outfit.",
      changeScene: "failedToUndress01",
    },
  ],
  exploreCave: [
    {
      txt:
        "You are in a big cave. The air is warm, moist and smells weird – It kind makes you dizzy if you concentrate too much on it. Dim light is entering through the big opening on the ceiling. The walls are steep and covered in wet, blue moss – there is no way you could climb them.",
    },
    {
      hide: "scaredByPool",
      txt:
        "In the center of the cave is a small pool of greenish, bubbling, slim. It looks hot and gives you an uneasy feeling. It is probably the source of the warmth and moisture in the air.",
    },
    {
      show: "scaredByPool",
      txt:
        "In the middle of the cave is the pool of aphrodisiac slime. It still gives you an uneasy feeling. But something inside of you also wants to get closer again. Better to stay away from it.",
    },
    {
      txt:
        "Also, the wall is covered with small little holes, but they are all way to small for you to fit through. Except one big tunnel, which seemingly leads deeper into the cave.",
    },
    {
      btn: "Get rid of this degrading outfit.",
      changeScene: "failedToUndress01",
      hide: "failedToUndress",
    },
    {
      btn: "Examine the slime pool.",
      changeScene: "slimePool",
      hide: "scaredByPool",
    },
    {
      show: "scaredByPool",
      btn: "You cannot control it! Go back to the pool.",
      changeScene: "slimePool",
    },
    {
      btn: "Examine the small holes in the wall.",
      changeScene: "smallHoles",
    },
    {
      btn: "Examine the tunnel.",
      changeScene: "theTunnel",
    },
  ],
  failedToUndress01: [
    { setToTrue: "failedToUndress" },
    {
      txt:
        "You try to get rid of the annoying posture collar first, but you cannot find a seal. It nearly seems like the thick, black leather has no opening at all.",
    },
    {
      txt:
        "Frustrated you try the ballet boots next. But after only a few moments you find them to be sealed with a small padlock to your legs and they are way to tight to just pull them off. ",
    },
    {
      txt:
        "As your frustration grows you shift your attention towards the corset and it also is stuck to your body. It fits tightly and is sealed with padlocks. You have no way to get out of it.",
    },
    {
      btn: "Next",
      changeScene: "failedToUndress02",
    },
  ],
  failedToUndress02: [
    {
      txt:
        "Even the latex suit is impossible to remove. It seems somehow melted to your skin and there is not a single gap or fold you could use to peal it off. It would be impressive and even sexy if the circumstances where different.",
    },
    {
      txt:
        "Come to think of it, you really do look hot. You move your hand's alonge your latex covered body, gently touching your hips and breasts, and...",
    },
    {
      txt:
        "You realize how you got distracted and snap out of your daydream. What is wrong with you? How can you think about such nonsense right now?! ",
    },
    { btn: "Explore your Surrondings.", changeScene: "exploreCave" },
  ],
  slimePool: [
    {
      txt:
        "You get closer to the pool of slime. It radiates warmth and humidity and a strange smelling musk, that reminds you somehow of sex. Just standing this close makes you feel dizzy and… horny? What the hell is this stuff?",
    },
    {
      txt:
        "You carefully move a little closer and kneel next to the pool to stretch your right hand towards it. It clearly is warm, but you think it is not too hot to touch.",
    },
    {
      btn: "Gross! Step away.",
      changeScene: "exploreCave",
    },
    {
      btn: "Dip a finger into it to and examine it closer.",
      changeScene: "slimePool_examine",
    },
  ],
  slimePool_examine: [
    { setToTrue: "scaredByPool" },
    {
      txt:
        "You dip a single finger into the goo. It is hot, but bearable. Still, you would rather avoid falling into it.",
    },
    {
      txt:
        "You concentrate on the small sample you have on your finger and examine it from up close. It looks gross and slimy and… delicious.",
    },
    {
      txt:
        "Suddenly you feel the urge to like it, no, to suck it from your finger. You feel… hot… horny… your mouth is hanging half open, your pussy is wet and you have startet subconsciously to knead your tits with your left hand.",
    },
    {
      btn: "Give in to it! Suck the goo from your finger!",
      changeScene: "slimePool_giveIn",
    },
    {
      btn: "Step away!",
      changeScene: "slimePool_run",
    },
  ],
  slimePool_run: [
    {
      txt:
        '“Nope, nope, nope!” You force yourself back into reality and stumble away from the pool as fast as you can. You flee to the wall, which is the farthest away from it, before you can catch a break. "What the hell just happened?!"" Your entire body is still trembling in a mix of panic and lust.',
    },
    {
      txt:
        "Sudenly you realize there is still some goo on your fingers. You look around where you could get rid of it and eventually just use some moss to wipe your hand clean. “Okay...” you say to yourself, “stay away from the green goo. Got it.”",
    },
    {
      btn: "Back to explore the cave.",
      changeScene: "exploreCave",
    },
  ],
  slimePool_giveIn: [
    {
      counter_reset: "slimePoolCounter",
    },
    {
      txt:
        "A small part of your mind tells you to fight your urges and step away, but you ignore it. You sink down to your knees, close your eyes, spread your legs, and start to finger yourself with the left hand, while you suck on the goo covered finger of your right hand.",
    },
    {
      txt:
        "Your entire body is on fire and touching yourself never felt even remotely as good as it does right now. You would kill for a dildo or even better a real cock to play with!",
    },
    {
      btn: "More!",
      changeScene: "slimePool_giveIn02",
    },
  ],
  slimePool_giveIn02: [
    { addOne: "slimePoolCounter" },
    {
      txt_random: [
        "You push slow and deliberately into your snatch, while you push your hips forward to feel them deep inside of you.",
        "You rub your clit with fast, desperate need. Your entire body tense and feels like it's on fire.",
        "You cannot be deliberate anymore. You finger yourself hard and fast, feeding into the glowing need pulsing in your pussy. It just feels sooooooo good.",
        "You force yourself to slow down a bit, rock your hips gently back and forth and fondle your clit softly. It feels really good, but you need more. This is just to tame.",
        "You rub your clit and pussylips, before slowly and deliperatly push trhee fingers into your lovetunnel. You can not hold it back and moan with deep pasion.",
      ],
    },
    {
      txt_random: [
        "Meanwhile you keep on sucking on your left hands forefinger. Even if no goo is left, you cannot stop to sucking it. Even the though of the taste fuels your uncontrollead need.",
        "Meanwhile you also greedily suck on your finger, lovingly exploring it with your tongue, while imagining to suck a dick.",
        "With your other hand you are kneading your tits. It feels so good to grab them, squeeze them, and imagine a rough lover grope them.",
        "Meanwhile you also just need to pinch your nipples with your other hand. The pain is so delicious and makes everything else just feel even more intense.",
        "With your other hand you touch the rest of your latex covered body. The collar around your throat, your tits, your hips, your legs. Everything just feel so good right now.",
        "A deep moan escapes your mouth, your entire body is trembling in ecstasy. You need more, you need it deeper, harder!",
      ],
    },
    {
      hideIfBelow: ["slimePoolCounter", 4],
      txt_random: [
        "You are so close. You can feel the tension right benath your skin, ready to burst into orgasm.",
        "Your entire body is trembling. You feel the climax allready - you just need a little more to get over the edge.",
        "You can feel it, you are right on the edge, only a little more!",
      ],
    },
    {
      btn: "More!",
      changeScene: "slimePool_giveIn02",
      hideAbove: ["slimePoolCounter", 5],
    },
    {
      btn: "Cum!",
      changeScene: "slimePool_orgasm",
      hideIfBelow: ["slimePoolCounter", 6],
    },
  ],
  slimePool_orgasm: [
    {
      txt:
        "The tension inside of you rises to the breaking point, letting you dance on the very edge of climax for several long moments. ",
    },
    {
      txt:
        "Then, suddenly, the bubble pops. You scream in primal lust, as waves of orgasmic bliss start to rock through your body. Warm love pulses through your body and you keep on rubbing your clit to make it last longer.",
    },
    {
      txt:
        "Finally you collapse to the floor and rest. Just breathing and enjoying the afterglow. Feeling the  pleasant warmth radiate from your crotch into the rest of your body.",
    },
    {
      btn: "Just a little rest.",
      changeScene: "slimePool_aftermath",
    },
  ],
  slimePool_aftermath: [
    {
      txt:
        "You cannot say how long you have rested, until you suddenly realize what just happened. This had to be some sort of crazy aphrodisiac.",
    },
    {
      txt:
        "With a mix of shame and longing you get up and look towards the pool of slime. Better don’t get to close. You might not be able to fight your urges, when you get to close again…",
    },
    {
      btn: "Get back to examine your surroundings.",
      changeScene: "exploreCave",
    },
    {
      btn: "Must… get… more… goo…",
      changeScene: "slimePool_badEnd",
    },
  ],
  slimePool_badEnd: [
    {
      h1: "Bad End: Pool of Slime / under construction",
    },
    {
      txt:
        "Plan: The player gets into the pool, where a tentacle creature waits for her.",
    },
    {
      btn: "Get back to examine your surroundings.",
      changeScene: "exploreCave",
    },
  ],
  smallHoles: [
    { h1: "Small holes / under construction" },
    { txt: "Plan: Facehugger type creature attacks player" },
    {
      btn: "Get back to examine your surroundings.",
      changeScene: "exploreCave",
    },
  ],
  theTunnel: [
    {
      txt:
        "You inspect the entrance to the tunnel. It leads down, deeper into the earth and a faint, blue light glows in the distance. The air is filled with a sweet, musky smell – like the odor the pool of slime was radiating. It makes you feel dizzy and… horny. Despite all efforts to suppress the feeling.",
    },
    {
      txt:
        "Suddenly a noise is pulling you out of your daydreams. A faint gurgling and bubbling from inside the tunnel. But you also notice a soft gust of air. If the air is moving, there must be another exit somewhere in those tunnels, right?",
    },
    {
      btn: "Enter the tunnel.",
      changeScene: "exploreTunnel_01",
    },
    {
      btn: "Go back to the cave.",
      changeScene: "exploreCave",
    },
  ],

  // ==============================
  exploreTunnel_01: [
    { h1: "Chapter 3: Lost in the tunnels" },
    {
      txt:
        "It does not take long before you realize that you are in a big labyrinth of tunnels and caves. Ofcourse you only enter slowly, and make sure to remember the way back. But after a while you notice that it is getting hard to concentrate. Something in the air is clouding your mind.",
    },
    {
      txt:
        "Fear is slowly settling in and so you turn around to leave this place. You walk for a bit, but swiftly realize you can no longer remember where exactly you came from. Was it left or right on this crossing? You can't tell anymore.",
    },
    {
      btn: "Examine your surrondings.",
      changeScene: "exploreTunnel_02",
    },
  ],
  exploreTunnel_02: [
    { counter_reset: "goBack" },
    { counter_reset: "breathOfAir" },
    {
      txt:
        "You are surrounded by long uneven tunnels, junctions, and caverns. Some parts of this underworld are filled with fluorescent moss or puddles of slime. Gurgling, slithering sounds seem to come from all around and drugs in the air make it hard to stay focused.",
    },
    {
      txt:
        "Like in the cave you came from, the walls are dotted with small holes, roughly the size of your fist. And at some places you find cocoons. They are made of a purple, flesh like substance and are grown onto the wall. If you look closely, you can see them twitch from time to time.",
    },
    {
      txt:
        "But you still can feel the soft gush of wind, that lured you into this place. It still could lead towards a way out...",
    },
    {
      btn: "Follow the breath of air.",
      changeScene: "breathOfAir",
    },
    {
      btn: "Examine the cocoon.",
      changeScene: "cocoon_01",
    },
    {
      btn: "Try to get back where you came from.",
      changeScene: "goBack",
    },
    {
      btn: "There is no way to get out of this. Just sit down and wait.",
      changeScene: "fallAsleep",
    },
  ],

  breathOfAir: [
    {
      addOne: "breathOfAir",
    },
    {
      txt_random: [
        "You wander through the dark and follow the elusive gust of fresh air you feel every now and then. Is it now more from the left or the right?",
        "After a while you reach a point that looks awfully familiar. Have you just wandered in a circle?",
        "You struggle to move in your boots. The uneven floor and the lack of light make it hard to not fall over. What a nightmare.",
        "You find a rather easy to follow tunnel, only to find a dead end. But you were certain you felt the breeze of air from this direction!",
        "You struggle walking around this dark, uneven tunnel with your boots. Sometimes you just have to concentrate more on not falling than getting anywhere.",
        "You stumble through the dark, stopping every now and then to sense the little hint of fresh air. Are you still on the right path?",
      ],
    },
    {
      hideIfBelow: ["breathOfAir", 3],
      txt_random: [
        "Did you really feel the wind come from here? You cannot feel it now anymore!",
        "You slowly but surely get the impression the wind is changing direction every now and then. Is this even working?",
        "You lost the lead and must go back from where you came. It is so hard to concentrate with all this drugs in the air!",
        "What where you doing again? Oh yeah… following the fresh air.",
      ],
    },
    {
      hideIfBelow: ["breathOfAir", 5],
      txt_random: [
        "Fear is creeping into your mind. You feel like there is something stalking you.",
        "You are getting worried. Is there something out to hunt you?",
        "You get more and more uneasy. You can feel it. Something is lurking in the shadows nearby.",
      ],
    },

    {
      hideAbove: ["breathOfAir", 6],
      btn: "Go on.",
      changeScene: "breathOfAir",
    },
    {
      hideIfBelow: ["breathOfAir", 7],
      btn: "Go on.",
      changeScene: "tunnelAmbush",
    },
    {
      btn: "Give up.",
      changeScene: "exploreTunnel_02",
    },
  ],

  cocoon_01: [
    {
      txt:
        "Disgusted but also fascinated you get closer to one of the cocoons and inspect it from nearby.",
    },
    {
      txt:
        "The main body seems segmented and sprawled out from the small holes in the wall. Like roots or tentacles haven grown out of those openings and formed the cocoon. The surrounding fleshy substance seems to grow out of the main body, sealing it tight and anker it to the walls.",
    },
    {
      txt:
        "Suddenly the fleshy sack moves. Strong muscles beneath start to contract and you can hear a faint, moan from the inside. It sounded almost… human.",
    },
    {
      btn: "What was that sound? Try to break open and see inside the cocoon.",
      changeScene: "cocoon_02",
    },
    { btn: "Step away.", changeScene: "exploreTunnel_02" },
    // { btn: "Try to break the cocoon open!", changeScene: "cocoon_02" },
  ],
  cocoon_02: [
    {
      h1: "Under Construction – Find another victim / Get ambushed by the Xil",
    },
    {
      btn: "Back to tunnels",
      changeScene: "exploreTunnel_02",
    },
  ],

  goBack: [
    {
      addOne: "goBack",
    },
    {
      txt_random: [
        "You slowly wander through the dark. You must be careful and deliberate as your boots make it difficult to walk on this uneven ground. Better to support yourself with the wall. Wait? Where did you go again? It is so hard to think.",
        "You have to squint your eyes to see in the dark. The faint glow of the plants around you is just enough to see outlines. Wait! There is someone! You move as fast as you can towards the silhouette, only to find a stalagmite which vaguely resembles a human. Damn it!",
        "You wander the tunnels until you find a passage you think you know. You follow the path you remember, turn a corner, and suddenly are standingin front of a wall. Fuck! You had been absolutely sure this was the way back!",
        "You follow a long tunnel that looks familiar. But slowly get’s narrower and narrower until you can no longer fit through. Darn it! Another dead end!",
        "After a while wandering the tunnel you feel tired and your poor little snatch is itching for attention. You stop, to catch a break… and to rub your exposed sex for a little. Can't hurt, right? Suddenly you realize what you are doing and snap out of it. This place is making you mad! Better go on.",
      ],
    },
    {
      hideIfBelow: ["goBack", 3],
      txt_random: [
        "Is this really where you came from? All of this looks so… alien.",
        "It is so hard to stay focused. Everything inside of your mind is begging to stop, rest, and just give up.",
        "Doubts start to gnaw at your resolve. Will you ever leave this place? Is there any hope of seeing sunlight ever again?",
        "With every second it gets a little harder to think straight. Maybe you should just give up.",
        "Doubts settle in. Are you really walking back towards where you came from?",
        "Is this really the right way? What if you cannot find a way out of this maze?",
      ],
    },
    {
      hideIfBelow: ["goBack", 5],
      txt_random: [
        "Fears starts to creep into your mind. Something dangerous is nearby.",
        "Something is off. You feel it. There is something hunting you.",
        "You can feel it. Something is hunting you.",
        "Something has changed. You are sure there is something hunting you.",
      ],
    },
    {
      hideAbove: ["goBack", 6],
      btn: "Go on.",
      changeScene: "goBack",
    },
    {
      hideIfBelow: ["goBack", 7],
      btn: "Go on.",
      changeScene: "tunnelAmbush",
    },
    {
      btn: "Give up.",
      changeScene: "exploreTunnel_02",
    },
  ],

  fallAsleep: [
    { h1: "Under Construction – Fall asleep and get surprised by the Xil" },
    {
      btn: "Back to tunnels",
      changeScene: "exploreTunnel_02",
    },
  ],

  tunnelAmbush: [
    {
      txt:
        "You feel like you have stumbled through the dark for ages. Your feet hurt and you are just sooo horny. Maybe you should just rest for a moment. Just a little pause.",
    },
    {
      txt:
        "You lean against a moss-covered wall, close your eyes, and start to rub and touch yourself. “Wait… What am I doing?” You mumble but cannot stop it.",
    },
    {
      btn: "I NEED this!",
      changeScene: "XilAttack",
    },
  ],

  // ==============================
  XilAttack: [
    { h1: "Chapter 4: The Xil" },
    {
      txt:
        "While you were busy with yourself, you did not notice the tentacles, slowly emerging from the small holes in the wall around and above you. Dozens of slimy, purple flesh things, slowly and silently moving towards you.",
    },
    {
      txt:
        "A couple of the things have eyes on the tip, and stare at you with inhuman gazes, some have something like a blossom bud at the end, and stay carefully away, but the most are just nasty, slimy, naked worms, slowly getting ready to grab and overwhelm you.",
    },
    {
      btn: "Next",
      changeScene: "XilAttack02",
    },
  ],
  XilAttack02: [
    {
      txt:
        "Suddenly the creature lunges at you. Dozens of tentacles grab you around the arms, legs, belly and throat. Incidentally all the places you have extra protections from your gloves, boots, corset and collar.",
    },
    {
      txt:
        "You can only scream in panic, as the inhumanly strong thing tightens its grip. You get lifted in the air and forced into a spread-eagle position, while more and more tentacles wrap around your body.",
    },
    {
      btn: "Scream!",
      changeScene: "XilAttack03",
    },
  ],
  XilAttack03: [
    {
      txt:
        "You fight as hard as you can, pulling and struggling against the creature, but its tentacles are way too powerful. Inhumanly strong muscles pull your limbs out to either side, leaving you stretched and spread across the cavern.",
    },
    {
      txt:
        "Suddenly different looking tentacle moves towards you. It is reminding you of a slime covered blossom bud. For a while it hovers in front of your face, like a snake, ready to strike. Suddenly the blossom opens, and a puff of spores hits you.",
    },
    {
      btn: "Next",
      changeScene: "XilAttack04",
    },
  ],
  XilAttack04: [
    {
      txt:
        "Your vision get’s blurred and your mind starts to drift away, as you are forced into sexual overdrive. Your pussy, ass, tits and even mouth are tingling and pulsing with need. All fears and thoughts get washed away by pure, primal lust.",
    },
    {
      txt:
        "The creature waits untile the spores have overtaken you completely and make you moan with need. It shoots forward and forces a tube into your throat. Foul tasting slim fills your mouth and numbs you. But moments later you fill it tingle, getting warm and finally you feeling even more sensetive then before. Meanwhile the thing pushes deeper and deeper, while fleshy leaves of the tentacle wrap around your head, anchoring it to your face.",
    },
    {
      txt:
        "It is dark and hot and for a few long moments you cannot breathe. Even with the drugs in your body, panic starts to rise, until your lungs are suddenly warm, drugged air is pumped into your lungs.",
    },
    { btn: "Next", changeScene: "XilAttack05" },
  ],
  XilAttack05: [
    {
      txt:
        "As the drugs fill your lungs, you subconsciously start to suckle and swallow the tentacle in your mouth. More spore-filled gas filles your lungs, just giving you enough oxygen to stay conscious. But you have only seconds to rest.",
    },
    {
      txt:
        "The tube in your mouth begins to pulse and contract. Something big moves inside of it, forcing itself down the fleshy tunnel and forcing your mouth open. You can feel your throat bulge and your air gets blocked again. Then it has passed and is pushed into your stomach.",
    },
    {
      txt:
        "You take a few deep breaths, but that is all you got, then it starts again.",
    },
    {
      btn: "Next",
      changeScene: "XilAtack06",
    },
  ],
  XilAtack06: [
    {
      txt:
        "While the beast is pumping eggs through your mouth, two more blossom tentacles move into position. One of them is wrapping around your left leg, the other around your waist. The rub themselves against your privates, spreading slime all over.",
    },
    {
      txt:
        "Like with the mouth, the fluids make you feel numb at first, but then your skin start to tingle, getting warm and finally feeling overly sensitive. Both tentacles open their blossoms, spitting even more slime at your body, before they push their tubes deep into your ass and pussy.",
    },
    {
      txt:
        "Like on the face, the leaves of the tentacle close, sucking onto your latex skin and anchoring themselves to your body.",
    },
    {
      btn: "Next",
      changeScene: "XilAttack07",
    },
  ],
  XilAttack07: [
    {
      txt:
        "After the initial attack it takes only a moment before you can feel something pressing against your sphincter. It is way to big to fit easy, even if you would cooperate. But the monster does not stop. It pushes and presses, until your unwilling body gives way, and the egg plops into your body. A wave of intense pleasure gets released, mixing with the pain of the anal invasion.",
    },
    {
      txt:
        "Moments later another egg presses against your pussy. Your love channel gives way much easier, and you can feel the round thing being pushed into you. Deep inside you can feel some resistance, but the monster overpowers it, pushes the egg into your womb and a flash of orgasmic bliss shakes your body.",
    },
    {
      txt:
        "Then another egg is forced into your mouth, then another into your butt, and then another into your pussy. The creature starts to slowly fill you with egg, after egg, after egg, alternating between the tree tubes, never giving you a second to rest. ",
    },
    {
      btn: "Next",
      changeScene: "XilAttack08",
    },
  ],
  XilAttack08: [
    {
      txt:
        "The creature only stops to pump eggs into you, after your body is filled to the brim. You can only groan weakly, as your body is moved and pinned to the wall. Tentacles wrap around you and slowly but surely form a solid, pulsing cocoon around you – just like all the others you have seen in this tunnel.",
    },
    {
      txt:
        "You do not know how many time passes, as the orgasm bliss wears off. You feel full to the brim, but it strangely does not hurt, and occasionally the tubes in your mouth, puss and ass pulls a little, but that is all. Everything else is dark. You cannot move. You cannot hear. You can not even scream.",
    },
    {
      btn: "Next",
      changeScene: "XilAttack09",
    },
  ],
  XilAttack09: [
    {
      txt:
        "After what feels like an eternity, you can sense something moving inside of you. At first it is faint, but then it grows stronger. At the same time the drugs in your lungs increase, and you getting horny again.",
    },
    {
      txt:
        "The hours go by, your mind slowly melts away. You feel aroused beyond believe. Your entire body is craving sex, and there is nothing you can do. Only listen to the things inside of you, as the get more and more active. They press try to get out, squirm around, like fish in an overstuffed tank.",
    },
    {
      btn: "Next",
      changeScene: "XilAttack10",
    },
  ],
  XilAttack10: [
    {
      txt:
        "After what feels like an eternity, the tubes in you start to move again. They start to contract, move, and slowly but surely pump out was lingering in your body. But the things are even bigger than the eggs. Your throat bulges out, and your pussy and ass get stretched to enormous proportions. Every single birth gives you an orgasm, shattering whatever was left of your sanity.",
    },
    {
      txt:
        "After you are empty, some form of liquid is pumped into your stomach, making you feel satiated. You get to rest for a couple of hours, then the cycle starts again. Eggs get pumped into you, you wait till the hatch, the creatures get pumped out of you, you get feed, and have a couple of hours to rest. Rinse and repeat.",
    },
    {
      txt:
        "Every now and then your body is shiftet a little, to avoid muscles atrophy, but there is never enough room to get free. All is black, silent, numb. You are nothing but a incubator for the creature.",
    },
    { btn: "Change.", changeScene: "OrlopToTheRescue" },
  ],

  // ==============================
  OrlopToTheRescue: [
    { h1: "Chapter 5: The Rescue" },
    {
      txt:
        "You don’t know how much time has passed as you suddenly feel something change. The tentacles around you start to jerk and twitch. Almost like the creature around you is fighting something.",
    },
    {
      txt:
        "Orlop has finally found you. It took him much longer than he had anticipated, and he had nearly given up, but now he stands in front of your cocoon. His face is hidden behind a thick gasmask and he is covered in predator pheromones, which make the Xils tentacle shy away.",
    },
    {
      btn: "Next",
      changeScene: "OrlopToTheRescue02",
    },
  ],
  OrlopToTheRescue02: [
    {
      txt:
        "With more pheromones and a knife, he slowly cuts and scares away more and more of the tentacles, untile he can reach you. He puts a canister beneath you, cuts away some more tentacles and pulls the tentacles out of your private parts.",
    },
    {
      txt:
        "Eggs spill out of you and into the canister. “Darn… that is a big load.” The experienced Wastelander uses a long, latex covered shaft to poke into your poor overstretched holes, provoking another wave of eggs spilling fourth. He repeats the process a few times, until you are mostly empty.",
    },
    { btn: "Next", changeScene: "OrlopToTheRescue03" },
  ],
  OrlopToTheRescue03: [
    {
      txt:
        "At last, Orlop cuts away the tentacles around your head and torso, until you collapse into his arms. He holds you over the canisters, cuts away the leaves engulfing your head and pulls the tube out of your mouth. You immediately start to vomit dozens of eggs, nearly suffocating in the process.",
    },
    {
      txt:
        "After you are done, Orlop rests you on the floor. There are certainly still eggs inside of you, but for the moment he seems satisfied.",
    },
    {
      btn: "Next",
      changeScene: "OrlopToTheRescue04",
    },
  ],
  OrlopToTheRescue04: [
    {
      txt:
        'He examines the harvest and starts to mumble to himself. "That is much more then usual, and really good quality too. Big eggs and no discoloration in the insemination goo."',
    },
    {
      txt:
        'He looks at you with a uncanny glimmer in his eyes. "Nobody would ask if I said I could not find you..."',
    },
    {
      btn: "More! You need moor!",
      changeScene: "end_livestock",
    },
    {
      btn: "No! Please! Get me out of here!",
      changeScene: "end_rescued",
    },
  ],
  end_livestock: [
    { h1: "End: Livestock" },
    {
      txt:
        "You cough some goo, before you look up at him. Your mind is still clouded, but you realize what he is up to. It is hard to form words, but you need him to know. “Stay… I want… to stay…”",
    },
    {
      txt:
        "Orlop looks at you with a mix of disbelief and delight. “Well, an easy decision then.” He puts the canister with the harvest on his hover cart and starts to walk away from you. Before he turns a corner, he looks back one last time. Tentacle are allready moving towards you.",
    },
    {
      txt:
        "Farming this way would be much easier. He knows where you are, and he only would have to get rid of small parts of the cocoon. Maybe he could farm you multiple times a week? Food for thought…",
    },
    { btn: "Back to STARTPAGE", changeScene: "startPage" },
  ],
  end_rescued: [
    { h1: "End: Rescued" },
    { txt: "A few days later..." },
    {
      txt:
        "Your have forgotten most of your adventure. Your memories have been clouded beforehand and ereased after to to minimize mental damage. Advanced medicine has restored your body and erased most of the memory. You have gotten a big paycheck for a job well done and walked way.",
    },
    {
      txt:
        "But sometimes there are dreams. Dreams about being trapped in the dark, engulfed by something unbelievable powerful, that is using your body, filling it up. You feel pleasure, lust… and a strange urge to go back. Back to the tunnels. Back to the creature.",
    },
    { btn: "Back to STARTPAGE", changeScene: "startPage" },
  ],
};

/* =================================
logic
================================= */
/* event listener: keydown*/ {
  document.addEventListener("keydown", (event) => {
    if (!keys.btnCounter[event.key]) return;
    clickBtn(keys.btnCounter[event.key]);
  });
}

/* event listener: return btn */ {
  returnBtn.addEventListener("click", () => {
    if (keysHistory.length == 0) return;
    let x = keysHistory.pop();
    keys = Object.assign({}, x);
    fillGameBox();
  });
}

/* event listener: home btn */ {
  homeBtn.addEventListener("click", () => {
    createHistoryOfScenes();
    keys.scene = "startPage";
    fillGameBox();
  });
}

function removeOldElementsFromGameBox() {
  while (gameBox.children.length > 0) gameBox.lastChild.remove();
}

function createHistoryOfScenes() {
  keysHistory.push(Object.assign({}, keys));
}

function devAssist_addSceneName() {
  let newDiv = document.createElement("div");
  newDiv.classList.add("dev_pageName");
  newDiv.innerHTML = `Scene: "${keys.scene}"`;
  gameBox.appendChild(newDiv);
}

function resetBtnCounter() {
  keys.btnCounter = [[]];
}

// =================================
function fillGameBox() {
  resetBtnCounter();
  removeOldElementsFromGameBox();
  devAssist_addSceneName();

  let scene = keys.scene;
  content[scene].forEach((sElement) => createHTMLElements(sElement));
  window.scrollTo(0, 0);
}

function createHTMLElements(sElement) {
  let newDiv = document.createElement("div");

  if (keys[sElement.hide]) return;
  if (keys[sElement.show] == false) return;
  if (sElement.setToTrue) keys[sElement.setToTrue] = true;
  if (sElement.setToFalse) keys[sElement.setToFalse] = false;

  if (sElement.addOne) keys[sElement.addOne]++;

  if (sElement.hideIfBelow) {
    let x = sElement.hideIfBelow[0];
    let y = sElement.hideIfBelow[1];
    if (keys[x] < y) return;
  }
  if (sElement.hideAbove) {
    let x = sElement.hideAbove[0];
    let y = sElement.hideAbove[1];
    if (keys[x] > y) return;
  }

  if (sElement.h1) {
    newDiv.classList.add("h1");
    newDiv.innerHTML = sElement.h1;
  }
  if (sElement.txt) {
    newDiv.classList.add("txt");
    newDiv.innerHTML = sElement.txt;
  }
  if (sElement.txt_random) {
    newDiv.classList.add("txt");
    newDiv.innerHTML =
      sElement.txt_random[randomInteger(sElement.txt_random.length)];
  }
  if (sElement.btn) {
    newDiv.classList.add("btn");
    newDiv.innerHTML = keys.btnCounter.length + ".) " + sElement.btn;
    newDiv.addEventListener("click", () => clickBtn(sElement));
    keys.btnCounter.push(sElement);
  }
  if (sElement.img) {
    newDiv.classList.add("img");
    let newImg = document.createElement("img");
    newImg.src = `./assets/${sElement.img}`;
    newDiv.appendChild(newImg);
  }
  gameBox.appendChild(newDiv);
}

function clickBtn(sElement) {
  createHistoryOfScenes();
  if (sElement.changeScene) keys.scene = sElement.changeScene;
  fillGameBox();
}

function randomInteger(x) {
  return Math.floor(Math.random() * x);
}

/* =================================
start game
================================= */
fillGameBox();
