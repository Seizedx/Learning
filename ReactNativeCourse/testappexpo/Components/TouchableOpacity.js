import { TouchableOpacity, Text, View } from 'react-native';

const App = () => {
  return (
    <View>
      <TouchableOpacity
        style={{ backgroundColor: '#841584', padding: 10, borderRadius: 5 }}
        activeOpacity={0.7}
        onPress={() => console.log('Botão pressionado')}
        onLongPress={() => console.log('Toque longo')}
        disabled={false}
        accessibilityLabel="Botão personalizado"
      >
        <Text style={{ color: '#fff' }}>Toque aqui</Text>
      </TouchableOpacity>
    </View>
  );
};


// onPress: Callback chamado quando o componente é pressionado.
// activeOpacity: Define a opacidade durante o toque (valor de 0 a 1, padrão: 0.2).
// style: Estilos aplicados ao container do TouchableOpacity (ex.: {backgroundColor: '#fff', padding: 10}).
// disabled: Booleano que desabilita (true) ou habilita (false) a interação (padrão: false).
// onPressIn: Callback chamado quando o toque começa.
// onPressOut: Callback chamado quando o toque termina (independente de completar o pressionamento).
// onLongPress: Callback chamado quando o toque é mantido por mais tempo (configurável).
// delayPressIn: Atraso em ms antes de chamar onPressIn (padrão: 0).
// delayPressOut: Atraso em ms antes de chamar onPressOut (padrão: 0).
// delayLongPress: Atraso em ms para considerar um toque como longo (padrão: 500).
// hitSlop: Expande a área de toque além dos limites visuais (ex.: {top: 10, bottom: 10, left: 10, right: 10}).
// pressRetentionOffset: Define a área onde o toque é mantido ativo após sair dos limites (ex.: {top: 20, bottom: 20, left: 20, right: 20}).
// accessibilityLabel: Texto para leitores de tela, melhora acessibilidade (ex.: "Botão de enviar").
// accessibilityRole: Define o papel do componente para acessibilidade (ex.: 'button').
// accessibilityState: Objeto que descreve o estado (ex.: {disabled: true, selected: false}).
// testID: Identificador para testes automatizados.
// onLayout: Callback chamado quando o layout é calculado, recebe {nativeEvent: {layout}}.
// hasTVPreferredFocus: (TV) Define se o componente recebe foco preferencial (padrão: false).
// nextFocusDown: (TV) ID do próximo componente a receber foco ao pressionar "baixo".
// nextFocusLeft: (TV) ID do próximo componente a receber foco ao pressionar "esquerda".
// nextFocusRight: (TV) ID do próximo componente a receber foco ao pressionar "direita".
// nextFocusUp: (TV) ID do próximo componente a receber foco ao pressionar "cima".