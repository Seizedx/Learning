//https://reactnative.dev/docs/animated
import React, { useEffect, useRef, useState } from 'react';
import { Text, StyleSheet, View, ActivityIndicator, Animated, Dimensions } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const { height, width } = Dimensions.get('window');

export default function ParallelAnimation() {
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(true);

  // Animated values
  const animatedWidth = useRef(new Animated.Value(1)).current;
  const animatedHeight = useRef(new Animated.Value(1)).current;
  const animatedBorderRadius = useRef(new Animated.Value(20)).current;
  const animatedFontSize = useRef(new Animated.Value(1)).current;
  const animatedOpacity = useRef(new Animated.Value(0)).current;
  const animatedRotate = useRef(new Animated.Value(0)).current;

  // Interpolation for rotation
  const rotateInterpolation = animatedRotate.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '3600deg'],
  });

  // Animations
  useEffect(() => {
    Animated.parallel([
      // Native-driven animations
      Animated.timing(animatedOpacity, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      }),
      Animated.timing(animatedRotate, {
        toValue: 1,
        duration: 4000,
        useNativeDriver: true,
      }),
      // JS-driven animations
      Animated.timing(animatedWidth, {
        toValue: 300,
        duration: 2000,
        useNativeDriver: false,
      }),
      Animated.timing(animatedHeight, {
        toValue: 300,
        duration: 2000,
        useNativeDriver: false,
      }),
      Animated.timing(animatedBorderRadius, {
        toValue: 300,
        duration: 2000,
        useNativeDriver: false,
      }),
      Animated.timing(animatedFontSize, {
        toValue: 50,
        duration: 2000,
        useNativeDriver: false,
      }),
    ]).start();
  }, []);

  // Load name from AsyncStorage
  useEffect(() => {
    async function getStorage() {
      const storedName = await AsyncStorage.getItem('names');
      if (storedName !== null) {
        setName(storedName);
      }
      setLoading(false);
    }
    getStorage();
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingView}>
        <ActivityIndicator color="#121212" size="large" style={styles.loading} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Outer Animated.View for native animations (opacity, rotate) */}
      <Animated.View
        style={{
          opacity: animatedOpacity,
          transform: [{ rotate: rotateInterpolation }],
        }}
      >
        {/* Inner Animated.View for JS animations */}
        <Animated.View
          style={[
            styles.animationView,
            {
              width: animatedWidth,
              height: animatedHeight,
              borderRadius: animatedBorderRadius,
            },
          ]}
        >
          <Animated.Text style={[styles.textAnimation, { fontSize: animatedFontSize }]}>
            Loading
          </Animated.Text>
        </Animated.View>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff', // Added to ensure visibility
  },
  loadingView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loading: {
    transform: [{ scale: 5 }],
  },
  animationView: {
    justifyContent: 'center',
    alignItems: 'center', // Added for better text alignment
    backgroundColor: '#de0e0e',
  },
  textAnimation: {
    textAlign: 'center',
    color: '#ffffff',
  },
});


//Classes e Construtores:

// Animated.Value: Cria um valor animado (ex.: new Animated.Value(0) para opacidade).
// Animated.ValueXY: Cria um valor animado para coordenadas 2D (ex.: {x: 0, y: 0}).
// Animated.View: Componente View com suporte a animações via style (ex.: <Animated.View style={{opacity}} />).
// Animated.Text: Componente Text com suporte a animações via style (ex.: <Animated.Text style={{fontSize}} />).
// Animated.Image: Componente Image com suporte a animações via style (ex.: <Animated.Image style={{width}} />).
// Animated.ScrollView: Componente ScrollView com suporte a animações (ex.: para scroll position).

// Métodos de Criação de Animações:

// Animated.timing(value, config): Anima um valor ao longo do tempo (ex.: {toValue: 1, duration: 500}).
// Animated.spring(value, config): Anima com efeito de mola (ex.: {toValue: 1, friction: 7}).
// Animated.decay(value, config): Anima com desaceleração (ex.: {velocity: 0.5, deceleration: 0.998}).
// Animated.parallel(animations, config): Executa múltiplas animações simultaneamente (ex.: [anim1, anim2]).
// Animated.sequence(animations): Executa animações em sequência (ex.: [anim1, anim2]).
// Animated.stagger(delay, animations): Executa animações com atrasos escalonados (ex.: delay de 100ms entre anims).
// Animated.loop(animation, config): Repete uma animação (ex.: {iterations: 3} ou infinito).

// Métodos de Manipulação de Valores Animados:

// Animated.Value.setValue(value): Define um valor inicial ou atualiza o valor animado.
// Animated.Value.setOffset(offset): Define um deslocamento base para o valor animado.
// Animated.Value.flattenOffset(): Incorpora o offset ao valor e zera o offset.
// Animated.Value.extractOffset(): Extrai o valor atual para o offset e zera o valor.
// Animated.Value.addListener(callback): Registra um ouvinte para mudanças no valor (ex.: ({value}) => console.log(value)).
// Animated.Value.removeListener(id): Remove um ouvinte específico pelo ID retornado por addListener.
// Animated.Value.removeAllListeners(): Remove todos os ouvintes do valor animado.
// Animated.Value.interpolate(config): Mapeia um intervalo de entrada para saída (ex.: {inputRange: [0, 1], outputRange: ['0deg', '360deg']}).

// Métodos de Combinação:

// Animated.add(a, b): Soma dois valores animados ou um valor animado e um número.
// Animated.subtract(a, b): Subtrai b de a (valores animados ou números).
// Animated.divide(a, b): Divide a por b (valores animados ou números).
// Animated.multiply(a, b): Multiplica a por b (valores animados ou números).
// Animated.modulo(a, modulus): Retorna o resto da divisão de a por modulus.

// Métodos de Controle de Animação:

// start(callback): Inicia a animação, com callback opcional ({finished, value}).
// stop(): Para a animação em andamento.
// reset(): Reseta a animação para o valor inicial.

// Propriedades de Configuração (usadas em timing, spring, decay):

// toValue: Valor final da animação (número ou Animated.Value).
// duration: Duração da animação em ms (usado em timing, padrão: 500).
// easing: Função de suavização (ex.: Easing.linear, Easing.ease) (usado em timing).
// friction: Controle de elasticidade para spring (padrão: 7).
// tension: Controle de velocidade para spring (padrão: 40).
// velocity: Velocidade inicial para decay ou spring (padrão: 0).
// deceleration: Taxa de desaceleração para decay (padrão: 0.998).
// useNativeDriver: Booleano que usa driver nativo para animações (melhor performance, padrão: false).