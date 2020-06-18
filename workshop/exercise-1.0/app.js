const main = document.querySelector('#main')
let win = document.createElement('p')
win.textContent = "Winner!"
window.onclick = function(e) {
    main.appendChild(win);
}