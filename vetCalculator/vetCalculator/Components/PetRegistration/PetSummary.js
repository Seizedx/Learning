// Importa React e hooks para gerenciar estado
import React from 'react';
// Importa componentes do React Native para a interface
import { View, Text, TouchableOpacity, Alert, ScrollView, Image, Platform } from 'react-native';
// Importa bibliotecas do Expo para gerar e compartilhar PDF
import * as Print from 'expo-print';
import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing';
// Importa o componente de fundo
import Background from '../Background';
// Importa os estilos centralizados
import styles from '../Styles';

// Componente para resumo do cadastro
const PetSummary = ({ route }) => {
  const { basicInfo, hematology, observations } = route.params;

  const generatePDF = async () => {
    // Verifica se está na web
    if (Platform.OS === 'web') {
      Alert.alert(
        'Funcionalidade Indisponível',
        'Gerar PDF está disponível apenas em dispositivos móveis.'
      );
      return;
    }

    try {
      // Monta o HTML para o PDF
      let html = `
        <h1 style="text-align: center;">Cadastro do Pet</h1>
        <h2>Dados Básicos</h2>
        <p><strong>Nome:</strong> ${basicInfo.name}</p>
        <p><strong>Tutor:</strong> ${basicInfo.owner}</p>
        <p><strong>Raça:</strong> ${basicInfo.breed}</p>
        <p><strong>Idade:</strong> ${basicInfo.age}</p>
      `;

      if (basicInfo.photo) {
        const base64 = await FileSystem.readAsStringAsync(basicInfo.photo, { encoding: FileSystem.EncodingType.Base64 });
        html += `<img src="data:image/jpeg;base64,${base64}" style="width: 100px; height: 100px;" />`;
      }

      html += `
        <h2>Valores Hematológicos</h2>
        ${hematology.redBloodCells ? `<p><strong>Hemácias:</strong> ${hematology.redBloodCells} milhões/mm³</p>` : ''}
        ${hematology.hemoglobin ? `<p><strong>Hemoglobina:</strong> ${hematology.hemoglobin} g/dL</p>` : ''}
        ${hematology.hematocrit ? `<p><strong>Hematócrito:</strong> ${hematology.hematocrit} %</p>` : ''}
        ${hematology.whiteBloodCells ? `<p><strong>Leucócitos:</strong> ${hematology.whiteBloodCells} mil/mm³</p>` : ''}
        ${hematology.platelets ? `<p><strong>Plaquetas:</strong> ${hematology.platelets} mil/mm³</p>` : ''}
        <h2>Observações</h2>
        <p>${observations.text || 'Nenhuma observação'}</p>
      `;

      if (observations.images && observations.images.length > 0) {
        html += '<h3>Imagens das Observações</h3>';
        for (const uri of observations.images) {
          const base64 = await FileSystem.readAsStringAsync(uri, { encoding: FileSystem.EncodingType.Base64 });
          html += `<img src="data:image/jpeg;base64,${base64}" style="width: 100px; height: 100px; margin-right: 10px;" />`;
        }
      }

      // Gera o PDF usando expo-print
      const { uri } = await Print.printToFileAsync({
        html,
        base64: false,
      });

      // Define o caminho de destino
      const pdfPath = `${FileSystem.documentDirectory}Cadastro_${basicInfo.name}_${new Date().toISOString()}.pdf`;
      await FileSystem.moveAsync({
        from: uri,
        to: pdfPath,
      });

      // Compartilha o PDF
      if (await Sharing.isAvailableAsync()) {
        await Sharing.shareAsync(pdfPath);
        Alert.alert('Sucesso', 'PDF gerado e compartilhado com sucesso!');
      } else {
        Alert.alert('Erro', 'Compartilhamento não disponível no dispositivo.');
      }
    } catch (error) {
      console.error('Erro ao gerar PDF:', error);
      Alert.alert('Erro', 'Falha ao gerar o PDF: ' + error.message);
    }
  };

  return (
    <Background>
      <ScrollView 
        style={styles.petRegistrationContainer}
        contentContainerStyle={styles.petRegistrationContentContainer}
      >
        <Text style={styles.petRegistrationTitle}>Resumo do Cadastro</Text>
        <Text style={styles.petRegistrationSummaryText}>Nome: {basicInfo.name}</Text>
        <Text style={styles.petRegistrationSummaryText}>Tutor: {basicInfo.owner}</Text>
        <Text style={styles.petRegistrationSummaryText}>Raça: {basicInfo.breed}</Text>
        <Text style={styles.petRegistrationSummaryText}>Idade: {basicInfo.age}</Text>
        {basicInfo.photo && (
          <>
            <Text style={styles.petRegistrationSummaryText}>Foto do Pet:</Text>
            <Image source={{ uri: basicInfo.photo }} style={styles.petRegistrationImage} />
          </>
        )}
        <Text style={styles.petRegistrationSummaryText}>Hemácias: {hematology.redBloodCells || 'Não informado'}</Text>
        <Text style={styles.petRegistrationSummaryText}>Hemoglobina: {hematology.hemoglobin || 'Não informado'}</Text>
        <Text style={styles.petRegistrationSummaryText}>Hematócrito: {hematology.hematocrit || 'Não informado'}</Text>
        <Text style={styles.petRegistrationSummaryText}>Leucócitos: {hematology.whiteBloodCells || 'Não informado'}</Text>
        <Text style={styles.petRegistrationSummaryText}>Plaquetas: {hematology.platelets || 'Não informado'}</Text>
        <Text style={styles.petRegistrationSummaryText}>Observações: {observations.text || 'Nenhuma observação'}</Text>
        {observations.images && observations.images.length > 0 && (
          <>
            <Text style={styles.petRegistrationSummaryText}>Imagens das Observações:</Text>
            <ScrollView horizontal style={styles.petRegistrationImageScroll}>
              {observations.images.map((uri, index) => (
                <Image key={index} source={{ uri }} style={styles.petRegistrationImage} />
              ))}
            </ScrollView>
          </>
        )}
        <TouchableOpacity style={styles.petRegistrationButton} onPress={generatePDF}>
          <Text style={styles.petRegistrationButtonText}>Gerar Cadastro (PDF)</Text>
        </TouchableOpacity>
      </ScrollView>
    </Background>
  );
};

// Exporta o componente como padrão
export default PetSummary;