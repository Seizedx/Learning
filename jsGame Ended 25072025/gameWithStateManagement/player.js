// Importa classes de estados do jogador de um arquivo chamado 'state.js'
import {
    StandingLeft,
    StandingRight,
    SittingLeft,
    SittingRight,
    RunningLeft,
    RunningRight,
    JumpingLeft,
    JumpingRight,
    FallingLeft,
    FallingRight,
} from './state.js';

// Declara e exporta uma classe padrão chamada Player para gerenciar o jogador no jogo
export default class Player {
    // Método construtor que inicializa o jogador com as dimensões do jogo
    constructor(gameWidth, gameHeight) {
        // Armazena a largura do jogo
        this.gameWidth = gameWidth;
        // Armazena a altura do jogo
        this.gameHeight = gameHeight;
        // Inicializa um array com todos os estados possíveis do jogador, passando a instância do jogador para cada estado
        this.states = [
            new StandingLeft(this),
            new StandingRight(this),
            new SittingLeft(this),
            new SittingRight(this),
            new RunningLeft(this),
            new RunningRight(this),
            new JumpingLeft(this),
            new JumpingRight(this),
            new FallingLeft(this),
            new FallingRight(this),
        ];
        // Define o estado inicial do jogador como StandingRight (índice 1 do array de estados)
        this.currentState = this.states[1];
        // Obtém a imagem do jogador a partir de um elemento HTML com o id 'dogImage'
        this.image = document.getElementById('dogImage');
        // Define a largura do sprite do jogador
        this.width = 200;
        // Define a altura do sprite do jogador
        this.height = 181.83;
        // Calcula a posição inicial do jogador no eixo X (centralizado horizontalmente)
        this.x = this.gameWidth * 0.5 - this.width * 0.5;
        // Define a posição inicial do jogador no eixo Y (no chão, na parte inferior do jogo)
        this.y = this.gameHeight - this.height;
        // Inicializa a velocidade vertical do jogador como 0
        this.vy = 0;
        // Define o peso do jogador (usado para gravidade no movimento vertical)
        this.weight = 1;
        // Define a posição inicial do quadro de animação no eixo X
        this.frameX = 0;
        // Define a posição inicial do quadro de animação no eixo Y
        this.frameY = 0;
        // Define o número máximo de quadros na animação (0 a 6)
        this.maxFrame = 6;
        // Inicializa a velocidade horizontal do jogador como 0
        this.speed = 0;
        // Define a velocidade máxima horizontal do jogador
        this.maxSpeed = 4;
        // Define a taxa de quadros por segundo para a animação
        this.fps = 15;
        // Inicializa o temporizador de quadros para controle de animação
        this.frameTimer = 0;
        // Calcula o intervalo de tempo entre quadros com base no fps (1000ms / fps)
        this.frameInterval = 1000/this.fps;
    }
    // Método para desenhar o jogador na tela usando o contexto do canvas
    draw(context, deltaTime) {
        // Verifica se o temporizador de quadros excedeu o intervalo necessário para mudar de quadro
        if(this.frameTimer > this.frameInterval) {
            // Verifica se o quadro atual é menor que o número máximo de quadros
            if(this.frameX < this.maxFrame) {
                // Incrementa o quadro atual para a próxima imagem da animação
                this.frameX++;
            } else {
                // Reinicia o quadro para 0, voltando ao início da animação
                this.frameX = 0;
            }    
            // Reseta o temporizador de quadros
            this.frameTimer = 0;  
        } else {
            // Incrementa o temporizador de quadros com o tempo decorrido
            this.frameTimer += deltaTime;
        }
        // Desenha a imagem do jogador no canvas, usando a posição do quadro atual, dimensões e posição do jogador
        context.drawImage(this.image, this.width * this.frameX, this.height * this.frameY, this.width, this.height, this.x, this.y, this.width, this.height);
    }
    // Método para atualizar o estado do jogador com base nas entradas do usuário
    update(input) {
        // Chama o método handleInput do estado atual para processar a entrada do usuário
        this.currentState.handleInput(input);
        // Atualiza a posição horizontal do jogador com base na velocidade
        this.x += this.speed;
        // Impede que o jogador saia da tela pela esquerda
        if ( this.x <= 0) {
            this.x = 0;
        // Impede que o jogador saia da tela pela direita
        } else if (this.x >= this.gameWidth - this.width) {
            this.x = this.gameWidth - this.width;
        }
        // Atualiza a posição vertical do jogador com base na velocidade vertical
        this.y += this.vy;
        // Verifica se o jogador não está no chão
        if (!this.onGround()) {
            // Aplica gravidade, aumentando a velocidade vertical
            this.vy += this.weight;
        } else {
            // Define a velocidade vertical como 0 se o jogador está no chão
            this.vy = 0;
        }
        // Impede que o jogador passe do chão (limite inferior da tela)
        if(this.y > this.gameHeight - this.height) {
            this.y = this.gameHeight - this.height;
        }
    }
    // Método para mudar o estado atual do jogador
    setState(state) {
        // Define o estado atual com base no índice fornecido no array de estados
        this.currentState = this.states[state];
        // Chama o método enter do novo estado para inicializá-lo
        this.currentState.enter();
    }
    // Método que verifica se o jogador está no chão
    onGround() {
        // Retorna verdadeiro se a posição Y do jogador for maior ou igual à altura do jogo menos a altura do jogador
        return this.y >= this.gameHeight - this.height;
    }
}