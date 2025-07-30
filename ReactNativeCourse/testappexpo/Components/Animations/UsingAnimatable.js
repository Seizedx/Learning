//npm install react-native-animatable --save
//https://github.com/oblador/react-native-animatable

import React, { useEffect, useState, useRef } from 'react';
import { 
    Text,
    StyleSheet,
    View,
    ActivityIndicator,
    TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Animatable from 'react-native-animatable';
 
const AnimatedButton = Animatable.createAnimatableComponent(TouchableOpacity);
 
export default function UsingAnimatable() {
    const [name, setName] = useState('');
    const [loading, setLoading] = useState(true);
    const buttonRef = useRef(null);

    function handleClick() {
      // buttonRef.current.bounce();
      // buttonRef.current.pulse();
      buttonRef.current.shake();
    }
 
    //chama quando componente é aberto, está com o asynsStorage
    useEffect(() => {
        async function getStorage() {
            const storedName = await AsyncStorage.getItem('names');
            if(storedName !== null) {
                setName(storedName);
            }
            setInterval(() => {
              setLoading(false);
            }, 1000);
        }
        getStorage();
        // return() => {} //Funciona como um ComponentWillUnmount
    }, []);
 
    if(loading) {
        return (
            <View style={styles.loadingView}>
                <ActivityIndicator
                    color='#121212'
                    size={'large'}
                    style={styles.loading}
                />
            </View>
        )
    } else {  
        return (
            <View style={styles.container}>
                <View>
                    <Animatable.Text
                    style={styles.mainTitle}
                    animation="shake" // exemplos de animation
                    iterationCount={Infinity} //ou qualquer numero
                    duration={300} //tempo do pulso
                    >CHANGE HERE</Animatable.Text>
                </View>
                <AnimatedButton
                style={styles.animatableButton}
                animation={'pulse'}
                ref={buttonRef}
                onPress={handleClick}
                >
                  <Text
                  style={styles.animatableButtonText}
                  >Animated</Text>
                </AnimatedButton>
            </View>
        )
    }
}
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    loadingView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    loading: {
        transform: 'scale(5)',
    },
    mainTitle: {
      fontSize: 25,
    },
    animatableButton: {
      marginTop: 30,
      padding: 10,
      width: '60%',
      backgroundColor: '#7d0000',
      borderRadius: 10,

    },
    animatableButtonText: {
      textAlign: 'center',
      fontSize: 30,
    },
});


// Componentes:

// Animatable.View: Componente View com suporte a animações declarativas (ex.: <Animatable.View animation="fadeIn" />).
// Animatable.Text: Componente Text com suporte a animações declarativas (ex.: <Animatable.Text animation="zoomIn" />).
// Animatable.Image: Componente Image com suporte a animações declarativas (ex.: <Animatable.Image animation="slideInUp" />).
// Animatable.createAnimatableComponent(Component): Cria um componente animável personalizado (ex.: para componentes customizados).

// Props Principais:

// animation: Nome da animação pré-definida (ex.: 'fadeIn', 'slideInUp') ou objeto com animação personalizada.
// duration: Duração da animação em ms (padrão: 1000).
// delay: Atraso antes de iniciar a animação em ms (padrão: 0).
// easing: Função de suavização ('linear', 'ease', 'ease-in', 'ease-out', etc.) ou função personalizada.
// iterationCount: Número de repetições da animação (número ou 'infinite') (padrão: 1).
// iterationDelay: Atraso entre repetições em ms (padrão: 0).
// direction: Direção da animação ('normal', 'reverse', 'alternate', 'alternate-reverse') (padrão: 'normal').
// useNativeDriver: Booleano que usa driver nativo para melhor performance (padrão: false, recomendado: true).
// onAnimationBegin: Callback chamado quando a animação começa.
// onAnimationEnd: Callback chamado quando a animação termina (recebe {finished: boolean}).
// transition: Propriedade(s) para animar valores dinâmicos (ex.: 'opacity', ['opacity', 'width']).
// style: Estilos aplicados ao componente (ex.: {width: 100, height: 100}).
// testID: Identificador para testes automatizados.

// Métodos de Referência:

// ref.animate(animation, duration, easing): Executa uma animação programaticamente (ex.: ref.current.animate('fadeIn', 1000)).
// ref.stopAnimation(): Para a animação em andamento.
// ref.transition(fromValues, toValues, duration, easing): Anima de um estado inicial para final (ex.: {opacity: 0} para {opacity: 1}).
// ref.transitionTo(toValues, duration, easing): Anima para um estado final (ex.: ref.current.transitionTo({opacity: 1})).

// Animações Pré-definidas (Exemplos):

// fadeIn: Aparece com aumento de opacidade.
// fadeOut: Desaparece com redução de opacidade.
// slideInUp: Desliza de baixo para cima.
// slideOutDown: Desliza de cima para baixo.
// zoomIn: Aumenta o tamanho a partir de zero.
// zoomOut: Reduz o tamanho até zero.
// rotate: Rotaciona o elemento (ex.: '360deg').
// bounce: Efeito de quique com movimento vertical.
// pulse: Pulsa com escala rápida.
// shake: Sacode horizontalmente.
// swing: Balança com rotação suave.