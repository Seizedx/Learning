// Obtém o elemento canvas do HTML pelo ID 'canvas1'
const canvas = document.getElementById('canvas1');
// Obtém o contexto 2D do canvas para desenhar
const ctx = canvas.getContext('2d');
// Define a largura e altura do canvas
const CANVAS_WIDTH = canvas.width = 800; // Define a largura do canvas como 800 pixels
const CANVAS_HEIGHT = canvas.height = 700; // Define a altura do canvas como 700 pixels
// Define a velocidade base do jogo
let gameSpeed = 1;

// Cria objetos de imagem para cada camada de fundo (background)
const backgroundLayer1 = new Image();
backgroundLayer1.src = '../src/img/bg/layer-1.png'; // Define o caminho da primeira camada de fundo
const backgroundLayer2 = new Image();
backgroundLayer2.src = '../src/img/bg/layer-2.png'; // Define o caminho da segunda camada de fundo
const backgroundLayer3 = new Image();
backgroundLayer3.src = '../src/img/bg/layer-3.png'; // Define o caminho da terceira camada de fundo
const backgroundLayer4 = new Image();
backgroundLayer4.src = '../src/img/bg/layer-4.png'; // Define o caminho da quarta camada de fundo
const backgroundLayer5 = new Image();
backgroundLayer5.src = '../src/img/bg/layer-5.png'; // Define o caminho da quinta camada de fundo

// Adiciona um evento que executa quando a janela é totalmente carregada
window.addEventListener('load', function() {
    // Obtém o elemento slider do HTML pelo ID 'slider'
    const slider = document.getElementById('slider');
    // Define o valor inicial do slider como a velocidade do jogo
    slider.value = gameSpeed;
    // Obtém o elemento para exibir a velocidade do jogo
    const showGameSpeed = document.getElementById('showGameSpeed');
    // Exibe a velocidade inicial do jogo no elemento HTML
    showGameSpeed.innerHTML = gameSpeed;
    // Adiciona um evento de mudança ao slider para atualizar a velocidade do jogo
    slider.addEventListener('change', function(e) {
        gameSpeed = e.target.value; // Atualiza gameSpeed com o valor do slider
        showGameSpeed.innerHTML = e.target.value; // Atualiza o texto exibido com o novo valor
    });

    // Define a classe Layer para gerenciar cada camada de fundo
    class Layer {
        constructor(image, speedModifier) {
            this.x = 0; // Posição inicial x da camada
            this.y = 0; // Posição inicial y da camada
            this.width = 2400; // Largura da imagem da camada
            this.height = 720; // Altura da imagem da camada
            this.image = image; // Imagem da camada
            this.speedModifier = speedModifier; // Modificador de velocidade para efeito de paralaxe
            this.speed = gameSpeed * this.speedModifier; // Calcula a velocidade da camada
        }
        // Atualiza a posição da camada
        update() {
            this.speed = gameSpeed * this.speedModifier; // Recalcula a velocidade com base no gameSpeed
            if (this.x <= -this.width) { // Verifica se a camada saiu completamente da tela
                this.x = 0; // Reseta a posição x para criar um loop contínuo
            }
            this.x = this.x - this.speed; // Move a camada para a esquerda com base na velocidade
        }
        // Desenha a camada no canvas
        draw() {
            // Desenha a imagem na posição atual
            ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
            // Desenha uma segunda cópia da imagem à direita para criar um efeito contínuo
            ctx.drawImage(this.image, this.x + this.width, this.y, this.width, this.height);
        }
    }

    // Cria instâncias da classe Layer para cada camada de fundo com diferentes modificadores de velocidade
    const layer1 = new Layer(backgroundLayer1, 0.3);
    const layer2 = new Layer(backgroundLayer2, 0.1);
    const layer3 = new Layer(backgroundLayer3, 0.3);
    const layer4 = new Layer(backgroundLayer4, 0.1);
    const layer5 = new Layer(backgroundLayer5, 0.5);

    // Array que armazena todas as camadas do jogo
    const gameObjects = [layer1, layer2, layer3, layer4, layer5];

    // Função principal de animação
    function animate() {
        // Limpa o canvas para evitar sobreposição de desenhos
        ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        // Atualiza e desenha cada camada no array gameObjects
        gameObjects.forEach(object => {
            object.update(); // Atualiza a posição da camada
            object.draw(); // Desenha a camada no canvas
        });
        // Solicita o próximo quadro de animação, criando um loop
        requestAnimationFrame(animate);
    }

    // Inicia a animação
    animate();
});