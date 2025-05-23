// Importa React e hooks para gerenciar estado
import React, { useState } from 'react';
// Importa componentes do React Native para a interface
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView, Alert, Platform } from 'react-native';
// Importa ImagePicker para selecionar imagens
import * as ImagePicker from 'expo-image-picker';
// Importa o componente de fundo
import Background from '../Background';
// Importa os estilos centralizados
import styles from '../Styles';

// Componente para observações
const PetObservations = ({ route, navigation }) => {
  const { basicInfo, hematology } = route.params;
  const [observations, setObservations] = useState('');
  const [images, setImages] = useState([]);

  const pickImage = async (useCamera = false) => {
    // Verifica se está rodando na web
    if (Platform.OS === 'web') {
      Alert.alert(
        'Funcionalidade Indisponível',
        'Adicionar imagens está disponível apenas em dispositivos móveis.'
      );
      return;
    }

    // Verifica permissões
    const permissionResult = useCamera
      ? await ImagePicker.requestCameraPermissionsAsync()
      : await ImagePicker.requestMediaLibraryPermissionsAsync();
    
    if (permissionResult.status !== 'granted') {
      Alert.alert('Permissão negada', 'Precisamos de permissão para acessar a câmera ou galeria.');
      return;
    }

    // Lança o picker de imagem (câmera ou galeria)
    const result = useCamera
      ? await ImagePicker.launchCameraAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          quality: 1,
        })
      : await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          quality: 1,
        });

    if (!result.canceled) {
      setImages([...images, result.assets[0].uri]);
    }
  };

  const showImagePickerOptions = () => {
    if (Platform.OS === 'web') {
      Alert.alert(
        'Funcionalidade Indisponível',
        'Adicionar imagens está disponível apenas em dispositivos móveis.'
      );
      return;
    }

    Alert.alert(
      'Adicionar Imagem de Observação',
      'Escolha uma opção:',
      [
        {
          text: 'Tirar Foto',
          onPress: () => pickImage(true),
        },
        {
          text: 'Escolher da Galeria',
          onPress: () => pickImage(false),
        },
        {
          text: 'Cancelar',
          style: 'cancel',
        },
      ]
    );
  };

  const handleNext = () => {
    navigation.navigate('PetSummary', { basicInfo, hematology, observations: { text: observations, images } });
  };

  return (
    <Background>
      <View style={styles.petRegistrationContainer}>
        <Text style={styles.petRegistrationTitle}>Observações</Text>
        <TextInput
          style={styles.petRegistrationObservationInput}
          placeholder="Digite suas observações"
          placeholderTextColor="#ccc"
          multiline
          value={observations}
          onChangeText={setObservations}
        />
        <TouchableOpacity style={styles.petRegistrationPhotoButton} onPress={showImagePickerOptions}>
          <Text style={styles.petRegistrationPhotoButtonText}>Adicionar Imagem</Text>
        </TouchableOpacity>
        <ScrollView horizontal style={styles.petRegistrationImageScroll}>
          {images.map((uri, index) => (
            <Image key={index} source={{ uri }} style={styles.petRegistrationImage} />
          ))}
        </ScrollView>
        <TouchableOpacity style={styles.petRegistrationButton} onPress={handleNext}>
          <Text style={styles.petRegistrationButtonText}>Próximo</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
};

// Exporta o componente como padrão
export default PetObservations;