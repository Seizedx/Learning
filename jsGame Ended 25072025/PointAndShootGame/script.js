// Obtém o elemento canvas com o ID 'canvas1' do documento HTML
const canvas = document.getElementById('canvas1');

// Obtém o contexto de renderização 2D do canvas para permitir operações de desenho
const ctx = canvas.getContext('2d');

// Define a largura do canvas para corresponder à largura interna da janela do navegador
canvas.width = window.innerWidth;

// Define a altura do canvas para corresponder à altura interna da janela do navegador
canvas.height = window.innerHeight;

// Obtém o elemento canvas com o ID 'collisionCanvas' para detecção de colisões
const collisionCanvas = document.getElementById('collisionCanvas');

// Obtém o contexto de renderização 2D do canvas de colisão
const collisionCtx = collisionCanvas.getContext('2d');

// Define a largura do canvas de colisão para corresponder à largura interna da janela
collisionCanvas.width = window.innerWidth;

// Define a altura do canvas de colisão para corresponder à altura interna da janela
collisionCanvas.height = window.innerHeight;

// Define uma função para redefinir as dimensões dos canvases e configurar a fonte do texto
function resetCanvas() {
    // Atualiza a largura do canvas de colisão para a largura atual da janela
    collisionCanvas.width = window.innerWidth;
    // Atualiza a altura do canvas de colisão para a altura atual da janela
    collisionCanvas.height = window.innerHeight;
    // Atualiza a largura do canvas principal para a largura atual da janela
    canvas.width = window.innerWidth;
    // Atualiza a altura do canvas principal para a altura atual da janela
    canvas.height = window.innerHeight;
    // Define o estilo e tamanho da fonte para renderização de texto no canvas principal
    ctx.font = '50px Impact';
};

// Adiciona um ouvinte de evento para lidar com o redimensionamento da janela e chamar resetCanvas
window.addEventListener('resize', function () {
    // Chama resetCanvas para ajustar os tamanhos dos canvases quando a janela é redimensionada
    resetCanvas();
});

// Inicializa uma variável para rastrear a pontuação do jogador
let score = 0;

// Inicializa um booleano para rastrear se o jogo terminou
let gameOver = false;

// Define o estilo e tamanho inicial da fonte para renderização de texto no canvas principal
ctx.font = '50px Impact';

// Inicializa uma variável para rastrear o tempo até o próximo corvo ser gerado
let timeToNextRaven = 0;

// Define o intervalo (em milissegundos) entre a geração de novos corvos
let ravenInterval = 400;

// Inicializa uma variável para armazenar o timestamp do último quadro
let lastTime = 0;

// Inicializa um array para armazenar todos os objetos corvo
let ravens = [];

// Define a classe Raven para representar os corvos inimigos no jogo
class Raven {
    // Construtor para inicializar uma nova instância de corvo
    constructor() {
        // Define a largura da imagem do sprite do corvo
        this.spriteWidth = 271;
        // Define a altura da imagem do sprite do corvo
        this.spriteHeight = 194;
        // Calcula um modificador de tamanho aleatório para escalar o corvo
        this.sizeModifier = Math.random() * 0.6 + 0.4;
        // Calcula a largura escalada do corvo
        this.width = this.spriteHeight * this.sizeModifier;
        // Calcula a altura escalada do corvo
        this.height = this.spriteHeight * this.sizeModifier;
        // Define a posição x inicial do corvo na borda direita do canvas
        this.x = canvas.width;
        // Define uma posição y aleatória dentro da altura do canvas, considerando a altura do corvo
        this.y = Math.random() * (canvas.height - this.height);
        // Define uma velocidade horizontal aleatória para o corvo
        this.directionX = Math.random() * 1 + 1;
        // Define uma velocidade vertical aleatória para o corvo, permitindo movimento para cima ou baixo
        this.directionY = Math.random() * 3 - 2.5;
        // Inicializa uma flag para marcar se o corvo deve ser removido
        this.markedForDeletion = false;
        // Cria um novo objeto Image para o sprite do corvo
        this.image = new Image();
        // Define o caminho da imagem do sprite do corvo
        this.image.src = '../src/img/enemies/raven.png';
        // Inicializa o quadro atual para a animação do sprite
        this.frame = 0;
        // Define o número máximo de quadros na animação do sprite
        this.maxFrame = 4;
        // Inicializa um contador para o tempo desde a última batida de asas
        this.timeSinceFlap = 0;
        // Define um intervalo aleatório para a animação de batida de asas do corvo
        this.flapInterval = Math.random() * 50 + 50;
        // Gera valores RGB aleatórios para a cor de colisão do corvo
        this.randomColors = [Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255)];
        // Cria uma string de cor RGB para detecção de colisão
        this.color = 'rgb(' + this.randomColors[0] + ',' + this.randomColors[1] + ',' + this.randomColors[2] + ')';
        // Determina aleatoriamente se o corvo terá um rastro de partículas
        this.hasTrail = Math.random() > 0.5;
    };

    // Atualiza o estado do corvo com base no tempo decorrido desde o último quadro
    update(deltatime) {
        // Inverte a direção vertical se o corvo atingir o topo ou a base do canvas
        if (this.y < 0 || this.y > canvas.height - this.height) {
            this.directionY = this.directionY * -1;
        }
        // Move o corvo horizontalmente para a esquerda
        this.x -= this.directionX;
        // Move o corvo verticalmente com base na direção
        this.y += this.directionY;
        // Marca o corvo para exclusão se ele sair da borda esquerda do canvas
        if (this.x < 0 - this.width) {
            this.markedForDeletion = true;
        }
        // Incrementa o tempo desde a última batida de asas
        this.timeSinceFlap += deltatime;
        // Verifica se é hora de avançar para o próximo quadro de animação
        if (this.timeSinceFlap > this.flapInterval) {
            // Reinicia para o primeiro quadro se o máximo for atingido
            if (this.frame > this.maxFrame) {
                this.frame = 0;
            } else {
                // Avança para o próximo quadro de animação
                this.frame++;
                // Reinicia o temporizador de batida
                this.timeSinceFlap = 0;
                // Adiciona uma partícula ao rastro se o corvo tiver um
                if (this.hasTrail) {
                    particles.push(new Particle(this.x, this.y, this.width, this.color));
                }
            }
        }
        // Termina o jogo se o corvo sair da borda esquerda
        if (this.x < 0 - this.width) {
            gameOver = true;
        }
    };

    // Desenha o corvo em ambos os canvases
    draw() {
        // Define a cor de preenchimento para o canvas de colisão com a cor única do corvo
        collisionCtx.fillStyle = this.color;
        // Desenha um retângulo no canvas de colisão para detecção de colisão
        collisionCtx.fillRect(this.x, this.y, this.width, this.height);
        // Desenha o sprite do corvo no canvas principal usando o quadro atual
        ctx.drawImage(this.image, this.frame * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height);
    }
};

// Inicializa um array para armazenar objetos de explosão
let explosions = [];

// Define a classe Explosion para representar animações de explosão
class Explosion {
    // Construtor para inicializar uma nova explosão em uma posição e tamanho específicos
    constructor(x, y, size) {
        // Cria um novo objeto Image para o sprite de explosão
        this.image = new Image();
        // Define o caminho da imagem do sprite de explosão
        this.image.src = '../src/img/collision/boom1.png';
        // Define a largura do sprite de explosão
        this.spriteWidth = 200;
        // Define a altura do sprite de explosão
        this.spriteHeight = 179;
        // Define o tamanho da explosão
        this.size = size;
        // Define a posição x da explosão
        this.x = x;
        // Define a posição y da explosão
        this.y = y;
        // Inicializa o quadro atual para a animação de explosão
        this.frame = 0;
        // Cria um novo objeto Audio para o som da explosão
        this.sound = new Audio();
        // Define o caminho do som da explosão
        this.sound.src = '../src/sound/boom.wav';
        // Inicializa um contador para o tempo desde o último quadro
        this.timeSinceLastFrame = 0;
        // Define o intervalo entre os quadros da animação
        this.frameInterval = 100;
    }

    // Atualiza o estado da explosão com base no tempo decorrido
    update(deltatime) {
        // Toca o som da explosão quando a animação começa
        if (this.frame === 0) {
            this.sound.play();
        }
        // Incrementa o tempo desde o último quadro
        this.timeSinceLastFrame += deltatime;
        // Verifica se é hora de avançar para o próximo quadro
        if (this.timeSinceLastFrame > this.frameInterval) {
            // Avança para o próximo quadro de animação
            this.frame++;
            // Reinicia o temporizador de quadro
            this.timeSinceLastFrame = 0;
            // Marca a explosão para exclusão se a animação estiver completa
            if (this.frame > 5) {
                this.markedForDeletion = true;
            }
        }
    }

    // Desenha a explosão no canvas principal
    draw() {
        // Desenha o sprite de explosão no quadro atual, com posição e tamanho ajustados
        ctx.drawImage(this.image, this.frame * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, this.x, this.y - this.size/4, this.size, this.size);
    }
}

// Inicializa um array para armazenar objetos de partículas para rastros dos corvos
let particles = [];

// Define a classe Particle para representar partículas de rastro
class Particle {
    // Construtor para inicializar uma nova partícula em uma posição, tamanho e cor específicos
    constructor(x, y, size, color) {
        // Define o tamanho da partícula
        this.size = size;
        // Define a posição x, com deslocamento para centralizar a partícula
        this.x = x + this.size * 0.5;
        // Define a posição y, com deslocamento para centralizar a partícula
        this.y = y + this.size * 0.5;
        // Define um raio inicial aleatório para a partícula
        this.radius = Math.random() * this.size / 10;
        // Define um raio máximo aleatório para a partícula
        this.maxRadius = Math.random() * 20 + 35;
        // Inicializa uma flag para marcar se a partícula deve ser removida
        this.markedForDeletion = false;
        // Define uma velocidade horizontal aleatória para a partícula
        this.speedX = Math.random() * 1 + 0.5;
        // Define a cor da partícula para corresponder à cor do corvo
        this.color = color;
    }

    // Atualiza o estado da partícula
    update() {
        // Move a partícula horizontalmente
        this.x += this.speedX;
        // Aumenta o raio da partícula
        this.radius += 0.2;
        // Marca a partícula para exclusão se exceder o raio máximo
        if (this.radius > this.maxRadius) {
            this.markedForDeletion = true;
        }
    }

    // Desenha a partícula no canvas principal
    draw() {
        // Salva o estado atual do canvas
        ctx.save();
        // Define a transparência para a partícula
        ctx.globalAlpha = 0.2;
        // Inicia um novo caminho para desenho
        ctx.beginPath();
        // Define a cor de preenchimento para a cor da partícula
        ctx.fillStyle = this.color;
        // Desenha uma partícula circular na posição com o raio atual
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        // Preenche a forma da partícula
        ctx.fill();
        // Restaura o estado do canvas
        ctx.restore();
    }
};

// Define uma função para desenhar a pontuação atual no canvas
function drawScore() {
    // Define a cor do texto como preto
    ctx.fillStyle = 'black';
    // Desenha o texto da pontuação na posição especificada
    ctx.fillText('Pontuação: ' + score, 55, 80);
};

// Define uma função para redefinir o estado do jogo
function resetGame() {
    // Redefine a pontuação para zero
    score = 0;
    // Limpa o array de corvos
    ravens = [];
    // Limpa o array de partículas
    particles = [];
    // Limpa o array de explosões
    explosions = [];
    // Redefine o estado de fim de jogo
    gameOver = false;

    // Limpa todo o canvas principal
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // Limpa todo o canvas de colisão
    collisionCtx.clearRect(0, 0, canvas.width, canvas.height);

    // Encontra o botão de reinício existente, se houver
    const restartButton = document.querySelector('button');
    // Remove o botão de reinício, se existir
    if (restartButton) {
        restartButton.remove();
        // Redefine as dimensões e a fonte do canvas
        resetCanvas();
    }
    // Redefine as dimensões e a fonte do canvas
    resetCanvas();
    // Inicia o loop de animação novamente
    requestAnimationFrame(animate);
};

// Define uma função para desenhar a tela de fim de jogo
function drawGameOver() {
    // Define o alinhamento do texto como centralizado
    ctx.textAlign = 'center';
    // Define a cor do texto como preto
    ctx.fillStyle = 'black';
    // Desenha o texto "FIM DE JOGO!" no centro do canvas
    ctx.fillText('FIM DE JOGO!', canvas.width * 0.5, canvas.height * 0.5);
    // Desenha a pontuação final abaixo da mensagem de fim de jogo
    ctx.fillText('Sua pontuação é ' + score, canvas.width * 0.5, canvas.height * 0.55);

    // Cria um novo elemento de botão para reiniciar o jogo
    const restartButton = document.createElement('button');
    // Define o texto do botão como "Reiniciar"
    restartButton.textContent = 'Reiniciar';
    // Define a posição do botão como absoluta
    restartButton.style.position = 'absolute';
    // Define a largura do botão
    restartButton.style.width = '150px';
    // Define a altura do botão em relação ao canvas
    restartButton.style.height = `${canvas.height * 0.1}px`;
    // Posiciona o botão centralizado horizontalmente
    restartButton.style.left = `${canvas.offsetLeft + canvas.width * 0.5 - 75}px`;
    // Posiciona o botão abaixo do texto de pontuação
    restartButton.style.top = `${canvas.offsetTop + canvas.height * 0.6}px`;
    // Define o preenchimento do botão
    restartButton.style.padding = '20px';
    // Define a cor do texto do botão como branco
    restartButton.style.color = 'white';
    // Define o tamanho da fonte do botão
    restartButton.style.fontSize = '25px';
    // Define um fundo com gradiente para o botão
    restartButton.style.background = 'linear-gradient(to bottom, rgb(222, 158, 18), rgb(169, 62, 8))';
    // Define o raio da borda do botão para cantos arredondados
    restartButton.style.borderRadius = '10px';
    // Define o cursor como ponteiro para indicar clicabilidade
    restartButton.style.cursor = 'pointer';
    // Define o botão para usar flexbox para centralizar o conteúdo
    restartButton.style.display = 'flex';
    // Centraliza o conteúdo do botão horizontalmente
    restartButton.style.justifyContent = 'center';
    // Centraliza o conteúdo do botão verticalmente
    restartButton.style.alignItems = 'center';

    // Adiciona um ouvinte de evento de clique ao botão para reiniciar o jogo
    restartButton.addEventListener('click', resetGame);

    // Anexa o botão ao corpo do documento
    document.body.appendChild(restartButton);
}

// Adiciona um ouvinte de evento para cliques do mouse para lidar com interações com corvos
window.addEventListener('mousedown', function (e) {
    // Obtém os dados de pixel na posição clicada do canvas de colisão
    const detectPixelColor = collisionCtx.getImageData(e.x, e.y, 10, 10);
    // Extrai os dados RGBA do pixel
    const pc = detectPixelColor.data;
    // Verifica cada corvo para ver se sua cor corresponde ao pixel clicado
    ravens.forEach(object => {
        if (object.randomColors[0] === pc[0] && object.randomColors[1] === pc[1] && object.randomColors[2] === pc[2]) {
            // Marca o corvo para exclusão se clicado
            object.markedForDeletion = true;
            // Incrementa a pontuação
            score++;
            // Adiciona uma explosão na posição do corvo
            explosions.push(new Explosion(object.x, object.y, object.width));
        }
    })
});

// Define a função principal do loop de animação
function animate(timestamp) {
    // Limpa todo o canvas principal
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // Limpa todo o canvas de colisão
    collisionCtx.clearRect(0, 0, canvas.width, canvas.height);
    // Calcula o tempo decorrido desde o último quadro
    let deltatime = timestamp - lastTime;
    // Atualiza o timestamp do último quadro
    lastTime = timestamp;
    // Incrementa o tempo até a próxima geração de corvo
    timeToNextRaven += deltatime;
    // Verifica se é hora de gerar um novo corvo
    if (timeToNextRaven > ravenInterval) {
        // Adiciona um novo corvo ao array de corvos
        ravens.push(new Raven());
        // Reinicia o temporizador de geração de corvos
        timeToNextRaven = 0;
        // Ordena os corvos por largura para renderizar os menores atrás dos maiores
        ravens.sort(function(a, b) {
            return a.width - b.width;
        });
    };
    // Desenha a pontuação atual no canvas
    drawScore();
    // Atualiza todas as partículas, corvos e explosões com o tempo decorrido
    [...particles, ...ravens, ...explosions].forEach(object => object.update(deltatime));
    // Desenha todas as partículas, corvos e explosões no canvas
    [...particles, ...ravens, ...explosions].forEach(object => object.draw());
    // Remove corvos marcados para exclusão
    ravens = ravens.filter(object => !object.markedForDeletion);
    // Remove explosões marcadas para exclusão
    explosions = explosions.filter(object => !object.markedForDeletion);
    // Remove partículas marcadas para exclusão
    particles = particles.filter(object => !object.markedForDeletion);

    // Continua o loop de animação se o jogo não terminou
    if (!gameOver) {
        requestAnimationFrame(animate);
    } else {
        // Desenha a tela de fim de jogo se o jogo terminou
        drawGameOver();
    }
};

// Inicia o loop de animação com um timestamp inicial de 0
animate(0);