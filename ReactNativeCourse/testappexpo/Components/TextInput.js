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
                    style={[styles.input, styles.textAlign]} // Aplica estilos input e textAlign
                    placeholder='Input something here' // Texto de placeholder
                    underlineColorAndroid='transparent' // Remove sublinhado no Android
                    onChangeText={this.nameCatch} // Chama nameCatch ao mudar texto
                >
                </TextInput>
                <Text style={[styles.text, styles.textAlign]}>Welcome {this.state.name}</Text>
            </View>
        )
    }
}

// Cria objeto de estilos com StyleSheet
const styles = StyleSheet.create({
    container: {
        flex: 1, // Ocupa todo o espaço disponível
        marginTop: 40 // Margem superior de 40 pixels
    },
    input: {
        color: 'black', // Cor do texto
        boxShadow: '0px 0px 5px 0px rgba(129, 7, 7, 0.5)', // Não suportado no React Native
        borderRadius: 10, // Cantos arredondados
        marginLeft: 30, // Margem à esquerda
        marginRight: 30, // Margem à direita
        fontSize: 20, // Tamanho da fonte
        padding: 10, // Espaçamento interno
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