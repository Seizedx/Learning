//npm install @react-native-community/slider --save

import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import Slider from '@react-native-community/slider';

export default class SliderExample extends Component {
    constructor(props) {
        super(props);
        this.state = {
            valor: 0,
        };
    }
  render() {
    return (
      <View style={styles.container}>

        <Slider
            style={styles.slider}
            minimumValue={0}
            maximumValue={100}
            step={0} //decimal 0 inteiro 1
            onValueChange={(selectedValue) => this.setState({valor: selectedValue})}
            value={this.state.valor}
            minimumTrackTintColor='red'
            maximumTrackTintColor='green'
            thumbTintColor='pink' //cor do circle
            // utilizar transform scale no style pra aumentar tamanho dessa caralha
        />
        <Text style={styles.text}>{this.state.valor.toFixed(2)}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    slider: {
        width: 130,
        height: 100,
        alignSelf: 'center',
        transform: 'scale(3)',
    },
    text: {
        fontSize: 28,
        textAlign: 'center',
    }
});


// style: Define estilos do Slider, como largura e altura (ex.: {width: 200, height: 40}).
// minimumValue: Valor mínimo do intervalo do Slider (padrão: 0).
// maximumValue: Valor máximo do intervalo do Slider (padrão: 1).
// step: Incremento entre valores selecionáveis (ex.: 1 para inteiros, 0 para qualquer decimal).
// value: Valor inicial do Slider, deve estar entre minimumValue e maximumValue (padrão: 0).
// onValueChange: Callback chamado continuamente durante o deslize, recebe o valor atual.
// onSlidingStart: Callback chamado quando o usuário começa a interagir com o Slider, recebe o valor inicial.
// onSlidingComplete: Callback chamado quando o usuário solta o Slider, recebe o valor final.
// disabled: Booleano que desabilita (true) ou habilita (false) a interação com o Slider (padrão: false).
// minimumTrackTintColor: Cor da faixa à esquerda do thumb (ex.: "#FFFFFF").
// maximumTrackTintColor: Cor da faixa à direita do thumb (ex.: "#000000").
// thumbTintColor: Cor do thumb (controle deslizante) no iOS ou Android.
// thumbImage: Imagem personalizada para o thumb (suporta apenas imagens estáticas).
// trackImage: Imagem personalizada para a faixa (estica o pixel mais à esquerda ou direita).
// inverted: Inverte a direção do Slider (mínimo à direita, máximo à esquerda).
// vertical: (Experimental) Define o Slider como vertical (padrão: false).
// tapToSeek: Permite que tocar na faixa mude o valor diretamente (padrão: false).
// testID: Identificador para testes automatizados.