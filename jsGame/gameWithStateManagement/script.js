// Importa a classe Player do arquivo 'player.js'
import Player from './player.js';
// Importa a classe inputHandler do arquivo 'input.js'
import inputHandler from './input.js';
// Importa a função drawStatusText do arquivo 'utils.js'
import drawStatusText from './utils.js';

// Adiciona um ouvinte de evento para executar o código quando a página for completamente carregada
window.addEventListener('load', function() {
    // Obtém o elemento HTML com id 'loading' (provavelmente uma tela de carregamento)
    const loading = document.getElementById('loading');
    // Oculta o elemento de carregamento ao carregar a página
    loading.style.display = 'none';
    // Obtém o elemento canvas com id 'canvas1' do HTML
    const canvas = this.document.getElementById('canvas1');
    // Obtém o contexto 2D do canvas para desenhar gráficos
    const ctx = canvas.getContext('2d');
    // Define a largura do canvas como a largura da janela do navegador
    canvas.width = window.innerWidth;
    // Define a altura do canvas como a altura da janela do navegador
    canvas.height = window.innerHeight;

    // Cria uma nova instância da classe Player, passando as dimensões do canvas
    const player = new Player(canvas.width, canvas.height);
    // Cria uma nova instância da classe inputHandler para gerenciar entradas do teclado
    const input = new inputHandler();
    
    // Inicializa uma variável para armazenar o tempo do último quadro da animação
    let lastTime = 0;
    // Define a função animate, responsável pelo loop de animação do jogo
    function animate(timeStamp) {
        // Calcula o tempo decorrido desde o último quadro (em milissegundos)
        const deltaTime = timeStamp - lastTime;
        // Atualiza o valor de lastTime com o tempo atual para o próximo quadro
        lastTime = timeStamp;
        // Limpa o canvas para desenhar o próximo quadro, apagando o conteúdo anterior
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        // Atualiza o estado do jogador com base na última tecla pressionada/solta
        player.update(input.lastKey);
        // Desenha o jogador no canvas, passando o contexto e o tempo decorrido
        player.draw(ctx, deltaTime);
        // Chama a função drawStatusText para exibir informações de status no canvas
        drawStatusText(ctx, input, player);
        // Solicita o próximo quadro da animação, chamando a função animate novamente
        requestAnimationFrame(animate);
    }
    // Inicia o loop de animação, passando 0 como o tempo inicial
    animate(0);
});