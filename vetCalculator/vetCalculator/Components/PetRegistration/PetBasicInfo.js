// Importa React e hooks para gerenciar estado
import React, { useState } from 'react';
// Importa componentes do React Native para a interface
import { View, Text, TextInput, TouchableOpacity, Image, Alert, Platform } from 'react-native';
// Importa ImagePicker para selecionar fotos
import * as ImagePicker from 'expo-image-picker';
// Importa o componente de fundo
import Background from '../Background';
// Importa os estilos centralizados
import styles from '../Styles';

// Componente para dados básicos do pet
const PetBasicInfo = ({ navigation }) => {
  const [name, setName] = useState('');
  const [owner, setOwner] = useState('');
  const [breed, setBreed] = useState('');
  const [age, setAge] = useState('');
  const [photo, setPhoto] = useState(null);

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
          aspect: [1, 1],
          quality: 1,
        })
      : await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [1, 1],
          quality: 1,
        });

    if (!result.canceled) {
      setPhoto(result.assets[0].uri);
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
      'Adicionar Foto do Pet',
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
    if (!name || !owner || !breed || !age) {
      Alert.alert('Campos obrigatórios', 'Por favor, preencha todos os campos.');
      return;
    }
    navigation.navigate('PetHematology', { basicInfo: { name, owner, breed, age, photo } });
  };

  return (
    <Background>
      <View style={styles.petRegistrationContainer}>
        <Text style={styles.petRegistrationTitle}>Dados Básicos do Pet</Text>
        <TextInput
          style={styles.petRegistrationInput}
          placeholder="Nome do Pet"
          placeholderTextColor="#ccc"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.petRegistrationInput}
          placeholder="Tutor"
          placeholderTextColor="#ccc"
          value={owner}
          onChangeText={setOwner}
        />
        <TextInput
          style={styles.petRegistrationInput}
          placeholder="Raça"
          placeholderTextColor="#ccc"
          value={breed}
          onChangeText={setBreed}
        />
        <TextInput
          style={styles.petRegistrationInput}
          placeholder="Idade"
          placeholderTextColor="#ccc"
          keyboardType="numeric"
          value={age}
          onChangeText={setAge}
        />
        <TouchableOpacity style={styles.petRegistrationPhotoButton} onPress={showImagePickerOptions}>
          <Text style={styles.petRegistrationPhotoButtonText}>
            {photo ? 'Alterar Foto' : 'Adicionar Foto do Pet'}
          </Text>
        </TouchableOpacity>
        {photo && <Image source={{ uri: photo }} style={styles.petRegistrationImage} />}
        <TouchableOpacity style={styles.petRegistrationButton} onPress={handleNext}>
          <Text style={styles.petRegistrationButtonText}>Próximo</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
};

// Exporta o componente como padrão
export default PetBasicInfo;