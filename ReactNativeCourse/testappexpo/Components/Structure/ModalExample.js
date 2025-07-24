import React, { Component } from 'react'
import { 
 Text,
 StyleSheet,
 View,
 TouchableOpacity,
 Modal,
 
} from 'react-native'
import EnterModal from '../../src/Modal/EnterModal'

export default class ModalExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
        modalVisible: false,
    };
    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
  }

  openModal() {
    this.setState({
        modalVisible: true
    });
  }
  closeModal() {
    this.setState({
        modalVisible: false
    });
  }

  render() {
    const { modalVisible,

    } = this.state;
    const { openModal,
            closeModal

    } = this;
    const { button1,
            button1Text,
            title1,
    } = styles;
    return (
      <View style={styles.container}>
            <Text style={title1}>Testing Modal</Text> 
        <TouchableOpacity
            style={button1}
            onPress={openModal}
        >
            <Text style={button1Text}>Open Modal</Text> 
        </TouchableOpacity>
        
        <Modal
            animationType="fade" //ou slide
            visible={modalVisible}
            // transparent={true} //backgroundColor Sobrepoe
            hardwareAccelerated={true}
            statusBarTranslucent={false}
            >
            <EnterModal
                close={closeModal}      
            />
        </Modal>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
},
title1: {
    fontSize: 50,
    fontWeight: 500,
},
button1: {
    marginTop: 20,
    alignSelf: 'center',
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 10,
  },
  button1Text: {
    fontSize: 20,
    fontWeight: 50,
  },
  modal1View: {
    flex: 1,
    backgroundColor: '#292929',
  },
  modal1Text: {
    textAlign: 'center',
    fontSize: 30,
    color: '#ffffff',
  },
  button1Modal: {
    alignSelf: 'flex-end',    
    marginTop: -30,
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