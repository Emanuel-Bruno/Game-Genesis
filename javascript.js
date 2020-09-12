let order = [];
let clickeedOrder = [];
let score = 0;

//0 = verde
//1 = vermelho
//2 = amarelo
//3 = azul
const green = document.querySelector('.green')
const red = document.querySelector('.red')
const yellow = document.querySelector('.yellow')
const blue = document.querySelector('.blue')

//cria ordem aleatória de cores c
let shuffleOrder = () =>{
    let colorOrder = Math.floor(Math.random()*4);
    order[order.length]=colorOrder;
    clickeedOrder = [];

    for(let i in order){
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i)+1);
    }
}

// ascende a próxima cor
let lightColor = (element, number) => {
    number = number*500;
    setTimeout(()=>{
        element.classList.add('selected');
    }, number - 250)
    setTimeout(() => {
        element.classList.remove('selected')
    })
}

//checá se os botões clicados são iguais aos gerados
let checkOrder = () =>{
    for(let i in clickeedOrder){
        if(clickeedOrder[i]!=order[i]){
            gameOver()
            break
        }
    }
    if(clickeedOrder.length==order.length){
        alert(`Pontuação: ${score} \nVocê acertou! Iniciando próximo nível!`)
        nextLevel()
    }
}

//clique do usuário c
let click = (color) => {
    clickeedOrder[clickeedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected')
        checkOrder()
    },250)
   
}

//Função que retorna a cor
let createColorElement = (color) => {
    if(color==0){
        return green
    }else if(color==1){
    return red
    } else if(color==2){
        return yellow
    }else if(color==3){
        return blue;
    }
}

//próxima fase
let nextLevel = () =>{
    score++
    shuffleOrder()
}

//gameOver  c
let gameOver = () => {
    alert(`Pontuação: ${score}\n Você perdeu o jogo!\nClique em Ok para reiniciar um novo jogo`)
    order=[];
    clickeedOrder=[];
    playGame();
}

//inicio de jogo    c
let playGame = () => {
    alert('Bem vindo ao genesis! Iniciando jogo!')
    score=0;
    nextLevel();
}


//eventos de cliques    c
green.onclick = () => {
    click(0);
}
red.onclick = () => {
    click(1);
}
yellow.onclick = () => {
    click(2);
}
blue.onclick = () => {
    click(3);
}


playGame();