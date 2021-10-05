let img = document.querySelector('#img');
let card = document.querySelector('#card');
let portrait = document.querySelector('#iportraitmg');
let ingame = document.querySelector('#ingame');

card.addEventListener('click', () => {
    img.src = 'Character_Yanfei_Card.png';
})

portrait.addEventListener('click', () => {
    img.src = 'Character_Yanfei_Portrait.png';
})

ingame.addEventListener('click', () => {
    img.src = 'Character_Yanfei_Game.png';
})