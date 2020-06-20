const container = document.querySelector("body");
const buttonfolder = [];

let clicked = false;
const number = 20;
function onClick(event) {
  console.log(clicked);
  if (clicked === false) {
    event.target.style.backgroundColor = "blue";
    clicked = true;
    console.log(clicked);
  } else {
    event.target.style.backgroundColor = "black";
    clicked = false;
    console.log(clicked);
  }
  return clicked;
}

function removeAllEventListeners() {
  buttonfolder.forEach(function (button) {
    button.removeEventListener("mousdown", onClick);
  });
}

for (i = 1; i <= 20; i++) {
  const button = document.createElement("button");
  button.innerText = i;
  button.id = "btn" + i;
  button.style.backgroundColor = "blue";
  button.style.color = "white";
  button.addEventListener("mousedown", onClick);
  container.appendChild(button);
  buttonfolder.push(button);
}

