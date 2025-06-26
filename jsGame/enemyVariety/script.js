// Adiciona um ouvinte de evento para executar o código quando a página terminar de carregar
window.addEventListener('load', function() {

    // Obtém o elemento canvas com o ID 'canvas1' do documento HTML
    const canvas = document.getElementById('canvas1');

    // Obtém o contexto de renderização 2D do canvas para permitir operações de desenho
    const ctx = canvas.getContext('2d');

    // Define a largura do canvas como 500 pixels
    canvas.width = 500;

    // Define a altura do canvas como 800 pixels
    canvas.height = 800;

    // Define a classe Game para gerenciar a lógica do jogo
    class Game {
        // Construtor para inicializar o jogo com o contexto do canvas, largura e altura
        constructor(ctx, width, height) {
            // Armazena o contexto do canvas
            this.ctx = ctx;
            // Armazena a largura do canvas
            this.width = width;
            // Armazena a altura do canvas
            this.height = height;
            // Inicializa um array para armazenar os inimigos
            this.enemies = [];
            // Define o intervalo (em milissegundos) para gerar novos inimigos
            this.enemyInterval = 500;
            // Inicializa um temporizador para controlar a geração de inimigos
            this.enemyTimer = 0;
            // Define os tipos de inimigos disponíveis
            this.enemyTypes = ['worm', 'ghost', 'spider'];
        }

        // Atualiza o estado do jogo com base no tempo decorrido
        update(deltaTime) {
            // Remove inimigos marcados para exclusão do array
            this.enemies = this.enemies.filter(object => !object.markedForDeletion);
            // Verifica se é hora de adicionar um novo inimigo
            if (this.enemyTimer > this.enemyInterval) {
                // Adiciona um novo inimigo
                this.#addNewEnemy();
                // Reinicia o temporizador
                this.enemyTimer = 0;
            } else {
                // Incrementa o temporizador com o tempo decorrido
                this.enemyTimer += deltaTime;
            }
            // Atualiza cada inimigo no array
            this.enemies.forEach(object => object.update(deltaTime));
        }

        // Desenha todos os inimigos no canvas
        draw() {
            // Chama o método draw de cada inimigo, passando o contexto do canvas
            this.enemies.forEach(object => object.draw(this.ctx));
        }

        // Método privado para adicionar um novo inimigo aleatoriamente
        #addNewEnemy() {
            // Seleciona um tipo de inimigo aleatoriamente do array enemyTypes
            const randomEnemy = this.enemyTypes[Math.floor(Math.random() * this.enemyTypes.length)];
            // Cria uma minhoca se o tipo for 'worm'
            if (randomEnemy === 'worm') {
                this.enemies.push(new Worm(this));
            // Cria um fantasma se o tipo for 'ghost'
            } else if (randomEnemy === 'ghost') {
                this.enemies.push(new Ghost(this));
            // Cria uma aranha se o tipo for 'spider'
            } else if (randomEnemy === 'spider') {
                this.enemies.push(new Spider(this));
            }
        }
    };

    // Define a classe base Enemy para inimigos genéricos
    class Enemy {
        // Construtor para inicializar um inimigo com referência ao jogo
        constructor(game) {
            // Armazena a referência ao objeto Game
            this.game = game;
            // Inicializa uma flag para marcar se o inimigo deve ser removido
            this.markedForDeletion = false;
            // Inicializa o quadro atual da animação do sprite
            this.frameX = 0;
            // Define o número máximo de quadros na animação
            this.maxFrame = 5;
            // Define o intervalo (em milissegundos) entre os quadros da animação
            this.frameInterval = 100;
            // Inicializa um temporizador para controlar a troca de quadros
            this.frameTimer = 0;
        }

        // Atualiza o estado do inimigo com base no tempo decorrido
        update(deltaTime) {
            // Move o inimigo para a esquerda com base na velocidade horizontal
            this.x -= this.velocityX * deltaTime;
            // Marca o inimigo para exclusão se ele sair da borda esquerda do canvas
            if (this.x < 0 - this.width) {
                this.markedForDeletion = true;
            }
            // Verifica se é hora de avançar para o próximo quadro de animação
            if (this.frameTimer > this.frameInterval) {
                // Avança para o próximo quadro se não atingiu o máximo
                if (this.frameX < this.maxFrame) {
                    this.frameX++;
                } else {
                    // Reinicia para o primeiro quadro se atingiu o máximo
                    this.frameX = 0;
                }
                // Reinicia o temporizador de quadro
                this.frameTimer = 0;
            } else {
                // Incrementa o temporizador de quadro com o tempo decorrido
                this.frameTimer += deltaTime;
            }
        }

        // Desenha o inimigo no canvas
        draw(ctx) {
            // Desenha a imagem do sprite no quadro atual, na posição e tamanho definidos
            ctx.drawImage(this.image, this.frameX * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height);
        }
    };

    // Define a classe Worm, que herda de Enemy, para representar inimigos do tipo minhoca
    class Worm extends Enemy {
        // Construtor para inicializar uma minhoca
        constructor(game) {
            // Chama o construtor da classe base Enemy
            super(game);
            // Define a largura do sprite da minhoca
            this.spriteWidth = 229;
            // Define a altura do sprite da minhoca
            this.spriteHeight = 171;
            // Define a largura escalada da minhoca (metade do tamanho original)
            this.width = this.spriteWidth * 0.5;
            // Define a altura escalada da minhoca (metade do tamanho original)
            this.height = this.spriteHeight * 0.5;
            // Define a posição x inicial na borda direita do canvas
            this.x = this.game.width;
            // Define a posição y na base do canvas, considerando a altura da minhoca
            this.y = this.game.height - this.height;
            // Define a imagem do sprite da minhoca (assumindo que 'worm' está definido)
            this.image = worm;
            // Define uma velocidade horizontal aleatória para a minhoca
            this.velocityX = Math.random() * 0.1 + 0.2;
        }
    }

    // Define a classe Ghost, que herda de Enemy, para representar inimigos do tipo fantasma
    class Ghost extends Enemy {
        // Construtor para inicializar um fantasma
        constructor(game) {
            // Chama o construtor da classe base Enemy
            super(game);
            // Define a largura do sprite do fantasma
            this.spriteWidth = 261;
            // Define a altura do sprite do fantasma
            this.spriteHeight = 209;
            // Define a largura escalada do fantasma (metade do tamanho original)
            this.width = this.spriteWidth * 0.5;
            // Define a altura escalada do fantasma (metade do tamanho original)
            this.height = this.spriteHeight * 0.5;
            // Define a posição x inicial na borda direita do canvas
            this.x = this.game.width;
            // Define uma posição y aleatória dentro de 60% da altura do canvas
            this.y = Math.random() * this.game.height * 0.6;
            // Define a imagem do sprite do fantasma (assumindo que 'ghost' está definido)
            this.image = ghost;
            // Define uma velocidade horizontal aleatória para o fantasma
            this.velocityX = Math.random() * 0.1 + 0.2;
            // Inicializa o ângulo para o movimento ondulante
            this.angle = 0;
            // Define a amplitude do movimento ondulante aleatoriamente
            this.curve = Math.random() * 0.3 + 0.5;
        }

        // Atualiza o estado do fantasma, sobrescrevendo o método da classe base
        update(deltaTime) {
            // Chama o método update da classe base para movimentação horizontal e animação
            super.update(deltaTime);
            // Atualiza a posição y com um movimento ondulante usando seno
            this.y += Math.sin(this.angle) * this.curve;
            // Incrementa o ângulo para continuar o movimento ondulante
            this.angle += Math.random() * 0.09 + 0.01;
        }

        // Desenha o fantasma no canvas
        draw(ctx) {
            // Salva o estado atual do canvas
            ctx.save();
            // Define a transparência do fantasma como 50%
            ctx.globalAlpha = 0.5;
            // Chama o método draw da classe base para desenhar o sprite
            super.draw(ctx);
            // Restaura o estado do canvas
            ctx.restore();
        }
    }

    // Define a classe Spider, que herda de Enemy, para representar inimigos do tipo aranha
    class Spider extends Enemy {
        // Construtor para inicializar uma aranha
        constructor(game) {
            // Chama o construtor da classe base Enemy
            super(game);
            // Define a largura do sprite da aranha
            this.spriteWidth = 310;
            // Define a altura do sprite da aranha
            this.spriteHeight = 175;
            // Define a largura escalada da aranha (metade do tamanho original)
            this.width = this.spriteWidth * 0.5;
            // Define a altura escalada da aranha (metade do tamanho original)
            this.height = this.spriteHeight * 0.5;
            // Define uma posição x aleatória dentro da largura do canvas
            this.x = Math.random() * this.game.width;
            // Define a posição y inicial acima do canvas
            this.y = 0 - this.height;
            // Define a imagem do sprite da aranha (assumindo que 'spider' está definido)
            this.image = spider;
            // Define a velocidade horizontal como zero (a aranha só se move verticalmente)
            this.velocityX = 0;
            // Define uma velocidade vertical aleatória para a aranha
            this.velocityY = Math.random() * 0.1 + 0.2;
            // Define uma distância máxima aleatória que a aranha descerá
            this.maxLength = Math.random() * this.game.height;
        }

        // Atualiza o estado da aranha, sobrescrevendo o método da classe base
        update(deltaTime) {
            // Chama o método update da classe base para animação
            super.update(deltaTime);
            // Marca a aranha para exclusão se ela sair muito acima do canvas
            if (this.y < 0 - this.height * 2) {
                this.markedForDeletion = true;
            }
            // Move a aranha verticalmente com base na velocidade
            this.y += this.velocityY * deltaTime;
            // Inverte a direção vertical se a aranha atingir a distância máxima
            if (this.y > this.maxLength) {
                this.velocityY *= -1;
            }
        }

        // Desenha a aranha no canvas
        draw(ctx) {
            // Inicia um novo caminho para desenho
            ctx.beginPath();
            // Define o ponto inicial da linha (teia) no topo do canvas
            ctx.moveTo(this.x + this.width * 0.5, 0);
            // Define o ponto final da linha (teia) logo acima da aranha
            ctx.lineTo(this.x + this.width * 0.5, this.y + 10);
            // Desenha a linha da teia
            ctx.stroke();
            // Chama o método draw da classe base para desenhar o sprite da aranha
            super.draw(ctx);
        }
    }

    // Cria uma nova instância do jogo com o contexto, largura e altura do canvas
    const game = new Game(ctx, canvas.width, canvas.height);

    // Inicializa uma variável para armazenar o timestamp do último quadro
    let lastTime = 1;

    // Define a função principal do loop de animação
    function animate(timeStamp) {
        // Limpa todo o canvas para o próximo quadro
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        // Calcula o tempo decorrido desde o último quadro
        const deltaTime = timeStamp - lastTime;
        // Atualiza o timestamp do último quadro
        lastTime = timeStamp;
        // Atualiza o estado do jogo com o tempo decorrido
        game.update(deltaTime);
        // Desenha todos os elementos do jogo no canvas
        game.draw();
        // Solicita o próximo quadro de animação
        requestAnimationFrame(animate);
    };

    // Inicia o loop de animação com um timestamp inicial de 0
    animate(0);
});