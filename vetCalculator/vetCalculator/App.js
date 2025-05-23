// Importa o React e hooks para gerenciar estado
import React, { useState, useEffect } from 'react';
// Importa NavigationContainer e createStackNavigator para navegação
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// Importa componentes do React Native para a interface
import { View, Text, Dimensions, TouchableOpacity } from 'react-native';
// Importa os componentes
import CpdaCalculator from './Components/CpdaCalculator';
import InfusionVolumeCalculator from './Components/InfusionVolumeCalculator';
import InfusionRateCalculator from './Components/InfusionRateCalculator';
import History from './Components/History';
import Background from './Components/Background';
import LoadingScreen from './Components/LoadingScreen';
import PetBasicInfo from './Components/PetRegistration/PetBasicInfo';
import PetHematology from './Components/PetRegistration/PetHematology';
import PetObservations from './Components/PetRegistration/PetObservations';
import PetSummary from './Components/PetRegistration/PetSummary';
// Importa os estilos centralizados
import styles from './Components/Styles';

// Cria uma instância do Stack Navigator
const Stack = createStackNavigator();

// Componente da tela inicial (HomeScreen)
const HomeScreen = ({ navigation }) => {
  const { width } = Dimensions.get('window');
  const buttonWidth = width * 0.8;
  const fontSize = width * 0.05;

  return (
    <Background>
      <View style={styles.homeContainer}>
        <TouchableOpacity
          style={[styles.homeButton, { width: buttonWidth }]}
          onPress={() => navigation.navigate('CalculatorsMenu')}
        >
          <Text style={[styles.homeButtonText, { fontSize }]}>Calculadoras</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.homeButton, { width: buttonWidth }]}
          onPress={() => navigation.navigate('PetBasicInfo')}
        >
          <Text style={[styles.homeButtonText, { fontSize }]}>Cadastrar Pet</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
};

// Componente para o menu de calculadoras
const CalculatorsMenu = ({ navigation }) => {
  const { width } = Dimensions.get('window');
  const buttonWidth = width * 0.8;
  const fontSize = width * 0.05;

  return (
    <Background>
      <View style={styles.homeContainer}>
        <TouchableOpacity
          style={[styles.homeButton, { width: buttonWidth }]}
          onPress={() => navigation.navigate('CpdaCalculator')}
        >
          <Text style={[styles.homeButtonText, { fontSize }]}>Volume de CPDA</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.homeButton, { width: buttonWidth }]}
          onPress={() => navigation.navigate('InfusionVolumeCalculator')}
        >
          <Text style={[styles.homeButtonText, { fontSize }]}>Volume de Infusão</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.homeButton, { width: buttonWidth }]}
          onPress={() => navigation.navigate('InfusionRateCalculator')}
        >
          <Text style={[styles.homeButtonText, { fontSize }]}>Taxa de Infusão</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.homeButton, { width: buttonWidth }]}
          onPress={() => navigation.navigate('History')}
        >
          <Text style={[styles.homeButtonText, { fontSize }]}>Histórico de Cálculos</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
};

// Componente principal da aplicação
const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <Background>
        <LoadingScreen />
      </Background>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { 
            backgroundColor: 'transparent', 
            elevation: 0,
            shadowOpacity: 0,
          },
          headerTintColor: '#fff',
          headerTransparent: true,
          cardStyle: { backgroundColor: 'transparent' },
          headerTitleStyle: { 
            fontSize: 18, // Reduzido para evitar quebras de linha
            fontWeight: 'bold',
            textAlign: 'center',
          },
          headerTitleAlign: 'center',
          headerTitle: (props) => (
            <Text numberOfLines={1} ellipsizeMode="tail" style={props.style}>
              {props.children}
            </Text>
          ),
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Menu Principal', headerShown: false }} />
        <Stack.Screen name="CalculatorsMenu" component={CalculatorsMenu} options={{ title: 'Calculadoras' }} />
        <Stack.Screen name="CpdaCalculator" component={CpdaCalculator} options={{ title: 'Calculadora de CPDA' }} />
        <Stack.Screen name="InfusionVolumeCalculator" component={InfusionVolumeCalculator} options={{ title: 'Volume de Infusão' }} />
        <Stack.Screen name="InfusionRateCalculator" component={InfusionRateCalculator} options={{ title: 'Taxa de Infusão' }} />
        <Stack.Screen name="History" component={History} options={{ title: 'Histórico de Cálculos' }} />
        <Stack.Screen name="PetBasicInfo" component={PetBasicInfo} options={{ title: 'Cadastro de Pet - Dados Básicos' }} />
        <Stack.Screen name="PetHematology" component={PetHematology} options={{ title: 'Cadastro de Pet - Hematologia' }} />
        <Stack.Screen name="PetObservations" component={PetObservations} options={{ title: 'Cadastro de Pet - Observações' }} />
        <Stack.Screen name="PetSummary" component={PetSummary} options={{ title: 'Resumo do Cadastro' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// Exporta o componente App como padrão
export default App;