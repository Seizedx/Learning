// Exporta uma função padrão chamada drawStatusText que desenha informações de status no canvas
export default function drawStatusText(context, input, player) {
    // Define a fonte do texto como Helvetica de tamanho 30px para o contexto do canvas
    context.font = '30px Helvetica';
    // Desenha o texto mostrando a última tecla registrada (input.lastKey) na posição (10, 40)
    context.fillText('last Input: ' + input.lastKey, 10, 40);
    // Desenha o texto mostrando o estado atual do jogador (player.currentState.state) na posição (10, 70)
    context.fillText('Active State: ' + player.currentState.state, 10, 70);
};