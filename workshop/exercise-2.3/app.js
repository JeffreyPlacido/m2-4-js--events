console.log("hello");
const container = document.querySelector("#main");
const number = 20;

let clicked = false;

function clickButton(event) {
    if (clicked === false) {
    event.target.style.backgroundColor = "blue";
    clicked = true;
    } else {
    event.target.style.backgroundColor = "black";
    clicked = false;
    }
    return clicked;
}

function removeAllEventListeners() {
    buttonfolder.forEach(function (button) {
    button.removeEventListener("mousdown", onClick);
    });
}

for (i = 1; i <= number; i++) {

    const randomN1 = Math.round(Math.random() * 800);
    const randomN2 = Math.round(Math.random() * 1200);

    const button = document.createElement("button");
    button.innerText = i;
    button.id = "btn" + i;
    button.style.top = randomN1 + "px";
    button.style.left = randomN2 + "px";
    button.style.backgroundColor = "blue";
    button.style.color = "white";
    button.addEventListener("mousedown", clickButton);
    container.appendChild(button);
}