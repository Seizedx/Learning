// Define o estado inicial do jogador como 'getHit'
let playerState = 'getHit';

// Obtém o elemento dropdown do HTML pelo ID 'animations'
const dropdown = document.getElementById('animations');

// Adiciona um evento de mudança ao dropdown para atualizar o estado do jogador com o valor selecionado
dropdown.addEventListener('change', function(e) {
    playerState = e.target.value; // Atualiza playerState com o valor do dropdown
});

// Obtém o elemento canvas do HTML pelo ID 'canvas1'
const canvas = document.getElementById('canvas1');
// Obtém o contexto 2D do canvas para desenhar
const ctx = canvas.getContext('2d');

// Define a altura e largura do canvas como 600 pixels
const CANVAS_HEIGHT = canvas.height = 600;
const CANVAS_WIDTH = canvas.width = 600;

// Cria um novo objeto de imagem para o sprite do jogador
const playerImage = new Image();
// Define o caminho da imagem do sprite
playerImage.src = '../src/img/movement/shadow_dog.png';
// Define a largura e altura de cada quadro do sprite
const spriteWidth = 575;
const spriteHeight = 523;
// Inicializa a variável para controlar os quadros do jogo
let gameFrame = 0;
// Define quantos quadros do jogo esperar antes de mudar o quadro do sprite
const staggerFrames = 10;

// Array para armazenar as animações do sprite
const spriteAnimations = [];

// Define os estados de animação com seus nomes e número de quadros
const animationStates = [
    {
        name: 'idle',
        frames: 7,
    },
    {
        name: 'jump',
        frames: 7,
    },
    {
        name: 'fall',
        frames: 7,
    },
    {
        name: 'run',
        frames: 9,
    },
    {
        name: 'dizzy',
        frames: 10,
    },
    {
        name: 'sit',
        frames: 5,
    },
    {
        name: 'roll',
        frames: 7,
    },
    {
        name: 'bite',
        frames: 7,
    },
    {
        name: 'ko',
        frames: 12,
    },
    {
        name: 'getHit',
        frames: 4,
    },
];

// Itera sobre os estados de animação para criar as posições dos quadros
animationStates.forEach((state, index) => {
    // Cria um objeto para armazenar as localizações dos quadros
    let frames = {
        loc: [],
    }
    // Calcula as posições x e y de cada quadro no sprite sheet
    for (let j = 0; j < state.frames; j++) {
        let positionX = j * spriteWidth; // Posição x do quadro no sprite sheet
        let positionY = index * spriteHeight; // Posição y do quadro no sprite sheet
        frames.loc.push({x: positionX, y: positionY}); // Adiciona a posição ao array loc
    }
    // Associa o objeto de quadros ao nome do estado no array spriteAnimations
    spriteAnimations[state.name] = frames;
});

// Exibe o array de animações no console para depuração
console.log(spriteAnimations);

// Função principal de animação
function animate() {
    // Limpa o canvas para evitar sobreposição de desenhos
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    // Calcula a posição atual do quadro com base no gameFrame e staggerFrames
    let position = Math.floor(gameFrame / staggerFrames) % spriteAnimations[playerState].loc.length;
    // Calcula a coordenada x do quadro no sprite sheet
    let frameX = spriteWidth * position;
    // Obtém a coordenada y do quadro do estado atual
    let frameY = spriteAnimations[playerState].loc[position].y;

    // Desenha o quadro atual do sprite no canvas
    ctx.drawImage(playerImage, frameX, frameY, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight);

    // Incrementa o contador de quadros do jogo
    gameFrame++;

    // Solicita o próximo quadro de animação, criando um loop
    requestAnimationFrame(animate);
};

// Inicia a animação
animate();