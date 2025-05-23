// Importa React e hooks para gerenciar estado
import React, { useState } from 'react';
// Importa componentes do React Native para a interface
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
// Importa o componente de fundo
import Background from '../Background';
// Importa os estilos centralizados
import styles from '../Styles';

// Componente para valores hematológicos
const PetHematology = ({ route, navigation }) => {
  const { basicInfo } = route.params;
  const [hematology, setHematology] = useState({
    redBloodCells: '',
    hemoglobin: '',
    hematocrit: '',
    whiteBloodCells: '',
    platelets: '',
  });

  const handleInputChange = (field, value) => {
    setHematology({ ...hematology, [field]: value });
  };

  const handleNext = () => {
    const hasData = Object.values(hematology).some(value => value !== '');
    if (!hasData) {
      Alert.alert('Campos vazios', 'Por favor, preencha pelo menos um campo hematológico.');
      return;
    }
    navigation.navigate('PetObservations', { basicInfo, hematology });
  };

  return (
    <Background>
      <View style={styles.petRegistrationContainer}>
        <Text style={styles.petRegistrationTitle}>Valores Hematológicos</Text>
        <TextInput
          style={styles.petRegistrationInput}
          placeholder="Hemácias (milhões/mm³)"
          placeholderTextColor="#ccc"
          keyboardType="numeric"
          value={hematology.redBloodCells}
          onChangeText={value => handleInputChange('redBloodCells', value)}
        />
        <TextInput
          style={styles.petRegistrationInput}
          placeholder="Hemoglobina (g/dL)"
          placeholderTextColor="#ccc"
          keyboardType="numeric"
          value={hematology.hemoglobin}
          onChangeText={value => handleInputChange('hemoglobin', value)}
        />
        <TextInput
          style={styles.petRegistrationInput}
          placeholder="Hematócrito (%)"
          placeholderTextColor="#ccc"
          keyboardType="numeric"
          value={hematology.hematocrit}
          onChangeText={value => handleInputChange('hematocrit', value)}
        />
        <TextInput
          style={styles.petRegistrationInput}
          placeholder="Leucócitos (mil/mm³)"
          placeholderTextColor="#ccc"
          keyboardType="numeric"
          value={hematology.whiteBloodCells}
          onChangeText={value => handleInputChange('whiteBloodCells', value)}
        />
        <TextInput
          style={styles.petRegistrationInput}
          placeholder="Plaquetas (mil/mm³)"
          placeholderTextColor="#ccc"
          keyboardType="numeric"
          value={hematology.platelets}
          onChangeText={value => handleInputChange('platelets', value)}
        />
        <TouchableOpacity style={styles.petRegistrationButton} onPress={handleNext}>
          <Text style={styles.petRegistrationButtonText}>Continuar</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
};

// Exporta o componente como padrão
export default PetHematology;