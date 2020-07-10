let main = document.querySelector('#main');
let buttonAmount = 20;

const toggleColor = function(event){
    let buttonStyle = window.getComputedStyle(event.target);
    let buttonColor = buttonStyle.getPropertyValue('background-color');
    console.log(buttonColor);
    if(buttonColor === "rgb(0, 0, 0)"){
        event.target.style.backgroundColor = "rgb(0, 0, 255)";
    } else if(buttonColor === "rgb(0, 0, 255)") {
        event.target.style.backgroundColor = "rgb(0, 0, 0)";
    }
}

const createButtons = function(){
    for (num=0;num<20;num++){
        let newButton = document.createElement('button');
        newButton.classList.add('button');
        newButton.innerText = `${num+1}`;
        main.appendChild(newButton);
    }
}

createButtons();

let buttonArr = [...document.querySelectorAll('.button')];

buttonArr.forEach(function(button){
    button.addEventListener('click',toggleColor);
})
