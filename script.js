const dino = document.querySelector('.dino');
let isjumping = false;
const background = document.querySelector('.noite');
let position = 0;
let score = 0;
let lose = false;
let marca = document.querySelector('.Score');

function apertar(event){
    if (event.keyCode === 32) {
        if (!isjumping) {
            jump();
        }
    }
}

function jump(){
    

    isjumping = true;

    let upInterval = setInterval(() => {
        if (position >= 150){
            clearInterval(upInterval);

            let downInterval = setInterval(() => {
                if (position === 0){
                    clearInterval(downInterval);
                    isjumping = false;
                } else {
                    position = position - 20;
                    dino.style.bottom = position + 'px';
                }
            }, 25);

        } else {
        position = position + 20;
        dino.style.bottom = position + 'px';
        }
    }, 25);
}

function createcactus(){
    const cactus = document.createElement('div');
    let cactusposition = 1300;
    let randomtime = Math.random() * 6000;
 
    cactus.classList.add('cactus');
    cactus.style.left = 1300 + 'px';
    background.appendChild(cactus);

    let leftInterval = setInterval(() => {
        cactusposition -= 10;
        cactus.style.left = cactusposition + 'px';

        if (cactusposition < -60) {
            clearInterval(leftInterval);
            background.removeChild(cactus);
        } else if(cactusposition > 0 && cactusposition < 60 && position < 60) {
            clearInterval(leftInterval);
           document.body.innerHTML = '<h1 class= "game-over">Fim de Jogo</h1>'
            lose = true;
            }
            else{
            cactusposition -= 10;
            cactus.style.left = cactusposition + 'px';
        }
    }, 40);

    setTimeout(createcactus, randomtime);

}

function scoreup(){
    if(lose === true){
        return
    } else {
        let m = 1
    setTimeout(m++, 2000)
    score = score + 1 * m
    setTimeout(scoreup, 100)
    marca.innerHTML = `Score: ${score}`;
    }
}

function mudatema(){
    if(background.classList == ('dia')){
        background.classList.remove('dia');
        background.classList.add('noite');
    } else if (background.classList == ('noite')){
        background.classList.remove('noite')
        background.classList.add('dia')
    }
    setTimeout (mudatema, 4000)
}
mudatema();
scoreup();
createcactus();
document.addEventListener('keyup', apertar)