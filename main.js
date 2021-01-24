/* variables */
let navBox = document.getElementsByClassName("navBox");
let gameBox = document.querySelector(".gameBox");
let player = {
  strength: 0,
};

function clearGameBox() {
  while (gameBox.children.length > 0) gameBox.lastChild.remove();
}

function fillGameBox(array) {
  array.forEach((element) => {
    if (element.x) {
      console.log("Juhu");
    }
    console.log(element);
  });
}

clearGameBox();
fillGameBox([{ x: true }, "b", "c"]);
