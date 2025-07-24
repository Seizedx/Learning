import { Keyboard, TextInput, View, Text } from 'react-native';
import { useEffect, useState } from 'react';

const App = () => {
  const [keyboardStatus, setKeyboardStatus] = useState('');

  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', (e) => {
      setKeyboardStatus(`Teclado visível, altura: ${e.endCoordinates.height}px`);
    });
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardStatus('Teclado oculto');
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        placeholder="Digite aqui"
        onSubmitEditing={Keyboard.dismiss}
      />
      <Text>{keyboardStatus}</Text>
    </View>
  );
};

// Keyboard.dismiss(): Fecha o teclado virtual.
// Keyboard.addListener(eventType, listener): Registra um ouvinte para eventos do teclado (retorna um objeto de assinatura).
// Keyboard.removeListener(eventType, listener): Remove um ouvinte específico de um evento do teclado.
// Keyboard.removeAllListeners(eventType): Remove todos os ouvintes de um evento específico.
// Keyboard.scheduleLayoutAnimation(event): (iOS) Agenda animação de layout para eventos do teclado.
// Keyboard.isVisible(): (Android) Retorna booleano indicando se o teclado está visível.

//Eventos Disponíveis:

// keyboardWillShow: Disparado antes de o teclado aparecer (iOS e Android).
// keyboardDidShow: Disparado após o teclado aparecer (iOS e Android).
// keyboardWillHide: Disparado antes de o teclado ser ocultado (iOS e Android).
// keyboardDidHide: Disparado após o teclado ser ocultado (iOS e Android).
// keyboardWillChangeFrame: Disparado antes de o teclado mudar de tamanho/posição (iOS).
// keyboardDidChangeFrame: Disparado após o teclado mudar de tamanho/posição (iOS).

//Propriedades dos Eventos:

// event.keyboardHeight: Altura do teclado (em pixels).
// event.coordinates: (iOS) Objeto com {end: {screenX, screenY, width, height}} para posição/tamanho do teclado.
// event.duration: Duração da animação do teclado (em ms).
// event.easing: Tipo de animação (ex.: 'keyboard', 'linear').
// event.startCoordinates: (iOS) Posição inicial do teclado antes da animação.
// event.isEventFromThisApp: (iOS) Booleano indicando se o evento é do app atual.