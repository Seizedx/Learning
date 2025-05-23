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

// Componente da calculadora de volume de infusão
const InfusionVolumeCalculator = () => {
  const [weight, setWeight] = useState('');
  const [rate, setRate] = useState('');
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

  const calculateInfusionVolume = () => {
    const animalWeight = parseFloat(weight);
    const infusionRate = parseFloat(rate);
    if (animalWeight && infusionRate) {
      const volume = animalWeight * infusionRate;
      const resultValue = volume.toFixed(2);
      setResult(resultValue);
      saveToHistory({
        type: 'Volume de Infusão',
        details: `Peso: ${animalWeight} kg, Taxa: ${infusionRate} mL/kg, Resultado: ${resultValue} mL`,
        timestamp: new Date().toLocaleString(),
      });
    } else {
      setResult('Por favor, insira valores válidos.');
    }
  };

  return (
    <Background>
      <View style={styles.calculatorContainer}>
        <Text style={styles.calculatorTitle}>Calculadora de Volume de Infusão</Text>
        <TextInput
          style={styles.calculatorInput}
          placeholder="Peso do Animal (kg)"
          placeholderTextColor="#ccc"
          keyboardType="numeric"
          value={weight}
          onChangeText={setWeight}
        />
        <TextInput
          style={styles.calculatorInput}
          placeholder="Taxa de Infusão (mL/kg)"
          placeholderTextColor="#ccc"
          keyboardType="numeric"
          value={rate}
          onChangeText={setRate}
        />
        <TouchableOpacity style={styles.calculatorButton} onPress={calculateInfusionVolume}>
          <Text style={styles.calculatorButtonText}>Calcular</Text>
        </TouchableOpacity>
        {result && <Text style={styles.calculatorResult}>Volume de Infusão: {result} mL</Text>}
      </View>
    </Background>
  );
};

// Exporta o componente como padrão
export default InfusionVolumeCalculator;