// Importa React e hooks para gerenciar estado
import React, { useState } from 'react';
// Importa componentes do React Native para a interface
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
// Importa AsyncStorage para persistência de dados
import AsyncStorage from '@react-native-async-storage/async-storage';
// Importa o componente de fundo
import Background from './Background';
// Importa os estilos centralizados
import styles from './Styles';

// Componente da calculadora de taxa de infusão
const InfusionRateCalculator = () => {
  const [volume, setVolume] = useState('');
  const [time, setTime] = useState('');
  const [result, setResult] = useState(null);

  const saveToHistory = async (calculation) => {
    try {
      const storedHistory = await AsyncStorage.getItem('calculationHistory');
      let history = storedHistory ? JSON.parse(storedHistory) : [];
      history.unshift(calculation);
      if (history.length > 20) history = history.slice(0, 20);
      await AsyncStorage.setItem('calculationHistory', JSON.stringify(history));
    } catch (error) {
      console.error('Erro ao salvar histórico:', error);
    }
  };

  const calculateInfusionRate = () => {
    const infusionVolume = parseFloat(volume);
    const infusionTime = parseFloat(time);
    if (infusionVolume && infusionTime && infusionTime !== 0) {
      const rate = infusionVolume / infusionTime;
      const resultValue = rate.toFixed(2);
      setResult(resultValue);
      saveToHistory({
        type: 'Taxa de Infusão',
        details: `Volume: ${infusionVolume} mL, Tempo: ${infusionTime} h, Resultado: ${resultValue} mL/h`,
        timestamp: new Date().toLocaleString(),
      });
    } else {
      setResult('Por favor, insira valores válidos.');
    }
  };

  return (
    <Background>
      <View style={styles.calculatorContainer}>
        <Text style={styles.calculatorTitle}>Calculadora de Taxa de Infusão</Text>
        <TextInput
          style={styles.calculatorInput}
          placeholder="Volume de Infusão (mL)"
          placeholderTextColor="#ccc"
          keyboardType="numeric"
          value={volume}
          onChangeText={setVolume}
        />
        <TextInput
          style={styles.calculatorInput}
          placeholder="Tempo de Infusão (h)"
          placeholderTextColor="#ccc"
          keyboardType="numeric"
          value={time}
          onChangeText={setTime}
        />
        <TouchableOpacity style={styles.calculatorButton} onPress={calculateInfusionRate}>
          <Text style={styles.calculatorButtonText}>Calcular</Text>
        </TouchableOpacity>
        {result && <Text style={styles.calculatorResult}>Taxa de Infusão: {result} mL/h</Text>}
      </View>
    </Background>
  );
};

// Exporta o componente como padrão
export default InfusionRateCalculator;