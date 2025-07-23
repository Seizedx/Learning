import React, { Component } from 'react'
import { 
 Text,
 View,
 TouchableOpacity,
 StyleSheet,
} from 'react-native'

export default class ModalExample extends Component {

  render() {
    const { 
            modal1View,
            modal1Text,
            button1Modal,
            button1ModalText,
    } = styles;
    return (
            <View style={modal1View}>
                <Text style={modal1Text}>Welcome</Text>
                <TouchableOpacity
                    style={button1Modal}
                    onPress={this.props.close}
                >
                    <Text style={button1ModalText}>X</Text> 
                </TouchableOpacity>
            </View>
    )
  }
}

const styles = StyleSheet.create({
  modal1View: {
    flex: 1,
    backgroundColor: '#292929',
  },
  modal1Text: {
    textAlign: 'center',
    fontSize: 50,
    color: '#ffffff',
  },
  button1Modal: {
    alignSelf: 'flex-end',    
    marginTop: -60,
    marginRight: 20,
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 100,
  },
  button1ModalText: {
    fontSize: 20,
    fontWeight: 50,
  },
});

// visible: Booleano que controla a visibilidade do modal (true para exibir, false para ocultar).
// animationType: Tipo de animação ao abrir/fechar ('none', 'slide', 'fade') (padrão: 'none').
// transparent: Booleano que define se o fundo do modal é transparente (padrão: false).
// onRequestClose: Callback chamado quando o usuário tenta fechar o modal (ex.: botão voltar no Android).
// onShow: Callback chamado quando o modal é exibido completamente.
// presentationStyle: (iOS) Estilo de apresentação ('fullScreen', 'pageSheet', 'formSheet', 'overFullScreen') (padrão: 'fullScreen').
// supportedOrientations: (iOS) Define orientações permitidas (ex.: ['portrait', 'landscape']).
// onOrientationChange: (iOS) Callback chamado quando a orientação do dispositivo muda.
// hardwareAccelerated: (Android) Booleano que ativa aceleração de hardware para animações (padrão: false).
// statusBarTranslucent: (Android) Permite que o modal sobreponha a barra de status (padrão: false).
// onDismiss: (iOS) Callback chamado quando o modal é fechado.
// testID: Identificador para testes automatizados.
// accessibilityViewIsModal: Booleano que indica se o modal bloqueia acessibilidade para conteúdo abaixo (padrão: false).
// accessibilityLabel: Texto para leitores de tela, melhora acessibilidade (ex.: "Janela modal").