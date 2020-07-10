let main = document.querySelector('#main');
let buttonNum = 20;

const toggleColor = function(event){
    event.target.classList.toggle('alt-button')
}

const generateButton = function(){
    for(let num=0;num<buttonNum;num++){
        let newButton = document.createElement('button');
        newButton.innerText = `${num+1}`;
        newButton.classList.add('button');
        newButton.style.top = Math.floor(Math.random()*90) + 'vh';
        newButton.style.left = Math.floor(Math.random()*90) + 'vw';
        main.appendChild(newButton);
        newButton.addEventListener('click',toggleColor);
    }
}

generateButton();