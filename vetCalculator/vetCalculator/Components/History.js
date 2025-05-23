// Importa React e hooks para gerenciar estado e efeitos
import React, { useState, useEffect } from 'react';
// Importa componentes do React Native para a interface
import { View, Text, ScrollView } from 'react-native';
// Importa AsyncStorage para persistência de dados
import AsyncStorage from '@react-native-async-storage/async-storage';
// Importa o componente de fundo
import Background from './Background';
// Importa os estilos centralizados
import styles from './Styles';

// Componente de histórico de cálculos
const History = () => {
  const [history, setHistory] = useState([]);
  const [error, setError] = useState(null);

  const loadHistory = async () => {
    try {
      const storedHistory = await AsyncStorage.getItem('calculationHistory');
      if (storedHistory) {
        const parsedHistory = JSON.parse(storedHistory);
        if (Array.isArray(parsedHistory)) {
          const validHistory = parsedHistory.filter(item => 
            item && typeof item === 'object' && 
            'type' in item && 'details' in item && 'timestamp' in item
          );
          setHistory(validHistory);
        } else {
          setError('Histórico inválido: dados não são um array.');
        }
      } else {
        setHistory([]);
      }
    } catch (error) {
      console.error('Erro ao carregar histórico:', error.message, error.stack);
      setError('Falha ao carregar o histórico: ' + error.message);
    }
  };

  useEffect(() => {
    loadHistory();
  }, []);

  return (
    <Background>
      <View style={styles.historyContainer}>
        <Text style={styles.historyTitle}>Histórico de Cálculos</Text>
        <ScrollView style={styles.historyScrollView}>
          {error ? (
            <Text style={styles.historyErrorText}>{error}</Text>
          ) : history.length === 0 ? (
            <Text style={styles.historyEmptyText}>Nenhum cálculo registrado.</Text>
          ) : (
            history.map((item, index) => (
              <View 
                key={`${item.timestamp}-${index}`} 
                style={styles.historyListItem}
              >
                <Text style={styles.historyItemTitle}>{item.type || 'Cálculo Desconhecido'}</Text>
                <Text style={styles.historyItemDetails}>{item.details || 'Sem detalhes'}</Text>
                <Text style={styles.historyItemTimestamp}>{item.timestamp || 'Data desconhecida'}</Text>
              </View>
            ))
          )}
        </ScrollView>
      </View>
    </Background>
  );
};

// Exporta o componente como padrão
export default History;