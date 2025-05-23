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

// Componente da calculadora de CPDA
const CpdaCalculator = () => {
  const [bloodVolume, setBloodVolume] = useState('');
  const [ratio, setRatio] = useState('7');
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

  const calculateCpda = () => {
    const volume = parseFloat(bloodVolume);
    const cpdaRatio = parseFloat(ratio);
    if (volume && cpdaRatio && cpdaRatio !== 0) {
      const cpdaVolume = volume / cpdaRatio;
      const resultValue = cpdaVolume.toFixed(2);
      setResult(resultValue);
      saveToHistory({
        type: 'Volume de CPDA',
        details: `Volume: ${volume} mL, Proporção: ${cpdaRatio}, Resultado: ${resultValue} mL`,
        timestamp: new Date().toLocaleString(),
      });
    } else {
      setResult('Por favor, insira valores válidos.');
    }
  };

  return (
    <Background>
      <View style={styles.calculatorContainer}>
        <Text style={styles.calculatorTitle}>Calculadora de CPDA</Text>
        <TextInput
          style={styles.calculatorInput}
          placeholder="Volume de Sangue (mL)"
          placeholderTextColor="#ccc"
          keyboardType="numeric"
          value={bloodVolume}
          onChangeText={setBloodVolume}
        />
        <TextInput
          style={styles.calculatorInput}
          placeholder="Proporção CPDA:Sangue (ex.: 7)"
          placeholderTextColor="#ccc"
          keyboardType="numeric"
          value={ratio}
          onChangeText={setRatio}
        />
        <TouchableOpacity style={styles.calculatorButton} onPress={calculateCpda}>
          <Text style={styles.calculatorButtonText}>Calcular</Text>
        </TouchableOpacity>
        {result && <Text style={styles.calculatorResult}>Volume de CPDA: {result} mL</Text>}
      </View>
    </Background>
  );
};

// Exporta o componente como padrão
export default CpdaCalculator;