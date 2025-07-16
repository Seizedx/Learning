import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default class PickerExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pizza: 0, // This represents the index of the selected pizza
      pizzas: [
        { key: 1, nome: 'Calabresa', valor: 35.90 },
        { key: 2, nome: 'Brigadeiro', valor: 43.90 },
        { key: 3, nome: 'Strogonoff', valor: 38.90 },
        { key: 4, nome: 'Portuguesa', valor: 25.90 },
        { key: 5, nome: 'Quatro Queijos', valor: 28.90 },
        { key: 6, nome: 'Baiana', valor: 52.90 },
      ],
    };
  }

  render() {
    let pizzasItem = this.state.pizzas.map((v, k) => {
      return <Picker.Item key={k} value={k} label={v.nome} />;
    });

    return (
      <View style={styles.container}>
        <Text style={styles.logo}>Menu Pizza</Text>
        <Picker
          selectedValue={this.state.pizza}
          onValueChange={(itemValue) => this.setState({ pizza: itemValue })}
        >
          {pizzasItem}
        </Picker>
        <Text style={styles.pizzas}>Sabor: {this.state.pizzas[this.state.pizza].nome}</Text>
        <Text style={styles.pizzas}>
          Preco: R${this.state.pizzas[this.state.pizza].valor.toFixed(2)}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
  },
  logo: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  pizzas: {
    fontSize: 28,
    textAlign: 'center',
  },
});

// selectedValue: Define o valor inicial selecionado no Picker (string ou número).
// onValueChange: Função de callback chamada quando um item é selecionado, recebe o valor e índice do item.
// style: Aplica estilos ao Picker, como largura, altura e bordas.
// enabled: Booleano que habilita (true) ou desabilita (false) a interação com o Picker.
// mode: (Android) Define o modo de exibição: 'dialog' (modal) ou 'dropdown' (âncora ao Picker).
// prompt: (Android) Define o título do diálogo no modo 'dialog'.
// itemStyle: Aplica estilos aos rótulos dos itens no Picker.
// dropdownIconColor: (Android) Define a cor do ícone de dropdown (usa processColor).
// dropdownIconRippleColor: (Android) Define a cor do efeito ripple do ícone de dropdown.
// numberOfLines: Define o número máximo de linhas para o texto dos itens, com elipse se exceder.
// testID: Identificador para testes automatizados.
// Picker.Item: Componente filho para definir cada item com 'label' (texto exibido) e 'value' (valor retornado).