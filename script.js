let canvas = document.getElementById("snake");
let context = canvas.getContext ("2d"); //Renderiza o desenho dentro do canva
let box = 32;   //cada quadradinho no canvas e seu tamanho em pixels
let snake = [];
snake[0] = {    //dando um tamanho para o elemento
    x: 8 * box, //8 é a coordenada no meio da tela do jogo para que ela surja lá
    y: 8 * box
}

function criarBG() {  //Desenha e define a cor do canvas
    context.fillStyle = "lightgreen";   //define a cor do context | fillStyle lida com o estilo do context
    context.fillRect(0, 0, 16 * box, 16 * box); //fillRect vai desenhar o retângulo onde o jogo vai acontecer, trabalha com 4 parâmetros: posição de X, posição de Y, altura, largura     //
}

//criando a cobrinha como um array de coordenadas. Por ser um array será utilizado o FOR

function criarCobrinha() {
    for (i=0; i < snake.length; i++) {
        context.fillStyle = "green";
        context.fillRect(snake[i].x, snake[i].y, box, box); //tamanho em X e Y, número de quadrados ocupados em BOX
    }
}

criarBG();
criarCobrinha();