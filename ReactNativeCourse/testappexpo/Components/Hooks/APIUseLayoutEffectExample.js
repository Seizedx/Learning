import { useLayoutEffect, useState } from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';

function App() {
  const [width, setWidth] = useState(Dimensions.get('window').width);

  useLayoutEffect(() => {
    const newWidth = Dimensions.get('window').width;
    if (newWidth !== width) {
      setWidth(newWidth);
    }
  }, [width]);

  return (
    <View style={styles.container}>
      <Text>Largura da tela: {width}px</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});

// useLayoutEffect(callback, dependencies): Executa o callback sincronamente após atualizações do DOM, antes da pintura na tela.
// callback: Função que contém a lógica a ser executada (ex.: manipular layout ou medir elementos).
// dependencies: Array de dependências que determina quando o callback é reexecutado (ex.: [value]).