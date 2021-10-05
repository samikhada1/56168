let img = document.querySelector('img');
let btn1 = document.querySelector('#btn1');
let btn2 = document.querySelector('#btn2');
let btn3 = document.querySelector('#btn3');

btn1.addEventListener('click', () => {
    img.src ='Character_Yanfei_Card.png';
})

btn2.addEventListener('click', () => {
    img.src ='Character_Yanfei_Game.png';
})

btn3.addEventListener('click', () => {
    img.src ='Character_Yanfei_Portrait.png';
})