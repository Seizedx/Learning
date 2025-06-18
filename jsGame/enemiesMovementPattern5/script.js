/** @type {HTMLCanvasElement} */
// Define o tipo do elemento canvas como HTMLCanvasElement para melhor suporte em IDEs
const canvas = document.getElementById('canvas1'); // Obtém o elemento canvas do HTML pelo ID 'canvas1'
const ctx = canvas.getContext('2d'); // Obtém o contexto 2D do canvas para desenhar
// Define a largura e altura do canvas (nota: deveria ser const para evitar reatribuição)
CANVAS_WIDTH = canvas.width = 500; // Define a largura do canvas como 500 pixels
CANVAS_HEIGHT = canvas.height = 1000; // Define a altura do canvas como 1000 pixels
const numberOfEnemies = 1; // Define o número de inimigos a serem criados (apenas 1 neste caso)
const enemiesArray = []; // Array para armazenar os objetos inimigos

let gameFrame = 0; // Contador de quadros do jogo para controlar animações

// Define a classe Enemy para gerenciar cada inimigo
class Enemy {
    constructor() {
        this.image = new Image(); // Cria um novo objeto de imagem para o sprite do inimigo
        this.image.src = '../src/img/enemies/enemy4.png'; // Define o caminho da imagem do sprite
        this.speed = Math.random() * 3 - 1; // Define uma velocidade base aleatória (-1 a 2, não usada diretamente)
        this.spriteWidth = 213; // Largura de cada quadro do sprite
        this.spriteHeight = 212; // Altura de cada quadro do sprite
        this.width = this.spriteWidth / 1; // Define a largura do inimigo (sem escala, tamanho original)
        this.height = this.spriteHeight / 1; // Define a altura do inimigo (sem escala, tamanho original)
        this.x = Math.random() * (canvas.width - this.width); // Posição x inicial aleatória dentro do canvas
        this.y = Math.random() * (canvas.height - this.height); // Posição y inicial aleatória dentro do canvas
        this.frame = 0; // Quadro inicial da animação do sprite
        this.flapSpeed = Math.floor(Math.random() * 10 + 5); // Velocidade aleatória de troca de quadros (5 a 14)
        this.angle = Math.random() * 30 + 1; // Ângulo inicial aleatório (1 a 31) para movimento circular
        this.angleSpeed = Math.random() * 1 + 0.5; // Velocidade angular aleatória (0.5 a 1.5)
        this.curve = Math.random() * 200 + 40; // Amplitude aleatória do movimento circular (40 a 240)
    }
    // Atualiza a posição e animação do inimigo
    update() {
        // Calcula a posição x usando cosseno para criar movimento circular, centralizado no canvas
        this.x = this.curve * Math.cos(this.angle * Math.PI / 200) + (canvas.width / 2 - this.width / 2);
        // Calcula a posição y usando seno para criar movimento circular, centralizado no canvas
        this.y = this.curve * Math.sin(this.angle * Math.PI / 180) + (canvas.height / 2 - this.height / 2);
        this.angle += this.angleSpeed; // Incrementa o ângulo com base na velocidade angular
        // Verifica se o inimigo saiu da tela à esquerda (menos relevante devido ao movimento circular)
        if (this.x + this.width < 0) {
            this.x = canvas.width; // Reposiciona o inimigo à direita do canvas
        }
        // Controla a troca de quadros para animação
        if (gameFrame % this.flapSpeed === 0) { // Verifica se é hora de mudar o quadro com base na velocidade
            this.frame > 4 ? this.frame = 0 : this.frame++; // Alterna entre os quadros 0 a 4
        }
    }
    // Desenha o inimigo no canvas
    draw() {
        // Desenha o quadro atual do sprite na posição do inimigo
        ctx.drawImage(
            this.image,
            this.frame * this.spriteWidth, // Posição x do quadro no sprite sheet
            0, // Posição y do quadro no sprite sheet
            this.spriteWidth, // Largura do quadro
            this.spriteHeight, // Altura do quadro
            this.x, // Posição x no canvas
            this.y, // Posição y no canvas
            this.width, // Largura desenhada
            this.height // Altura desenhada
        );
    }
}

// Cria 1 inimigo e adiciona ao array enemiesArray
for (let i = 0; i < numberOfEnemies; i++) {
    enemiesArray.push(new Enemy()); // Instancia um novo inimigo e adiciona ao array
}

// Função principal de animação
function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT); // Limpa o canvas para evitar sobreposição
    // Atualiza e desenha cada inimigo no array (apenas 1 neste caso)
    enemiesArray.forEach(enemy => {
        enemy.update(); // Atualiza a posição e animação do inimigo
        enemy.draw(); // Desenha o inimigo no canvas
    });
    requestAnimationFrame(animate); // Solicita o próximo quadro de animação, criando um loop
    gameFrame++; // Incrementa o contador de quadros
}

// Inicia a animação
animate();