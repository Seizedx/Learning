// Declara e exporta uma classe padrão chamada inputHandler para gerenciar eventos de entrada do teclado
export default class inputHandler {
    // Método construtor que inicializa a classe
    constructor() {
        // Inicializa a propriedade 'lastKey' para armazenar o estado do último evento de tecla (inicialmente uma string vazia)
        this.lastKey = '';
        // Adiciona um ouvinte de eventos ao objeto window para detectar quando uma tecla é pressionada
        window.addEventListener('keydown', (e) => {
            // Usa uma estrutura switch para verificar qual tecla foi pressionada com base na propriedade key do evento
            switch(e.key){
                // Verifica se a tecla pressionada é a seta para a esquerda
                case "ArrowLeft":
                    // Define lastKey para indicar que a tecla de seta para a esquerda foi pressionada
                    this.lastKey = "PRESS left";
                    // Sai da estrutura switch
                    break;
                // Verifica se a tecla pressionada é a seta para a direita
                case "ArrowRight":
                    // Define lastKey para indicar que a tecla de seta para a direita foi pressionada
                    this.lastKey = "PRESS right";
                    // Sai da estrutura switch
                    break;
                // Verifica se a tecla pressionada é a seta para cima
                case "ArrowUp":
                    // Define lastKey para indicar que a tecla de seta para cima foi pressionada
                    this.lastKey = "PRESS up";
                    // Sai da estrutura switch
                    break;
                // Verifica se a tecla pressionada é a seta para baixo
                case "ArrowDown":
                    // Define lastKey para indicar que a tecla de seta para baixo foi pressionada
                    this.lastKey = "PRESS down";
                    // Sai da estrutura switch
                    break;
            }
        });
        // Adiciona um ouvinte de eventos ao objeto window para detectar quando uma tecla é solta
        window.addEventListener('keyup', (e) => {
            // Usa uma estrutura switch para verificar qual tecla foi solta com base na propriedade key do evento
            switch(e.key){
                // Verifica se a tecla solta é a seta para a esquerda
                case "ArrowLeft":
                    // Define lastKey para indicar que a tecla de seta para a esquerda foi solta
                    this.lastKey = "RELEASE left";
                    // Sai da estrutura switch
                    break;
                // Verifica se a tecla solta é a seta para a direita
                case "ArrowRight":
                    // Define lastKey para indicar que a tecla de seta para a direita foi solta
                    this.lastKey = "RELEASE right";
                    // Sai da estrutura switch
                    break;
                // Verifica se a tecla solta é a seta para cima
                case "ArrowUp":
                    // Define lastKey para indicar que a tecla de seta para cima foi solta
                    this.lastKey = "RELEASE up";
                    // Sai da estrutura switch
                    break;
                // Verifica se a tecla solta é a seta para baixo
                case "ArrowDown":
                    // Define lastKey para indicar que a tecla de seta para baixo foi solta
                    this.lastKey = "RELEASE down";
                    // Sai da estrutura switch
                    break;
            }
        });
    }
}