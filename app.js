//1
const box1 = document.querySelector(".box")

let positionY = 0
let positionX = 0

const moveBlock = () => {
    if (positionX <= 450 && positionY === 0){
        positionX++
        box1.style.left = `${positionX}px`
        setTimeout(moveBlock, 1)
    }else if (positionX >= 450 && positionY <= 450){
        positionY++
        box1.style.top = `${positionY}px`
        setTimeout(moveBlock, 1)
    }else if (positionY  >= 450 && positionX !== 0){
        positionX--
        box1.style.left = `${positionX}px`
        setTimeout(moveBlock, 1)
    }else if (positionX === 0  && positionY !== 0){
        positionY--
        box1.style.top  = `${positionY}px`
        setTimeout(moveBlock, 1)
    }
}
moveBlock()
//2
const h1 = document.querySelector('h1');
const start = document.querySelector('.start');
const stop = document.querySelector('.stop');
const resume = document.querySelector('.resume');

var count = 0;
var intervalId;

function starts() {
    intervalId = setInterval(() => {
        h1.innerHTML = count++;
    }, 100);
}

start.onclick = () => {
    start.setAttribute('disabled', '');
    resume.setAttribute('disabled', '');
    starts();
    resume.onclick = () => {
        resume.setAttribute('disabled', '');
        starts();
    };
};

stop.onclick = () => {
    clearInterval(intervalId);
    resume.removeAttribute('disabled');
};

