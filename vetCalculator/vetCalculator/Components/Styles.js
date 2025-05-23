// Importa StyleSheet do React Native para criar estilos
import { StyleSheet } from 'react-native';

// Estilos centralizados para todas as telas
const styles = StyleSheet.create({
  // Estilos para App.js (HomeScreen e CalculatorsMenu)
  homeContainer: { 
    flex: 1, 
    padding: 20, 
    justifyContent: 'center', 
    alignItems: 'center',
  }, 
  homeButton: { 
    backgroundColor: '#fff',
    paddingVertical: 15,
    marginVertical: 20, // Aumentado
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
    width: '80%',
  },
  homeButtonText: { 
    fontWeight: 'bold', 
    color: '#333', 
    textAlign: 'center',
  }, 
  loadingContainer: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
  }, 
  loadingText: { 
    fontSize: 32, 
    fontWeight: 'bold', 
    color: '#fff', 
    textAlign: 'center',
  }, 

  // Estilos para Calculadoras (CpdaCalculator, InfusionVolumeCalculator, InfusionRateCalculator)
  calculatorContainer: { 
    flex: 1, 
    padding: 20, 
    justifyContent: 'center', 
    alignItems: 'center',
  }, 
  calculatorTitle: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    marginBottom: 25, // Aumentado
    textAlign: 'center', 
    color: '#fff', 
  }, 
  calculatorInput: { 
    borderWidth: 1, 
    borderColor: '#ccc', 
    padding: 10, 
    marginBottom: 20, // Aumentado
    borderRadius: 5, 
    backgroundColor: '#fff', 
    width: '80%', 
    textAlign: 'center',
  }, 
  calculatorButton: { 
    backgroundColor: '#fff', 
    padding: 10, 
    borderRadius: 5, 
    alignItems: 'center', 
    marginVertical: 20, // Aumentado
    width: '50%',
  }, 
  calculatorButtonText: { 
    fontSize: 16, 
    fontWeight: 'bold', 
    color: '#333', 
    textAlign: 'center',
  }, 
  calculatorResult: { 
    marginTop: 25, // Aumentado
    fontSize: 18, 
    textAlign: 'center', 
    color: '#fff', 
  }, 

  // Estilos para History.js
  historyContainer: { 
    flex: 1, 
    padding: 20, 
    alignItems: 'center',
  }, 
  historyTitle: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    marginBottom: 25, // Aumentado
    textAlign: 'center', 
    color: '#fff', 
  }, 
  historyScrollView: { 
    flex: 1, 
    width: '100%',
  }, 
  historyListItem: { 
    backgroundColor: '#fff', 
    padding: 15, 
    marginBottom: 20, // Aumentado
    borderRadius: 10, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 0.2, 
    shadowRadius: 3, 
    elevation: 3, 
  }, 
  historyItemTitle: { 
    fontSize: 18, 
    fontWeight: 'bold', 
    color: '#333', 
    textAlign: 'center',
  }, 
  historyItemDetails: { 
    fontSize: 16, 
    color: '#333', 
    marginTop: 10, // Aumentado
    textAlign: 'center',
  }, 
  historyItemTimestamp: { 
    fontSize: 14, 
    color: '#666', 
    marginTop: 10, // Aumentado
    textAlign: 'center',
  }, 
  historyEmptyText: { 
    fontSize: 16, 
    color: '#fff', 
    textAlign: 'center', 
    marginTop: 25, // Aumentado
  }, 
  historyErrorText: { 
    fontSize: 16, 
    color: '#ff4444', 
    textAlign: 'center', 
    marginTop: 25, // Aumentado
  }, 

  // Estilos para Cadastro de Pet (PetBasicInfo, PetHematology, PetObservations, PetSummary)
  petRegistrationContainer: { 
    flex: 1, 
    padding: 20, 
  }, 
  petRegistrationContentContainer: { // Para ScrollView
    alignItems: 'center',
  },
  petRegistrationTitle: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    marginBottom: 30, // Aumentado
    textAlign: 'center', 
    color: '#fff', 
  }, 
  petRegistrationInput: { 
    borderWidth: 1, 
    borderColor: '#ccc', 
    padding: 10, 
    marginBottom: 20, // Aumentado
    borderRadius: 5, 
    backgroundColor: '#fff', 
    width: '80%', 
    textAlign: 'center',
  }, 
  petRegistrationButton: { 
    backgroundColor: '#fff', 
    padding: 10, 
    borderRadius: 5, 
    alignItems: 'center', 
    marginVertical: 20, // Aumentado
    width: '50%', 
  }, 
  petRegistrationButtonText: { 
    fontSize: 16, 
    fontWeight: 'bold', 
    color: '#333', 
    textAlign: 'center',
  }, 
  petRegistrationPhotoButton: { 
    backgroundColor: '#ddd', 
    padding: 10, 
    borderRadius: 5, 
    alignItems: 'center', 
    marginVertical: 20, // Aumentado
    width: '50%', 
  }, 
  petRegistrationPhotoButtonText: { 
    fontSize: 16, 
    color: '#333', 
    textAlign: 'center',
  }, 
  petRegistrationImage: { 
    width: 100, 
    height: 100, 
    borderRadius: 10, 
    marginVertical: 20, // Aumentado
    alignSelf: 'center', 
  }, 
  petRegistrationImageScroll: { // Para ScrollView horizontal de imagens
    marginVertical: 20, // Aumentado
  },
  petRegistrationObservationInput: { 
    borderWidth: 1, 
    borderColor: '#ccc', 
    padding: 10, 
    marginBottom: 20, // Aumentado
    borderRadius: 5, 
    backgroundColor: '#fff', 
    height: 100, 
    textAlignVertical: 'top', 
    width: '80%', 
    textAlign: 'center',
  }, 
  petRegistrationSummaryText: { 
    fontSize: 16, 
    color: '#fff', 
    marginVertical: 15, // Aumentado
    textAlign: 'center',
  }, 
});

// Exporta os estilos
export default styles;