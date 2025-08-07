window.addEventListener('load', function() {
    // Adiciona um ouvinte de evento que executa a função quando a página é completamente carregada
    const canvas = document.getElementById('canvas1');
    // Obtém a referência ao elemento canvas com ID 'canvas1'
    const ctx = canvas.getContext('2d');
    // Obtém o contexto 2D do canvas para desenhar
    canvas.width = 1280;
    // Define a largura do canvas como 1280 pixels
    canvas.height = 720;
    // Define a altura do canvas como 720 pixels
    let enemies = [];
    // Cria um array vazio para armazenar os inimigos
    let score = 0;
    // Inicializa a pontuação do jogo com 0
    let gameOver = false;
    // Define a variável de controle para o estado de fim de jogo como falso
    const fullScreenButton = document.getElementById('fullScreenButton');
    // Obtém a referência ao botão de tela cheia com ID 'fullScreenButton'

    // Ensure canvas and fullScreenButton exist
    if (!canvas || !fullScreenButton) {
        // Verifica se o canvas e o botão de tela cheia existem
        console.error('Canvas or fullScreenButton not found');
        // Exibe um erro no console se algum dos elementos não for encontrado
        return;
        // Sai da função se os elementos não existirem
    }

    class InputHandler {
        // Define a classe InputHandler para gerenciar entradas do usuário
        constructor() {
            // Construtor da classe InputHandler
            this.keys = [];
            // Inicializa um array vazio para armazenar as teclas pressionadas
            this.touchY = null; // Changed from empty string to null
            // Inicializa a posição Y do toque como null (melhor prática que string vazia)
            this.touchThreshold = 60; // Fixed typo in variable name
            // Define o limiar de distância para detectar gestos de toque (60 pixels)
            window.addEventListener('keydown', e => {
                // Adiciona um ouvinte para o evento de tecla pressionada
                if ((e.key === 'ArrowDown' ||
                     e.key === 'ArrowUp' ||
                     e.key === 'ArrowLeft' ||
                     e.key === 'ArrowRight') &&
                     this.keys.indexOf(e.key) === -1) {
                    // Verifica se a tecla pressionada é uma seta e não está no array
                    this.keys.push(e.key);
                    // Adiciona a tecla ao array de teclas pressionadas
                } else if (e.key === 'Enter' && gameOver) {
                    // Verifica se a tecla Enter foi pressionada e o jogo terminou
                    restartGame();
                    // Chama a função para reiniciar o jogo
                }
            });
            window.addEventListener('keyup', e => {
                // Adiciona um ouvinte para o evento de tecla liberada
                if (e.key === 'ArrowDown' ||
                    e.key === 'ArrowUp' ||
                    e.key === 'ArrowLeft' ||
                    e.key === 'ArrowRight') {
                    // Verifica se a tecla liberada é uma seta
                    const index = this.keys.indexOf(e.key);
                    // Obtém o índice da tecla no array
                    if (index > -1) {
                        // Se a tecla estiver no array
                        this.keys.splice(index, 1);
                        // Remove a tecla do array
                    }
                }
            });
            window.addEventListener('touchstart', e => {
                // Adiciona um ouvinte para o início de um toque na tela
                this.touchY = e.changedTouches[0].pageY;
                // Armazena a posição Y inicial do toque
            });
            window.addEventListener('touchmove', e => {
                // Adiciona um ouvinte para movimento de toque na tela
                if (this.touchY === null) return;
                // Sai se não houver toque inicial registrado
                const swipeDistance = e.changedTouches[0].pageY - this.touchY;
                // Calcula a distância do movimento de toque
                if (swipeDistance < -this.touchThreshold && this.keys.indexOf('swipe up') === -1) {
                    // Verifica se o gesto foi para cima e 'swipe up' não está no array
                    this.keys.push('swipe up');
                    // Adiciona 'swipe up' ao array
                } else if (swipeDistance > this.touchThreshold && this.keys.indexOf('swipe down') === -1) {
                    // Verifica se o gesto foi para baixo e 'swipe down' não está no array
                    this.keys.push('swipe down');
                    // Adiciona 'swipe down' ao array
                    if (gameOver) {
                        // Se o jogo terminou
                        restartGame();
                        // Reinicia o jogo
                    }
                }
            });
            window.addEventListener('touchend', e => {
                // Adiciona um ouvinte para o fim do toque
                const swipeUpIndex = this.keys.indexOf('swipe up');
                // Obtém o índice de 'swipe up' no array
                const swipeDownIndex = this.keys.indexOf('swipe down');
                // Obtém o índice de 'swipe down' no array
                if (swipeUpIndex > -1) this.keys.splice(swipeUpIndex, 1);
                // Remove 'swipe up' do array, se presente
                if (swipeDownIndex > -1) this.keys.splice(swipeDownIndex, 1);
                // Remove 'swipe down' do array, se presente
            });
        }
    }

    class Player {
        // Define a classe Player para gerenciar o jogador
        constructor(gameWidth, gameHeight) {
            // Construtor da classe Player, recebe largura e altura do jogo
            this.gameWidth = gameWidth;
            // Armazena a largura do jogo
            this.gameHeight = gameHeight;
            // Armazena a altura do jogo
            this.width = 200;
            // Define a largura do jogador como 200 pixels
            this.height = 200;
            // Define a altura do jogador como 200 pixels
            this.x = 100; 
            // Define a posição inicial x do jogador
            this.y = this.gameHeight - this.height;
            // Define a posição inicial y do jogador (no chão)
            this.image = document.getElementById('playerImage');
            // Obtém a imagem do jogador pelo ID 'playerImage'
            this.frameX = 0;
            // Define o quadro inicial da animação no eixo x
            this.maxFrame = 8;
            // Define o número máximo de quadros para a animação
            this.frameY = 0;
            // Define o quadro inicial da animação no eixo y
            this.fps = 20;
            // Define a taxa de quadros por segundo para a animação
            this.frameTimer = 0;
            // Inicializa o temporizador de quadros
            this.frameInterval = 1000 / this.fps;
            // Calcula o intervalo entre quadros (em milissegundos)
            this.speed = 0;
            // Define a velocidade horizontal inicial do jogador
            this.velocityY = 0;
            // Define a velocidade vertical inicial do jogador
            this.weight = 0.2;
            // Define o peso (gravidade) para o movimento vertical
        }
        restart() {
            // Método para reiniciar o estado do jogador
            this.x = 100;
            // Reposiciona o jogador na posição x inicial
            this.y = this.gameHeight - this.height;
            // Reposiciona o jogador na posição y inicial (no chão)
            this.maxFrame = 8;
            // Redefine o número máximo de quadros
            this.frameY = 0;
            // Redefine o quadro inicial no eixo y
            this.frameX = 0;
            // Redefine o quadro inicial no eixo x
            this.velocityY = 0;
            // Redefine a velocidade vertical
            this.speed = 0;
            // Redefine a velocidade horizontal
        }
        draw(context) {
            // Método para desenhar o jogador no canvas
            // Only draw collision circle in debug mode
            if (false) { // Set to true to show collision circles
                // Condição para desenhar círculos de colisão (desativada)
                context.strokeStyle = 'white';
                // Define a cor do contorno como branca
                context.beginPath();
                // Inicia um novo caminho para desenho
                context.arc(this.x + this.width * 0.5, this.y + this.height * 0.6, this.width * 0.4, 0, Math.PI * 2);
                // Desenha um círculo para colisão (centro ajustado)
                context.stroke();
                // Desenha o contorno do círculo
            }
            context.drawImage(this.image, this.frameX * this.width, this.frameY * this.height, this.width, this.height, this.x, this.y, this.width, this.height);
            // Desenha a imagem do jogador com base no quadro atual
        }
        update(input, deltaTime, enemies) {
            // Método para atualizar o estado do jogador
            // Collision detection
            enemies.forEach(enemy => {
                // Itera sobre cada inimigo para verificar colisão
                const dx = (enemy.x + enemy.width * 0.4) - (this.x + this.width * 0.5); // Adjusted for better collision
                // Calcula a diferença no eixo x entre inimigo e jogador
                const dy = (enemy.y + enemy.height * 0.6) - (this.y + this.height * 0.6);
                // Calcula a diferença no eixo y entre inimigo e jogador
                const distance = Math.sqrt(dx * dx + dy * dy);
                // Calcula a distância entre jogador e inimigo
                if (distance < enemy.width * 0.45 + this.width * 0.4) {
                    // Verifica se houve colisão com base na distância
                    gameOver = true;
                    // Define o jogo como terminado se houver colisão
                }
            });

            // Sprite animation
            if (this.frameTimer > this.frameInterval) {
                // Verifica se é hora de avançar o quadro da animação
                this.frameX = (this.frameX >= this.maxFrame) ? 0 : this.frameX + 1;
                // Avança o quadro x ou reinicia se atingir o máximo
                this.frameTimer = 0;
                // Reseta o temporizador de quadros
            } else {
                this.frameTimer += deltaTime;
                // Incrementa o temporizador com o tempo decorrido
            }

            // Horizontal movement
            this.speed = 0;
            // Reseta a velocidade horizontal
            if (input.keys.includes('ArrowRight')) this.speed = 5;
            // Move para a direita se a tecla correspondente estiver pressionada
            else if (input.keys.includes('ArrowLeft')) this.speed = -5;
            // Move para a esquerda se a tecla correspondente estiver pressionada

            // Vertical movement
            if ((input.keys.includes('ArrowUp') || input.keys.includes('swipe up')) && this.onGround()) {
                // Verifica se o jogador pulou (tecla ou gesto) e está no chão
                this.velocityY -= 10;
                // Aplica uma velocidade vertical para o pulo
            }

            this.x += this.speed;
            // Atualiza a posição x do jogador com base na velocidade
            // Horizontal boundaries
            this.x = Math.max(0, Math.min(this.x, this.gameWidth - this.width));
            // Limita a posição x para não sair dos limites do canvas

            // Vertical movement
            this.y += this.velocityY;
            // Atualiza a posição y com base na velocidade vertical
            if (!this.onGround()) {
                // Se o jogador não estiver no chão
                this.velocityY += this.weight;
                // Aplica gravidade à velocidade vertical
                this.maxFrame = 5;
                // Define o número máximo de quadros para animação de pulo
                this.frameY = 1;
                // Define o quadro y para animação de pulo
            } else {
                this.velocityY = 0;
                // Zera a velocidade vertical se estiver no chão
                this.maxFrame = 8;
                // Redefine o número máximo de quadros para animação padrão
                this.frameY = 0;
                // Redefine o quadro y para animação padrão
            }
            // Vertical boundaries
            this.y = Math.min(this.y, this.gameHeight - this.height);
            // Limita a posição y para não sair do chão
        }
        onGround() {
            // Método para verificar se o jogador está no chão
            return this.y >= this.gameHeight - this.height;
            // Retorna verdadeiro se a posição y estiver no chão
        }
    }

    class Background {
        // Define a classe Background para gerenciar o fundo do jogo
        constructor(gameWidth, gameHeight) {
            // Construtor da classe Background, recebe largura e altura do jogo
            this.gameWidth = gameWidth;
            // Armazena a largura do jogo
            this.gameHeight = gameHeight;
            // Armazena a altura do jogo
            this.image = document.getElementById('backgroundImage');
            // Obtém a imagem de fundo pelo ID 'backgroundImage'
            this.x = 0;
            // Define a posição x inicial do fundo
            this.y = 0; // Fixed typo (was 0.)
            // Define a posição y inicial do fundo
            this.width = 2400;
            // Define a largura da imagem de fundo
            this.height = 720;
            // Define a altura da imagem de fundo
            this.speed = 1.5;
            // Define a velocidade de deslocamento do fundo
        }
        restart() {
            // Método para reiniciar o fundo
            this.x = 0;
            // Redefine a posição x do fundo
        }
        draw(context) {
            // Método para desenhar o fundo no canvas
            context.drawImage(this.image, this.x, this.y, this.width, this.height);
            // Desenha a imagem de fundo na posição atual
            context.drawImage(this.image, this.x + this.width - 1, this.y, this.width, this.height); // - 1 para compensar falha de pixel, no curso usa -this.speed ao invés de -1
            // Desenha uma segunda imagem ao lado para criar um efeito contínuo
        }
        update() {
            // Método para atualizar a posição do fundo
            this.x -= this.speed;
            // Move o fundo para a esquerda
            if ( this.x < 0 - this.width + 1) { // + 1 para compensar falha de pixel
                // Verifica se o fundo saiu completamente da tela
                this.x = 0;
                // Reinicia a posição do fundo
            }
        }
    }

    class Enemy {
        // Define a classe Enemy para gerenciar os inimigos
        constructor(gameWidth, gameHeight) {
            // Construtor da classe Enemy, recebe largura e altura do jogo
            this.gameWidth = gameWidth;
            // Armazena a largura do jogo
            this.gameHeight = gameHeight;
            // Armazena a altura do jogo
            this.width = 160;
            // Define a largura do inimigo
            this.height = 119;
            // Define a altura do inimigo
            this.image = document.getElementById('enemyImage');
            // Obtém a imagem do inimigo pelo ID 'enemyImage'
            this.x = this.gameWidth;
            // Define a posição x inicial (fora da tela, à direita)
            this.y = this.gameHeight - this.height;
            // Define a posição y inicial (no chão)
            this.frameX = 0;
            // Define o quadro inicial da animação no eixo x
            this.maxFrame = 5;
            // Define o número máximo de quadros para a animação
            this.fps = 20;
            // Define a taxa de quadros por segundo para a animação
            this.frameTimer = 0;
            // Inicializa o temporizador de quadros
            this.frameInterval = 1000 / this.fps;
            // Calcula o intervalo entre quadros (em milissegundos)
            this.speed = 8;
            // Define a velocidade de movimento do inimigo
            this.markedForDeletion = false;
            // Inicializa a flag para remoção do inimigo como false
        }
        draw(context) {
            // Método para desenhar o inimigo no canvas
            if (false) { // Set to true to show collision circles
                // Condição para desenhar círculos de colisão (desativada)
                context.strokeStyle = 'white';
                // Define a cor do contorno como branca
                context.beginPath();
                // Inicia um novo caminho para desenho
                context.arc(this.x + this.width * 0.4, this.y + this.height * 0.6, this.width * 0.45, 0, Math.PI * 2);
                // Desenha um círculo para colisão (centro ajustado)
                context.stroke();
                // Desenha o contorno do círculo
            }
            context.drawImage(this.image, this.frameX * this.width, 0, this.width, this.height, this.x, this.y, this.width, this.height);
            // Desenha a imagem do inimigo com base no quadro atual
        }
        update(deltaTime) {
            // Método para atualizar o estado do inimigo
            if (this.frameTimer > this.frameInterval) {
                // Verifica se é hora de avançar o quadro da animação
                this.frameX = (this.frameX >= this.maxFrame) ? 0 : this.frameX + 1;
                // Avança o quadro x ou reinicia se atingir o máximo
                this.frameTimer = 0;
                // Reseta o temporizador de quadros
            } else {
                this.frameTimer += deltaTime;
                // Incrementa o temporizador com o tempo decorrido
            }
            this.x -= this.speed;
            // Move o inimigo para a esquerda
            if (this.x < -this.width) {
                // Verifica se o inimigo saiu da tela
                this.markedForDeletion = true;
                // Marca o inimigo para remoção
                score++;
                // Incrementa a pontuação
            }
        }
    }

    function handleEnemies(deltaTime) {
        // Função para gerenciar os inimigos
        if (enemyTimer > enemyInterval + randomEnemyInterval) {
            // Verifica se é hora de criar um novo inimigo
            enemies.push(new Enemy(canvas.width, canvas.height));
            // Adiciona um novo inimigo ao array
            randomEnemyInterval = Math.random() * 400 + 10;
            // Gera um novo intervalo aleatório para o próximo inimigo
            enemyTimer = 0;
            // Reseta o temporizador de inimigos
        } else {
            enemyTimer += deltaTime;
            // Incrementa o temporizador com o tempo decorrido
        }
        enemies.forEach(enemy => {
            // Itera sobre cada inimigo
            enemy.draw(ctx);
            // Desenha o inimigo
            enemy.update(deltaTime);
            // Atualiza o estado do inimigo
        });
        enemies = enemies.filter(enemy => !enemy.markedForDeletion);
        // Remove os inimigos marcados para deleção
    }

    function displayStatusText(context) {
        // Função para exibir textos de status (pontuação e fim de jogo)
        context.font = '40px Helvetica';
        // Define a fonte para o texto
        context.textAlign = 'left';
        // Alinha o texto à esquerda
        context.fillStyle = 'black';
        // Define a cor do texto como preto
        context.fillText('Score: ' + score, 20, 50);
        // Desenha a pontuação com contorno preto
        context.fillStyle = 'white';
        // Define a cor do texto como branco
        context.fillText('Score: ' + score, 18, 48);
        // Desenha a pontuação com deslocamento para criar efeito de sombra
        if (gameOver) {
            // Verifica se o jogo terminou
            context.textAlign = 'center';
            // Centraliza o texto
            context.fillStyle = 'black';
            // Define a cor do texto como preto
            context.fillText('GAME OVER!', canvas.width * 0.5, canvas.height * 0.4);
            // Exibe a mensagem de fim de jogo com contorno preto
            context.fillStyle = 'white';
            // Define a cor do texto como branco
            context.fillText('GAME OVER!', canvas.width * 0.5 - 2, canvas.height * 0.4 - 2);
            // Exibe a mensagem com deslocamento para efeito de sombra
            context.fillStyle = 'black';
            // Define a cor do texto como preto
            context.fillText('Your Score: ' + score, canvas.width * 0.5, canvas.height * 0.5);
            // Exibe a pontuação final com contorno preto
            context.fillStyle = 'white';
            // Define a cor do texto como branco
            context.fillText('Your Score: ' + score, canvas.width * 0.5 - 2, canvas.height * 0.5 - 2);
            // Exibe a pontuação final com deslocamento
            context.fillStyle = 'black';
            // Define a cor do texto como preto
            context.fillText('Press Enter/Swipe Down to Restart', canvas.width * 0.5, canvas.height * 0.6);
            // Exibe instrução de reinício com contorno preto
            context.fillStyle = 'white';
            // Define a cor do texto como branco
            context.fillText('Press Enter/Swipe Down to Restart', canvas.width * 0.5 - 2, canvas.height * 0.6 - 2);
            // Exibe instrução de reinício com deslocamento
        }
    }

    function restartGame() {
        // Função para reiniciar o jogo
        player.restart();
        // Reinicia o estado do jogador
        background.restart();
        // Reinicia o estado do fundo
        enemies = [];
        // Limpa o array de inimigos
        score = 0;
        // Zera a pontuação
        gameOver = false;
        // Redefine o estado de fim de jogo
        enemyTimer = 0; // Reset enemy timer
        // Reseta o temporizador de inimigos
        animate(0);
        // Inicia a animação novamente
    }

    function toggleFullScreen() {
        // Função para alternar o modo de tela cheia
        if (!document.fullscreenElement) {
            // Verifica se não está em modo de tela cheia
            canvas.requestFullscreen().catch(err => {
                // Solicita o modo de tela cheia para o canvas
                console.error(`Error enabling full-screen mode: ${err.message}`);
                // Exibe erro se a solicitação falhar
            });
        } else {
            document.exitFullscreen();
            // Sai do modo de tela cheia
        }
    }

    fullScreenButton.addEventListener('click', toggleFullScreen);
    // Adiciona um ouvinte de clique ao botão de tela cheia

    const input = new InputHandler();
    // Cria uma instância da classe InputHandler
    const player = new Player(canvas.width, canvas.height);
    // Cria uma instância da classe Player com as dimensões do canvas
    const background = new Background(canvas.width, canvas.height);
    // Cria uma instância da classe Background com as dimensões do canvas

    let lastTime = 0;
    // Armazena o tempo do último quadro
    let enemyTimer = 0;
    // Inicializa o temporizador de inimigos
    let enemyInterval = 1000;
    // Define o intervalo base para criação de inimigos (em milissegundos)
    let randomEnemyInterval = Math.random() * 1000 + 500;
    // Gera um intervalo aleatório inicial para criação de inimigos

    function animate(timeStamp) {
        // Função principal de animação do jogo
        const deltaTime = timeStamp - lastTime;
        // Calcula o tempo decorrido desde o último quadro
        lastTime = timeStamp;
        // Atualiza o tempo do último quadro
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        // Limpa o canvas para o próximo quadro
        background.draw(ctx);
        // Desenha o fundo
        background.update();
        // Atualiza a posição do fundo
        player.draw(ctx);
        // Desenha o jogador
        player.update(input, deltaTime, enemies);
        // Atualiza o estado do jogador
        handleEnemies(deltaTime);
        // Gerencia os inimigos
        displayStatusText(ctx);
        // Exibe os textos de status
        if (!gameOver) {
            // Verifica se o jogo não terminou
            requestAnimationFrame(animate);
            // Solicita o próximo quadro da animação
        }
    }
    animate(0);
    // Inicia a animação com timestamp inicial de 0
});