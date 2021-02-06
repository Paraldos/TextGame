/* variables */
let navBox = document.getElementsByClassName("navBox");
let gameBox = document.querySelector(".gameBox");
let btn = [];
let currentScene = "";
let keys = {
  test_key_01: false,
  examinYourself: false,
  examineSurrondings: false,
  gotSpanked: false,
  gotGroped: false,
  failedToUndress: false,
  scaredByPool: false,
};
let counters = {
  gropingCounter: 0,
  slimePoolCounter: 0,
};
let player = {};

/* ===============
scenen 
=============== */
let scenes = {
  start: [
    { h1: "Start Page" },
    { btn: "Go to TEST PAGE", changeScene: "test_01" },
    // { btn: "Go to WIKI", changeScene: "wiki" },
    { btn: "Story: The Selzabeast", changeScene: "selzabeastStart" },
  ],
  // test pages
  test_01: [
    { h1: "Test Page" },
    { txt: "Ein Textfeld! Ist das nicht aufregend?" },
    { txt: "<b>bold</b>, <i>italic</i>, <u>underline</u>" },
    { btn: "test button: change scene", changeScene: "test_02" },
    { txt: `"test_key_01" is...` },
    {
      txt: "True",
      key_show: "test_key_01",
    },
    {
      txt: "False",
      key_hide: "test_key_01",
    },
    { btn: "Set 'test_key_01' to true", changeScene: "test_03a" },
    { btn: 'Set "test_key_01" to false', changeScene: "test_03b" },

    { img: "test_01.jpg" },
    { img: "test_02.jpg" },
    // ------------
    { btn: "Go to START PAGE", changeScene: "start" },
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
  // wiki
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
  // story: selzabeast
  selzabeastStart: [
    { h1: "Kapitel 1: Rude Awakening" },
    {
      txt:
        "You slowly come to your senses and immediately know something is wrong. You are bound and gagged, lying on the cold floor of a transport shuttle, and you feel hazy and tired. Have you been druged? What had happend? You can't remember!",
    },
    { btn: "Examine yourself.", changeScene: "examinYourself" },
    { btn: "Examine your surroundings.", changeScene: "examineSurrondings" },
  ],
  examinYourself: [
    { key_setToTrue: "examinYourself" },
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
      key_hide: "examineSurrondings",
      btn: "Examine your surroundings.",
      changeScene: "examineSurrondings",
    },
    {
      key_show: "examineSurrondings",
      btn: "Struggle to get free.",
      changeScene: "meetOrlop",
    },
  ],
  examineSurrondings: [
    { key_setToTrue: "examineSurrondings" },
    {
      txt:
        "You are in the cargo bay of some sort of old transport shuttle. The room is only a couple of meters wide and long, and mostly empty. The metal floor looks old and dirty and the walls are covered with scratches and rings to mount cargo. A big crane is mounted to the ceiling and waiting to lift stuff in an out through a big loading gate to your left side. The only other exit is a much small metal door and probably leads to the cockpit.",
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
      key_hide: "examinYourself",
      btn: "Examine yourself.",
      changeScene: "examinYourself",
    },
    {
      key_show: "examinYourself",
      btn: "Struggle to get free.",
      changeScene: "meetOrlop",
    },
  ],
  meetOrlop: [
    {
      txt:
        "You moan and grunt, while you try to get free, but your bondage hold’s tight. After only a few minutes you are totally exhausted and sweaty, but still bound and helpless.",
    },
    {
      txt:
        "You give yourself a moment to breath, but before you can try again, the cockpit door slides open. A big, scarry looking man steps towards you.",
    },
    {
      txt:
        "He looks like he is in his 40s and his face is covered with a wild looking, brown beard. He wears an old looking environment suit and has tools and survival equipment hanging from his belt. Something in the back of your head recognizes him. You think his name is Orlop.",
    },
    {
      txt:
        "He stops for a moment and grumbles, “you are awake? Good.” Then he slowly walks towards you, takes what looks like a harness mad of leather belts and kneels to strap you into it.",
    },
    {
      btn: "Try to fight him!",
      changeScene: "Spanking_01",
    },
    {
      btn: "Give in. Better not make him angry.",
      changeScene: "Groping_01",
    },
  ],
  Spanking_01: [
    {
      key_setToTrue: "gotSpanked",
    },
    {
      txt:
        "You struggle and squirm as best as you can, but even without the bondage, you would be no match for this big, strong man. After only a few moments he has enough from your antics. He turns you on your belly and pins you down with his knee on your back.",
    },
    {
      txt:
        "You still try to wiggle free as you suddenly feel a hard slap on the ass. Then another, and another, and another. He spanks you hard and without mercy until you are reduced to a sobbing mess. Your ass is pulsing from pain and burning like fire.",
    },
    {
      txt:
        "He gives you a second to catch your breave, before he growls: “Now Missy. Wanna more or can we finally move on?”",
    },
    { btn: "Struggle", changeScene: "Spanking_02" },
    {
      btn: "Give up.",
      changeScene: "getHarnessed",
    },
  ],
  Spanking_02: [
    {
      txt_random: [
        "You will not let him win! You fight your tears back, take a few breaths, shift your weight, and try to roll onto your back and away from this monster.",
        "Not just yet! The moment you feel him give you a bit of slack, you start to squirm like crazy again. There is no way you will just give in to this!",
        "Your poor ass feels terrible, but you refuse to give up. With all that is left inside of you, you buckle up and try to make him fall off you.",
      ],
    },
    {
      txt_random: [
        "Orlop just pins you down again, then gives you another brutal spanking. You cannot fight it. After only few seconds you are a sobbing mess again, as with every slap, another flash of pain jolts through your body.",
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
    { btn: "Struggle", changeScene: "Spanking_02" },
    {
      btn: "Give up.",
      changeScene: "getHarnessed",
    },
  ],
  Groping_01: [
    {
      key_setToTrue: "gotGroped",
    },
    {
      txt:
        "Instead of doing his work, Orlops rests the harness next to him and instead gropes your exposed tits. He smiles predatory, while he massages your soft flesh with his rough hands.",
    },
    {
      txt:
        "“What a waist.” He mumbles to himself, while he catches your nipples and gently pinches them.",
    },
    {
      btn: "Lean into his hands.",
      changeScene: "Groping_02",
    },
    { btn: "Turn away.", changeScene: "getHarnessed" },
  ],
  Groping_02: [
    {
      counter_addOne: "gropingCounter",
    },
    {
      txt_random: [
        "You moan softly, and even lean into Orlop's hands. This feels way better than it should.",
        "You get red from shame but let Orlop fondle you without resistance. You really should not do this. Right?",
        "You feel the heat inside of you. How can you get aroused by this? Instead of thinking too much about it, you shiver and enjoy the moment.",
        "You lean into his big, strong hands. Maybe you can get him so horny that he unbinds you?",
        "You moan with lust and stretch your willing body towards Orlops hands. Maybe you can seduce him into letting you go?",
      ],
    },
    {
      txt_random: [
        "Orlop grins and massages your tits for a little longer. “Good girl.”",
        "“You are real slut, aren’t you? I like that.”",
        "“What a waste to use you as a breeder.”",
        "Orlops rough hands squeeze your soft breasts hard and you can see the lust in his eyes.",
        "Suddenly you feel a jolt of pain. Orlop pinches both of your nipples hard and pulls them upwards.",
        `“Nice try, slut. But you are not the first whore who's tried to fuck her way out of this.”`,
      ],
    },
    {
      btn: "Fuck him",
      changeScene: "sexWithOrlop",
      counter_hideBelow6: "gropingCounter",
    },
    {
      btn: "Lean into his hands.",
      changeScene: "Groping_02",
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
        "“Okay, missy. I found a cave that looks inhabited.” While he speaks, he takes an aerosol can and starts to spray you from top to bottom. “The pheromones will attract the Selzabeast. Just move around a little, it will find you eventually.”",
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
        "Finally your feet touch the ground, but you get lowered even further until you lay on your stomach. You can only moan as your exposed breasts get squished against cold, wet rock. CLICK! CLICK! CLICK! CLICK! CLICK! Suddenly, dozens of tiny locks open up and you feel the pressure of your bondage lessen dramatically.",
    },
    {
      btn: "Try to get up.",
      changeScene: "theCave",
    },
  ],
  // inside the cave
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
      key_show: "gotSpanked",
      txt:
        "Your ass still feels sore from the spanking. You gently rub your poor backside, and even that hurts a bit. The pain makes you growl in anger. You promise yourself to make the bastard pay!",
    },
    {
      key_show: "gotGroped",
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
      key_hide: "scaredByPool",
      txt:
        "In the center of the cave is a small pool of greenish, bubbling, slim. It looks hot and gives you an uneasy feeling. It is probably the source of the warmth and moisture in the air.",
    },
    {
      key_show: "scaredByPool",
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
      key_hide: "failedToUndress",
    },
    {
      btn: "Examine the slime pool.",
      changeScene: "slimePool",
      key_hide: "scaredByPool",
    },
    {
      key_show: "scaredByPool",
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
    { key_setToTrue: "failedToUndress" },
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
        "Your frustration grows. You shift your attention towards the corset and it also is stuck to your body. It fits tightly and is sealed with padlocks. You have no way to get out of it.",
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
      btn: "Gross! Step away and explore the rest of the cave.",
      changeScene: "exploreCave",
    },
    {
      btn: "Dip a finger into it to and examine it closer.",
      changeScene: "slimePool_examine",
    },
  ],
  slimePool_examine: [
    { key_setToTrue: "scaredByPool" },
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
      btn: "Step away! Fast!",
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
        "Sudenly you realize there is still some goo on your fingers. You look around where you could get rid of it and eventually just use some moos to wipe your hand clean. “Okay...” you say to yourself, “stay away from the green goo. Got it.”",
    },
    {
      btn: "Back to explore the cave.",
      changeScene: "exploreCave",
    },
  ],
  slimePool_giveIn: [
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
    { counter_addOne: "slimePoolCounter" },
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
      txt_random: [
        "You are so close. You can feel the tension right benath your skin, ready to burst into orgasm.",
        "Your entire body is trembling. You feel the climax allready - you just need a little more to get over the edge.",
        "You can feel it, you are right on the edge, only a little more!",
      ],
      counter_hideBelow4: "slimePoolCounter",
    },
    {
      btn: "Keep going!",
      changeScene: "slimePool_giveIn02",
    },
    {
      btn: "Cum!",
      changeScene: "slimePool_orgasm",
      counter_hideBelow6: "slimePoolCounter",
    },
  ],
  slimePool_orgasm: [
    {
      txt:
        "The tension inside of you rises to the breaking point, letting you dance on the very edge of climax for several long moments. ",
    },
    {
      txt:
        "Then, suddenly, the bubble pops. You scream in primal lust, as waves of orgasmic bliss start to rock through your body. Warm love pulses through your body and you keep on rubbing your clit to make the orgasm last longer.",
    },
    {
      txt:
        "You collapse to the floor and rest. Just breathing and enjoying the afterglow. Feeling the  pleasant warmth radiate from your crotch into the rest of your body. ",
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
      btn: "There got to be a way out of this. Try to follow the gust of wind.",
      changeScene: "exploreTunnel_01",
    },
    {
      btn: "Not worth it. Go back to the cave.",
      changeScene: "exploreCave",
    },
  ],
  // the tunnel
  exploreTunnel_01: [
    { h1: "Chapter 3: The tunnels" },
    {
      txt:
        "It does not take long before you realize that you are in a big labyrinth of tunnels and caves. Therefore, you only enter slowly, and make sure to remember the way back. But after a while it is getting hard to concentrate. Something in the air is clouding your mind and… you can no longer remember the way back.",
    },
    {
      btn: "Examine your surrondings.",
      changeScene: "exploreTunnel_02",
    },
  ],
  exploreTunnel_02: [
    {
      txt:
        "You are surrounded by long uneven tunnels, junctions, and caverns. Some parts of this underworld are filled with fluorescent moos or puddles of slime. Gurgling, slithering sounds seem to come from all around and drugs in the air make it hard to stay focused. You basically lost all feeling for time and direction.",
    },
    {
      txt:
        "Like in the cave you came from, the walls are dotted with small holes, roughly the size of your fist. And at some places you find cocoons. They are made of a purple, flesh like substance and are grown onto the wall. If you look closely, you can see them twitch from time to time.",
    },
    {
      txt:
        "But you still can feel the soft gush of wind, promising a way out of this crazy place.",
    },
    {
      btn: "Follow the breath of air.",
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
    },
  ],
  goBack: [
    {
      txt_random: [
        "You slowly wander through the dark. You must be careful and deliberate as your boots make it difficult to walk on this uneven ground. Better to support yourself at the wall. Wait? Where did you go again? Oh yea! Back to the cave you came from!",
        "You must squint your eyes to see in this dark. The faint glow of the plant’s around you is just enough to see outlines. Wait! There is someone! You move as fast as you can towards the silhouette in the dark, only to find a stalagmite which vaguely resembles a human form. Damnit!",
        "You wander the tunnels until you find a passage you think you know. You follow the path you remember, turn a corner, and suddenly stand in front of a wall. Fuck! You had been absolutely sure this was the way back!",
        "You follow a long tunnel that looks familiar. But slowly get’s narrower and narrower until you can no longer fit through. Darn it! Another dead end!",
        "After a while wandering the tunnel you feel tired and your poor little snatch is itching for attention. You stop, to catch a break… and to rub exposed sex for a little. Cannot hurt, right? Suddenly you realize what you are doing and snap out of it. This place is making you mad! Better go on.",
      ],
    },
    {
      btn: "Go on.",
      changeScene: "goBack",
    },
    {
      btn: "Give up and check your surroundings.",
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
    { btn: "Step away.", changeScene: "exploreTunnel_02" },
    { btn: "Try to break the cocoon open!", changeScene: "cocoon_02" },
  ],
  cocoon_02: [],
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

  /* post page name / only for development*/ {
    let newDiv = document.createElement("div");
    newDiv.classList.add("dev_pageName");
    newDiv.innerHTML = "Current Page: " + currentScene;
    gameBox.appendChild(newDiv);
  }

  scene.forEach((sElement) => createHTMLElements(sElement));
  window.scrollTo(0, 0);
}

function createHTMLElements(sElement) {
  let newDiv = document.createElement("div");

  if (keys[sElement.key_hide]) return;
  if (keys[sElement.key_show] == false) return;
  if (sElement.key_setToTrue) keys[sElement.key_setToTrue] = true;
  if (sElement.key_setToFalse) keys[sElement.key_setToFalse] = false;

  if (counters[sElement.counter_hideBelow4] < 4) return;
  if (counters[sElement.counter_hideBelow6] < 6) return;

  if (sElement.counter_addOne) counters[sElement.counter_addOne]++;

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
      sElement.txt_random[
        Math.floor(Math.random() * sElement.txt_random.length)
      ];
  }
  if (sElement.btn) {
    newDiv.classList.add("btn");
    newDiv.innerHTML = btn.length + ".) " + sElement.btn;
    newDiv.addEventListener("click", () => clickBtn(sElement));
    btn.push(sElement);
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
  if (sElement.changeScene) {
    currentScene = sElement.changeScene;
    fillGameBox(scenes[sElement.changeScene]);
  }
}

fillGameBox(scenes.start);
