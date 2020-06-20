const container = document.querySelector("body");

const p1 = document.createElement("p");
p1.id = "faster";
p1.innerText = "Click to win";
container.appendChild(p1);
const BIG = document.createElement("h1");
let clicked = false;

function onClick() {
  console.log("clicker");
  BIG.innerText = "Winner!";
  container.appendChild(BIG);
  clicked = true;
}

container.addEventListener("mousedown", onClick);

function noClick() {
  if (clicked === false) {
    console.log("clicker");
    BIG.innerText = "Failure";
    clicked = false;
    console.log(clicked);
    container.appendChild(BIG);
    container.removeEventListener("mousedown", onClick);
  }
}

setTimeout(noClick, 1000);
