import React, { Component } from 'react'
import { Text, StyleSheet, View, Switch } from 'react-native'

export default class SwitchExample extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: false
        };
    }
  render() {
    return (
      <View style={styles.container}>
        <Switch
        style={styles.switch}
        trackColor={{ false: '#767577', true: '#fff59c' }}
        thumbColor={(this.state.status) ? '#f5dd4b' : '#3c3c3c'}
        value={this.state.status}
        onValueChange={(valueSwitch) => this.setState({status: valueSwitch})}
        >
        </Switch>

        <Text style={styles.text}>Switch Value: {this.state.status.toString()}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 40,
    },
    switch: {
        marginTop: 40,
        alignSelf: 'center',
        transform: [{scale: 6}],
    },
    text: {
        marginTop: 40,
        textAlign: 'center',
        fontSize: 30,

    }
});


// value: Booleano que define o estado inicial do Switch (true para ligado, false para desligado).
// onValueChange: Callback chamado quando o estado do Switch muda, recebe o novo valor booleano.
// disabled: Booleano que desabilita (true) ou habilita (false) a interação com o Switch (padrão: false).
// trackColor: Objeto com {false: cor, true: cor} para personalizar a cor da faixa (ex.: {false: '#767577', true: '#81b0ff'}).
// thumbColor: Cor do thumb (botão deslizante) quando ligado ou desligado (ex.: '#f4f3f4').
// ios_backgroundColor: (iOS) Cor de fundo da faixa quando desligado (substitui trackColor.false no iOS).
// style: Estilos aplicados ao container do Switch (ex.: {margin: 10}).
// testID: Identificador para testes automatizados.
// onChange: Callback chamado quando o estado muda, recebe um evento com {value: booleano}.