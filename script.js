let canvas = document.getElementById("snake");
let context = canvas.getContext ("2d"); //Renderiza o desenho dentro do canva
let box = 32;   //cada quadradinho no canvas e seu tamanho em pixels
let snake = [];
snake[0] = {    //dando um tamanho para o elemento
    x: 8 * box, //8 é a coordenada no meio da tela do jogo para que ela surja lá
    y: 8 * box
}
//VARIÁVEIS PARA MOVIMENTAR A COBRINHA PELA TELA
let direction = "right";


                //Desenha e define a cor do canvas
function criarBG() {  
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

function iniciarJogo() {
    criarBG();
    criarCobrinha();

    //posição innicial da cobrinha
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    //coordenadas de movimento da cobrinha
    if(direction == "right") snakeX += box; //se a direção de movimento for direita ele vai acrescentar um quadradinho a mais na direita
    if(direction == "left") snakeX -= box; //como ele anda para a esquerda, é preciso decrementar um valor cartesiano (- 1)
    if(direction == "up") snakeY -= box;
    if(direction == "down") snakeY += box;

    //função PP, retira o último elemento do array
    snake.pop();
    //acrescenta m elemento à frente do array, ou seja, a cabeça
    let newHead = {
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead);
}

let jogo = setInterval(iniciarJogo, 100);   //att o jogo a cada 100 milisegundos, dando continuidade sem que trave