// Exporta um objeto contendo índices para cada estado possível do jogador
export const states = {
    // Estado de parado olhando para a esquerda
    STANDING_LEFT: 0,
    // Estado de parado olhando para a direita
    STANDING_RIGHT: 1,
    // Estado de sentado olhando para a esquerda
    SITTING_LEFT: 2,
    // Estado de sentado olhando para a direita
    SITTING_RIGHT: 3,
    // Estado de correndo para a esquerda
    RUNNING_LEFT: 4,
    // Estado de correndo para a direita
    RUNNING_RIGHT: 5,
    // Estado de pulando para a esquerda
    JUMPING_LEFT: 6,
    // Estado de pulando para a direita
    JUMPING_RIGHT: 7,
    // Estado de caindo para a esquerda
    FALLING_LEFT: 8,
    // Estado de caindo para a direita
    FALLING_RIGHT: 9,
}

// Classe base para os estados do jogador
class State {
    // Construtor que inicializa o estado com um nome
    constructor(state) {
        // Armazena o nome do estado
        this.state = state;
    }
}

// Classe que representa o estado de parado olhando para a esquerda
export class StandingLeft extends State {
    // Construtor que recebe a instância do jogador
    constructor(player) {
        // Chama o construtor da classe base com o nome do estado
        super('STANDING LEFT');
        // Armazena a referência ao jogador
        this.player = player;
    }
    // Método chamado quando o jogador entra neste estado
    enter() {
        // Define a linha do sprite para a animação de parado à esquerda
        this.player.frameY = 1;
        // Define a velocidade horizontal como 0 (parado)
        this.player.speed = 0;
        // Define o número máximo de quadros para a animação
        this.player.maxFrame = 6;
    }
    // Método para processar entradas do usuário
    handleInput(input) {
        // Se a tecla direita for pressionada, muda para o estado de corrida à direita
        if (input === 'PRESS right') {
            this.player.setState(states.RUNNING_RIGHT);       
        // Se a tecla esquerda for pressionada, muda para o estado de corrida à esquerda
        } else if (input === 'PRESS left') {
            this.player.setState(states.RUNNING_LEFT);
        // Se a tecla baixo for pressionada, muda para o estado de sentado à esquerda
        } else if (input === 'PRESS down') {
            this.player.setState(states.SITTING_LEFT);
        // Se a tecla cima for pressionada, muda para o estado de pulo à esquerda
        } else if (input === 'PRESS up') {
            this.player.setState(states.JUMPING_LEFT);
        }
    }
}

// Classe que representa o estado de parado olhando para a direita
export class StandingRight extends State {
    // Construtor que recebe a instância do jogador
    constructor(player) {
        // Chama o construtor da classe base com o nome do estado
        super('STANDING RIGHT');
        // Armazena a referência ao jogador
        this.player = player;
    }
    // Método chamado quando o jogador entra neste estado
    enter() {
        // Define a linha do sprite para a animação de parado à direita
        this.player.frameY = 0;
        // Define a velocidade horizontal como 0 (parado)
        this.player.speed = 0;
        // Define o número máximo de quadros para a animação
        this.player.maxFrame = 6;
    }
    // Método para processar entradas do usuário
    handleInput(input) {
        // Se a tecla esquerda for pressionada, muda para o estado de corrida à esquerda
        if (input === 'PRESS left') {
            this.player.setState(states.RUNNING_LEFT);       
        // Se a tecla direita for pressionada, muda para o estado de corrida à direita
        } else if (input === 'PRESS right') {
            this.player.setState(states.RUNNING_RIGHT);
        // Se a tecla baixo for pressionada, muda para o estado de sentado à direita
        } else if (input === 'PRESS down') {
            this.player.setState(states.SITTING_RIGHT);
        // Se a tecla cima for pressionada, muda para o estado de pulo à direita
        } else if (input === 'PRESS up') {
            this.player.setState(states.JUMPING_RIGHT);
        }
    }
}

// Classe que representa o estado de sentado olhando para a esquerda
export class SittingLeft extends State {
    // Construtor que recebe a instância do jogador
    constructor(player) {
        // Chama o construtor da classe base com o nome do estado
        super('SITTING LEFT');
        // Armazena a referência ao jogador
        this.player = player;
    }
    // Método chamado quando o jogador entra neste estado
    enter() {
        // Define a linha do sprite para a animação de sentado à esquerda
        this.player.frameY = 9;
        // Define a velocidade horizontal como 0 (parado)
        this.player.speed = 0;
        // Define o número máximo de quadros para a animação
        this.player.maxFrame = 4;
    }
    // Método para processar entradas do usuário
    handleInput(input) {
        // Se a tecla direita for pressionada, muda para o estado de sentado à direita
        if (input === 'PRESS right') {
            this.player.setState(states.SITTING_RIGHT);       
        // Se a tecla baixo for solta, muda para o estado de parado à esquerda
        } else if (input === 'RELEASE down') {
            this.player.setState(states.STANDING_LEFT);       
        }
    }
}

// Classe que representa o estado de sentado olhando para a direita
export class SittingRight extends State {
    // Construtor que recebe a instância do jogador
    constructor(player) {
        // Chama o construtor da classe base com o nome do estado
        super('SITTING RIGHT');
        // Armazena a referência ao jogador
        this.player = player;
    }
    // Método chamado quando o jogador entra neste estado
    enter() {
        // Define a linha do sprite para a animação de sentado à direita
        this.player.frameY = 8;
        // Define a velocidade horizontal como 0 (parado)
        this.player.speed = 0;
        // Define o número máximo de quadros para a animação
        this.player.maxFrame = 4;
    }
    // Método para processar entradas do usuário
    handleInput(input) {
        // Se a tecla esquerda for pressionada, muda para o estado de sentado à esquerda
        if (input === 'PRESS left') {
            this.player.setState(states.SITTING_LEFT);             
        // Se a tecla baixo for solta, muda para o estado de parado à direita
        } else if (input === 'RELEASE down') {
            this.player.setState(states.STANDING_RIGHT);       
        }
    }
}

// Classe que representa o estado de correndo para a esquerda
export class RunningLeft extends State {
    // Construtor que recebe a instância do jogador
    constructor(player) {
        // Chama o construtor da classe base com o nome do estado
        super('RUNNING LEFT');
        // Armazena a referência ao jogador
        this.player = player;
    }
    // Método chamado quando o jogador entra neste estado
    enter() {
        // Define a linha do sprite para a animação de corrida à esquerda
        this.player.frameY = 7;
        // Define a velocidade horizontal como negativa (movendo para a esquerda)
        this.player.speed = - this.player.maxSpeed;
        // Define o número máximo de quadros para a animação
        this.player.maxFrame = 8;
    }
    // Método para processar entradas do usuário
    handleInput(input) {
        // Se a tecla direita for pressionada, muda para o estado de corrida à direita
        if (input === 'PRESS right') {
            this.player.setState(states.RUNNING_RIGHT);       
        // Se a tecla esquerda for solta, muda para o estado de parado à esquerda
        } else if (input === 'RELEASE left') {
            this.player.setState(states.STANDING_LEFT);       
        // Se a tecla baixo for pressionada, muda para o estado de sentado à esquerda
        } else if (input === 'PRESS down') {
            this.player.setState(states.SITTING_LEFT);       
        }
    }
}

// Classe que representa o estado de correndo para a direita
export class RunningRight extends State {
    // Construtor que recebe a instância do jogador
    constructor(player) {
        // Chama o construtor da classe base com o nome do estado
        super('RUNNING RIGHT');
        // Armazena a referência ao jogador
        this.player = player;
    }
    // Método chamado quando o jogador entra neste estado
    enter() {
        // Define a linha do sprite para a animação de corrida à direita
        this.player.frameY = 6;
        // Define a velocidade horizontal como positiva (movendo para a direita)
        this.player.speed = this.player.maxSpeed;
        // Define o número máximo de quadros para a animação
        this.player.maxFrame = 8;
    }
    // Método para processar entradas do usuário
    handleInput(input) {
        // Se a tecla esquerda for pressionada, muda para o estado de sentado à esquerda
        if (input === 'PRESS left') {
            this.player.setState(states.SITTING_LEFT);       
        // Se a tecla direita for solta, muda para o estado de parado à direita
        } else if (input === 'RELEASE right') {
            this.player.setState(states.STANDING_RIGHT);       
        // Se a tecla baixo for pressionada, muda para o estado de parado à direita
        } else if (input === 'PRESS down') {
            this.player.setState(states.STANDING_RIGHT);       
        }
    }
}

// Classe que representa o estado de pulando para a esquerda
export class JumpingLeft extends State {
    // Construtor que recebe a instância do jogador
    constructor(player) {
        // Chama o construtor da classe base com o nome do estado
        super('JUMPING LEFT');
        // Armazena a referência ao jogador
        this.player = player;
    }
    // Método chamado quando o jogador entra neste estado
    enter() {
        // Define a linha do sprite para a animação de pulo à esquerda
        this.player.frameY = 3;
        // Define o número máximo de quadros para a animação
        this.player.maxFrame = 6;
        // Se o jogador está no chão, aplica uma força de pulo (velocidade vertical negativa)
        if(this.player.onGround()) {
            this.player.vy -= 20;
        }
        // Define a velocidade horizontal como metade da velocidade máxima para a esquerda
        this.player.speed = -this.player.maxSpeed * 0.5;
    }
    // Método para processar entradas do usuário
    handleInput(input) {
        // Se a tecla direita for pressionada, muda para o estado de pulo à direita
        if (input === 'PRESS right') {
            this.player.setState(states.JUMPING_RIGHT);       
        // Se o jogador está no chão, muda para o estado de parado à esquerda
        } else if (this.player.onGround()) {
            this.player.setState(states.STANDING_LEFT);
        // Se a velocidade vertical é positiva (caindo), muda para o estado de queda à esquerda
        } else if (this.player.vy > 0) {
            this.player.setState(states.FALLING_LEFT);
        }
    }
}

// Classe que representa o estado de pulando para a direita
export class JumpingRight extends State {
    // Construtor que recebe a instância do jogador
    constructor(player) {
        // Chama o construtor da classe base com o nome do estado
        super('JUMPING RIGHT');
        // Armazena a referência ao jogador
        this.player = player;
    }
    // Método chamado quando o jogador entra neste estado
    enter() {
        // Define a linha do sprite para a animação de pulo à direita
        this.player.frameY = 2;
        // Define o número máximo de quadros para a animação
        this.player.maxFrame = 6;
        // Se o jogador está no chão, aplica uma força de pulo (velocidade vertical negativa)
        if(this.player.onGround()) {
            this.player.vy -= 20;
        }
        // Define a velocidade horizontal como metade da velocidade máxima para a direita
        this.player.speed = this.player.maxSpeed * 0.5;
    }
    // Método para processar entradas do usuário
    handleInput(input) {
        // Se a tecla esquerda for pressionada, muda para o estado de pulo à esquerda
        if (input === 'PRESS left') {
            this.player.setState(states.JUMPING_LEFT);       
        // Se o jogador está no chão, muda para o estado de parado à direita
        } else if (this.player.onGround()) {
            this.player.setState(states.STANDING_RIGHT);
        // Se a velocidade vertical é positiva (caindo), muda para o estado de queda à direita
        } else if (this.player.vy > 0) {
            this.player.setState(states.FALLING_RIGHT);
        }
    }
}

// Classe que representa o estado de caindo para a esquerda
export class FallingLeft extends State {
    // Construtor que recebe a instância do jogador
    constructor(player) {
        // Chama o construtor da classe base com o nome do estado
        super('FALLING LEFT');
        // Armazena a referência ao jogador
        this.player = player;
    }
    // Método chamado quando o jogador entra neste estado
    enter() {
        // Define a linha do sprite para a animação de queda à esquerda
        this.player.frameY = 5;
        // Define o número máximo de quadros para a animação
        this.player.maxFrame = 6;
    }
    // Método para processar entradas do usuário
    handleInput(input) {
        // Se a tecla direita for pressionada, muda para o estado de queda à direita
        if (input === 'PRESS right') {
            this.player.setState(states.FALLING_RIGHT);       
        // Se o jogador está no chão, muda para o estado de parado à esquerda
        } else if (this.player.onGround()) {
            this.player.setState(states.STANDING_LEFT);
        }
    }
}

// Classe que representa o estado de caindo para a direita
export class FallingRight extends State {
    // Construtor que recebe a instância do jogador
    constructor(player) {
        // Chama o construtor da classe base com o nome do estado
        super('FALLING RIGHT');
        // Armazena a referência ao jogador
        this.player = player;
    }
    // Método chamado quando o jogador entra neste estado
    enter() {
        // Define a linha do sprite para a animação de queda à direita
        this.player.frameY = 4;
        // Define o número máximo de quadros para a animação
        this.player.maxFrame = 6;
    }
    // Método para processar entradas do usuário
    handleInput(input) {
        // Se a tecla esquerda for pressionada, muda para o estado de queda à esquerda
        if (input === 'PRESS left') {
            this.player.setState(states.FALLING_LEFT);       
        // Se o jogador está no chão, muda para o estado de parado à direita
        } else if (this.player.onGround()) {
            this.player.setState(states.STANDING_RIGHT);
        }
    }
}