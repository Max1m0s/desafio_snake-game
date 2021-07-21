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
let food = { //cria a comida e gera uma posição aleatória e ainda limita que apareça dentro da tela de jogo
    x: Math.floor(Math.random() * 15 + 1) * box, //Math.floor tira a parte flutuante (0.) do Math.random, que por sua vez retorna sempre um numer aleatório até 1
    y: Math.floor(Math.random() * 15 + 1) * box
}


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

//A comida da cobrinha
function drawFood() {
    context.fillStyle = "red";
    context.fillRect(food.x, food.y, box, box);
}

//PARÂMETROS para identificar os eventos de clique do teclado
document.addEventListener('keydown' , update); //chama a update

function update (event) {
    if(event.keyCode == 37 && direction != "right") direction = "left"; //o && evita que a coobra bugue, voltando na direção posta e assim adquirindo uma "segunda cabeça"
    if(event.keyCode == 38 && direction != "down") direction = "up";
    if(event.keyCode == 39 && direction != "left") direction = "right";
    if(event.keyCode == 40 && direction != "up") direction = "down";
}

function iniciarJogo() {
    //direções de controle da cobra
    if(snake[0].x > 15 * box && direction == "right") snake[0].x = 0; //delimita o campo, evitando que a cobra suma da tela e reapareça no lado oposto
    if(snake[0].x < 0 && direction == "left") snake[0].x = 16 * box;
    if(snake[0].y > 15 * box && direction == "down") snake[0].y = 0;
    if(snake[0].y < 0 && direction == "up") snake[0].y = 16 * box;

    
    //loop for para checar se cada coordenada se choca com i (corpo da cobra)
    for(i = 1; i < snake.length; i ++) {
        if(snake[0].x == snake[i].x && snake[0].y == snake[i].y){
            clearInterval(jogo);
            alert('Game Over :(');
        }
    }


    criarBG();
    criarCobrinha();
    drawFood();

    //posição inicial da cobrinha
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    //coordenadas de movimento da cobrinha
    if(direction == "right") snakeX += box; //se a direção de movimento for direita ele vai acrescentar um quadradinho a mais na direita
    if(direction == "left") snakeX -= box; //como ele anda para a esquerda, é preciso decrementar um valor cartesiano (- 1)
    if(direction == "up") snakeY -= box;
    if(direction == "down") snakeY += box;

    //para que a cobrinha aumente ao pegar a comidinha
    if(snakeX != food.x || snakeY != food.y) {
        //função PP, retira o último elemento do array
        snake.pop();
    }
    else { //a fruta reaparece em lugar aleatório depois de comida pela cobra
        food.x = Math.floor(Math.random() * 15 + 1) * box,
        food.y = Math.floor(Math.random() * 15 + 1) * box
    }    
    //acrescenta um elemento à frente do array, ou seja, a cabeça
    let newHead = {
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead);
}

let jogo = setInterval(iniciarJogo, 100);   //att o jogo a cada 100 milisegundos, dando continuidade sem que trave