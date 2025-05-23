// Importa componentes do React Native para a interface
import { View, Text } from 'react-native';
// Importa os estilos centralizados
import styles from './Styles';

// Componente da tela de loading
const LoadingScreen = () => {
  return (
    <View style={styles.loadingContainer}>
      <Text style={styles.loadingText}>Calculadora</Text>
    </View>
  );
};

// Exporta o componente como padrão
export default LoadingScreen;