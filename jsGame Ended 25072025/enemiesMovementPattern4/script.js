/** @type {HTMLCanvasElement} */
// Define o tipo do elemento canvas como HTMLCanvasElement para melhor suporte em IDEs
const canvas = document.getElementById('canvas1'); // Obtém o elemento canvas do HTML pelo ID 'canvas1'
const ctx = canvas.getContext('2d'); // Obtém o contexto 2D do canvas para desenhar
// Define a largura e altura do canvas (nota: deveria ser const para evitar reatribuição)
CANVAS_WIDTH = canvas.width = 500; // Define a largura do canvas como 500 pixels
CANVAS_HEIGHT = canvas.height = 1000; // Define a altura do canvas como 1000 pixels
const numberOfEnemies = 10; // Define o número de inimigos a serem criados
const enemiesArray = []; // Array para armazenar os objetos inimigos

let gameFrame = 0; // Contador de quadros do jogo para controlar animações

// Define a classe Enemy para gerenciar cada inimigo
class Enemy {
    constructor() {
        this.image = new Image(); // Cria um novo objeto de imagem para o sprite do inimigo
        this.image.src = '../src/img/enemies/enemy3.png'; // Define o caminho da imagem do sprite
        this.speed = Math.random() * 4 - 1; // Define uma velocidade base aleatória (-1 a 3, não usada diretamente)
        this.spriteWidth = 218; // Largura de cada quadro do sprite
        this.spriteHeight = 177; // Altura de cada quadro do sprite
        this.width = this.spriteWidth / 2; // Define a largura do inimigo (escala reduzida)
        this.height = this.spriteHeight / 2; // Define a altura do inimigo (escala reduzida)
        this.x = Math.random() * (canvas.width - this.width); // Posição x inicial aleatória dentro do canvas
        this.y = Math.random() * (canvas.height - this.height); // Posição y inicial aleatória dentro do canvas
        this.newX = Math.random() * canvas.width; // Define uma nova posição x alvo aleatória
        this.newY = Math.random() * canvas.height; // Define uma nova posição y alvo aleatória
        this.frame = 0; // Quadro inicial da animação do sprite
        this.flapSpeed = Math.floor(Math.random() * 8 + 5); // Velocidade aleatória de troca de quadros (5 a 12)
        this.interval = Math.floor(Math.random() * 200 + 50); // Intervalo aleatório para mudar o alvo (50 a 249 quadros)
    }
    // Atualiza a posição e animação do inimigo
    update() {
        // A cada intervalo definido, escolhe novas coordenadas alvo
        if (gameFrame % this.interval === 0) {
            this.newX = Math.random() * (canvas.width - this.width); // Define nova posição x alvo aleatória
            this.newY = Math.random() * (canvas.height - this.height); // Define nova posição y alvo aleatória
        }
        let dx = this.x - this.newX; // Calcula a diferença entre a posição atual x e o alvo
        let dy = this.y - this.newY; // Calcula a diferença entre a posição atual y e o alvo
        this.x -= dx / 100; // Move gradualmente o inimigo em direção ao alvo x (divisão para suavizar)
        this.y -= dy / 100; // Move gradualmente o inimigo em direção ao alvo y (divisão para suavizar)
        // Verifica se o inimigo saiu da tela à esquerda (menos relevante devido ao movimento alvo)
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

// Cria 10 inimigos e adiciona ao array enemiesArray
for (let i = 0; i < numberOfEnemies; i++) {
    enemiesArray.push(new Enemy()); // Instancia um novo inimigo e adiciona ao array
}

// Função principal de animação
function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT); // Limpa o canvas para evitar sobreposição
    // Atualiza e desenha cada inimigo no array
    enemiesArray.forEach(enemy => {
        enemy.update(); // Atualiza a posição e animação do inimigo
        enemy.draw(); // Desenha o inimigo no canvas
    });
    requestAnimationFrame(animate); // Solicita o próximo quadro de animação, criando um loop
    gameFrame++; // Incrementa o contador de quadros
}

// Inicia a animação
animate();