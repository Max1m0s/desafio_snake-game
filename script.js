let canvas = document.getElementById("snake");
let context = canvas.getContext ("2d"); //Renderiza o desenho dentro do canva
let box = 32;   //cada quadradinho no canvas e seu tamanho em pixels

function criarBG() {  //Desenha e define a cor do canvas
    context.fillStyle = "lightgreen";   //define a cor do context | fillStyle lida com o estilo do context
    context.fillRect(0, 0, 16 * box, 16 * box); //fillRect vai desenhar o retângulo onde o jogo vai acontecer, trabalha com 4 parâmetros: posição de X, posição de Y, altura, largura     //
}

criarBG();