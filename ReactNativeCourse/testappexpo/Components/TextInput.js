import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput } from 'react-native'

class TextInputTest extends Component {
    // Construtor da classe
    constructor(props) {
        // Chama o construtor da classe pai com props
        super(props)
        // Inicializa o estado com name vazio
        this.state = {
            name: ''
        }
        //Vincula Ref do TextInput
        this.xInput = React.createRef();
        // Vincula o método nameCatch ao this
        this.nameCatch = this.nameCatch.bind(this)
    }
    
    // Método para capturar texto do TextInput
    nameCatch(text) {
        // Atualiza o estado com o texto recebido
        this.setState({ name: text });
    }

    // Método que define o que será renderizado
    render() {
        return (
            <View style={styles.container}>
            <TextInput
                style={styles.input}
                value={this.state.input}
                placeholder='Input Something Here'
                underlineColorAndroid='transparent'
                onChangeText={this.nameCatch} 
            />
            <TextInput //Referência para Próximas
            ref={this.xInput} //Lembrar de colocar this.xInput = React.createRef(); junto com os bind das funções
            style={styles.textInput} 
            placeholder='Type Something'
            underlineColorAndroid='transparent'
            onChangeText={this.nameCatch}
            keyboardType="text" //ou Numeric
            returnKeyType="done" //ou Next
            onSubmitEditing={() => this.nextInput.current?.focus()} // caso queira ir para Proxima Input automaticamente
            />
            <Text style={[styles.text, styles.textAlign]}>Welcome {this.state.name}</Text>
            </View>
        )
    }
}

// Cria objeto de estilos com StyleSheet
const styles = StyleSheet.create({
    container: {
        flex: 1, // Ocupa todo o espaço disponível
    },
    input: {
        color: '#000000',
        borderWidth: 0.3,
        opacity: 0.8,
        borderRadius: 10,
        fontSize: 20,
        padding: 10, 
        // boxShadow: '0px 0px 5px 0px rgba(129, 7, 7, 0.5)', // Funciona no Android
    },
    // Estilo para o Text
    text: {
        fontSize: 30, // Tamanho da fonte
        color: 'red', // Cor do texto
    },
    // Estilo para centralizar texto
    textAlign: {
        textAlign: 'center' // Alinha texto ao centro
    }
});

export default TextInputTest

// value: Define o texto inicial do campo (controlado via estado).
// onChangeText: Callback chamado a cada mudança de texto, recebe o novo texto.
// placeholder: Texto exibido quando o campo está vazio (ex.: "Digite aqui").
// placeholderTextColor: Cor do texto do placeholder (ex.: "#999").
// onChange: Callback chamado em mudanças, recebe evento com {nativeEvent: {text}}.
// onSubmitEditing: Callback chamado ao pressionar "Enter" ou "Concluído" no teclado.
// onFocus: Callback chamado quando o campo recebe foco.
// onBlur: Callback chamado quando o campo perde foco.
// keyboardType: Define o tipo de teclado (ex.: 'default', 'numeric', 'email-address').
// secureTextEntry: Booleano que oculta o texto (para senhas, padrão: false).
// autoCapitalize: Controla capitalização automática ('none', 'sentences', 'words', 'characters').
// autoCorrect: Booleano que ativa/desativa correção automática (padrão: true).
// autoFocus: Booleano que foca o campo automaticamente ao carregar (padrão: false).
// editable: Booleano que habilita (true) ou desabilita (false) a edição (padrão: true).
// multiline: Booleano que permite múltiplas linhas (padrão: false).
// numberOfLines: Define o número de linhas para campos multiline (ex.: 4).
// maxLength: Limita o número máximo de caracteres (ex.: 100).
// textAlign: Alinhamento do texto ('left', 'center', 'right').
// style: Estilos do campo, como fonte, cor e bordas (ex.: {fontSize: 16}).
// clearButtonMode: (iOS) Mostra botão de limpar ('never', 'while-editing', 'unless-editing', 'always').
// clearTextOnFocus: Booleano que limpa o texto ao focar (padrão: false).
// returnKeyType: Define o tipo de tecla "Enter" (ex.: 'done', 'go', 'next', 'search').
// enablesReturnKeyAutomatically: Desativa a tecla "Enter" até que haja texto (padrão: false).
// keyboardAppearance: Define o tema do teclado ('default', 'light', 'dark').
// textContentType: (iOS) Dica para preenchimento automático (ex.: 'username', 'password').
// passwordRules: (iOS) Regras para senhas (ex.: "minlength: 8; required: lower;").
// selection: Define a seleção de texto (ex.: {start: 0, end: 5}).
// selectionColor: Cor do cursor e da seleção (ex.: "#000").
// inputAccessoryViewID: (iOS) ID de uma view acessória personalizada acima do teclado.
// blurOnSubmit: Booleano que desfoca o campo ao pressionar "Enter" (padrão: true para single-line, false para multiline).
// defaultвью: defaultValue: Valor padrão do campo (ex.: "" para vazio).
// onKeyPress: Callback chamado ao pressionar uma tecla, recebe evento com {nativeEvent: {key}}.
// onEndEditing: Callback chamado quando a edição termina (teclado fechado ou "Enter").
// testID: Identificador para testes automatizados.
// showSoftInputOnFocus: (Android) Mostra o teclado ao focar (padrão: true).