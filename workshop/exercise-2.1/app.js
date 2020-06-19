
const container = document.querySelector("body");
const button = document.createElement("button");

for (i = 1; i <= 20; i++) {
  const button = document.createElement("button");
  button.innerText = i;
  button.classList = i;
  button.style.backgroundColor = "blue";
  button.style.color = "white";
  function onClick() {
    button.style.backgroundColor = "black";
  }
  button.addEventListener("mousedown", onClick);
  //   button.addEventListener(
  //     "click",
  //     () => (button.style.backgroundColor = "green")
  //   );
  container.appendChild(button);
}
button.style.backgroundColor = "rgb(134,38,51)";
